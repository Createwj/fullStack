const router = require('koa-router')()
router.prefix('/users')
  router.get('/', async function (ctx, next) {
     // 从requset中获取
    let url = ctx.url // 请求的url
    let request = ctx.request
    let req_query = request.query
    let req_querystring = request.querystring
    // 从上下文中获取
    let ctx_query = ctx.query
    let ctx_querystring = ctx.querystring
    ctx.body = {
        url,
        req_query,
        req_querystring,
        ctx_query,
        ctx_querystring
    }
    // ctx.state = {
    //   title: 'koa2 title'
    // };
    //
    // await ctx.render('welcome', {title: ctx.state});
  })
module.exports =  router
