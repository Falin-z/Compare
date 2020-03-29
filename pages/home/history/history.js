// pages/history/history.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: '',
    hidden: true,
    allcollect: false,
    concel_collect: false,
    index: [],
    List: [
      {
        'img': '/images/icon.png',
        'title': 'title1',
        'color': '黑色',
        'size': 'M',
        'price': '699.00',
        'collect': false,
        'concel_project': true,
      },
      {
        'img': '/images/icon.png',
        'title': 'title2',
        'color': '蓝色',
        'size': 'L',
        'price': '599.00',
        'collect': false,
        'concel_project': true,
      },
    ]
  },

  clickEdite: function () {
    var that = this;
    let hidden = !hidden;
    that.setData({
      hidden: false,
      collect: false,
    })
  },
  clickRight: function () {
    var that = this;
    that.setData({
      hidden: true,
    })
  },
  toCollect: function () {
    wx.redirectTo({
      url: '/pages/home/collect/collect',
    })
  },
  clickIcon: function (e) {
    var that = this;
    var index = e.currentTarget.dataset.index;
    that.data.List[index].collect = !that.data.List[index].collect;
    if (that.data.List[index].collect == true) {
      that.data.index[index] = index;
    }
    else {
      that.data.index[index] = null;
    }
    that.setData({
      index: that.data.index,
      hidden: false,
      List: that.data.List,
    })
    // console.log(that.data.index)
    var trueflag = 0;
    //将所有项目选中时，'全选'被选中
    for (var j = 0; j < that.data.List.length; j++) {
      if (that.data.List[j].collect == true) {
        trueflag++;
      }
      else trueflag = 0;
    }
    if (trueflag == that.data.List.length) {
      var allcollect = true;
      that.setData({
        allcollect: allcollect,
      })
    }
    else {
      var allcollect = false;
      that.setData({
        allcollect: allcollect,
      })
    }
  },
  clickAllicon: function () {
    var that = this;
    var allcollect = !that.data.allcollect
    that.setData({
      allcollect: allcollect,
    })
    // 点击'全选'时，将所有项目选中
    if (allcollect == 1) {
      for (var i = 0; i < that.data.List.length; i++) {
        that.data.List[i].collect = true;
        that.setData({
          List: that.data.List,
        })
      }
    }
    else {
      for (var i = 0; i < that.data.List.length; i++) {
        that.data.List[i].collect = false;
        that.setData({
          List: that.data.List,
        })
      }
    }
    // 点击'全选'时，将index数组内容设为List数组的所有项目编号
    for (var m = 0; m < that.data.List.length; m++) {
      that.data.index[m] = m;
    }
    that.setData({
      index: that.data.index,
    })
  },
  concel_collect: function () {
    var that = this;
    var concel_collect = !that.data.concel_collect;
    that.setData({
      concel_collect: concel_collect,
    })
  },
  toMessage: function () {
    wx.redirectTo({
      url: '/pages/home/message/message',
    })
  },

  delete_collect: function () {
    var that = this;
    var index1 = that.data.index;
    var num = that.data.num
    var number = 0;
    //点'取消收藏'后将选中的部分隐藏
    for (var k = 0; k < index1.length; k++) {
      if (index1[k] == k) {
        that.data.List[k].concel_project = false;
      }
      else {
        that.data.List[k].concel_project = true;
      }
    }
    for (var n = 0; n < that.data.List.length; n++) {
      if (that.data.List[n].concel_project == true) {
        number++;
      }
      else {
        number = number;
      }
    }

    that.setData({
      List: that.data.List,
      concel_collect: false,
      num: number,
    })
  },
  consider: function () {
    var that = this;
    that.setData({
      concel_collect: false
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.setNavigationBarTitle({
      title: '历史记录',
    })
    that.setData({
      num: that.data.List.length,
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