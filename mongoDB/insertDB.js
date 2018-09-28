

var startTime = (new Date()).getTime()
var db = connect('log')  // 链接log数据库



// 开始循环插入

for(let i = 0; i<1000;i++){
    db.test.insert({"num":i})
}

var runTime = (new Date()).getTime() - startTime

print('insert is Over' + runTime)

/**
 * 耗时356ms
 * **/