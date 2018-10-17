/**
 * 管理员创建和设置
 *
 * 安装MongoDB的时候 我们默认是最高管理权限
 *
 * 学习mongoDB的用户管理
 *
 *
 *
 * use admin  进入数据库
 *
 * show collections 查看数据库的集合
 *
 * **/

db.createUser({
    user:"jspang",
    pwd:"123456",
    customData:{
        name:'技术胖',
        email:'web0432@126.com',
        age:18,
    },
    roles:[
        {    // 单独指定用户对数据库的读取权限
            role:"readWrite",
            db:"company"
        },
        'read'
    ]
})

db.system.users.find()

db.system.users.remove({user:"jspang"})

// 建立权限 需要用户登录
db.auth("jspang","123456")


/**
 * 重启MongoDB服务器
 * mongod --auth 启动建权
 *
 * sudo mongo -u jspang -p 123456 127.0.0.1:27017/admin
 *
 *
 *
 * **/