(function(pxui){
	pxui.define("plugin::template", function( module ) {
        
        "use strict";
        
		var template = function(tpl) {
			return new template.fn.init(tpl);
		};

		function compiler(tpl) {
			tpl = tpl || '';
			var trim = function(str) {
                return str.trim ? str.trim() : str.replace(/^\s*|\s*$/g, '');
            },
            ecp = function(str) {
                return str.replace(/('|\\|\r?\n)/g, '\\$1');
            },
            tags = ['<%','=','%>'],
            v = template.variable,
            arg1 = v || "$",
            str = "var " + arg1 + "=" + arg1 + "||this,__='',___,\print=function(s){__+=s};" + (v ? "" : "with($||{}){"),
            blen = tags[0].length,
            elen = tags[2].length,
            b = tpl.indexOf(tags[0]),
            e,
            skip,
            tmp;

			while (b != -1) {
				e = skip ? b + blen : tpl.indexOf(tags[2]);

				if (e < b) break; //出错后不再编译
				str += "__+='" + ecp(tpl.substring(0, b)) + "';";
				if (skip) {
					tpl = tpl.substring(blen + elen + 1);
					skip--;
				} else {
					tmp = trim(tpl.substring(b + blen, e));
					if ('#' === tmp) {
						skip = 1;
					} else if (tmp.indexOf(tags[1]) === 0) { //模板变量
						tmp = tmp.substring(1);
						str += "___=" + tmp + ";typeof ___!=='undefined'&&(__+=___);";
					} else { //js代码
						str += "\n" + tmp + "\n";
					}
				}

				tpl = tpl.substring(e + elen);
				b = tpl.indexOf(tags[0] + (skip ? '#' + tags[2] : ''));
			}
			str += "__+='" + ecp(tpl) + "'" + (v ? ";" : "}") + "return __";
			return Function(arg1, str);
		}

		function render(compiled, data) {
			return compiled(data);
		}
		template.fn = template.prototype = {
			constructor: template,
			init: function(tpl) {
				this.compiled = compiler(tpl);
				this.render = function(data) {
					return data ? render(this.compiled, data) : this.compiled;
				};
				return this;
			}
		};
		template.fn.init.prototype = template.fn;
		module.exports = template;
	});
})(pxui);