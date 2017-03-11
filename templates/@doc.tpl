{%- extends "@layout.tpl" %}
{%- block page %}
<div class="container">
  <div class="row">
    <div class="col col-3 col-m-12">
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
    <div class="col col-9 col-m-12 markdown-body content" id="markdown-body"></div>
  </div>
</div>
{% endblock -%}
{%- block javascript %}
<script src="static/lib/showdown.min.js" type="text/javascript" ></script>
<script>
var $ = pxui.require('extend::dom');
var markdown = $('#markdown').text();
var converter = new showdown.Converter();
converter.setOption('tables', true);
converter.setOption('parseImgDimensions', true);
var html = converter.makeHtml(markdown);
$('#markdown-body').html(html);
<<<<<<< .mine
var highlight = pxui.require('plugins::highlight')({line:false,warp:true});

highlight.extend({
	language:'html',
	suffix:['html','htm','tpl'],
	rule:{
		prolog: { pattern: /&lt;\?[\w\W]+?\?&gt;/, style: 'doctype'},
		doctype: { pattern: /(&lt;\!DOCTYPE[\w\W]+?&gt;)/g, style: 'doctype'},
		cdata: { pattern: /&lt;\!\[CDATA\[[\w\W]*?]]&gt;/g, style: 'doctype'},
		comment: { pattern: /(&lt;\!--[\s\S]*?--&gt;)/g, style: 'comment'},
		tag: { pattern: /(\&lt\;\/?\w(.|\n)*?\/?\&gt\;)/g, style: 'tag', embed: ['string'] },
		string: highlight.language.generic.string,
		css: { pattern: /(?:\&lt;style.*?\&gt;)([\s\S]+?)(?:\&lt;\/style\&gt;)/gi, language: 'css'},
		script: { pattern: /(?:\&lt;script.*?\&gt;)([\s\S]+?)(?:\&lt;\/script\&gt;)/gi, language: 'js'}
	}
});
highlight.extend({
	language:'javascript',
	suffix:['js','jsx'],
	rule:highlight.language.generic
});
highlight.extend({
	language:'css',
	suffix:['css','less'],
	rule:{
		comment: highlight.language.generic.comment,
		string: highlight.language.generic.string,
		numbers: { pattern: /((\-?(\d+|\d+\.\d+|\.\d+)(\%|px|em|pt|in)?)|\#[0-9a-fA-F]{3}[0-9a-fA-F]{3})/g, style: 'number' },
		property: { pattern: /(\@\w+|\:?\:\w+|[a-z\-]+\:)/g, style: 'property' }
	}
});

highlight.init();
</script> 
{% endblock -%} ||||||| .r13
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
{% endblock -%} =======
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
>>>>>>> .r14
