var events = require('events')
var eventsEmitter = new events.EventEmitter()


/** 监听一个事件 **/
eventsEmitter.on('some_event',function(e){
    console.log(e)
    console.log('some_event触发')
})

/** 主动触发一个事件**/
setTimeout(()=>{
    eventsEmitter.emit('some_event',1)
},2000)