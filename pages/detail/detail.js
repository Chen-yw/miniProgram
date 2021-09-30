// pages/detail/detail.js
import {getDetail, Goods, Shop, GoodsParam} from "../../service/netDetail"
Page({

  /*** 页面的初始数据 ***/
  data: {
    titles: ["商品", "参数", "评论", "推荐"],
    swiperImg: [],
    goodsBaseInfo: {},
    shop: {},
  },

  /*** 生命周期函数--监听页面加载 ***/
  onLoad: function (options) {
    // console.log(options);
    const iid = options.iid;
    this.getDetail(iid);
  },

  getDetail(iid) {
    getDetail(iid).then(res => {
      // 1，取出全部数据
      const data = res.data.result;
      console.log(res);
      const topImages = data.itemInfo.topImages
      this.setData({
        swiperImg: topImages
      })

      // 商品基础信息
      const goods = new Goods(data.itemInfo, data.columns, data.shopInfo);
      this.setData({
        goodsBaseInfo: goods
      })
      console.log(this.data.goodsBaseInfo);

      // 商家信息
      const shops = new Shop(data.shopInfo);
      this.setData({
        shop: shops
      })
      console.log(this.data.shop);
    }).catch(err => {})
  },

  /*** 生命周期函数--监听页面初次渲染完成 ***/
  onReady: function () {
    
  },

  /*** 生命周期函数--监听页面显示 ***/
  onShow: function () {
    
  },

  /*** 生命周期函数--监听页面隐藏 ***/
  onHide: function () {
    
  },

  /*** 生命周期函数--监听页面卸载 ***/
  onUnload: function () {
    
  },

  /*** 页面相关事件处理函数--监听用户下拉动作 ***/
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /*** 用户点击右上角分享 ***/
  onShareAppMessage: function () {
    
  }
})



// Page({
//   /**
//    * 页面的初始数据
//    */
//   data: {

//   },

//   /**
//    * 生命周期函数--监听页面加载
//    */
//   onLoad: function (options) {
//     console.log(options);
//   },

//   /**
//    * 生命周期函数--监听页面初次渲染完成
//    */
//   onReady: function () {

//   },

//   /**
//    * 生命周期函数--监听页面显示
//    */
//   onShow: function () {

//   },

//   /**
//    * 生命周期函数--监听页面隐藏
//    */
//   onHide: function () {

//   },

//   /**
//    * 生命周期函数--监听页面卸载
//    */
//   onUnload: function () {
//     // 1，获取首页页面对象
//     // getCurrentPages() 当前栈中的所有页面
//     const pages = getCurrentPages();
//     const home = pages[pages.length - 2];
//     console.log(home);
//     // 2,调用页面对象的方法
//     home.setData({
//       title: 'heheh'
//     })
//   },

//   /**
//    * 页面相关事件处理函数--监听用户下拉动作
//    */
//   onPullDownRefresh: function () {

//   },

//   /**
//    * 页面上拉触底事件的处理函数
//    */
//   onReachBottom: function () {

//   },

//   /**
//    * 用户点击右上角分享
//    */
//   onShareAppMessage: function () {

//   }
// })


