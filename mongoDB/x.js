/**
 * 构造百万数量级数据库   http://jspang.com/post/mongodb.html#toc-3f0
 *
 *
 *
 *
 * **/
// 生成随机数
function GetRandomNum(min,max){
    let range = max-min;   //得到随机数区间
    let rand = Math.random(); //得到随机值
    return (min + Math.round(rand *range)); //最小值+随机数取整
}
// console.log(GetRandomNum(10000,99999));


//生成随机用户名
function GetRadomUserName(min,max){
    let tempStringArray= "123456789qwertyuiopasdfghjklzxcvbnm".split("");//构造生成时的字母库数组
    let outPuttext = ""; //最后输出的变量
    //进行循环，随机生产用户名的长度，这里需要生成随机数方法的配合
    for(let i=1 ;i<GetRandomNum(min,max);i++){
        //随机抽取字母，拼装成需要的用户名
        outPuttext=outPuttext+tempStringArray[GetRandomNum(0,tempStringArray.length)]
    }
    return outPuttext;
}
// console.log(GetRadomUserName(7,16))

var db = connect('company');
db.randomInfo.drop();
var  tempInfo = [];
for (let i=0;i<2000000;i++){
    tempInfo.push({
        username:GetRadomUserName(7,16),
        regeditTime:new Date(),
        randNum0:GetRandomNum(100000,999999),
        randNum1:GetRandomNum(100000,999999),
        randNum2:GetRandomNum(100000,999999),
        randNum3:GetRandomNum(100000,999999),
        randNum4:GetRandomNum(100000,999999),
        randNum5:GetRandomNum(100000,999999),
        randNum6:GetRandomNum(100000,999999),
        randNum7:GetRandomNum(100000,999999),
        randNum8:GetRandomNum(100000,999999),
        randNum9:GetRandomNum(100000,999999),
    })
}
db.randomInfo.insert(tempInfo);


/**
 *
 * 建立索引
 * db.randomInfo.ensureIndex({username:1})
 * db.collection.createIndex({username:1})
 *
 * 查看建立的索引
 * db.randomInfo.getIndexes()
 *
 * 索引这东西是要消耗硬盘和内存资源的，所以还是要根据程序需要进行建立了
 * MongoDB也给我们进行了限制，只允许我们建立64个索引值。
 *
 *
 *
 *
 * 复合索引
 *
 * 使用索引的时机
 * 1. 数据不超过万条的时候 不需要使用索引  性能提升不是很明显 增加了内存和硬盘的消耗
 * 2. 数字索引比字符串索引快很多
 * 3. 把你经常查询的数据做成一个内嵌数据（对象型的数据），然后集体进行索引。
 *
 * -> 4. 查询数据超过表数据量30%时，不要使用索引字段查询。实际证明会比不使用索引更慢，因为它大量检索了索引表和我们原表。
 *
 *
 *
 *  指定索引查询
 *  var rs = db.randomInfo.find({username:'7xwb8y3',randNum0:565509}).hint({randNum0:1});
 *
 *
 *  删除索引
 *
 *  db.randomInfo.dropIndex('username_1')
 *
 *
 *
 *
 *  全文索引
 *  类似于一篇文章内部的搜索
 *  建立索引
 *  db.info.ensureIndex({contextInfo:'text'})
 *
 *  查找两个词语
 *  db.info.find({$text:{$search:"\"love PlayGame\" drink"}})
 *
 *
 *
 *
 * **/

