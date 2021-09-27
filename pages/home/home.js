 /* 创建page及对象 js文件写逻辑 */
import {getMultiData} from '../../service/home.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: [],
    recommend: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onLoad');
    getMultiData().then(res => {
      // console.log(res);
      const banners = res.data.data.banner.list;
      const recommend = res.data.data.recommend.list;
      this.setData({
        banners: banners,
        recommend: recommend
      })
    }).catch(err => {
      
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('onReady');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('onShow');
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('onHide');
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('onUnload');
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})


// // getApp()获取add.js中APP()产生的示例对象，保存着APP({})中的数据
// const app = getApp();
// const name = app.globalData.name; // 获取全局变量
// const age = app.globalData.age;

// // 注册一个页面
// Page({
//   data: {
//     name: "coderwhy",
//     age: 18,
//     students: [  
//       {id: 110, name: 'kobe', age: 18},
//       {id: 110, name: 'james', age: 18},
//       {id: 110, name: 'why', age: 18},
//     ],
//     counter: 0
//   },

//   handleBtnClick() {
//     console.log('按钮发生了点击事件！');
//     // this.data.counter += 1;  // 1.错误做法，不能实时改变页面中显示的数据
//     // 2.this.setData()
//     this.setData({
//       counter: this.data.counter + 1
//     })
//   },
//   handleBtnsub() {
//     this.setData({
//       counter: this.data.counter - 1
//     })
//   },

//   // 获取用户信息
//   handleGetUserInfo(event) {
//     console.log(event);
//   },

//    /*-------- 1，监听页面的生命周期 --------- */
//   // 页面初次渲染完成后回调
//   onReady() {
//     // console.log('onReady');
//   },

//   // 页面被加载出来
//   onLoad() {
//     // console.log('onLoad');
//     /****** 1，原生方式发送网络请求 *******/
//     this.get_data_origin();

//     /****** 2，使用封装的request发送网络请求 *******/
//     request({
//       url: 'http://152.136.185.210:7878/api/hy66/recommend',
//     }).then(res => {
//       console.log(res);
//     }).catch(err => {

//     })
//   },

//   // 原生方式发送网络请求
//   get_data_origin() {
//     wx.request({
//       // 需要配置后发送网络才能发送网络请求
//         url: 'http://152.136.185.210:7878/api/hy66/home/data',
//         // method: "post",
//         data: {
//           type: 'sell',
//           page: 1
//         },
//         success(res) {
//           console.log(res);
//         }
//       })
//   }, 

//   // 页面被显示出来时
//   onShow() {
//     // console.log('onShow');
//   },

//   // 页面被隐藏
//   onHide() {
//     // console.log('onHide');
//   },

//   // 跳转到别的页面
//   onUnload() {
//     // console.log('onUnload');
//   },


//   // ------------ 4，其他事件---------
//   // 监听页面滚动
//   onPageScroll(obj) {},

//   // 监听页面滚动到底部
//   onReachBottom() {},

//   handleTabClick(event) {
//     // console.log(event);
//   },

//   // 吐司
//   handleShowToast() {
//     wx.showToast({
//       title: '你好啊！',
//     })
//   }
// })

/* wxs 是不同于JavaScript的语言，基本是一致
   wxml中不能直接调用page，component中定义的函数

   WXS的运行环境和其他JavaScript 代码是隔离的, WXS中不能调用其他JavaScript 文件中定义的函数，也不能调用小程序提供的APl。
   WXS 函数不能作为组件的事件回调。
   由于运行环境的差异,在iOS 设备上小程序内的WXS 会比JavaScript 代码快2～20倍。在android 设备上二者运行效率无差异。
*/