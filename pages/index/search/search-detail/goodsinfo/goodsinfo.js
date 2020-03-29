// pages/index/search/search-detail/goodsinfo/goodsinfo.js
import url from '../../../../../app.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [],
    goodsInfo: {
      "id": "27545", "shoesName": "李宁（LI-NING）跑步鞋运动鞋女夏季透气超轻云系小码运动休闲跑鞋现 秋款 微晶灰/荧光柔橙 轻质跑鞋-荧光桃红/荧光柔橙/白 35码(215mm)", "price": "218", "details": null, "url": "https://item.jd.com/58218463706.html", "picUrl": "http://shihuoproxy.hupucdn.com/aHR0cDovL20uMzYwYnV5aW1nLmNvbS9tb2JpbGVjbXMvczcyMHg3MjBfamZzL3QxLzQ0NzE1LzIzLzEyNDE3LzI4MDgzNi81ZDk1YTlkZEVjNWE4YWIzYy9mYjdiYjNkZjI2MzlkMDJmLmpwZyFxNzAuanBn", "shoesKind": null, "storeName": "京东", "district": null, "shopName": "遥志运动专营店", "thumb": null, "imgUrl": null, "coupon": false, "salesInfo": null
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let { id, table } = options
    let that = this
    wx.request({
      url: `${url}/online/shoes/details`,
      method: "POST",
      header: {
        'content-type': "application/x-www-form-urlencoded"
      },
      data: {
        id,
        table
        // sp: 1
      },
      success(res) {
        console.log(res.data.data)
        that.setData({
          goodsInfo: res.data.data
        })
        if (res.data.data.thumb != null) {
          res.data.data.thumb.trim()
          let imgStr = res.data.data.thumb.substring(1, res.data.data.thumb.length - 1)
          let imgStrArray = imgStr.split(",")
          let imgUrlsArrsy = imgStrArray.map((value) => value.substring(1, value.length - 1))
          console.log(imgUrlsArrsy)
          that.setData({
            imgUrls: imgUrlsArrsy
          })
        } else {
          that.setData({
            imgUrls: [res.data.data.picUrl]
          })
        }

      }
    })
  },
  link(e) {
    let webUrl = this.data.goodsInfo.url
    // console.log(webUrl)
    wx.navigateTo({
      url: `../../../../webview/webview?url=${webUrl}`,
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