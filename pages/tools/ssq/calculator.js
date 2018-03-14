// pages/tools/ssq/calculator.js
var common = require('../common.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
     redballs:{},
     blueballs: {},
     selectred: [],
     selectblue: [],
     count:0,
     money:0,
     minred:6,
     minblue:1,
     totalred: 34,
     totalblue: 17,
  },
  Init: function () {
    var redlist = new Array();
    for (var i = 1; i < this.data.totalred; ++i) {
      var value = i.toString();
      if(i<10){
        value = "0"+i.toString();
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
      selectred:[],
      selectblue:[],
      count: 0,
      money: 0
    })
    
  },
  redtap:function(event){
    var num = event.currentTarget.dataset.num;
    var ballindex = parseInt(num) - 1;
    var selectred = this.data.selectred;
    var redballs = this.data.redballs;
    var index = this.data.selectred.indexOf(num);
    if (index >=0)
    {
      selectred.splice(index,1);
      redballs[ballindex].check = "nocheck";
    }
    else
    {
      selectred.push(num);
      redballs[ballindex].check = "checked";
    }
    this.setData({
      selectred: selectred.sort(),
      redballs: redballs
    })
    this.getmoney();
  },
  bluetap: function (event) {
    var num = event.currentTarget.dataset.num;
    var ballindex = parseInt(num) - 1;
    var selectblue = this.data.selectblue;
    var blueballs = this.data.blueballs;
    var index = this.data.selectblue.indexOf(num);
    if (index >= 0) {
      selectblue.splice(index, 1);
      blueballs[ballindex].check = "nocheck";
    }
    else {
      selectblue.push(num);
      blueballs[ballindex].check = "checked";
    }
    this.setData({
      selectblue: selectblue.sort(),
      blueballs: blueballs
    })
    this.getmoney();
  },
  getmoney:function() {
    var redcount = this.data.selectred.length;
    var bluecount = this.data.selectblue.length;
    var minred = this.data.minred;
    var minblue = this.data.minblue;
    if (redcount >= minred && bluecount >= minblue)
    {
      var redcount = common.combination(redcount, minred);
      var bluecount = common.combination(bluecount, minblue);
      var totalcount = redcount * bluecount;
      var money = totalcount * 2;
      this.setData({
        count: totalcount,
        money: money
      })
    }else
    {
      this.setData({
        count: 0,
        money: 0
      })
    }
  },
  clearball:function()
  {
     this.Init();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.key);
    wx.setNavigationBarTitle({
      title: options.key + "复式计算器"
    })
    if (options.key == "双色球")
    {
      this.setData({
        minred: 6,
        minblue: 1,
        totalred: 34,
        totalblue: 17,
      })
    }else if (options.key == "大乐透") {
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