# OS
通过os模块可以获取本地计算机的一些属性。比如home目录，tmp目录，可用内存，总内存多少等等。


# Stream and Pipes
流的概念在Node核心中非常普遍。流是个抽象概念，不是直接创建出来的。而是通过一些实现了流的对象实例化所得。比如 HTTP的request，文件系统的read或write流，ZLib的压缩，process.stdout等。也可以通过实现Stream的API来自定义流。

Node中的流有以下基本功能：
- 通过`setEncoding`设置流数据的编码格式
- 检查一个流是可读的还是可写的
- 捕获流的事件，比如data received或者connection closed
- 可以暂停或者恢复流
- 可以在可读流或者可写流进行pipe化

一个流即可写又可读，称之为`双工流（duplex stream）`。双工流有一个变体，称之为`transform`。


可读流支持几种事件，其中最主要的是：
- data
- end
- error


可写事件支持：
- error
- finish
- drain


可读写的双工流。有独立的输入和输出缓冲区。但是`transform`流却不是这样。`transform`流是将输入，进行某种转换，然后输出。因此必须实现一个`_transform()`函数。fs.ReadStream的`pipe`就是一个例子。看看Zlib压缩的例子：
```js
const gzip = zlib.createGzip();
const fs = require('fs');
const in = fs.createReadStream('input.txt');
let out = fs.createWriteStream('input.txt.gz');

in.pipe(gzip).pipe(out);
```


# File System
Node的文件系统支持4个类：
- fs.FSWatcher
- fs.ReadStream
- fs.WriteStream
- fs.Stats


因为原生的FSWatcher有缺陷。因此建议使用`Chokidar`。


可读流创建时的默认选项：
```js
{
  flags; 'r',
  encoding: null,
  fd: null,
  mode: 0o666,
  autoClose: true
}
```

可写流创建时的默认选项：
```js
{
  flags: 'w',
  defaultEncoding: 'utf-8',
  fd: null,
  mode: 0o666
}
```

flags:
- 'r' - 以只读方式打开文件，若文件不存在则报错。
- 'r+' - 以读写方式打开文件，若文件不存在则报错。
- 'rs+' 在同步模式下，以读写方式打开文件
- 'w' - 以写方式打开文件，若文件不存在则创建
- 'wx' - 以写方式打开文件，若文件不存在则抛出异常.
- 'w+' - 以读写方式打开文件，若文件不存在则创建，相反则清空文件.
- 'wx+' - 以读写方式打开文件，若文件不存在则抛出异常.
- 'a' - 以追加方式打开文件，若文件不存则创建文件
- 'ax' - 以追加方式打开文件，若文件不存则抛出异常.
- 'a+' - 以追加和读方式打开文件，若文件不存则创建文件
- 'ax+' - 以追加和读方式打开文件，若文件不存则失败

# Path


# Command-Line Utility


# Zlib


# Pipes and ReadLine

