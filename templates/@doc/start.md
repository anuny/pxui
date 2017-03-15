# 开始使用 - Start
你可以在官网首页下载到 Pxui 的最新版，也可以通过 GitHub 得到 Pxui 的开源包。目前我们只同步维护这两处资源渠道。一般如果你是用于实际项目，我们推荐你直接从官网下载。


## 基本模板
使用以下给出的这份超级简单的 HTML 模版，或者修改这些实例。我们强烈建议你对这些实例按照自己的需求进行修改，而不要简单的复制、粘贴。

``` html
<!DOCTYPE html>
<html lang="zh-cn">
  <head>
	<meta charset="utf-8">
	<meta name="renderer" content="webkit|ie-stand|ie-comp">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Your Title</title>

	<!-- Pxui CSS -->
	<link href="css/pxui.min.css" rel="stylesheet">
	<style>
	  /**
       123
      **/

	  body{color:#f000dd}
	  #demo{color:#f00000}
	  .demo{color:#f00}
	  .demo span{color:#f00; font-size:14px;}
	</style>
  </head>
  <body>
	<h1>你好，世界！</h1>
	<!-- Pxui Javascript -->
	<script src="js/pxui.min.js"></script>
	<script>
	  var i = 0;
	  i++;
	  function test(str){
		return "2012-06-23".match( /^(\d{4})\-(\d{2})\-(\d{2})$/ );
	  }
	</script>
  </body>
</html>
```
