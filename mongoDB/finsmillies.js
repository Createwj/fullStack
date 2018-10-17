
// var startTime = new Date().getTime()  //得到程序运行的开始时间
//
// var  db = connect('company')          //链接数据库
//
// var   rs=db.randomInfo.find({username:"tfruhjy8k"})  //根据用户名查找用户
//
// rs.forEach(rs=>{printjson(rs)})                     //循环输出
//
// var  runTime = new Date().getTime()-startTime;      //得到程序运行时间
//
// print('[SUCCESS]This run time is:'+runTime+'ms')




var startTime=new Date().getTime();
var db = connect('company');
var  rs= db.randomInfo.find({username:'7xwb8y3',randNum0:565509});
rs.forEach(rs=>{printjson(rs)});
var runTime = new Date().getTime()-startTime;
print('[Demo]this run time is '+runTime+'ms');