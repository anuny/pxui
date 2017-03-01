
# 排版 Typography
标题、段落、引用、列表、还有一些全局样式。

## 标题 - Headings
HTML 中的所有标题标签，`<h1>` 到 `<h6>` 均可使用。另外，还提供了 `.h1` 到 `.h6` 类，为的是给内联（inline）属性的文本赋予标题的样式。

<div class="clearfix p-4 b-gray">
  <div class="column column-12">
    <h1>h1. Primer heading<small>Secondary text</small></h1>
    <h2>h2. Primer heading</h2>
    <h3>h3. Primer heading</h3>
    <h4>h4. Primer heading</h4>
    <h5>h5. Primer heading</h5>
    <h6>h6. Primer heading</h6>
  </div>
</div>

``` html
<h1>h1. Primer heading</h1>
<h2>h2. Primer heading</h2>
<h3>h3. Primer heading</h3>
<h4>h4. Primer heading</h4>
<h5>h5. Primer heading</h5>
<h6>h6. Primer heading</h6>
```

## 主体内容
<div class="clearfix p-4 b-gray">
<p>Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.</p>
<p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus auctor fringilla.</p>
<p>Maecenas sed diam eget risus varius blandit sit amet non magna. Donec id elit non mi porta gravida at eget metus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
</div>

``` html
<p> ... </p>
<p> ... </p>
<p> ... </p>
```

## 中心内容
通过添加 `.lead` 类可以让段落突出显示。
<div class="clearfix p-4 b-gray">
<p class="lead">
  Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.
</p>
</div>
``` html
<p class="lead">...</p>
```




## 内联文本元素
<div class="clearfix p-4 b-gray">
高亮标记 ：You can use the mark tag to <mark>highlight</mark> text.<br>
删除文本 ：<del>This line of text is meant to be treated as deleted text.</del><br>
无用文本：<s>This line of text is meant to be treated as no longer accurate.</s><br>
插入文本：<ins>This line of text is meant to be treated as an addition to the document.</ins><br>
下划线：<u>This line of text will render as underlined</u><br>
小号文本：<small>This line of text is meant to be treated as fine print.</small><br>
着重：<strong>This line rendered as bold text.</strong><br>
斜体：<em>This line rendered as italicized text.</em><br>
</div>
``` html
<p>You can use the mark tag to <mark>highlight</mark> text.</p>
<p><del>This line of text is meant to be treated as deleted text.</del></p>
<p><s>This line of text is meant to be treated as no longer accurate.</s></p>
<p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
<p><u>This line of text will render as underlined</u></p>
<p><small>This line of text is meant to be treated as fine print.</small></p>
<p><strong>This line rendered as bold text.</strong></p>
<p><em>This line rendered as italicized text.</em></p>
```


## 引用 - Blockquotes
<div class="clearfix p-4 b-gray">
<blockquote>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
  <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
</blockquote>
</div>
``` html
<blockquote>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
  <p class="small">Someone famous in <cite title="Source Title">Source Title</cite></p>
</blockquote>
```


## 无序列表
排列顺序无关紧要的一列元素。
<div class="clearfix p-4 b-gray">
<ul>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Nulla volutpat aliquam velit
    <ul>
      <li>Phasellus iaculis neque</li>
      <li>Purus sodales ultricies</li>
      <li>Vestibulum laoreet porttitor sem</li>
      <li>Ac tristique libero volutpat at</li>
    </ul>
  </li>
  <li>Faucibus porta lacus fringilla vel</li>
  <li>Aenean sit amet erat nunc</li>
  <li>Eget porttitor lorem</li>
</ul>
</div>
``` html
<ul>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Nulla volutpat aliquam velit
    <ul>
      <li>Phasellus iaculis neque</li>
      <li>Purus sodales ultricies</li>
      <li>Vestibulum laoreet porttitor sem</li>
      <li>Ac tristique libero volutpat at</li>
    </ul>
  </li>
  <li>Faucibus porta lacus fringilla vel</li>
  <li>Aenean sit amet erat nunc</li>
  <li>Eget porttitor lorem</li>
</ul>
```

## 有序列表
顺序至关重要的一组元素。
<div class="clearfix p-4 b-gray">
<ol>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Nulla volutpat aliquam velit
    <ol>
      <li>Phasellus iaculis neque</li>
      <li>Purus sodales ultricies</li>
      <li>Vestibulum laoreet porttitor sem</li>
      <li>Ac tristique libero volutpat at</li>
    </ol>
  </li>
  <li>Faucibus porta lacus fringilla vel</li>
  <li>Aenean sit amet erat nunc</li>
  <li>Eget porttitor lorem</li>
</ol>
</div>