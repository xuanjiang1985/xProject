// pages/article/article.js
Page({
  data: {
    motto: 'Hello World',
    msg: '',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  back: function () {
    console.log(1)
  }
});