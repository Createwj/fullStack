const router = require('koa-router')()
const Person = require('../models/person')
const Redis = require('koa-redis')
const Store = new Redis().client
router.prefix('/users')

router.get('/getfix',async (ctx)=>{
  const st = await Store.hset('fix','name',Math.random())
  ctx.body = {
    code:0
  }
})

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
})

router.get('/addPerson', async function(ctx,next){
  const person = new Person({
    name:ctx.query.name,
    age:ctx.query.age
  })
  let code
  try {
    await person.save()
    code = 0
  }catch (e) {
    code =-1
  }
  ctx.body = {
    code:code
  }
})
//
router.get('/getPeoson',async function(ctx){
  console.log(ctx.query.name)
  const result = await Person.findOne({name:ctx.query.name})
  const results = await Person.find({name:ctx.query.name})
  ctx.body={
    code:0,
    result,
    results
  }
})

router.get('/updataPerson',async (ctx)=>{
  const result = await Person.where({
    name:ctx.query.name
  }).update({
    age:ctx.query.age
  })
  ctx.body = {
    message:'success'
  }
})
// https://mongoosejs.com/docs/api.html#Model
router.get('/removePerson',async (ctx)=>{
  const result = await Person.where({
    name:ctx.query.name
  }).remove()
  ctx.body = {
    message:'success'
  }
})
module.exports =  router
