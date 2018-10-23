const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()

const views = require('koa-views')
const co = require('co')
const convert = require('koa-convert')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const debug = require('debug')('koa2:server')
const path = require('path')
const mongoose = require('mongoose')
const dbConfig = require('./models/config')
const config = require('./config')
const routes = require('./routes')
const session = require('koa-generic-session')
const Redis = require('koa-redis')

const pv = require('./controller/pv')
const m1 = require('./controller/m1')
const m2 = require('./controller/m2')
const m3 = require('./controller/m3')

const index = require('./routes/index')
const users = require('./routes/users')
const port = process.env.PORT || config.port
// require('./routes/index')
// error handler
onerror(app)

app.keys=['keys','keyskeys']
app.use(session({
  key:'mt',
  prefix:'mtpr',
  store:new Redis()
}))

// middlewares

app.use(bodyparser())
  .use(json())
  .use(pv())
  .use(m1())
  .use(m2())
  .use(m3())
  .use(logger())
  .use(require('koa-static')(__dirname + '/public'))
  .use(views(path.join(__dirname, '/views'), {
    options: {settings: {views: path.join(__dirname, 'views')}},
    map: {'njk': 'nunjucks'},
    extension: 'njk'
  }))
  // .use(router.routes())
  // .use(router.allowedMethods())
  //

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - $ms`)
})
//
// router.get('/', async (ctx, next) => {
//   // ctx.body = 'Hello World'
//   ctx.state = {
//     title: 'Koa2'
//   }
//   await ctx.render('index', ctx.state)
// })

// routes(router)

app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())


mongoose.connect(dbConfig.dbs,{
  useNewUrlParser:true
})


app.on('error', function(err, ctx) {
  console.log(err)
  logger.error('server error', err, ctx)
})

module.exports = app.listen(config.port, () => {
  console.log(`Listening on http://localhost:${config.port}`)
})
