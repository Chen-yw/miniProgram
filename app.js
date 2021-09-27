// 注册一个小程序
App({
  globalData: {
    token: ''
  },
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    // 1,先从缓存中取出token
    const token = wx.getStorageSync('token');

    // 2,判断token是否有值
    if (token && token.length !== 0) { // 已经有token，验证token是否过期
      // 验证token是否过期
      // this.check_token(token);

    } else { // 没有token，进行登录操作
      // this.login();
    }
  },

  // 登录操作
  login() {
    wx.login({
      timeout: 500,
      // code只有5分钟的有效期
      success: (res) => {
        // 1，获取code
        const code = res.code;
        // 2，将code发送给服务器
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          data: {
            code
          },
          success: (res) => {
            // 3，取出token
            const token = res.data.token;
            // 4，将token保存在globalData
            this.globalData.token = token;
            // 5，进行本地存储
            wx.setStorageSync('token', token)
          }
        })
      }
    })
  },

  // 验证token是否过期
  check_token() {
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method: 'POST',
      header: {
        token
      },
      success: (res) => {
        console.log(res);
        this.globalData.token = token;
      },
      fail: (err) => {
        this.login();
      }
    })
  },

  /**
   * 当小程序页面显示出来，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    
  },

  /**
   * 当小程序从前台进入后台（小程序关闭或者进入后台），会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  },

  /* 定义全局变量，在小程序中的任何页面都能共享 */
  globalData: {
    name: 'Chen-yw',
    age:18
  }
})
