### 初始化nuxt
```
npm install vue-cli

vue init nuxt/starter

npm install

npm run dev
```

### 基本目录结构简介

Next 自动生产了项目的目录

```
 .nuxt    自动生成临时的由于编辑的文件
 assets   用于组织未编译的静态资源 less sass javscript
 components  用于自己编写的组件 比如滚动组件 分页组件   公共组件文件夹
 layouts    布局的组件 不可更改
 middleware  用于存放中间件
 pages     用于存放写的野蛮主要的工作区域
 plugins   用于存放JavaScript插件的地方
 static   存放静态资源
 store    状态管理
 .editorconfig   开发工具的配置
 .eslintrc.js   ESlint配置工具
 .gitignore   配置git不上传的文件
 nuxt.config.json  用于组织Nuxt.js应用的个性化配置 已覆盖默认配置
 package-lock.json  npm自动生成，用于帮助package的统一性设置的，yarn也有
 package.json   npm 包管理配置工具
 
```

#### 配置启动的端口号

package.json中设置config选项
```
"config":{  
    "nuxt":{
      "host":"127.0.0.1",
      "port":"1818"
    }
  },
```

#### 使用公共css

在nuxt.config.js 中配置webpack的一些数据 能够覆盖webpack的配置参数
```
css:['~assets/css/normailze.css'],  
```

### Nuxt的路由配置和参数传递(重要)

直接追加载在后面的表格中间


http://jspang.com/post/Nuxt.js.html#toc-1f6



### 页面跳转的动画

新建main.css在assets目录下

```
.page-enter-active, .page-leave-active {
    transition: opacity 2s;
}
.page-enter, .page-leave-active {
    opacity: 0;
}
```

在nuxt.config.js中配置css  启动服务器 页面之间跳转生效

** 参数的传递 **

```
// 组件传递参数的形式
<li><nuxt-link :to="{name:'news',params:{newsId:34}}">new-2</nuxt-link></li>

// 子组件传递参数的形式
 <li><nuxt-link :to="{name:'news-id',params:{id:34}}">new-2</nuxt-link></li>
```


##### 单独设置组件的动画

在main.css中添加
```
test-enter-active, .test-leave-active {
    transition: all 2s;
    font-size:12px;
}
.test-enter, .test-leave-active {
    opacity: 0;
    font-size:40px;
}
```
然后在about组件中设置
export default{
 transition: 'test' 
}


### 404页面错误和mate的设置

在layout 目录新建error.vue 
```
 props:['error'],
```
接受错误数据 根据错误的数据来 显示404  500 样式


mate的设置

在head的钩子里面进行设置 对应的title和mate
```
head(){
      return{
        title:this.title,
        meta:[
          {hid:'description',name:'news',content:'This is news page'}
        ]
      }
    }
```

### asyncDaata异步获取数据

建模
http://jspang.com/post/vue-koa.html#toc-d54
