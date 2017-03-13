
# dom操作 - Form

类似jQuery，dom选择和操作,无依赖,模块大小 ≈ `3kb`

## 使用组件

``` javascript
var $ = pxui.require('extend::dom')
```

## 选择器 - Selector

``` javascript
// id
$('#demo')

// className
$('.demo')

// 子元素
$('#demo .test')

```

## 筛选 - Filter

``` javascript
// 指定
$('#demo').find('.test')

// 第一个
$('.test li').first()

// 第N个
$('.test li').eq(1)

// 最后一个
$('.test li').last()
```

## 属性 - attribute

``` javascript
// 获取
$('#demo').attr('href')

// 设置
$('#demo').attr('href','http://baidu.com')

// 移除
$('#demo').removeAttr('disabled')

```
## 样式名 - className

``` javascript
// 判断
$('#demo').hasClass('test')

// 添加
$('#demo').addClass('test')

// 移除
$('#demo').removeClass('test')
```

## 获取内容 - Get content

``` javascript
// 获取innerHTML
$('#demo').html()

// 设置innerHTML
$('#demo').html('test html')

// 获取innerText
$('#demo').text()

// 设置innerText
$('#demo').text('test text')

// 获取value
$('#demo').val()

// 设置value
$('#demo').val('test val')


```

