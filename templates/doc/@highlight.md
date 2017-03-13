
# 代码高亮 - Highlight

简单代码高亮,支持 `html` `javascript` `css` ,可自行扩展语言支持，无依赖,模块大小 ≈ `3kb`

## 使用组件

```html
<pre>
	<code class="language-html">
		...
	</code>
</pre>
```

``` javascript
var highlight = pxui.require('plugins::highlight')(options);
highlight.init();

// 支持链式调用
pxui.require('plugins::highlight')(options).init();

```

## 可选参数 - options

``` javascript

{
	line : false,  // 显示行号, true|false, default:false
	warp : true ,  // 自动换行, true|false, default:false
	theme: 'light' // 主题样式, light|dark, default:light
}





```

## 语言扩展示例 - extend

``` javascript
highlight.extend({
	
	// 语言名称 string
	language:'sql', 
	
	// 后缀 Array ['...']
	suffix:['sql'], 
	
	// 规则 Object {type:{reg,style}}
	rule:{
	
		// 注释
		comment: { pattern: /(\-\-.*|\#.*)/g, style: 'comment'}, 
		
		// 字符串，使用插件默认正则
		string: { pattern: highlight.language.generic.string, style: 'string'}, 
		
		// 数字，使用插件默认正则
		numbers: { pattern: highlight.language.generic.numbers, style: 'numbers'}, 
		
		// 关键字
		keywords: { pattern: /(?:\b)(select|insert|update|...)(?:\b)/gi, style: 'keyword'}, 
		
		// 符号，使用插件默认正则
		operators: { pattern: highlight.language.generic.operators, style: 'operators'},  
	}
});
```

