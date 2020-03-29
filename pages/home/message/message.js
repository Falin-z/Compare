// pages/message/message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: '',
    List: [
      {
        'img': '/images/icon.png',
        color: '黑色',
        size: 'M',
        price: '699.00',
        new_price: '499.00',
      },
      {
        'img': '/images/icon.png',
        color: '黑色',
        size: 'M',
        price: '599.00',
        new_price: '399.00',
      },
    ]
  },
  

  toCollect: function () {
    wx.redirectTo({
      url: '/pages/home/collect/collect',
    })
  },
  toHistory: function () {
    wx.redirectTo({
      url: '/pages/home/history/history',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    wx.setNavigationBarTitle({
      title: '降价提醒',
    })
    that.setData({
      num:that.data.List.length,
    })
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