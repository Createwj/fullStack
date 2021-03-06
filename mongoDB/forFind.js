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
var db=connect('company');
var workmateArray=[workmate1,workmate2,workmate3,workmate4,workmate5,workmate6,workmate7,workmate8,workmate9,workmate10];
db.workmate.insert(workmateArray);

print('[SUCCESS]：The data was inserted successfully');

/**
 *  Mongo
 *
 *  cd mongoDB
 *
 *  mongo forfind.js
 *
 *  sudo mongo
 *
 *  show dbs
 *
 *  use company
 *
 *  db.workmate.find()
 *
 *  db.workmate.update({name:"xincheng"},{age:25})  // 修改
 *
 *  db.workmate.update({name:"xincheng"},{"$set":{insterst:"draw"}})  // 修改指定属性
 *
 *  db.workmate.update({name:"xincheng"},{"$set":{insterst:[]}},{multi:true})  // 批量增加属性
 *
 *  db.workmate.update({name:"xiaowang"},{"$set":{age:25}},{upsert:true})  // 不存在的话 新增这个属性
 *
 *  db.workmate.update({name:"xincheng"},{"$upsh":{insterst:"drap"}})  // 向数组里面 追加字段
 *
 *  db.workmate.update({name:"xincheng"},{"$addToSet":{insterst:"draw"}})  // 查案是否存在 不存在自动加进去 存在的话修改
 *
 *  db.workmate.update({name:"xincheng"},{"$addToSet":{insterst:{"$each":[1,3,4]}}})  // $each批量增加
 *
 *  db.workmate.update({name:"xincheng"},{"$pop":{insterst:1}})  // 删除  1 数组末尾删除  -1 数组开始删除
 *
 *  db.workmate.update({name:"xincheng"},{$set:{insterst.2:"code"}})  // 修改指定的位置的数据
 *
 *
 *
 *
 *  // runCommand
 *
 *
 *  // findAndModify
 *
 *
 *
 *
 * **/