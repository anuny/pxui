
# 排版 Typography
标题、段落、引用、列表、还有一些全局样式。

## 标题 - Headings
HTML 中的所有标题标签，`<h1>` 到 `<h6>` 均可使用。另外，还提供了 `.h1` 到 `.h6` 类，为的是给内联（inline）属性的文本赋予标题的样式。

<div class="clearfix p-4 b-gray">
  <div class="col col-12">
    <h1>h1. 今夕何夕，见此良人。</h1>
    <h2>h2. 不愧于人，不畏于天。</h2>
    <h3>h3. 琴瑟在御，莫不静好。</h3>
    <h4>h4. 愿一日，有女同车，颜如舜华。</h4>
    <h5>h5. 夜如何其？夜未央。</h5>
    <h6>h6. 北风其凉，雨雪其雾。惠而好我，携手同行。</h6>
  </div>
</div>

``` html
<h1>...</h1>
<h2>...</h2>
<h3>...</h3>
<h4>...</h4>
<h5>...</h5>
<h6>...</h6>
```

## 段落标记 - Paragraph
<div class="clearfix p-4 b-gray">
<p>孙子曰：凡兴师十万，出征千里，百姓之费，公家之奉，日费千金；内外骚动，怠于道路，不得操事者，七十万家。相守数年，以争一日之胜，而爱爵禄百金，不知敌之情者，不仁之至也，非人之将也，非主之佐也，非胜之主也。故明君贤将，所以动而胜人，成功出于众者，先知也。先知者，不可取于鬼神，不可象于事，不可验于度，必取于人，知敌之情者也。</p>
<p>故用间有五：有因间，有内间，有反间，有死间，有生间。五间俱起，莫知其道，是谓神纪，人君之宝也。因间者，因其乡人而用之。内间者，因其官人而用之。反间者，因其敌间而用之。死间者，为诳事于外，令吾间知之，而传于敌间也。生间者，反报也。</p>
<p>昔殷之兴也，伊挚在夏；周之兴也，吕牙在殷。故惟明君贤将，能以上智为间者，必成大功。此兵之要，三军之所恃而动也。</p>
</div>

``` html
<p> ... </p>
<p> ... </p>
<p> ... </p>
```

## 中心内容 - .lead 
通过添加 `.lead` 类可以让段落突出显示。
<div class="clearfix p-4 b-gray">
<p class="lead">
  凡军之所欲击，城之所欲攻，人之所欲杀，必先知其守将，左右，谒者，门者，舍人之姓名，令吾间必索知之。
</p>
</div>

``` html
<p class="lead">...</p>
```

## 内联文本元素 - Inline text
<div class="clearfix p-4 b-gray">
高亮标记 ：必索敌人之间来间我者，<mark>因而利之</mark>，导而舍之，故反间可得而用也。<br>
删除文本 ：因是而知之，故乡间、内间可得而使也；<del>因是而知之，故死间为诳事，</del>可使告敌。<br>
无用文本：<s>因是而知之，故生间可使如期。</s>五间之事，主必知之，知之必在于反间，故反间不可不厚也。<br>
插入文本：<ins>昔殷之兴也，伊挚在夏；周之兴也，吕牙在殷。</ins><br>
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


## 无序列表 - Unordered list
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

## 有序列表 - Ordered list
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

``` html
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
```
