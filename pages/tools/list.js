// pages/tools/list.js
var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: ["复式计算器", "随机幸运数"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    sliderWidth: 96,
    grids: [{
      img: '/images/ssq.png',
      name: '双色球',
      url:'/pages/tools/ssq/calculator',
      rurl: '/pages/tools/ssq/random'
    }, {
      img: '/images/qlc.png',
      name: '七乐彩',
      url: '/pages/tools/ssq/calculator',
      rurl: '/pages/tools/ssq/random'
    },
    {
      img: '/images/dlt.png',
      name: '大乐透',
      url: '/pages/tools/ssq/calculator',
      rurl: '/pages/tools/ssq/random'
    },
    {
      img: '/images/qxc.png',
      name: '七星彩',
      url: '/pages/tools/qxc/calculator',
      rurl: '/pages/tools/qxc/random'
    },
    {
      img: '/images/fc3d.png',
      name: '福彩3D',
      url: '/pages/tools/qxc/calculator',
      rurl: '/pages/tools/qxc/random'
    },
    {
      img: '/images/pai3.png',
      name: '排列3',
      url: '/pages/tools/qxc/calculator',
      rurl: '/pages/tools/qxc/random'
    },
    {
      img: '/images/pai5.png',
      name: '排列5',
      url: '/pages/tools/qxc/calculator',
      rurl: '/pages/tools/qxc/random'
    }   
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
        console.log(res.windowWidth);
      }
    });
  },
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
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