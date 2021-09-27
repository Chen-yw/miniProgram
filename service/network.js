
const baseUrl = "http://152.136.185.210:7878/api/hy66";

export default function request(options) {
  // 1，原生请求方式
  /* wx.request({
    url: options.url,
    method: options.method || 'GET',
    data: options.data || {},
    success(res) {
      console.log(res);
    },
    fail(err) {
      console.log(err);
    }
  }) */

 // 2， 利用promise
  // return new Promise((resolve, reject) => {
  //   wx.request({
  //     url: options.url,
  //     method: options.method || 'GET',
  //     data: options.data || {},
  //     success(res) {
  //       // console.log(res);
  //       resolve(res);
  //     },
  //     fail(err) {
  //       // console.log(err);
  //       reject(err);
  //     }
  // })

  // }).then(res => {

  // }).catch(err => {
    
  // });

  return new Promise((resolve, reject) => {
    wx.request({
      url: baseUrl + options.url,
      method: options.method || 'GET',
      data: options.data || {},
      success: resolve,
      fail: reject,
  })

  })
}