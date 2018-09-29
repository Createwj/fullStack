# mongoDB 数据库

关系型数据库 非关系型数据库区别
(来源)[http://jspang.com/post/mongodb.html]

window
安装mongoDB(地址)[https://blog.csdn.net/u011817217/article/details/82872729]


mac安装mongodb
brew install mongodb  安装
brew upgrade mongodb  升级


Linux安装mongodb
sudo apt-get install mongodb


## 基本语法

** 启动 mongodb **

sudo mongod

```
http://localhost:27017/
```

** show dbs **
显示所有数据库

** use admin **  进入数据库

** show collections ** 显示数据库中集合

** db ** 显示当前所在的数据库名称



 ** use db (建立数据库)：  **  use不仅可以进去一个数据库 也可以建立一个数据库

 ** db.集合.insert(): **  新建数据集合和插入文件（数据），当集合没有的时候 默认新建一个集合 并且向里面插入数据
    Demo：db.user.insert({"name":'xincheng'})

 ** db.集合.find():  ** 查询所有数据这条命令会列出集合下面的所有数据，mongodb会自动添加索引数值
    Demo: db.user.find()

 ** db.集合.findOng(): **  查询第一个数据文件  MongoDb的组合单词 都是首字母小写的驼峰命名

 ** db.集合.update({查询},{修改}) : **  修改数据文件 第一个是查询条件 第二个是需要修改成的数值 可以多家数据文件项目
   Demo: db.xincheng.update({"name":'xincheng'},{"name":"jspang","age":"21"})

 ** db.集合.remove(条件): **  删除文件数据 需要加一个条件
    Demo：bd.user.remove({"name":"jspang"})


 ** db.集合.drop():  ** 删除整个集合 慎用

 ** db.dropDatabase():  ** 删除整个数据库


```
show dbs  //显示所有数据库

use user  // 进入 新建数据库

db.user.insert({"name":"xincheng"})  // 插入

db.user.updata({"name":"xincheng"},{"name":"xin","age":"12"})  // 修改

db.user.remove({"name":"xin"})   // 删除指定

db.user.find()  // 查询所有

db.user.findOne()  // 查询第一条
```

# js中编写mongodb

批量导入mongo语句

新建goTesk.js
```
var userName = "cincheng"
var timeStamp = Date.parse(new Date())
var jsonDdatabase = {"loginUnser":userName,"longiTime":timeStamp}
var db = connect('log')
db.login.insert(jsonDdatabase)
print('db is OK')
```

# 批量插入 VS 循环插入

批量插入性能高于循环插入

updata 单条修改的时候 比较烦絮哦

解决办法

updata 修改器 $set

$unset 用于将 key 删除


修改指定字段
```
db.use.update({"name":"MinJie"},{"$set":{"name":"123"}})
```

修改嵌套的字段
```
db.workmate.update({"name":"MinJie"},{$unset:{"age":''}})
```

multi 选项
批量增加字段
db.use.updaate({},{"interset":[]},{multi:true})

upsert选项
新增找不到的情况下 进行一个增加
```
db.use.update({"name":"xiaomao"},{"$set":{"age":12},{upsert:true}})
```
** upsert也有两个值：true代表没有就添加，false代表没有不添加(默认值)。 **


$push 追加文档/内嵌文档值
db.use.updata({"name":"Bob"},{$push:{"inster":"draw"}})
db.use.updata({"name":"Bob"},{$push:{"skill.skillFour":"draw"}})


$addToSet 升级本本$ne
查找是否存在 存在的话修改  不存在的话 push上去

$each 批量追加
```
var newInterset=["Sing","Dance","Code"];
db.workmate.update({name:"xiaoWang"},{$addToSet:{interest:{$each:newInterset}}})
```

$pop 删除数值
$pop 1 -1
> 1 从数组末端删除
> -1 从数组开端删除


数组定位修改
```
db.workmate.update({name:'xiaoWang'},{$set:{"interest.2":"Code"}})
```


# 修改：状态返回与安全

** 应答式写入 **

使用update修改完数据之后 并不会有任何的回应和返回值  工作中很少用到

应答式写入就会给我们返回结果 无论做什么都会给我们返回一些状态字段


##### db.runCommand()

```
db.use.update({sex,1},{$set:{money:100}},false,true)
var result = db.runCommand({getLastError:1})
printjson(result)
```

> false: 第一句末尾的false是upsert的缩写，代表没有此数据的时候不增加
> true: true是multi的缩写 修改所有数据
> getLastError: 表示返回功能错误，参数很多  -----------
> printjson: 表示json对象的格式输出到控制台

** db.listCommands() **

查看所有的Commad命令 内容很多 -----------

demo: db.runCommand({ping:1})
查看是否和数据库联通 返回1 表示🔗OK


** findAndModify **

配置该选项 可以在修改数据之后返回修改的结果

```
var myModify={
    findAndModify:"workmate",
    query:{name:'JSPang'},
    update:{$set:{age:18}},
    new:true    //更新完成，需要查看结果，如果为false不进行查看结果
}
var ResultMessage=db.runCommand(myModify);
printjson(ResultMessage)
```

** findAndModify的性能没有update的性能好 但是在实际的工作中都是使用findAndModify **

> query: 需要查询的条件/文档
> sort: 进行排序
> remove: [boolean] 是否删除查找到的文档
> new: [boolean] 返回更新前的文档还是更新后的文档
> fields: 需要返回的字段
> upsert: 没有这个值是否增加


# 查询： find的不等修饰符

执行 mongo forFind.js


查找技能是HTML+CSS的数据
`
db.workmate.find({"skill.skillOne":"HTML+CSS"})
`
在上诉查找的基础上面 筛选出姓名和技能
db.workmate.find(
    {"skill.skillOne":'HTML+CSS'},
    {name:true,"skill.skillOne":true}
)


** 以上查询都是在做登录的操作查询 **

** 不等于修饰符 **

> 小于($lt)：    less-than
> 小于等于($lte)：   less-than-equal
> 大于($gt)：    greater-than
> 大于等于($gte)： greater-than-equal
> 不等于($ne)：  not-equal


** 查询年龄在25-30之间的数据 **
```
db.workmate.find(
    {age:{$lte:30,$gte:25}},
    {name:true,age:true,"skill.skillOne":true,_id:false}
)
```


** 如期查询 **

大于2018/01/01的时间注册的
```
var startDate = new Date('01/01/2018')
db.workmate.find(
    {regeditTime:{$gt:startDate}},
    {name:true,age:true,_id:false,regeditTime:true}
)

```


# 查询find多条件查询

查询age在25-33之间的数据
$in 修饰符

```
db.workmate.find(
    {age:{$in:[25,33]}},
    {name:1,"skill.skillOne":1,_id:0}
)
```
$nin  修饰符 和$in修饰符相反 除去。。。


$or 修饰符

或者关系 $in是并且的关系 分开记忆

```
db.workmate.find(
    {$or:[
        {age:{$gte:30}},
        {"skill.skillThree":'HTML'}
    ]},
    {name:1,age:1,_id:0,"skill.skillThree":1}
)
```


























