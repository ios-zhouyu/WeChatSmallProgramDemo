Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:'',
    subTitle: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
        title: options.title,
        subTitle: options.subTitle
    })
    wx.setNavigationBarTitle({
        title: options.title,
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
    
  },

  popBack: function() {
      wx.navigateBack()
      var pages = getCurrentPages();
      var currPage = pages[pages.length - 1];   //当前页面
      var prevPage = pages[pages.length - 2];  //上一个页面
      var newtitle = 'It is new title';
      prevPage.data.topTitle = '上个页面传回的返回值'; //不需要页面更新
      prevPage.setData({
          topTitle: '上个页面传回的返回值',
          topPadding: '40rpx'
      })
  }
})