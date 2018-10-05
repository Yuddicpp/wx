//index.js
var app = getApp()
Page({
  change: function (e) {
    wx.navigateTo({
      url: '../users/users',
    });
  },
  toDetail: function (e) {
    wx.navigateTo({
      url: '../detail/detail?index=' + e.currentTarget.dataset.index,
    });
  },
  onGotUserInfo: function (e) {
    app.globalData.user_Info = e.detail.userInfo;
  },
  data: {
    users: []
  },

  onLoad: function (options) {
    // Do some initialize when page load.
    wx.getSetting({
      success(res) {
        if (res.authSetting["scope.userInfo"]) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {
              app.globalData.user_Info = res.userInfo;
            }
          });
        }
      }
    });
  },
  onReady: function () {
    // Do something when page ready.
  },
  onShow: function () {
    // Do something when page show.
    wx.request({
      //上线接口地址要是https测试可以使用http接口方式
      url: 'http://127.0.0.1:8000/huster/get_info/',
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        app.globalData.users = res.data.data;
      },
      fail: function (res) {
        console.log(res);
      }
    });
    this.setData({
      users: app.globalData.users
    });
  },
  onHide: function () {
    // Do something when page hide.
  },
  onUnload: function () {
    // Do something when page close.
  },
  onPullDownRefresh: function () {
    // Do something when pull down.
  },
  onReachBottom: function () {
    // Do something when page reach bottom.
  },
  onShareAppMessage: function () {
    // return custom share data when user share.
  },
  onPageScroll: function () {
    // Do something when page scroll
  },
  onTabItemTap(item) {
  },
})
