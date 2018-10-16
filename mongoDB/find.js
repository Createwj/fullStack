var workmate1={
    name:'JSPang',
    age:33,
    sex:1,
    job:'前端',
    skill:{
        skillOne:'HTML+CSS',
        skillTwo:'JavaScript',
        skillThree:'PHP'
    },
    regeditTime:new Date(),
    interest:[]
}
var workmate2={
    name:'ShengLei',
    age:31,
    sex:1,
    job:'JAVA后端',
    skill:{
        skillOne:'HTML+CSS',
        skillTwo:'J2EE',
        skillThree:'PPT'
    },
    regeditTime:new Date(),
    interest:[]
}
var workmate3={
    name:'MinJie',
    age:18,
    sex:0,
    job:'UI',
    skill:{
        skillOne:'PhotoShop',
        skillTwo:'UI',
        skillThree:'PPT'
    },
    regeditTime:new Date(),
    interest:[]
}
var workmate4={
    name:'XiaoWang',
    age:25,
    sex:1,
    job:'UI',
    skill:{
        skillOne:'PhotoShop',
        skillTwo:'UI',
        skillThree:'PPT'
    },
    regeditTime:new Date(),
    interest:[]
}
var workmate5={
    name:'LiangPeng',
    age:28,
    sex:1,
    job:'前端',
    skill:{
        skillOne:'HTML+CSS',
        skillTwo:'JavaScript',
    },
    regeditTime:new Date(),
    interest:[]
}
var workmate6={
    name:'HouFei',
    age:25,
    sex:0,
    job:'前端',
    skill:{
        skillOne:'HTML+CSS',
        skillTwo:'JavaScript',
    },
    regeditTime:new Date(),
    interest:[]
}
var workmate7={
    name:'LiuYan',
    age:35,
    sex:0,
    job:'美工',
    skill:{
        skillOne:'PhotoShop',
        skillTwo:'CAD',
    },
    regeditTime:new Date(),
    interest:[]
}
var workmate8={
    name:'DingLu',
    age:20,
    sex:0,
    job:'美工',
    skill:{
        skillOne:'PhotoShop',
        skillTwo:'CAD',
    },
    regeditTime:new Date(),
    interest:[]
}
var workmate9={
    name:'JiaPeng',
    age:29,
    sex:1,
    job:'前端',
    skill:{
        skillOne:'HTML+CSS',
        skillTwo:'JavaScript',
        skillThree:'PHP'
    },
    regeditTime:new Date(),
    interest:[]
}
var workmate10={
    name:'LiJia',
    age:26,
    sex:0,
    job:'前端',
    skill:{
        skillOne:'HTML+CSS',
        skillTwo:'JavaScript',
        skillThree:'PHP'
    },
    regeditTime:new Date(),
    interest:[]
}
var db=connect('companys');
var workmateArray=[workmate1,workmate2,workmate3,workmate4,workmate5,workmate6,workmate7,workmate8,workmate9,workmate10];
db.coding.insert(workmateArray);
print('[SUCCESS]：The data was inserted successfully');

/**
 *
 *  简单查找
 *
 *  db.coding.find()
 *
 *  字段筛选
 *
 *  db.coding.find({"skill.skillOne":"HTML+CSS"})
 *
 *  db.coding.find({"skill.skillOne":"HTML+CSS"},{name:true,"skill.skillOne":true,_id:false})
 *
 *
 *
 *  -- 查询 --  http://jspang.com/post/mongodb.html#toc-6e5
 *
 *  不等修饰符
 *  小于$lt   小于等于$lte   大于$gt   大于等于$gte   不等于$ne
 *
 *
 *  日期查找 查找注册日期大于2018-01-01的用户显示  姓名 年龄 技能1 隐藏id
 *  $gt
 *  db.coding.find({regeditTime:{$gt:new Date('01/01/2018')}},{name:true,age:true,"skill.skillOne":true,_id:false})
 *
 *
 *  查找 年龄在25-33之间的数据
 *  $in
 *  db.coding.find({age:{$in:[25,33]}},{name:true,"skill.skillOne":true,age:true,_id:false})
 *
 *
 *  或者关系修饰符
 *  $or
 *  db.coding.find({$or:[{age:{$gt:30}},{"skill.skillThree":"PHP"}]},{name:1,"skill.skillThree":1,age:1,_id:0})
 *
 *
 *  并且关系修饰符
 *  $and
 *  db.coding.find({$and:[{age:{$gt:30}},{"skill.skillThree":"PHP"}]},{name:1,"skill.skillThree":1,age:1,_id:0})
 *
 *
 *  $not 修饰符
 *  db.coding.find({age:{$not:{$lte:30,$gte:20}}},{name:1,"skill.skillOne":1,age:1,_id:0})
 *
 *
 *
 *
 *  基本数组查询
 *
 *  精确查找
 *  db.coding.find({interest:["画画","聚会","看电影"]},{name:1,interest:1,_id:0})
 *
 *
 *  $all 数组多项查找 满足看电影 看书 就查找出来了
 *  db.coding.find({interest:{$all:{"看电影","看书"}},{name:1,interest:1,_id:0}})
 *
 *
 *  $in 数组的或者查询 满足其中一项就查找出来了
 *  db.coding.find({interest:{$in:{"看电影","看书"}},{name:1,age:1,_id:0}})
 *
 *
 *  $size  数组个数查询  兴趣数量达到5个的 会被查找出来
 *  db.coding.find({interest:{$size:5}},{name:1,interest:1,age:1,_id:0})
 *
 *
 *  $slice 显示选项
 *  db.coding.find({},{name:1,interest:{$slice:2},age:1,_id:0})
 *
 *
 *
 *
 *
 *  查询 find的参数使用方法
 *
 *  find(query,fields,limit,skip,sort)参数
 *
 *  query 查找条件
 *  fields 显示参数的控制
 *  limit 返回的数量 后面跟数字 控制每次查询的结果数量
 *  skip 跳过多少个显示  和limit结合可以实现分页
 *  sort 排序大小 从小到大1 从大到小-1
 *
 * db.coding.find({},{name:true,age:true,_id:false}).limit(0).skip(2).sort({age:1});
 *
 *
 *  $where 修饰符  强大的修饰符 可以使用JavaScript 语法查询  效率变低 安全性能比较差
 *  db.coding.find({$where:"this.age>30"},{name:1,age:1,_id:0})
 *
 *
 *  hasNext 循环结果
 *  ```
 *     var db = connect('companys')  //链接 对应的数据库
 *     var result = db.coding.find()  //声明变量 将查询结果赋值result
 *     while(result.hasNext()){      //利用hasNext()游标循环输出结果
 *      printjson(result.next())     // 使用json格式打印输出
 *     }
 *  ```
 *
 *
 * **/