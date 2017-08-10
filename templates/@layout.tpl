<!doctype html>
<html lang="zh-cmn-Hans">
<head>
<meta charset="utf-8">
<meta name="renderer" content="webkit|ie-stand|ie-comp">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
<title>{%- if info.title %}{{info.title}}{%- endif %}{%- if site.title %} - {{site.title}}{%- endif %}{%- if siteSketch %} - {{siteSketch}}{%- endif %}- 轻量级前端UI组件</title>
<meta name="author" content="{{author}}" />
<meta name="copyright" content="{{siteUrl}}" />
<meta name="keywords" content="{{keywords}}" />
<meta name="description" content="{{description}}" />
<meta name="robots" content="index,follow" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-touch-fullscreen" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black" >
<meta name="format-detection" content="telephone=no">
<link rel="icon" href="static/images/favicon.ico">
<link href="static/css/pxui.css" rel="stylesheet" type="text/css">
<link href="static/css/style.css" rel="stylesheet" type="text/css">
</head>
<body pxui-ctrl="public.init">
{%-
	set navigation = [  
    	{
			"slug":"index",
			"url": "index.html", 
			"title": "起步",
			"sub":[
                {
					"slug":"about",
                    "url": "about.html", 
                    "subtitle":"About",
                    "title": "简介"
                },
				{
					"slug":"index",
                    "url": "index.html", 
                    "subtitle":"Start",
                    "title": "使用"
                }
            ]
		},
		{
			"slug":"style",
			"url": "grid.html", 
			"title": "样式",
			"sub":[
                {
                    "url": "grid.html", 
                    "subtitle":"Grid",
                    "title": "栅格"
                },
                {
                    "url": "typography.html", 
                    "subtitle":"Typography",
                    "title": "排版"
                },
                {
                    "url": "helper.html", 
                    "subtitle":"Helper",
                    "title": "辅助"
                },
                {
                    "url": "form.html",
                    "subtitle":"Forms", 
                    "title": "表单"
                },
                {
                    "url": "button.html",
                    "subtitle":"Buttons", 
                    "title": "按钮"
                },
                {
                    "url": "table.html", 
                    "subtitle":"Tables",
                    "title": "表格"
                }
            ]
		},
		{
			"slug":"widget",
			"url": "dom.html", 
			"title": "组件",
			"sub":[
                {
                    "url": "dom.html", 
                    "subtitle":"Dom",
                    "title": "dom操作"
                },
                {
                    "url": "popup.html", 
                    "subtitle":"Popup",
                    "title": "弹窗"
                },
				{
                    "url": "highlight.html", 
                    "subtitle":"Highlight",
                    "title": "代码高亮"
                },
				{
                    "url": "markdown.html", 
                    "subtitle":"Markdown",
                    "title": "Markdown解析"
                },
				{
                    "url": "template.html", 
                    "subtitle":"Template",
                    "title": "模板引擎"
                }
            ]
		}
	] 
%}
<!-- header --> 
{%- if navigation %}
<div class="header bg-gray b-b-gray">
  <div class="container">
    <div class="nav">
      <div class="nav-header"><a class="nav-brand" class="#"><img src="static/images/logo.png" />{{site.title}} - 轻量级前端UI组件</a></div>
      <ul class="nav-group nav-group-right">
        {%- for nav in navigation %}
        <li><a href="{{nav.url}}"{%- if info.slug === nav.slug %} class="current"{%- endif %}>{{nav.title}}</a>{%- if nav.sub && (info.slug == nav.slug) %}{%- set subnav = nav.sub %}{%- endif %}
		</li>
        {%- endfor %}
      </ul>
    </div>
  </div>
</div>
{%- endif %} 
<!-- /header --> 
<!-- container --> 
{%- block page %}
{%- endblock %} 
<!-- /container --> 
<!-- footer -->
<div class="container m-t-5 p-5 text-center">&copy; PXUI  <a href="#">MIT</a> license  .Created and maintained by the <a href="#">Anuny</a> .Powered by <a href="#">Nodejs</a> <a href="#">Gulp</a> <a href="#">Less</a></div>
<!-- /footer --> 

{%- block javascript %}{% endblock %} 
</body>
</html>