var app = require('koa')();
var router = require('koa-router')();
var koaBody = require('koa-body')();

// 首页 -- 广告
router.get('/api/homead', function*(next) {
  this.body = require('./home/ad.js')
});

// 热门城市
router.get('/api/citylist', function*(next) {
  this.body = require('./city/hotcity.js')
})

// 首页 —— 推荐列表（猜你喜欢）
var homeListData = require('./home/list.js')
router.get('/api/homelist/:city/:page', function*(next) {
  // 参数
  const params = this.params
  const paramsCity = params.city
  const paramsPage = params.page

  console.log('当前城市：' + paramsCity)
  console.log('当前页数：' + paramsPage)

  this.body = homeListData
});

// 详情页获取店铺详情
var detailData = require('./detail/info.js')
router.get('/api/detail/info/:id', function*(next) {
  // const params = this.params
  // const paramsID = params.id
  // console.log('该用户的ID：' + paramsID)

  this.body = detailData
})

// 获取商品详情页的列表数据
const comment = require('./detail/comment.js')
router.get('/api/detail/comment/:id/:page', function*(next) {
  // const params = this.params
  // const paramsID = params.id
  // const paramsPage = params.page
  // console.log('详情页访问ID：' + paramsID)
  // console.log('详情页访问页数：' + paramsPage)

  this.body = comment
})

// search result  参数是否必须的呢 ？？？
const searchReasult = require('./search/list.js')
router.get('/api/search/:cityName/:keyword/:id/:page', function*(next) {
  const params = this.params;
  const cityName = params.cityName
  const keyword = params.keyword
  const id = params.id
  const page = params.page
  console.log("城市是：" + cityName)
  console.log("关键字：" + keyword)

  this.body = searchReasult
})

// 获取用户已经购买的商品数据
const orderlist = require('./orderlist/orderList.js')
router.get('/api/orderlist/:username', function*(next) {
  this.body = orderlist
})

app.use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);

/*
router.post('/api/post', koaBody, function *(next) {
    console.log(this.request.body)
    this.body = JSON.stringify(this.request.body)
});
*/