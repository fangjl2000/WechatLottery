// pages/tools/ssq/random.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    redballs: {},
    blueballs: {},
    selectred: [],
    selectblue: [],
    minred: 6,
    minblue: 1,
    totalred: 34,
    totalblue: 17,
  },
  Init: function () {
    var redlist = new Array();
    for (var i = 1; i < this.data.totalred; ++i) {
      var value = i.toString();
      if (i < 10) {
        value = "0" + i.toString();
      }
      redlist.push({ num: value, check: "nocheck" });
    }
    var bluelist = new Array();
    for (var i = 1; i < this.data.totalblue; ++i) {
      var value = i.toString();
      if (i < 10) {
        value = "0" + i.toString();
      }
      bluelist.push({ num: value, check: "nocheck" });
    }
    this.setData({
      redballs: redlist,
      blueballs: bluelist,
      selectred: [],
      selectblue: [],
    })

  },
  getrandom: function () 
  {
    var redballs = new Array();
    var redlist = new Array();
    for (var i = 1; i < this.data.totalred; ++i) {
      var value = i.toString();
      if (i < 10) {
        value = "0" + i.toString();
      }
      redballs.push(value);
      redlist.push({ num: value, check: "nocheck" });
    }
    var selectred = [];
    var redranNum = this.data.minred;
    for (var i = 0; i < redranNum; i++) {
      var ran = Math.floor(Math.random() * (redballs.length - i));
      selectred.push(redballs[ran]);
      redlist[redballs[ran] - 1].check = "checked";
      redballs[ran] = redballs[redballs.length - i - 1];
    };
    var blueballs = new Array();
    var bluelist = new Array();
    for (var i = 1; i < this.data.totalblue; ++i) {
      var value = i.toString();
      if (i < 10) {
        value = "0" + i.toString();
      }
      blueballs.push(value);
      bluelist.push({ num: value, check: "nocheck" });
    }
    var selectblue = [];
    var blueranNum = this.data.minblue;
    for (var i = 0; i < blueranNum; i++) {
      var ran = Math.floor(Math.random() * (blueballs.length - i));
      selectblue.push(blueballs[ran]);
      bluelist[blueballs[ran] - 1].check = "checked";
      blueballs[ran] = blueballs[blueballs.length - i - 1];
    };
    this.setData({
      redballs: redlist,
      selectred: selectred.sort(),
      blueballs: bluelist,
      selectblue: selectblue.sort(),
    })
  },
  copy:function(){
    var select = new Array();
    select.push(this.data.selectred);
    select.push(this.data.selectblue);
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
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.key);
    wx.setNavigationBarTitle({
      title: options.key + "随机幸运数"
    })
    if (options.key == "双色球") {
      this.setData({
        minred: 6,
        minblue: 1,
        totalred: 34,
        totalblue: 17,
      })
    } else if (options.key == "大乐透") {
      this.setData({
        minred: 5,
        minblue: 2,
        totalred: 36,
        totalblue: 13,
      })
    } else if (options.key == "七乐彩") {
      this.setData({
        minred: 7,
        minblue: 0,
        totalred: 31,
        totalblue: 0,
      })
    }
    this.Init();
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