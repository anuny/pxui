# 网格系统 - Grid
Bootstrap 提供了一套响应式、移动设备优先的流式栅格系统，随着屏幕或视口（viewport）尺寸的增加，系统会自动分为最多12列


## 1、从堆叠到水平排列
使用单一的一组 .col-md-* 栅格类，就可以创建一个基本的栅格系统，在手机和平板设备上一开始是堆叠在一起的（超小屏幕到小屏幕这一范围），在桌面（中等）屏幕设备上变为水平排列。所有“列（column）必须放在 ” .row 内。

<div class="columns b-blue">
  <div class="column column-1">column-1</div>
  <div class="column column-1 b-l-blue">column-1</div>
  <div class="column column-1 b-l-blue">column-1</div>
  <div class="column column-1 b-l-blue">column-1</div>
  <div class="column column-1 b-l-blue">column-1</div>
  <div class="column column-1 b-l-blue">column-1</div>
  <div class="column column-1 b-l-blue">column-1</div>
  <div class="column column-1 b-l-blue">column-1</div>
  <div class="column column-1 b-l-blue">column-1</div>
  <div class="column column-1 b-l-blue">column-1</div>
  <div class="column column-1 b-l-blue">column-1</div>
  <div class="column column-1 b-l-blue">column-1</div>
</div>

<div class="columns b-blue m-t-1">
  <div class="column column-4">column-4</div>
  <div class="column column-4 b-l-blue">column-4</div>
  <div class="column column-4 b-l-blue">column-4</div>
</div>

<div class="columns b-blue m-t-1">
  <div class="column column-8">column-8</div>
  <div class="column column-4 b-l-blue">column-4</div>
</div>


<div class="columns b-blue m-t-1">
  <div class="column column-12">column-12</div>
</div>

``` html
<div class="columns">
  <div class="column column-1">column-1</div>
  <div class="column column-1">column-1</div>
  <div class="column column-1">column-1</div>
  <div class="column column-1">column-1</div>
  <div class="column column-1">column-1</div>
  <div class="column column-1">column-1</div>
  <div class="column column-1">column-1</div>
  <div class="column column-1">column-1</div>
  <div class="column column-1">column-1</div>
  <div class="column column-1">column-1</div>
  <div class="column column-1">column-1</div>
  <div class="column column-1">column-1</div>
</div>

<div class="columns">
  <div class="column column-4">column-4</div>
  <div class="column column-4">column-4</div>
  <div class="column column-4">column-4</div>
</div>

<div class="columns">
  <div class="column column-8">column-8</div>
  <div class="column column-4">column-4</div>
</div>


<div class="columns">
  <div class="column column-12">column-12</div>
</div>
```



## 2、嵌套列
为了使用内置的栅格系统将内容再次嵌套，可以通过添加一个新的 .row 元素和一系列 .col-sm-* 元素到已经存在的 .col-sm-* 元素内。被嵌套的行（row）所包含的列（column）的个数不能超过12（其实，没有要求你必须占满12列）。

<div class="columns m-t-1">
<div class="column column-8 b-blue">
lv1:column-8
<div class="columns m-t-1">
<div class="column column-6 b-blue b-l-0 b-r-0 b-b-0">lv2:column-6</div>
<div class="column column-6 b-blue b-r-0 b-b-0">lv2:column-6</div>
</div>
</div>

<div class="column column-4 b-blue b-l-0">
lv1:column-4
<div class="columns m-t-1">
<div class="column column-6 b-blue b-l-0 b-r-0 b-b-0">lv2:column-6</div>
<div class="column column-6 b-blue  b-r-0 b-b-0">lv2:column-6</div>
</div>
</div>
</div>

``` html
<div class="columns">
  <div class="column column-8">
    lv1:column-8
    <div class="columns">
      <div class="column column-6">lv2:column-6</div>
      <div class="column column-6">lv2:column-6</div>
    </div>
  </div>
</div>

<div class="column column-4">
  lv1:column-4
  <div class="columns">
    <div class="column column-6">lv2:column-6</div>
    <div class="column column-6">lv2:column-6</div>
  </div>
</div>

```


## 3、移动设备-响应式
<div class="columns  m-t-1">
  <div class="column column-6 column-m-12 b-blue">column-6 column-m-12</div>
  <div class="column column-6 column-m-12 b-blue">column-6 column-m-12</div>
</div>


<div class="columns  m-t-1">
  <div class="column column-4 column-m-6 b-blue">column-4 column-m-6</div>
  <div class="column column-4 column-m-6 b-blue">column-4 column-m-6</div>
  <div class="column column-4 column-m-12 b-blue">column-4 column-m-12</div>
</div>

``` html
<div class="columns">
  <div class="column column-6 column-m-12">column-6 column-m-12</div>
  <div class="column column-6 column-m-12">column-6 column-m-12</div>
</div>


<div class="columns">
  <div class="column column-4 column-m-6">column-4 column-m-6</div>
  <div class="column column-4 column-m-6">column-4 column-m-6</div>
  <div class="column column-4 column-m-12">column-4 column-m-12</div>
</div>
```

## 4、列偏移

<div class="columns  m-t-1">
  <div class="column column-4 b-blue">column-4</div>
  <div class="column column-4 column-offset-4 b-blue">column-4 column-offset-4</div>
</div>

<div class="columns  m-t-1">
  <div class="column column-4 column-offset-4 b-blue">column-4</div>
</div>

<div class="columns  m-t-1">
  <div class="column column-3 column-offset-2 b-blue">column-4</div>
  <div class="column column-3 column-offset-2 b-blue">column-4</div>
</div>


``` html
<div class="columns">
  <div class="column column-4">column-4</div>
  <div class="column column-4 column-offset-4">column-4 column-offset-4</div>
</div>

<div class="columns">
  <div class="column column-4 column-offset-4">column-4</div>
</div>

<div class="columns">
  <div class="column column-3 column-offset-2">column-4</div>
  <div class="column column-3 column-offset-2">column-4</div>
</div>
```