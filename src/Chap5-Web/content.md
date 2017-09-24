# HTTP Module: Server and Client
此模块的存在并不是为了替代 Apache或者Nginx。它只是提供了基础的流处理和消息解析的功能。同时为高级的复杂的框架（比如Express）提供基础。

`http.CreateServer`返回一个`http.Server`对象。其包括了以下事件：
- connection
- connect
- request
- upgrade
- close
- checkContinue
- checkExpectation

```js
server.on('request', function(request, response) {
  ...
});
```
`request`是`IncomingMessage`类的示例，是一个可读流（readable stream）；`response`是一个`http.ServerResponse`对象，是一个可写流（writable stream）。


# Creating a Static Web Server
一个简单静态 Web 服务器的流程：
1. 创建一个 HTTP 服务同时监听端口
2. 当有请求达到时，解析请求的URL来确定服务的文件位置
3. 检查文件是否存在
4. 如果文件不存在，做出相应的回应
5. 如果文件存在，打开文件读取内容
6. 准备response header
7. 将文件写入response
8. 等待下一个请求


一般我们访问网站时不需要指定端口是因为，有两个被固定使用的端口：
- HTTP使用的是 80
- HTTPS使用的是 443

## mime
- ES6 support required (node@>=6)
- lookup() renamed to getType()
- extension() renamed to getExtension()
- charset() and load() methods have been removed


# Using Apache to Proxy a Node App
省略。使用Nginx


# Query String
querystring可以将对象或者字符串转出对立的格式。比如可以将对象转换成字符串格式。把字符串转出想要的对象格式。


# DNS Resolution
- dns.lookup()
- dns.resolve
