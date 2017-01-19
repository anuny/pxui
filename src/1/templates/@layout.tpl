<!-- base -->
<!doctype html>
<html lang="{%- if lang %}{{lang}}{%- else %}zh-cmn-Hans{%- endif %}">
<head>
<meta charset="{%- if charset %}{{charset}}{%- else %}utf-8{%- endif %}">
<meta name="renderer" content="webkit|ie-stand|ie-comp">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
<title>{%- if info.title %}{{info.title}}{%- endif %}{%- if siteName %} - {{siteName}}{%- endif %}{%- if siteSketch %} - {{siteSketch}}{%- endif %}</title>
{%- if author %}
<meta name="author" content="{{author}}" />
{%- endif %}
{%- if siteUrl %}
<meta name="copyright" content="{{siteUrl}}" />
{%- endif %}
{%- if keywords %}
<meta name="keywords" content="{{keywords}}" />
{%- endif %}
{%- if description %}
<meta name="description" content="{{description}}" />
{%- endif %}
<meta name="robots" content="index,follow" />
{%- if wap %}
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-touch-fullscreen" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black" >
<meta name="format-detection" content="telephone=no">
{%- endif %}
<link rel="icon" href="static/images/favicon.ico">
<link href="static/css/pxui.css" rel="stylesheet" type="text/css">
<link href="static/css/style.css" rel="stylesheet" type="text/css">
</head><!-- /base -->
<body>
<!-- header --> 
{%- if navigation %}
<div class="header bg-gray b-b-gray">
  <div class="container">
    <div class="nav">
      <div class="nav-header"><a class="nav-brand" class="#"><img src="static/images/logo.png" />{{siteName}}</a></div>
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
<script src="static/js/respond.min.js" type="text/javascript" ></script>
<script src="static/js/lib.js" type="text/javascript" ></script> 
{%- block javascript %}{% endblock %} 
</body>
</html>