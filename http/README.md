# 我是前端工程师（月影）
#### 微信akira-cn
 语意化  i标签，本来表示斜体  但是比如iconfont也是用i标签。  所以语意化其实应该是适合机器和人来阅读的
## 前端的十个问题
* 前端工程师是一群什么样的人？  用户交互，和用户打交道
* 前端工程师有怎么样的特质？  审美，设计，技能多，发展快
* 优秀的前端工程师最重要的是什么？  知识的深度和广度，前端＋工程师
* 平时工作中前端工程师主要做哪些事情？  和美工、和后台打交道，关注新技术，持续学习新技能，关注行业标准
* 前端工程师一般用什么开放工具和调试工具？  
* 前端工程师在工作中会遇到哪些挑战？  具备解决问题的能力和信心
* 成为前端工程师有哪些乐趣？
* 前端对公司来说重要吗？
* 前端工程师如何成长？ 学习新技术，使用，遇到问题，解决问题，某个模块深入研究
* 你问我一个问题？ 公司的前端技术栈  jquery  d3（数据图表展示） 单页应用（react）  view.js  服务端nodejs thinkJs(MVC)   reactNative   自己的前端编译部署工具

#### 其他
巩固知识体系，找出学习规律

中间人攻击  https


# HTTP与性能优化（屈光宇）
#### 请求／响应报文格式

```
<method><request-URL><version>
<headers>
<entity-body>
```

#### 什么是URL
```
<scheme>://<user>:<password>@<host>:<port>/<path>;<params>?<query>#<frag>
```
#### http状态码
* 200 OK
* 301 Moved Permanently
* 302 Found
* 304 Not Modified
* 401 Unauthorized
* 403 Forbidden
* 404 Not Found
* 500 Internal Server Error
* 501 Not Implemented
* 502 Bad GateWay

#### Header分类
拓展（自定义）

X-
#### 请求－响应过程
1、 浏览器从url中解析出服务器的主机名；

2、 浏览器将主机名转换成服务器的ip地址

3、 浏览器从url中解析出端口号，默认如80

4、 浏览器简历一条服务器的tcp连接

5、浏览器向服务器发送一条http请求报文

6、 服务器向客户端返回http响应报文

7、 关闭连接，浏览器显示文档

#### get/post
get请求参数在url

一般像购物车，登陆，表单提交用post

#### Cookie

http是无状态协议，引入cookie保存状态，服务端发送一个特殊首部字段setCookie：times=1 通知浏览器保存cookie

#### Session 

会话机制，一般通过cookie来设置session

#### Accept-Encoding/Content-Encoding

设置压缩

#### HTTP抓包工具
* Wireshark
* Fiddler
* Firebug for Firefox    
* Chrome开发者工具   (postman)
* IE8+

Fiddler 自动应答功能

#### 发包工具
* telnet/curl
* Fiddler
* Tamper for Firefox
* Postman for chrome
* Paw for

### http历史回顾
RFC2616 HTTP1.1

#### SPDY--->http2(2015)

### HTTP性能优化(WPO)
* keep-alive 减少tcp慢启动带来的影响，减少后续时间的握手
* 同域并发限制 一般允许同域6个并发连接
* 域名散列：通过用不同当域名请求
* 协议开销： 请求响应头
* 合并请求（异步接口合并，图片合并：雪碧图，css、js合并，css、js内联、图片音频内联）
* 压缩：代码压缩（html、css、js），图片压缩。服务端开启GZip压缩，具体业务代码压缩
* 缓存的使用(协商缓存，强制缓存)，Last-Modified；Etag（省传输大小）；Expires;Cache-Control

### 浏览器请求的三种方式
+ 在地址回车，点击链接，使用全部缓存；  200 from cache
+ F5/cmd+r,忽略Expires和Cache-Control,发起协商请求;  304
+ Ctrl+F5/cmd+shift+r,忽略所有缓存）  200

### 阻塞渲染
重要业务样式内联

### 页面加载时间点
白屏时间在响应回来后 解析完响应头部后

### 用户心理
* 让用户更快看到主题内容:异步加载／按需加载;BigPipe
* 让用户知道当前状态：加载提示：进度条
* 让用户感觉更快：占位图

### http性能指标

* html5 pertormance API


### HTTP瀑布图 
chrome调试工具

### 推荐书籍
+ 图解http
+ http权威指南
+ web性能权威指南







# tcp/http练习

### browser.js
模拟浏览器

### tcpserver.js
创建tcp服务器

### httpserver.js
创建http服务器