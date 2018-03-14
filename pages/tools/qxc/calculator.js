// pages/tools/qxc/calculator.js
var common = require('../common.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    redballs: {},
    rankcount:3,
    count: 0,
    money: 0,
    selectred:[],
  },
  Init: function () {
    var allred = new Array();
    for (var j = 0; j < this.data.rankcount; ++j) 
    {
      var redlist = new Array();
      for(var i=0;i<10;++i)
      {
        var value = i.toString();
        if (i < 10) {
          value = "0" + i.toString();
        }
        redlist.push({ num: value, check: "nocheck" });
      }
      allred.push(redlist);
    }
    console.log(allred);
    this.setData({
      redballs: allred,
      selectred: [],
      count: 0,
      money: 0
    })
  },
  redtap: function (event) {
    var num = event.currentTarget.dataset.num;
    var groupindex = event.currentTarget.dataset.groupindex;
    var index = parseInt(num);
    console.log(groupindex+"|"+num);
    var redballs = this.data.redballs;
    if (redballs[groupindex][index].check == "nocheck")
    {
      redballs[groupindex][index].check = "checked"
    }else{
      redballs[groupindex][index].check = "nocheck"
    }
    this.setData({
      redballs: redballs,
    })
    this.getmoney();
  },
  getmoney: function () {
    var redballs = this.data.redballs;
    var totalcount = 0;
    var selectred = new Array();
    for (var j = 0; j < redballs.length;++j)
    {
        var checkcount = 0;
        var hasselect = new Array();
        for(var i=0;i<10;++i)
        {
          if (redballs[j][i].check == "checked") 
          {
            checkcount += 1;
            hasselect.push(redballs[j][i].num);
          }
        }
        if(j==0)
        {
          totalcount = checkcount;
        }else
        {
          totalcount = totalcount * checkcount;
        }
        selectred.push(hasselect);
    }
    var money = totalcount * 2;
    console.log(selectred);
    this.setData({
      count: totalcount,
        money: money,
        selectred: selectred
      })   
  },
  clearball: function () {
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
    if (options.key == "福彩3D" || options.key == "排列3") {
      this.setData({
        rankcount: 3
      })
    } else if (options.key == "七星彩")
    {
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