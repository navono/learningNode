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


# File System



# Path


# Command-Line Utility


# Zlib


# Pipes and ReadLine

