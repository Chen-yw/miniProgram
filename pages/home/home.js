 /* 创建page及对象 js文件写逻辑 */
// getApp()获取add.js中APP()产生的示例对象，保存着APP({})中的数据
const app = getApp();
const name = app.globalData.name; // 获取全局变量
const age = app.globalData.age;

// 注册一个页面
Page({
  data: {
    name: "coderwhy",
    age: 18,
    students: [  
      {id: 110, name: 'kobe', age: 18},
      {id: 110, name: 'james', age: 18},
      {id: 110, name: 'why', age: 18},
    ],
    counter: 0
  },

  handleBtnClick() {
    console.log('按钮发生了点击事件！');
    // this.data.counter += 1;  // 1.错误做法，不能实时改变页面中显示的数据
    // 2.this.setData()
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handleBtnsub() {
    this.setData({
      counter: this.data.counter - 1
    })
  },

  // 获取用户信息
  handleGetUserInfo(event) {
    console.log(event);
  },

   /*-------- 1，监听页面的生命周期 --------- */
  // 页面初次渲染完成后回调
  onReady() {
    console.log('onReady');
  },

  // 页面被加载出来
  onLoad() {
    console.log('onLoad');
    // wx.request({
    //   // 需要配置后发送网络才能发送网络请求
    //   url: 'http://123.207.32.32:8000/recommend',
    //   success(res) {
    //     console.log(res);
    //   }
    // })
  },

  // 页面被显示出来时
  onShow() {
    console.log('onShow');
  },

  // 页面被隐藏
  onHide() {
    console.log('onHide');
  },

  // 跳转到别的页面
  onUnload() {
    console.log('onUnload');
  },


  // ------------ 4，其他事件---------
  // 监听页面滚动
  onPageScroll(obj) {},

  // 监听页面滚动到底部
  onReachBottom() {}
})