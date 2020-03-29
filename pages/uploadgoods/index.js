// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Img:null,
    word:'上传图片',
    Loc:'',
    // hidden:true
  },

  goToAsk: function () {
    wx.navigateTo({
      url: '/pages/uploadgoods/log/log',
    })
    // var that=this;
    // that.setData({
    //   hidden:false
    // })
  },

  // success: function () {
  //   var that=this;
  //   wx.showToast({
  //     title: '上传商品信息成功！',
  //     duration: 3000,
  //     icon: 'success'
  //   })
  //   // that.setData({
  //   //   hidden:true
  //   // })
  // },
  // fail: function () {
  //   wx.navigateTo({
  //     url: '/pages/uploadgoods/detail/detail',
  //   })
  // },

  chooseImage:function(){
  var that=this;
    wx.chooseImage({
      count: 5,  //最多选择五张照片
      sizeType: ['original','compressed'],  //可指定是原图还是压缩图
      sourceType: ['album','camera'],  //可指定图片来源是相机还是相册
      success: function(res) {   //返回指定图片的本地文件路径列表，tempFilePaths可以作为img标签的src属性显示图片
        // console.log(res.tempFilePaths)
        that.setData({ Img: res.tempFilePaths[0]})
      }
  })
},

  getLocation: function () {
    var that = this
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        // console.log("lat:" + latitude + " lon:" + longitude);
        that.getCity(latitude, longitude);
      }
    })
  },

  //获取城市信息
  getCity: function (latitude, longitude) {
    var that = this
    wx.request({
      url: "https://api.map.baidu.com/geocoder",
      data: {
        ak: "usqLzDBo27GufLLO6OKbORqG0V1BcFRA",
        output: "json",
        location: latitude + "," + longitude
      },
      success: function (res) {
        // console.log(res.data.result.formatted_address);
        that.setData({
          Loc:res.data.result.formatted_address,
        })
      },
      fail: function (res) { },
      complete: function (res) { },
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