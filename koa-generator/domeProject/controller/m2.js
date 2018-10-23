function pv(ctx){
  // ctx.session.count++
  global.console.log('m2中间件')
}

module.exports=function(){
  return async function(ctx,next){
    global.console.log('m2 start')
    pv(ctx)
    await next()
     global.console.log('m2 end')
  }
}
