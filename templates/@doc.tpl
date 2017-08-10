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
<script src="static/lib/respond.min.js" type="text/javascript" ></script>
<script src="static/pxui.js" type="text/javascript" pxui-deps="*/js/plugin.dom,*/js/plugin.highlight,*/js/plugin.markdown,*/js/init"></script> 
{% endblock -%}
