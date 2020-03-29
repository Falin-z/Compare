// pages/search/search.js
import url from '../../../../app.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    _defaultId: 1,
    _defaultKindId: 1,
    _keywords: "",
    goodsList: [],
    _defaultPageNo: 1
  }
  ,
  searchNo: function () {
    wx.navigateTo({
      url: '/pages/index/search/search-no/search-no',

    })
  },
  changeBtn(e) {
    console.log(e)
    let { id } = e.currentTarget.dataset
    this.setData({
      _defaultId: id
    })
  },
  changeKind(e) {
    let that = this
    let { id } = e.currentTarget.dataset
    console.log(id)
    this.setData({
      _defaultKindId: id
    })
    if (id == 1) {
      wx.request({
        url: `${url}/online/shoes/pagedShoes/solr`,
        method: "POST",
        header: {
          'content-type': "application/x-www-form-urlencoded"
        },
        data: {
          keyword: this.data._keywords,
          pageNo: this.data._defaultPageNo,
          pageSize: 10,
        },
        success(res) {
          console.log(res.data.data)
          that.setData({
            goodsList: res.data.data
          })
        }
      })
    }
    if (id == 2) {
      wx.request({
        url: `${url}/online/shoes/pagedShoes/solr`,
        method: "POST",
        header: {
          'content-type': "application/x-www-form-urlencoded"
        },
        data: {
          keyword: this.data._keywords,
          pageNo: this.data._defaultPageNo,
          pageSize: 10,
          sp: 1
        },
        success(res) {
          that.setData({
            goodsList: res.data.data
          })
        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    let that = this
    wx.request({
      url: `${url}/online/shoes/pagedShoes/solr`,
      method: "POST",
      header: {
        'content-type': "application/x-www-form-urlencoded"
      },
      data: {
        keyword: options.keywords,
        pageNo: 1,
        pageSize: 10,
      },
      success(res) {
        console.log(res.data)
        that.setData({
          goodsList: res.data.data,
          _keywords: options.keywords
        })
      }
    })
  },
  goodsInfo(e) {
    // console.log(e)
    let { id } = e.currentTarget.dataset
    // console.log( goodsList[id].table)
    // console.log( goodsList[id].id)
    console.log(this.data.goodsList[id])

    wx.navigateTo({
      url: `./goodsinfo/goodsinfo?table=${this.data.goodsList[id].table}&id=${this.data.goodsList[id].id}`,
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
    let that = this
    let defaultPageNo = this.data._defaultPageNo
    defaultPageNo++;
    this.setData({
      _defaultPageNo: defaultPageNo
    })
    if (this.data._defaultKindId == 1) {
      wx.request({
        url: `${url}/online/shoes/pagedShoes/solr`,
        method: "POST",
        header: {
          'content-type': "application/x-www-form-urlencoded"
        },
        data: {
          keyword: this.data._keywords,
          pageNo: this.data._defaultPageNo,
          pageSize:  10,
        },
        success(res) {
          that.setData({
            goodsList: [...that.data.goodsList, ...res.data.data]
          })
        }
      })
    }
    if (this.data._defaultKindId == 2) {
      wx.request({
        url: `${url}/online/shoes/pagedShoes/solr`,
        method: "POST",
        header: {
          'content-type': "application/x-www-form-urlencoded"
        },
        data: {
          keyword: this.data._keywords,
          pageNo: this.data._defaultPageNo,
          pageSize:  10,
          sp: 1
        },
        success(res) {
          that.setData({
            goodsList: [...that.data.goodsList, ...res.data.data]
          })
        }
      })
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})