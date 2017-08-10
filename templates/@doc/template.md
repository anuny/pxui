# 模板引擎 - Template
模板引擎,无依赖,模块大小 ≈ `1kb`
## 使用组件
``` javascript
// 载入插件
var template = pxui.require('plugin::template')

// 模板
var tpl = '<h1><%= test %></h1>';
    tpl += '<% for(var i=0; i<array.length; i++){ '
    tpl += '<li>print(array[i]);</li>'
    tpl += '} %>'

// 数据
var data = {
    test:'test...',
    array:[1,2,3,4]
};

// 渲染
var html = template(tpl).render(data);

```