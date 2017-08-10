# 栅格系统 - Grid
Bootstrap 提供了一套响应式、移动设备优先的流式栅格系统，随着屏幕或视口（viewport）尺寸的增加，系统会自动分为最多12列

## 1、从堆叠到水平排列
使用单一的一组 .col-{1~12} 栅格类，就可以创建一个基本的栅格系统，在手机和平板设备上一开始是堆叠在一起的（超小屏幕到小屏幕这一范围），在桌面（中等）屏幕设备上变为水平排列。所有“列（col）必须放在 ” .row 内。

<div class="clearfix p-2">
<div class="row b-blue">
  <div class="col col-1">col-1</div>
  <div class="col col-1 b-l-blue">col-1</div>
  <div class="col col-1 b-l-blue">col-1</div>
  <div class="col col-1 b-l-blue">col-1</div>
  <div class="col col-1 b-l-blue">col-1</div>
  <div class="col col-1 b-l-blue">col-1</div>
  <div class="col col-1 b-l-blue">col-1</div>
  <div class="col col-1 b-l-blue">col-1</div>
  <div class="col col-1 b-l-blue">col-1</div>
  <div class="col col-1 b-l-blue">col-1</div>
  <div class="col col-1 b-l-blue">col-1</div>
  <div class="col col-1 b-l-blue">col-1</div>
</div>

<div class="row b-blue m-t-1">
  <div class="col col-4">col-4</div>
  <div class="col col-4 b-l-blue">col-4</div>
  <div class="col col-4 b-l-blue">col-4</div>
</div>

<div class="row b-blue m-t-1">
  <div class="col col-8">col-8</div>
  <div class="col col-4 b-l-blue">col-4</div>
</div>


<div class="row b-blue m-t-1">
  <div class="col col-12">col-12</div>
</div>
</div>
``` html
<div class="row">
  <div class="col col-1">col-1</div>
  <div class="col col-1">col-1</div>
  <div class="col col-1">col-1</div>
  <div class="col col-1">col-1</div>
  <div class="col col-1">col-1</div>
  <div class="col col-1">col-1</div>
  <div class="col col-1">col-1</div>
  <div class="col col-1">col-1</div>
  <div class="col col-1">col-1</div>
  <div class="col col-1">col-1</div>
  <div class="col col-1">col-1</div>
  <div class="col col-1">col-1</div>
</div>

<div class="row">
  <div class="col col-4">col-4</div>
  <div class="col col-4">col-4</div>
  <div class="col col-4">col-4</div>
</div>

<div class="row">
  <div class="col col-8">col-8</div>
  <div class="col col-4">col-4</div>
</div>


<div class="row">
  <div class="col col-12">col-12</div>
</div>
```



## 2、嵌套列
为了使用内置的栅格系统将内容再次嵌套，可以通过添加一个新的 .row 元素和一系列 .col-{1~12}  元素到已经存在的 .col-{1~12} 元素内。被嵌套的行（row）所包含的列（col）的个数不能超过12（其实，没有要求你必须占满12列）。
<div class="clearfix p-2">
<div class="row m-t-1">
<div class="col col-8 b-blue ">
lv1:col-8
<div class="row m-t-1">
<div class="col col-6 b-blue b-l-0 b-r-0 b-b-0">lv2:col-6</div>
<div class="col col-6 b-blue b-r-0 b-b-0">lv2:col-6</div>
</div>
</div>

<div class="col col-4 b-blue b-l-0">
lv1:col-4
<div class="row m-t-1">
<div class="col col-6 b-blue b-l-0 b-r-0 b-b-0">lv2:col-6</div>
<div class="col col-6 b-blue  b-r-0 b-b-0">lv2:col-6</div>
</div>
</div>
</div>
</div>
``` html
<div class="row">
  <div class="col col-8">
    lv1:col-8
    <div class="row">
      <div class="col col-6">lv2:col-6</div>
      <div class="col col-6">lv2:col-6</div>
    </div>
  </div>
</div>

<div class="col col-4">
  lv1:col-4
  <div class="row">
    <div class="col col-6">lv2:col-6</div>
    <div class="col col-6">lv2:col-6</div>
  </div>
</div>

```


## 3、移动设备-响应式
<div class="clearfix p-2">
<div class="row  m-t-1">
  <div class="col col-6 col-m-12 b-blue">col-6 col-m-12</div>
  <div class="col col-6 col-m-12 b-blue">col-6 col-m-12</div>
</div>


<div class="row  m-t-1">
  <div class="col col-4 col-m-6 b-blue">col-4 col-m-6</div>
  <div class="col col-4 col-m-6 b-blue">col-4 col-m-6</div>
  <div class="col col-4 col-m-12 b-blue">col-4 col-m-12</div>
</div>
</div>


``` html
<div class="row">
  <div class="col col-6 col-m-12">col-6 col-m-12</div>
  <div class="col col-6 col-m-12">col-6 col-m-12</div>
</div>


<div class="row">
  <div class="col col-4 col-m-6">col-4 col-m-6</div>
  <div class="col col-4 col-m-6">col-4 col-m-6</div>
  <div class="col col-4 col-m-12">col-4 col-m-12</div>
</div>
```

## 4、列偏移
<div class="clearfix p-2">
<div class="row  m-t-1">
  <div class="col col-4 b-blue">col-4</div>
  <div class="col col-4 col-offset-4 b-blue">col-4 col-offset-4</div>
</div>

<div class="row  m-t-1">
  <div class="col col-4 col-offset-4 b-blue">col-4</div>
</div>

<div class="row  m-t-1">
  <div class="col col-3 col-offset-2 b-blue">col-4</div>
  <div class="col col-3 col-offset-2 b-blue">col-4</div>
</div>
</div>

``` html
<div class="row">
  <div class="col col-4">col-4</div>
  <div class="col col-4 col-offset-4">col-4 col-offset-4</div>
</div>

<div class="row">
  <div class="col col-4 col-offset-4">col-4</div>
</div>

<div class="row">
  <div class="col col-3 col-offset-2">col-4</div>
  <div class="col col-3 col-offset-2">col-4</div>
</div>
```
