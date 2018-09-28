var fs = require('fs')
//创建 eventEmitter 对象
var events = require('events')
var eventEmitter = new events.EventEmitter()

/** 组赛代码执行 **/
var data = fs.readFileSync('./file/file.txt')
console.log(data)
console.log(data.toString())


/** 非组赛代码执行 **/

fs.readFile('./file/file.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString() +'非组赛');
});


// 创建事件处理程序
var connectHandler = function connected(){
    console.log('连接成功')
    eventEmitter.emit('data_received')
}



// 绑定 connection 事件处理程序
eventEmitter.on('connection', connectHandler);

// 使用匿名函数绑定 data_received 事件
eventEmitter.on('data_received', function(){
   console.log('数据接收成功。');
});

// 触发 connection 事件
eventEmitter.emit('connection');