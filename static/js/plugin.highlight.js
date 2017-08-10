(function(pxui){
	pxui.define("plugin::highlight", function( module ) {
        
        "use strict";
        
		var highlight = function(options) {
			return new highlight.fn.config(options);
		};
		var hasClass = function(node, className) {
			return new RegExp("(\\s|^)" + className + "(\\s|$)").test(node.className);
		};
		var addClass = function(node, className) {
			if (!hasClass(node, className)) node.className = [ node.className, className ].join(" ").replace(/(^\s+)|(\s+$)/g, "");
		};
		var removeClass = function(node, className) {
			if (hasClass(node, className)) node.className = node.className.replace(new RegExp("(\\s|^)" + className + "(\\s|$)", "g"), " ").replace(/(^\s+)|(\s+$)/g, "");
		};
		var attr = function(node,key, value) {
			if(value){
				node.setAttribute(key, value);
			}else{
				return node.getAttribute(key);
			}
        };
		var parseHTML = function(source) {
            return source.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/(\r?\n)$/g, "");
        };
		
		function htmlEntities(source) {
			return source.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/&(?![\w\#]+;)/g, '&amp;');
		};
		function addLineNumber(html) {
            var newHtml = '<ol start="1">', htmls = html.split("\n");
            for (var i = 0, len = htmls.length; i < len; i++) {
                newHtml += '<li>' + htmls[i] + '</li>';
            }
            newHtml += "</ol>";
            return newHtml;
		}
		var generic = {
			comment: { pattern: /(\/\/.*|\/\*([\s\S]*?)\*\/)/g, style: 'comment' },
			string: { pattern: /((\'.*?\')|(\".*?\"))/g, style: 'string' },
			numbers: { pattern: /(\-?(\d+|\d+\.\d+|\.\d+))/g, style: 'number' },
			regex: { pattern: /([^\/]\/[^\/].+\/(g|i|m)*)/g, style: 'number' },
			keywords: { pattern: /(?:\b)(function|for|foreach|while|if|else|elseif|switch|break|as|return|this|class|self|default|var|false|true|null|undefined)(?:\b)/gi, style: 'keyword' },
			operators: { pattern: /(\+|\-|\/|\*|\%|\=|\&lt;|\&gt;|\||\?|\.)/g, style: 'operators' }
		};
		
		var language = {
			html:{
				language:'html',
				suffix:['html','htm','tpl'],
				rule:{
					prolog: { pattern: /&lt;\?[\w\W]+?\?&gt;/, style: 'doctype'},
					doctype: { pattern: /(&lt;\!DOCTYPE[\w\W]+?&gt;)/g, style: 'doctype'},
					cdata: { pattern: /&lt;\!\[CDATA\[[\w\W]*?]]&gt;/g, style: 'doctype'},
					comment: { pattern: /(&lt;\!--[\s\S]*?--&gt;)/g, style: 'comment'},
					tag: { pattern: /(\&lt\;\/?\w(.|\n)*?\/?\&gt\;)/g, style: 'tag', embed: ['string'] },
					string: generic.string,
					css: { pattern: /(?:\&lt;style.*?\&gt;)([\s\S]+?)(?:\&lt;\/style\&gt;)/gi, language: 'css'},
					script: { pattern: /(?:\&lt;script.*?\&gt;)([\s\S]+?)(?:\&lt;\/script\&gt;)/gi, language: 'js'}
				}
			},
			javascript :{
				language:'javascript',
				suffix:['js','jsx'],
				rule: generic
			},
			css:{
				language:'css',
				suffix:['css','less'],
				rule:{
					comment:  generic.comment,
					string:  generic.string,
					numbers: { pattern: /((\-?(\d+|\d+\.\d+|\.\d+)(\%|px|em|pt|in)?)|\#[0-9a-fA-F]{3}[0-9a-fA-F]{3})/g, style: 'number' },
					property: { pattern: /(\@\w+|\:?\:\w+|[a-z\-]+\:)/g, style: 'property' }
				}
			}
		}

		highlight.fn = highlight.prototype = {
			constructor:highlight,
			
			config:function(options) {
				this.options = options;
				this.data = this._getPre();
				this.language = {
					generic : generic,
				};
                for(var i in language){
                    this.extend(language[i]);
                };
				return this;
			},

			_getPre:function(){
				var node = [];
				var parents = document.getElementsByTagName('pre');
				var pattern  = /\blang(?:uage)?-(\w+)\b/i;
				for(var i=0,len = parents.length;i<len;i++){
					var parent = parents[i];
					var children = parent.getElementsByTagName('code')[0];				
					var className = attr(parent,'class');
					var source='';
					var language = null;
					if(children){
						source = children.innerText;
						className = attr(children,'class');
					}else{
						source = parent.innerText;
					};
					
					if(className){
						language = getLang(className);
					};
					node.push({element:{pre:parent,code:children},language:language,source:source})	
				};
				function getLang (className){
					var match = className.match(pattern);
					if (match) {
						var language = match[1];
					};
					if (language) {
						language = language.toLowerCase();
					};
					return language;
				};
				return node;
			},
			extend:function(options){
				var language = options.language,
				suffix=options.suffix,
				rule = options.rule;
				this.language[language] = rule;	
				if(suffix && Array == suffix.constructor){
					for(var i=0,len=suffix.length;i<len;i++){
						this.language[suffix[i]] = rule;	
					}
				};
				return this;
			},
			init:function(){
				var pres = this.data;
				for(var i=0,len=pres.length;i<len;i++){
					var pre = pres[i].element.pre,
						code = pres[i].element.code,
						language = pres[i].language,
						source = pres[i].source;
					
					if(this.options.warp){
						var style = 'white-space:pre-wrap;word-wrap:break-word';
						pre.style.cssText= style;
						if(code){
							code.style.cssText= style;
						}
					};
					source = htmlEntities(source);
					if(language){
						source = this._highlight(source,language);
						addClass(pre,'pxui-highlight');
					}
					
					if(this.options.line){
						source = addLineNumber(source)
					}
					

					if (code) {
						code.innerHTML = source;
					} else {
						pre.innerHTML = source;
					};
				};
				return this;
			},
			_highlight:function(source,lang){
				var This = this,sublangsi = 0,sublangs = [],lang = This.language[lang];
				
				if(!lang) return source;
				for(var i in lang){
					if(lang.hasOwnProperty(i) && lang[i].language && This.language[lang[i].language]){	
						source = source.replace(lang[i].pattern, function($1, $2, $3){
							sublangs[sublangsi++] = This._highlight($2, lang[i].language);
							return $1.replace($2, '___subtmpl'+ (sublangsi-1) +'___');
						});
					}
				}

				for(var i in lang){
					if(lang.hasOwnProperty(i) && lang[i].language === undefined){
						source = source.replace(lang[i].pattern, "___"+ i +"___$1___end"+ i +"___");
					}
				}

				var lvls = [];
				source = source.replace(/___(?!subtmpl)\w+?___/g, function($0){
					var end = ($0.substr(3,3)=='end')? true:false,
						tag = (!end? $0.substr(3):$0.substr(6)).replace(/_/g,''),
						lastTag = lvls.length>0? lvls[lvls.length-1] : null;
					if(!end && (lastTag == null || tag == lastTag || (lastTag != null && lang[lastTag].embed != undefined && lang[lastTag].embed.indexOf(tag)>=0 ))){
						lvls.push(tag);return $0;
					}else if(end && tag == lastTag){
						lvls.pop();return $0;
					}
					return "";
				});
				for(var i in lang){
					if(lang.hasOwnProperty(i)){
						source = source.replace(new RegExp('___end'+ i +'___','g'), '</span>').replace(new RegExp('___'+ i +'___','g'), '<span class="'+lang[i].style +'">');
					}
				}

				for(var i in lang){
					if(lang.hasOwnProperty(i) && lang[i].language !== undefined && This.language[lang[i].language] !== undefined){
						source = source.replace(/___subtmpl\d+___/g, function($tmpl){
							var i = parseInt($tmpl.replace(/___subtmpl(\d+)___/, "$1"), 10);
							return sublangs[i];
						});
					}
				}
				
				return source;
			}
		};
		highlight.fn.config.prototype = highlight.fn;
        module.exports = highlight;
	});
})(pxui);