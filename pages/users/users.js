var app = getApp()
var user = {
  college: '',
  sex: "",
  textarea: '',
  starting_point: '韵苑',
  end: "紫菘",
  date: '',
  time: '',
  avatarUrl: "",
  nickName: "",
}
function clone(obj) {
  var copy = {};
  for (var attr in obj) {
    copy[attr] = typeof (obj[attr]) === 'object' ? clone(obj[attr]) : obj[attr];
  }
  return copy;
}
Page({
  reback: function () {
    wx.navigateBack({
      delta: 1
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    multiArray: [['韵苑', '紫菘', '武汉火车站', '武昌火车站', '汉口火车站', '东九', '西十二'], ['韵苑', '紫菘', '武汉火车站', '武昌火车站', '汉口火车站', '东九', '西十二']],
    objectMultiArray: [
      [
        {
          id: 0,
          name: '韵苑'
        },
        {
          id: 1,
          name: '紫菘'
        }
      ], [
        {
          id: 2,
          name: '武汉火车站'
        },
        {
          id: 3,
          name: '武昌火车站'
        },
        {
          id: 4,
          name: '汉口火车站'
        },
        {
          id: 5,
          name: '东九'
        },
        {
          id: 6,
          name: '西十二'
        }
      ]
    ],
    multiIndex: [0, 1],
  },
  bindMultiPickerChange: function (e) {
    this.setData({
      multiIndex: e.detail.value
    });
    user.starting_point = this.multiArray[0][e.detail.value[0]];
    user.end = this.multiArray[0][e.detail.value[1]];
  },
  bindDateChange: function (e) {
    console.log(e.detail.value)
    this.setData({
      date: e.detail.value
    });
    user.date = e.detail.value;
  },
  bindTimeChange: function (e) {
    console.log(e.detail.value)
    this.setData({
      time: e.detail.value
    });
    user.time = e.detail.value;
  },
  formSubmit: function (e) {
    user.college = e.detail.value.college;
    user.sex = e.detail.value.sex;
    user.textarea = e.detail.value.textarea;
    for (var i in user) {
      if (user[i] == '') {
        wx.showToast({
          title: '信息未填完',
          icon: 'loading',
          duration: 300,
          mask: true
        });
        break;
      }
      if (i == 'time') {
        wx.showToast({
          title: '成功',
          icon: 'succes',
          duration: 1000,
          mask: true
        })
        if (user.sex == '男') {
          user.sex = '/photos/性别男.png';
        } else {
          user.sex = '/photos/性别女.png';
        }
        user.avatarUrl = app.globalData.user_Info.avatarUrl;
        user.nickName = app.globalData.user_Info.nickName;
        var c = clone(user);
        app.globalData.users.push(c);
        wx.request({
          url: 'http://127.0.0.1:8000/huster/store_info/',
          method: 'POST',
          data: c,
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          success: function (res) {
            console.log(res.data);
          }
        });
        wx.navigateBack({
          delta: 1
        })
      }
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

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
