// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    suc: '',
    fai: ''
  },

  fail: function () {
    this.setData({
      fai: '您还未成为商家，无法上传商品。请点击“注册”按钮前往注册；或点击“确认”返回原界面。'
    })
  },
  
  back:function(){
    wx.switchTab({
      url: '/pages/index/index',
    })
  },

  register:function(){
    wx.switchTab({
      url: '/pages/register/register',
    })
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