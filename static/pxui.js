(function(params) {
    var win = params.win,
		doc = params.doc,
		js=doc.scripts,
		thisJs = js[js.length-1],
		deps = getDeps(),
		cache = thisJs.getAttribute('pxui-cache') || true,
		module = {},
		pxui={},
		depLen = deps.length,
		loaded = 0,
		uid;
	/**
	 * 数据源管理
	 * 
	 * @modificationHistory.  
	 * <ul>
	 * <li>gaodaojiang 2016年6月3日下午12:46:12 TODO</li>
	 * </ul>
	 */
	function getDeps(){
		var _deps = params.dep;
		var depFiles = thisJs.getAttribute('pxui-deps');
		if(depFiles && depFiles !==''){
			depFiles = depFiles.split(',');
			for(var i = 0, len = depFiles.length; i < len; i++) _deps.push(depFiles[i]);
		}
		return _deps;
	}

	// 构造模块
	function Module(id, factory) {
		this.id      = id;
		this.factory = factory;
		this.exports = {};
		module [id]  = this;
		
	}
	
	//获取模块返回值
	function getExp(id) {
		var mod = module[id];
		return mod ? ("function" == typeof mod.factory ? mod.factory(mod) ? mod.factory(mod) :mod.exports :mod.factory):id + ' is not define';
	}
	
	pxui.extend  = function(module) {
		var i = 0, target = this, deep = false, length = arguments.length, obj, empty, items, x;
		"boolean" === typeof arguments[0] ? (deep = true, i = 1, length > 2 ? (i = 2, target = arguments[1]) :void 0) :length > 1 ? (i = 1, target = arguments[0]) :void 0;
		for (x = i; x < length; x++) {
			obj = arguments[x];
			for (items in obj) {
				if (obj[items] === target) continue;
				deep && "object" === typeof obj[items] && obj[items] !== null ? (empty = Array == obj[items].constructor ? [] :{}, 
				target[items] = pxui.extend(deep, target[items] || empty, obj[items])) :target[items] = obj[items];
			}
		}
		return target;
	};
	pxui.extend({
		module:module,
		define:function (id,factory){
			if(!id||'string' !== typeof id) return  id + ' is not string';
			new Module(id,factory);
		},
		require : function (id,callback){
			if('function' == typeof id) return id();
			Array == id.constructor||(id = [id]);
			var exports=[];
			for(var i=0,len=id.length;i<len;i++){
				var exp = getExp(id[i])
				exports.push(exp)
			}
			
			if('function' == typeof callback){
				callback.apply(null,exports)
			}else{
				return exports[0]
			}	
		},
		path:thisJs.src.substring(0,thisJs.src.lastIndexOf("/")+1),
		load:function (uri, callback) {
			var status,isCss = /\.css(?:\?|$)/i.test(uri), node = doc.createElement(isCss ? "link" :"script"),
			head = doc.getElementsByTagName('head')[0];
			isCss ? (node.rel = "stylesheet", node.href = uri) :(node.type="text/javascript", node.src = uri);
			if ('onload' in node) {
				node.onload = function(){
					ret('load',uri)
				};
				node.onerror = function(){
					ret('error',uri)
				};
			} else {
			  node.onreadystatechange = function() {
				if (/loaded|complete|undefined/.test(node.readyState)) {
					ret('load',uri);
				}
			  }
			}
			function ret(status,uri){
				callback && 'function' == typeof callback && callback(status,uri);
				if (!isCss && node.parentNode) node.parentNode.removeChild(node);
				node.onload = node.onerror = node.onreadystatechange = null;
				node = null;
			}
			head.appendChild(node);	
		},
		json2:function(str){
			return ("object"==typeof JSON && 'function' == typeof JSON.parse) ? JSON.parse(str) : eval("(" + str + ")");
		},
		uid:function() {
			return "0101100101011010".replace(/[01]/g, function (c) {
				var r = Math.random() * 16 | 0, v = c == '0' ? r : (r & 0x3 | 0x8);
				return v.toString(16);
			});
		}
	});


	// 执行模块
	function init(){
		var allEle = doc.getElementsByTagName('*');
		for(var i=0,len=allEle.length;i<len;i++){
			var This = allEle[i];
			var modData = This && This.getAttribute('pxui-ctrl');
			if(modData){
				var dataStr = This.getAttribute('pxui-data');
				var data =(!dataStr || dataStr=='') ? {} : pxui.json2(dataStr);
				var funs = modData.split('.');
				var mod = funs[0];
				var fun = funs[1];
				pxui.require(mod,function(exp){
					exp && exp[fun] && 'function' == typeof exp[fun] && exp[fun]({module:modData,element:This,data:data});
				})
			}
			
		};
	};
	// 过滤目录中的./ ../
    function getRealPath(path) {
        path = path.replace(/\/\.\//g, "/").replace(/([^:\/])\/\/+/g, "$1/");
        while (path.match(/\/[^\/]+\/\.\.\//g)) {
            path = path.replace(/\/[^\/]+\/\.\.\//g, "/");
        }
        return path;
    }

	// 补全文件名.js后缀 
    function getSuffix(uri) {
        uri = getRealPath(uri);
        /#$/.test(uri) ? uri = uri.slice(0, -1) :!/\?|\.(?:css|js)$|\/$/.test(uri) && (uri += ".js");
        return uri.replace(":80/", "/");
    }
	
	uid = new Date().getTime();
	
	function loadDeps(i) {
		var url = deps[i].replace("*/", pxui.path);
		url = getSuffix(url);
		if (cache == 'false') {
			var nocache = 'nocache=' + uid;
			url += url.indexOf('?')>-1?(url.indexOf('nocache=')==-1?'&'+nocache:''):'?' + nocache;           
        }
        pxui.load(url, function() {
            loaded++, loaded == depLen ? (init(), loadDeps = null) :loadDeps(loaded);
        });
    }
	deps.length && loadDeps(0);
	win['pxui'] = pxui;
})({
	win:this,
	doc:this.document,
	dep:[]
});