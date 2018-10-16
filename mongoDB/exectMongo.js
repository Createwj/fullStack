db.computed.insert({"name":"jspang"})

/**
 * 1. 启动Mongo服务器  Mongod
 * 2. sudo mongo 进入数据库
 * **/

// 显示全部数据库 show dbs

// 新建/进入数据库 use (名称)

// 插入信息 db.name.insert({"name":"xincheng"})

// 查找全部  db.name.find()

// 查找第一个 db.name.findOne()

// 更新  db.name.upDate({查询的数据},{修改的数据})

//  删除 db.name.remove({条件})



// 数据库中 存在不同的表名称


// 修改指定 条数的数据 db.dataname.updata({"name":"xincheng"},{"$set":{age: 33}})

