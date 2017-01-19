{%- extends "@layout.tpl" %}
{%- block page %}
<div class="container">
  <div class="columns">
    <div class="column column-3 column-m-12">
      <div class="menu">
        <h3 class="menu-heading">PXUI<span class="menu-subtitle">- 轻量级前端UI组件</span></h3>
        {%- if subnav %}
        {%- for sub in subnav %}
        <a class="menu-item {%- if info.url === sub.url %} current{%- endif %}" href="{{sub.url}}">{{sub.title}}<span class="menu-subtitle">{{sub.subtitle}}</span></a>
        {%- endfor %}
        {%- endif %}
      </div>
    </div>
    <textarea id="markdown" style="display:none">
    {%- block doc %}{%- endblock %} 
    </textarea>
    <div class="column column-9 column-m-12 markdown-body content" id="markdown-body"></div>
  </div>
</div>
{% endblock -%} 
{%- block javascript %} 
<script src="static/js/showdown.min.js" type="text/javascript" ></script> 
<script>
var $ = require('extend::dom');
var markdown = $('#markdown').text();
var converter = new showdown.Converter();
converter.setOption('tables', true);
converter.setOption('parseImgDimensions', true);
var html = converter.makeHtml(markdown);
$('#markdown-body').html(html);	
var highlight = require('plugins::highlight');
var hl = highlight.init({
	element:'pre', //代码元素名称
	langFix:'data-language',//语言标识
	clsName:'HL',  // 高亮样式前缀
	theme:'gray', // 默认主题 light,gray,blue,red,dark
	fontSize:'14px',
	lineNum:false,  // 是否显示行号
	wrap:true      // 是否自动换行
});	
</script> 
{% endblock -%} 