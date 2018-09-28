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






















