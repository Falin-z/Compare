// pages/search/search.js
import url from '../../../app.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    _defaultId: 1
  },

  searchNo: function () {
    wx.navigateTo({
      url: '/pages/index/search/search-no/search-no',

    })
  },
  search(e) {
    let {
      keywords
    } = e.detail.value
    if (!!keywords) {
      keywords && wx.navigateTo({
        url: `/pages/index/search/search-detail/search-detail?keywords=${keywords}`,

      })
    } else {
      wx.showToast({
        title: '搜索词不能为空',
        icon: 'loading',
        duration: 1000
      })
    }

    // let data = new FormData()
    // data.add("keyword",keywords)
    // wx.request({
    //   url: `${url}/online/shoes/pagedShoes/solr`,
    //   method: "POST",
    //   header:{
    //     'content-type':"application/x-www-form-urlencoded"
    //   },
    //   data: {
    //     keyword:keywords,
    //     pageNo:2,
    //     pageSize:10
    //   },
    //   success(res){
    //     console.log(res.data)
    //   }
    // })
  },
  changeBtn(e) {
    console.log(e)
    let { id } = e.currentTarget.dataset
    console.log(id)
    this.setData({
      _defaultId: id
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