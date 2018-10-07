var app = getApp();
Page({
  /**
   * 生命周期函数--监听页面加载
   */
  data: {
    Data: {},
    myRelease:[],
    hidden:true,
    mark:'/photos/向右.png'
  },
  show:function(){
    this.setData({
      hidden:!this.data.hidden,
      mark: this.data.mark == '/ photos / 向右.png' ?'/ photos / 向下.png':'/ photos / 向下.png'
    })
  },
  my_message:function(e){
    wx.navigateTo({
      url: '../delete/delete?item=' + JSON.stringify(e.currentTarget.dataset.item),
    });
  },
  onLoad: function (options) {
    var that = this;
    this.setData({
      Data: app.globalData.user_Info
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () { },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this;
    wx.request({
      url: 'http://127.0.0.1:8000/huster/query_info/',
      method: 'POST',
      data: app.globalData.user_Info,
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        that.setData({
          myRelease:res.data.data
        });
      }
    });
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () { },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () { },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () { },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () { },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () { }
});
