function pv(ctx){
  ctx.session.count++
  global.console.log('中间件')
}

module.exports=function(){
  return async function(ctx,next){
    pv(ctx)
    await next()
  }
}
