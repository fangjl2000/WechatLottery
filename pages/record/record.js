var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
//git测试
Page({
  data: {
    title:'',
    LotteryNo:'',
    LotteryTime:'',
    redball:{},
    blueball:{},
    kind:'大小',
    tabs: ["大小", "奇偶", "质合"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    sliderWidth:96,
    page:0,
    state:'',
    listData:{}
  },
  LoadLottery: function () {
    //console.log(this.data.title);
    var that = this;
    wx.request({
      url: 'https://lottery.2k88.com/API/Lottery/LoadLottery',
      method: 'POST',
      data: {
        name: this.data.title,
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        //console.log(res.data);
        if (res.data.LotteryNo != null) {
          that.setData({
            LotteryNo: res.data.LotteryNo +'期开奖',
            LotteryTime: res.data.LotteryTime,
            redball: res.data.RedBalls
          })
        }
        if (res.data.BlueBalls!=null){
          that.setData({            
            blueball: res.data.BlueBalls
          })
        }  
      }
    });
  },
  LoadLotteryData: function () {
    //console.log(this.data.title);
    this.setData({
      page: this.data.page + 1,
      state:'loadmore',
    })  
    var that = this;
    wx.request({
      url: 'https://lottery.2k88.com/API/Lottery/LoadLotteryData',
      method: 'POST',
      data: {
        name: this.data.title,
        page: this.data.page,
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(that.data.listData);
        if (res.data!=null && res.data.length > 0)
        {
          var newlist = res.data;
          if (that.data.page != 1) {
            newlist = that.data.listData.concat(res.data)
          }
          that.setData({
            listData: newlist,
            state: '',
          })    
        }else
        {
          that.setData({            
            state: 'end',
          }) 
        }
          
      }
    });
  },
  onLoad: function (options) {  
    this.setData({
      title: options.title
    })
    wx.setNavigationBarTitle({
      title: this.data.title//页面标题为路由参数
    })
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
    this.LoadLottery();
    this.LoadLotteryData();
  },
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id,
      kind: e.currentTarget.dataset.kind,
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
    if (this.data.state != 'end') 
    {
      this.LoadLotteryData();
    }  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})