
# 按钮 - Buttons

## 可作为按钮使用的标签或元素
为 `<a>`、`<button>` 或 `<input>` 元素添加按钮类（button class）即可使用 Pxui 提供的样式。


<a class="btn" href="#" role="button">Link button</a>
<button class="btn" type="submit">Button</button>
<input class="btn" type="button" value="Input">
<input class="btn" type="submit" value="Submit">

``` html
<a class="btn" href="#" role="button">Link button</a>
<button class="btn" type="submit">Button</button>
<input class="btn" type="button" value="Input">
<input class="btn" type="submit" value="Submit">
```

## 预定义样式
使用下面列出的类可以快速创建一个带有预定义样式的按钮。


<button class="btn" type="button">Default button</button>
<button class="btn btn-primary" type="button">Primary button</button>
<button class="btn btn-danger" type="button">Danger button</button>
<button class="btn btn-outline" type="button">Outline button</button>


``` html
<button class="btn" type="button">Default button</button>
<button class="btn btn-primary" type="button">Primary button</button>
<button class="btn btn-danger" type="button">Danger button</button>
<button class="btn btn-outline" type="button">Outline button</button>

```


## 按钮尺寸
需要让按钮具有不同尺寸吗？使用 `.btn-sm` 或 `.btn-lg` 就可以获得不同尺寸的按钮。


<button class="btn" type="button">Button</button>
<button class="btn btn-sm" type="button">Small button</button>

## 禁用状态
通过为按钮的背景设置 opacity 属性就可以呈现出无法点击的效果。

### button 元素
为 `<button>` 元素添加 disabled 属性，使其表现出禁用状态。

<button class="btn" type="button" disabled>Disabled button</button>
<button class="btn btn-primary" type="button" disabled>Disabled button</button>
<button class="btn btn-danger" type="button" disabled>Disabled button</button>
<button class="btn btn-outline" type="button" disabled>Disabled button</button>
``` html
<button class="btn" type="button" disabled>Disabled button</button>
<button class="btn btn-primary" type="button" disabled>Disabled button</button>
<button class="btn btn-danger" type="button" disabled>Disabled button</button>
<button class="btn btn-outline" type="button" disabled>Disabled button</button>
```

### a 链接元素
为 `<a>` 元素创建的按钮添加 .disabled 类。

<a class="btn disabled" href="#" role="button">Disabled button</a>
<a class="btn btn-primary disabled" href="#" role="button">Disabled button</a>
<a class="btn btn-danger disabled" href="#" role="button">Disabled button</a>
<a class="btn btn-outline disabled" href="#" role="button">Disabled button</a>
``` html
<a class="btn disabled" href="#" role="button">Disabled button</a>
<a class="btn btn-primary disabled" href="#" role="button">Disabled button</a>
<a class="btn btn-danger disabled" href="#" role="button">Disabled button</a>
<a class="btn btn-outline disabled" href="#" role="button">Disabled button</a>
```

## 块级按钮
通过给按钮添加 `.btn-block` 类可以将其拉伸至父元素100%的宽度，而且按钮也变为了块级（block）元素。

<p><button class="btn btn-block" type="button">Block button</button></p>
<p><button class="btn btn-sm btn-block" type="button">Small block button</button></p>
``` html
<button class="btn btn-block" type="button">Block button</button>
<button class="btn btn-sm btn-block" type="button">Small block button</button>
```

## 按钮计数
<button class="btn" type="button">Button<span class="counter">12</span></button>
<button class="btn btn-primary" type="button">Button<span class="counter">12</span></button>
<button class="btn btn-danger" type="button">Button<span class="counter">12</span></button>
<button class="btn btn-outline" type="button">Button<span class="counter">12</span></button>
``` html
<button class="btn" type="button">Button<span class="counter">12</span></button>
<button class="btn btn-primary" type="button">Button<span class="counter">12</span></button>
<button class="btn btn-danger" type="button">Button<span class="counter">12</span></button>
<button class="btn btn-outline" type="button">Button<span class="counter">12</span></button>
```

## 按钮组
通过按钮组容器把一组按钮放在同一行里。通过与按钮插件联合使用，可以设置为单选框或多选框的样式和行为。

<div class="btn-group">
  <button class="btn" type="button">Left</button>
  <button class="btn" type="button">Middle</button>
  <button class="btn" type="button">Right</button>
</div>

<div class="btn-group">
  <button class="btn btn-outline" type="button">Prev</button>
  <button class="btn btn-outline" type="button">1</button>
  <button class="btn btn-outline" type="button">2</button>
  <button class="btn btn-outline" type="button">3</button>
  <button class="btn btn-outline" type="button">...</button>
  <button class="btn btn-outline" type="button">Next</button>
</div>

<div class="btn-group">
  <button class="btn btn-sm" type="button">Button</button>
  <button class="btn btn-sm" type="button">Button</button>
  <button class="btn btn-sm" type="button">Button</button>
</div>
``` html
<div class="btn-group">
  <button class="btn" type="button">Left</button>
  <button class="btn" type="button">Middle</button>
  <button class="btn" type="button">Right</button>
</div>
```

## 按钮组表单提交

<div class="btn-group">
  <form class="btn-group-form">
    <button class="btn" type="button">Button in a form</button>
  </form>
  <button class="btn" type="button">Button</button>
  <button class="btn" type="button">Button</button>
</div>
``` html
<div class="btn-group">
  <form class="btn-group-form">
    <button class="btn" type="button">Button in a form</button>
  </form>
  <button class="btn" type="button">Button</button>
  <button class="btn" type="button">Button</button>
</div>
```

## 按钮组表单提交
<span class="hidden-text-expander">
  <button type="button" class="ellipsis-expander">&hellip;</button>
</span>