var db = connect('log')

var startTime = (new Date()).getTime()

let arr = []

for (let i = 0;i<1000;i++){
    arr.push({"num":i})
}

db.test.insert(arr)

var runTime = (new Date()).getTime() - startTime

print('insert is OVER' + runTime)

/**
 * 耗时12ms
 * **/