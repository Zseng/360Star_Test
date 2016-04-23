# HTML (赵文博)
## doctype的作用
声明当前页面是什么类型的文件

指定html页面使用的标准和版本

决定浏览器渲染模式

## 渲染模式
* 怪异模式
* 准标准模式
* 标准模式

## html设计思想
* 兼容已有内容
* 避免不必要复杂性
* 解决现实的问题
* 优雅降级
* 尊重事实标准
* 用户》开发者》浏览器厂商》标准制定者》理论完美

## 语义化
html中的元素、属性及属性值都拥有某些含义

开发者应遵循语义来编写

#### 好处
* 可访问性
* 搜索引擎优化
* 易读
* 易维护

## 元数据元素
* base: 指定url基准及链接打开方式
* noscript: 浏览器不支持脚本时才展示的内容
* meta: ```<meta name="keywords" content="......">```;```  <mata name="viewport" content="width=device-width;...."> ```  

## 使用meta扩展html
```
<meta name="robots" content="noindex">  //不需要索引这个页面
<meta name="format-detection" content="telphone=no">
<meta name="renderer" content="webkit">  //控制渲染模式内核
```

### a链接
target属性

* _self
* _blank
* _parent
* _top

href属性
### 引用
### 列表标签

* 有序列表 ol li
* 无需列表 ul li
* 定义列表 dl dt dd

### 嵌入内容
### 图片常用格式
* jpg 适合照片
* png 颜色较少，png24可以半透明
* gif 无法半透明，可以多帧做动画

### 公共属性

* id
* tittle
* lang  指定页面某个标签用什么语言，比如textarea浏览器默认拼写检查
* style
* class
* 自定义 data-*

### 如何做到语义化

* 清楚了解每个标签和属性的语义
* HTML中只描述内容的结构 ，样式留给css
* 手写html，避免使用生成工具
* 命名遵循行业通用标准：***microformats(微格式)***: hcard/vcard; h-product;h-recipe...

### Schema.org

### ARIA

```
 <div role="button" arial-label="Refresh"></div>
```

### HTML如何学习
[HTML教程](http://www.webplatform.org)

[CodeCademy](https://www.codecademy.com/zh/)

HTML手册:[the living standard](https://developers.whatwg.org)


# CSS

### 使用css
```
 <!-- 外链 -->
 <link rel="stylsheet" href="...">  //rel  :relationship 外链与页面的关系  
```

### 属性选择器
```
 input[disabled] {...}
 input[type="password"] {...}
 [class^=icon-] {...}   ^以..开始  $以..结束
```

### 继承
某些元素会自动继承其父元素的值，除非显示指定一个值（如color, 文字相关）

### 字体系列
* Serif 衬线体
* Sans-Serif 无衬线体
* Monospace 等宽字体

英文字体放在前面，中文字体放在后面

```
 h1 {
	font-family: Arial, sans-serif,"Microsoft-Yahei"; 
 }
```
font-size

长度单位em：一般是相对于font-size的计算值，用在font-size属性上时，是相对于父元素的font-size计算值

line-height： 一般是1.4～1.8  尽量不写em和px

font: /\*斜体 粗细 大小／行高 字体\*/

rgb和rgba   (rgba css3新增  a：alpha透明度)  如果是opacity指定透明度：内部元素也会半透明

HSL和HSLA   HUE:色相 0-360 Saturation:饱和度 0-100% L: 亮度 0-100%

text-algin:justifiy   分散对齐  两边对齐，中间空白符填补

# CSS进阶
### css盒模型
content、padding、border、margin

默认是content box 宽度

height: 百分数相对于父容器（包含块）的content-box高度，只有当包含块的高度不依赖该元素时，百分比高度才生效

marigin:  折叠、可为负值

块级元素

行级元素

* 不会为其内容生产块级框
* 让其内容分布在多行中

### 排版流（文档流）
除跟元素、浮动元素、和绝对定位元素（脱离文档流）外，都在文档流内

块级元素独占一行，行级元素水平并排摆放

### 浮动（float）

浮动可以实现多个块级框并排显示

浮动元素不会影响其后面的块级框

会影响行级元素，行级元素会避开文字

清除浮动：

clear： 指定元素哪一边不能与之前的浮动元素相邻; ::before和 ::after  伪元素

BFC（快级格式化上下文）： 框会从包含块的顶部开始，从上到下摆放；

* 浮动框
* 绝对定位
* 非块级的块级容器：inline-block
* overflow: hidden

BFC内的浮动不会影响到外部元素

BFC不会和浮动元素重叠（两栏布局可以 左边浮动，右边BFC）

### 堆叠层次：z-index

在同一个上下文上比较

绘制顺序（从下到上）

* background border
* z-index 为负的定位元素
* 正常块级元素
* 浮动元素
* 行级元素
* z-index为0
* z-index为正

### 兄弟选择器
```
	h2~p {} 
	h2+p {}
```

```
	<input type="checkbox" for=''>
```

### 结构伪类
* :first-child
* :last-child
* :nth-child(n)
* :nth-of-type(3)  //相同标签

## 工程化
#### 代码风格
* css style guide
* 工具 编辑器自动检测 git/sv hook
* [smacss](https://smacss.com)

#### css预处理器
* less
* sass
* PostCSS  //未来css语法标准

# 移动端 （黄薇）
### 浏览器
均基于webkit内核

内置浏览器

第三发浏览器： uc qq opera 省浏览模式 服务端渲染好给用户，用户看到的是一张图片

webview 操作系统留给原生应用的浏览器接口

### 测试IOS
ios的所有浏览器都基于safari的底层

开启省流量模式的第三方浏览器

### 测试Android

* android webkit 4.x 富含不同设备和安卓版本

* google chrome

* 三星chrome；htc chrome等

### 放心使用h5、css3

地理位置api

### mobile vs pc

* 屏幕小，交互方式不同
* 性能较低，代码需高效

### 开放工具

* google chrome
* 脚本库:原生js，zepto.js
* 调试: google chrome

### viewPort

布局视口:风景，决定页面的初始包含块大小。document.documentElement.offsetWidth;

视觉视口:窗户，

### 定义布局视口
```
	<meta name="viewport" content="width=device-width, initial-scale=1" />
```



### 视口大小

默认视口：布局视口的默认大小；保证pc网页正常渲染

理想视口： 浏览器默认的理想布局视口小；理想即指：10px实际大小与pc接近，可读  (建议使用)


dpr: 设备像素／css像素

### 响应式开发

media query 对屏幕不同屏幕，应用不同的样式

```

	<link rel="stylesheet" href="m.css" media="screen and(max-width)...">			
```

```@media (min-width: 769px) {}```

### 弹性布局
页面的body宽度为100%

自适应布局

display: table

子元素：display:table-cell

垂直居中: vertical-aligin:middle;   里面元素要是inline 或inline-block

### Flexbox
新旧标准

2009年语法和2012年语法

### 响应式设计中的图片
* 大图随容器自动缩放，保持比例
* 根据屏幕的分辨率，适配不同清晰度的图片
* 自动缩放:max-width:100%;background-size:cover;
* width:200px的img，使用分辨率宽为400的图片
* srcset和picture

```
	<img src="low-res.jpg" srcset="high-res.jpg 2x">
	<picture>
	...
	</pictrue>
```
其他选项(减少图片的使用)

*  使用svg图片
*  使用css模拟形状
*  使用webfont

### 响应式javascript
使用metcahMedia

```
	if(matchMedia('screen and(min-width:480px)').matches) {
		//...
	}
```

处理orientationChange事件

pg：container display:justify  子元素 display:inline

### 鼠标事件和Touch事件

click事件约有300ms的延迟 为了判断是否为双击缩放行为

谷歌会在viewport meta设为device-width时 取消延时

ie会在css的touch-action设置manipulation时取消延时

safari无法取消延时

解决办法：

使用touch事件模拟

#### touchEvent

有三个touchList类型的关键属性

```

	window.ontouchstart = function(e) {
		console.log(e.touches);
		console.log(e.targetTouches);
		console.log(e.)
	}
```

touchcancel事件

* 被系统通知，应用切换等中断
* 超出边界

作业：用touch 事件实现拖放

[讲师分享博客](http://melonh.com/sharing/)




















