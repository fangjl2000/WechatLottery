//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    imageWidth: wx.getSystemInfoSync().windowWidth,//图片宽度
    imgUrls: {},
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 500,
    pointcolor:"#FF3E50",
    grids: [{
      img: '/images/ssq.png',
      name: '双色球',
    }, {
      img: '/images/qlc.png',
      name: '七乐彩',
    },
    {
      img: '/images/dlt.png',
      name: '大乐透',
    },
    {
      img: '/images/qxc.png',
      name: '七星彩',
    },
    {
      img: '/images/fc3d.png',
      name: '福彩3D',
    },
    {
      img: '/images/pai3.png',
      name: '排列3',
    },
    {
      img: '/images/pai5.png',
      name: '排列5',
    }
    
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    console.log(app.globalData.scene);
    //wx.navigateTo({
    //  url: '/pages/logs/logs'
    //})
  },
  BindBanner: function() {
    var that = this;
    wx.request({
      url: 'https://lottery.2k88.com/API/Lottery/banner', 
      method: 'POST',
      data: {
        source: 'wechat', 
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) 
      {
        that.setData({
          imgUrls: res.data.Data,
        })     
      }
    });
  },
  onLoad: function () {
    this.BindBanner();
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
