<!doctype html>
<html lang="zh-cmn-Hans">
<head>
<meta charset="utf-8">
<meta name="renderer" content="webkit|ie-stand|ie-comp">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
<title>{%- if info.title %}{{info.title}}{%- endif %}{%- if site.title %} - {{site.title}}{%- endif %}{%- if siteSketch %} - {{siteSketch}}{%- endif %}</title>
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
<body>
{%-
	set navigation = [
    	{
			"url": "index.html", 
			"title": "文档",
			"sub":[
                {
                    "url": "index.html", 
                    "subtitle":"Start",
                    "title": "使用"
                },
                {
                    "url": "grid.html", 
                    "subtitle":"Grid",
                    "title": "网格"
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
		}
	] 
%}
<!-- header --> 
{%- if navigation %}
<div class="header bg-gray b-b-gray">
  <div class="container">
    <div class="nav">
      <div class="nav-header"><a class="nav-brand" class="#"><img src="static/images/logo.png" />{{site.title}}</a></div>
      <ul class="nav-group nav-group-right">
        {%- for nav in navigation %}
        <li><a href="{{nav.url}}"{%- if info.url === nav.url %} class="current"{%- endif %}>{{nav.title}}</a>{%- if nav.sub %}{%- set subnav = nav.sub %}{%- endif %} </li>
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
<script src="static/lib/respond.min.js" type="text/javascript" ></script>
<script src="static/js/lib.js" type="text/javascript" ></script> 
{%- block javascript %}{% endblock %} 
</body>
</html>