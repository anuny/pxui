(function(pxui){
	pxui.define("plugin::dom", function( module ) {
        "use strict";
		var w = window,
            doc = w.document,
            handlerMap = {},
            parentsExp = /(?:[\w\-\\.#]+)+(?:\[\w+?=([\'"])?(?:\\\1|.)+?\1\])?|\*|>/gi,
            simpleExp = /^[\w\-_#]+$/,
            trimExp = /^\s*|\s*$/g,
            classExp = /^(?:[\w\-_]+)?\.([\w\-_]+)/,
            idExp = /^(?:[\w\-_]+)?#([\w\-_]+)/,
            tagExp = /^([\w\*\-_]+)/,
            htmlExp = /<[^>]+>/g,
            NAN = [ null, null ];
            
		var dom = function(selector, context) {
			return new dom.fn.init(selector, context);
		};
        
		dom.fn = dom.prototype = {
			constructor:dom,
			init:function(selector, context) {
				var elements = query(selector, context);
				this.length = 0;
				this.context = context || doc;
				this.selector = selector;
				[].push.apply(this, elements);
				return this;
			},
			each:function(callback) {
				return each(this, callback);
			},
			on:function(eventType, handler) {
				return "function" == typeof handler ? this.each(function(i, ele) {
					ele && on(ele, eventType, handler);
				}) :this;
			},
			off:function(eventType) {
				return this.each(function(i, ele) {
					ele && ele.handlerMap && ele.handlerMap[eventType] && off(ele, eventType);
				});
			},
			find:function(selector) {
				var ele = [];
				this.each(function(i, _ele) {
					_ele = _ele.nodeType == 1 ? _ele :_ele[0];
					ele.push(dom(selector, _ele));
				});
				return dom(ele[0]);
			},
			data:function(name, value) {
				var node = this[0];
				return value ? node && node.dataset && node.dataset[name] ? (node.dataset[name] = value, 
				this) :this.attr("data-" + name, value) :node && node.dataset ? node.dataset[name] :this.attr("data-" + name);
			},
			eq:function(i) {
				return dom([ this[i] ]);
			},
			first:function() {
				return this.eq(0);
			},
			last:function() {
				return this.eq(this.length - 1);
			},
			attr:function(key, value) {
				return value ? this.each(function(k, v) {
					v.setAttribute(key, value);
				}) :this[0].getAttribute(key);
			},
			hasAttr:function(attr){
				return this[0].hasAttribute(attr);
			},
			html:function(html) {
				return html ? this.each(function(k, v) {
					v.innerHTML = html;
				}) :this[0].innerHTML;
			},
			text:function(text) {
				return text ? this[0].innerText ? this.each(function(k, v) {
					v.innerText = text;
				}) :this.each(function(k, v) {
					v.textContent = text;
				}) :this[0].hasOwnProperty("innerText") ? this[0].innerText :this[0].textContent;
			},
			val:function(val) {
				return val ? this.each(function(k, v) {
					v.value = val;
				}) :this[0].value;
			},
			css:function(prop, value) {
				if (value == undefined) {
					if ("object" === typeof prop) {
						this.each(function(i, ele) {
							for (var k in prop) ele.style[k] = prop[k];
						});
					} else {
						return this.length > 0 ? w.getComputedStyle ? w.getComputedStyle(this[0])[prop] :this[0].currentStyle[prop] :undefined;
					}
				} else {
					this.each(function(i, ele) {
						ele.style[prop] = value;
					});
				}
				return this;
			},
			hasClass:function(className) {
				return hasClass(className, this[0]);
			},
			addClass:function(className) {
				return this.each(function(i, ele) {
					if (!hasClass(className,this)) {
						ele.className = [ ele.className, className ].join(' ').replace(/(^\s+)|(\s+$)/g, '');
					}
				});
			},
			removeClass:function(className) {
				return this.each(function(i, ele) {
					if (hasClass(className,this)) {
						ele.className = ele.className.replace(new RegExp("(\\s|^)" + className + "(\\s|$)", "g"), " ").replace(/(^\s+)|(\s+$)/g, "");
					}
				});
			},
			hide:function() {
				return this.each(function(i, ele) {
					ele.style.display = 'none';
				});
			},
			show:function() {
				return this.each(function(i, ele) {
					this.style.display = ' ';
				});
			},
			// 节点尾部插入
			append:function(elem) {
				// 转换为dom对象
				elem = toEments(elem);
				return this.each(function(i, node) {
					elem.each(function(j, ele) {
						// 克隆对象
						ele = ele.cloneNode(true);
						node.appendChild(ele);
						ele = node = null;
					})
				});
			},
			// 节点头部插入
			prepend:function(elem) {
				var firstChild;
				elem = toEments(elem);
				return this.each(function(i, node) {
					firstChild = node.firstChild;
					elem.each(function(j, ele) {
						ele = ele.cloneNode(true);
						node.insertBefore(ele,firstChild);
						ele = node = null;
					})
				});
			},
			// 节点之前插入
			before:function(elem) {
				elem = toEments(elem);
				return this.each(function(i, node) {
					elem.each(function(j, ele) {
						ele = ele.cloneNode(true);
						node.parentNode.insertBefore(ele,node);
						ele = node = null;
					});
				});
			},
			// 节点之后插入
			after:function(elem) {
				var sibling;
				elem = toEments(elem);
				return this.each(function(i, node) {
					sibling = node.nextSibling;
					elem.each(function(j, ele) {
						ele = ele.cloneNode(true);
						node.parentNode.insertBefore(ele,sibling);
						ele = node = null;
					});
				});
			},
			remove:function(){
				return this.each(function() {
					this.parentNode.removeChild(this);
				});
			},
			empty:function() {
				return this.each(function(i, ele) {
					ele.innerHTML = '';
				});
			},
			scrollTop:function() {
				if (this.selector == window) {
					return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
				}
			},
			height:function(val){
				return val?(this[0].style.height = val+'px',this):this[0].offsetHeight;
			},
			width:function(){
				return this[0].offsetWidth;
			},
			ready:function(callback) {
				/in/.test(doc.readyState) ? setTimeout(callback, 0) :callback();
			}
		};
		// 注册事件
		function on(ele, eventType, handler) {
			ele["handlerMap"] = {};
			ele["handlerMap"][eventType] = handler;
			doc.addEventListener ? ele.addEventListener(eventType, handler) :ele.attachEvent("on" + eventType, handler);
		}
		// 移除事件
		function off(ele, eventType) {
			var handler = ele["handlerMap"][eventType];
			doc.removeEventListener ? ele.removeEventListener(eventType, handler) :ele.detachEvent("on" + eventType, handler);
			delete ele["handlerMap"][eventType];
		}
		// 获取ID名
		function getIdName(node) {
			return (node.match(idExp) || NAN)[1];
		}
		// 获取class名
		function getClassName(node) {
			return (node.match(classExp) || NAN)[1];
		}
		// 获取 tag 名
		function getTagName(node) {
			return (node.match(tagExp) || NAN)[1];
		}
		// each封装
		function each(object, callback) {
			var name, i = 0, length = object.length;
			if (length == undefined) {
				for (name in object) {
					if (callback.call(object[name], name, object[name]) === false) break;
				}
			} else {
				for (var value = object[0]; i < length && callback.call(value, i, value) !== false; value = object[++i]) {}
			}
			return object;
		}
		// 判断样式名
		function hasClass(className, node) {
			return new RegExp("(\\s|^)" + className + "(\\s|$)").test(node.className);
		}
		// getByClassName 封装
		function getByClassName(className, context) {
			var ele = [];
			if (context.getElementsByClassName) {
				return context.getElementsByClassName(className);
			}
			var nodes = context.getElementsByTagName("*");
			for (var i = 0, len = nodes.length; i < len; i++) {
				var hasclass = hasClass(className, nodes[i]);
				if (hasclass) ele.push(nodes[i]);
			}
			return ele;
		}
		
		// 获取 dom
		function getElement(selector, context) {
			// body对象
			if (selector === "body") return doc.body;
			
			
			var IdName = getIdName(selector),
			TagName = getTagName(selector),
			ClassName = getClassName(selector);
			
			// ID 对象 #test
			if (IdName && context === doc) {
				return [ context.getElementById(IdName) ];
			} 
			
			// Tag和ClassName 对象 div.test
			if (ClassName && TagName) {
				var _node = getByClassName(ClassName, context);
				var classEle = [];
				each(_node, function(i, ele) {
					if (ele.tagName.toLowerCase() == TagName) {
						classEle.push(ele);
					}
				});
				return classEle
			}
			
			// ClassName 对象 .test
			if (ClassName) {
				return getByClassName(ClassName, context);
			} 
			
			// Tag 对象 div
			if (TagName) {
				return context.getElementsByTagName(TagName);
			}

			
			return selector;
		}
		// 转换为真数组
		function makeArray(array) {
			var ret = [];
			if (array != null) {
				var len = array.length;
				if (len == null || array.split || array.setInterval || array.call) {
					ret[0] = array;
				} else {
					each(array, function(i, arr) {
						ret[i] = arr;
					});
				}
			}
			return ret;
		}
		function parseHTML(html) {
			var div = document.createElement("div"), els = [];
			div.innerHTML = html;
			ele = div.childNodes;
			div = null;
			return ele.length == 1 ? ele[0] :ele;
		};
		
		function toEments(ele) {
			$ele = dom(ele);
			return ($ele.length && $ele[0].nodeType== 1) ? $ele : dom(parseHTML(ele))
		};
		
		function query(selector, context) {
			var ele = filter(selector, context);
			return makeArray(ele);
		};
		function filter(selector, context) {
			selector = selector || doc;
			context = context || doc;
			(selector === w || selector === doc) && (context = selector);
			if ("string" == typeof selector) {
				selector = selector.replace(trimExp, "");

				var isHtml = htmlExp.test(selector);
				if (isHtml) return parseHTML(selector);
				
				var simple = simpleExp.test(selector);
				if (simple) return getElement(selector, context);
				
				if (context.querySelectorAll) return context.querySelectorAll(selector);
				
				selector = selector.match(parentsExp);
				var node = [context],ele,_ele = [];
				each(selector,function(i, selector) {
					var IdName = getIdName(selector);_ele = [];
					if (IdName) {
						_ele.push(doc.getElementById(IdName))
					}else {
						each(node,function(i, node) {
							var temps = getElement(selector, node);
							each(temps,function(i, temp) {_ele.push(temp)})
						})
					};
					node = _ele
				});
				ele = _ele;
				node = _ele = null;
				return ele;	
			}
			return selector;
		}
		dom.fn.init.prototype = dom.fn;
		module.exports = dom;
	});
})(pxui);