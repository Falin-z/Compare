// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myhead:'/images/head.png',
    myname:'我的昵称',
    hidden:true,
    Hidden:false,
    List:[
      {
        'img':'/images/icon.png',
        'title':'title1',
        'click':'点击我获取头像'
      },
      {
        'img': '/images/icon.png',
        'title': 'title2',
        'click': '点击我获取昵称'
      },
      {
        'img': '/images/icon.png',
        'title': 'title3',
        'click': '我是一个按钮'
      },
    ]
  },

  clickhead:function(){
    this.setData({
      hidden:false,
      Hidden:true
    })
  },
  clickBighead:function(){
    this.setData({
      hidden:true,
      Hidden:false
    })
  },
  jmp_Collect: function () {
    wx.navigateTo({
      url: '/pages/home/collect/collect',
    })
  },
  jmp_History: function () {
    wx.navigateTo({
      url: '/pages/home/history/history',
    })
  },
  jmp_Message: function () {
    wx.navigateTo({
      url: '/pages/home/message/message',
    })
  },
  getinfo:function(e){
    // console.log(e.detail.userInfo)
    let info = e.detail.userInfo;
    this.setData({
      myhead:info.avatarUrl,
      myname:info.nickName,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '我的',
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