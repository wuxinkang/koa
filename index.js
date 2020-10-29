const Koa = require('koa')
const config = require('./config')
const mysql = require('./mysql/index')
 
const app =  new Koa()
 
app.use(async (ctx,next) => {
    let data = await mysql.query()
    ctx.body = {
        "code": 1,
        "data": data,
        "mesg": 'ok'
    }
    // ctx.body = 
    await next()
    
})
 
app.listen(config.port)

