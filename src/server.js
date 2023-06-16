let path = require('path');
let fs = require("fs");
const Koa = require('koa')
const https = require('https')
const http = require('http')
const parser = require('koa-bodyparser')
const { Recruit } = require('./pipe')

const app = new Koa()

app.use(parser())
app.use(async (ctx,next)=>{
    ctx.append('Access-Control-Allow-Origin','*')
    ctx.append('Access-Control-Allow-Headers','Content-Type')
    ctx.body = ctx.request.body || 'error'
    if (ctx.request.body && Object.keys(ctx.request.body).length !==0) doSome(ctx.request.body)
})

let options = {
    key : fs.readFileSync(path.join(__dirname,"/cert/key.pem")    , 'utf8'),
    cert: fs.readFileSync(path.join(__dirname,"/cert/cert.pem"), 'utf8')
}

https.createServer(options, app.callback()).listen(5100,'0.0.0.0');
// app.listen(3000 ,'0.0.0.0');

const doSome = (data)=>{
    // console.log(data);
    // return
    // console.log(data.url.includes('/v1/poi/sputag/products'),data.url.includes('/v1/poi/product/smooth/render'));
    let shopName = '这个是店铺名称，导出后替换就行'
    if (data.url.includes('/v1/poi/sputag/products')
        || data.url.includes('/v1/poi/product/smooth/render')
        || data.url.includes('/v1/search/inshop/products')){
        let product_spu_list = JSON.parse(data.data).data['product_spu_list']
        for (let k in product_spu_list) {
            let item = {}
            let spu = product_spu_list[k]
            let skus = spu['skus']
            item.shop = shopName
            item.sid = spu.id
            item.name = spu.name
            item.month_saled = spu['month_saled_content']
            item.origin_price = skus[0]['origin_price']
            item.price = skus[0]['price']
            item.picture = skus[0].picture
            console.log(item);
            Recruit.create(item)
        }
        // console.log(data);
    }



}



