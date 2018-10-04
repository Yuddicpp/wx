//index.js
var app = getApp()
Page({
  change: function (e) {
    wx.navigateTo({
      url: '../users/users',
    });
  },
  toDetail:function(e){
    wx.navigateTo({
      url: '../detail/detail?index='+e.currentTarget.dataset.index,
    });
  },
  onGetUserInfo: function (e) {
    app.globalData.user_Info=e.detail.userInfo
  },

  data: {
    users: []
  },

  onLoad: function (options) {
    // Do some initialize when page load.
  },
  onReady: function () {
    // Do something when page ready.
  },
  onShow: function () {
    // Do something when page show.

    this.setData({
      users: app.globalData.users
    })
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