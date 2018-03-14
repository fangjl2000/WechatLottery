// pages/tools/qxc/random.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    redballs: {},
    rankcount: 3,
    selectred: [],
  },
  Init: function () {
    var allred = new Array();
    for (var j = 0; j < this.data.rankcount; ++j) {
      var redlist = new Array();
      for (var i = 0; i < 10; ++i) {
        var value = i.toString();
        if (i < 10) {
          value = "0" + i.toString();
        }
        redlist.push({ num: value, check: "nocheck" });
      }
      allred.push(redlist);
    }
    this.setData({
      redballs: allred,
      selectred: [],
    })
  },
  getrandom: function () 
  {
    this.Init();
    var redballs = this.data.redballs;
    var selectred = [];
    for (var j = 0; j < this.data.rankcount; ++j) 
    {
      var ran = Math.floor(Math.random() * redballs[j].length);
      //console.log(ran);
      redballs[j][ran].check = "checked";
      selectred.push(redballs[j][ran].num);
    }
    this.setData({
      redballs: redballs,
      selectred: selectred
    })
    console.log(this.data.redballs);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: options.key + "随机幸运数"
    })
    if (options.key == "福彩3D" || options.key == "排列3") {
      this.setData({
        rankcount: 3
      })
    } else if (options.key == "七星彩") {
      this.setData({
        rankcount: 7
      })
    } else if (options.key == "排列5") {
      this.setData({
        rankcount: 5
      })
    }
    this.Init();
  },
  copy: function () {
    var select = new Array();
    select.push(this.data.selectred);
    wx.setClipboardData({
      data: select.toString(),
      success: function (res) {
        wx.showToast({
          title: '复制成功',
          icon: 'success',
          duration: 1000
        });
      }
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