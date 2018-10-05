App({
  data: {
  },
  globalData:{
    users: null,
    user_Info:null,
  },
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    wx.request({
      //上线接口地址要是https测试可以使用http接口方式
      url: 'http://127.0.0.1:8000/huster/get_info/',
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data.data);
        this.globalData.users = res.data.data;
      },
      fail: function (res) {
        console.log(res);
      }
    });
    wx.login({
      success: function (res) {
        if (res.code) {
          //TODO
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    });
    wx.checkSession({
      success: function () {
        //session 未过期，并且在本生命周期一直有效
      },
      fail: function () {
        //登录态过期
        wx.login() //重新登录
      }
    })
    wx.getSetting({
      success: (res) => {

        res.authSetting = {
          "scope.userInfo": true,
          "scope.userLocation": true
        }

      }
    })
    
  },
  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {

  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {

  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {

  },
})
