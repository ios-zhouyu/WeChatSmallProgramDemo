//index.js
//获取应用实例
const app = getApp()

var list = [
    {
        imageUrl: 'https://avatar.csdn.net/D/5/6/3_qq_17470165.jpg',
        title: '外界传入小程序组件66666'
    },
    {
        imageUrl: 'https://avatar.csdn.net/D/5/6/3_qq_17470165.jpg',
        title: '外界传入小程序组件66666'
    },
    {
        imageUrl: 'https://avatar.csdn.net/D/5/6/3_qq_17470165.jpg',
        title: '外界传入小程序组件66666'
    },
    {
        imageUrl: 'https://avatar.csdn.net/D/5/6/3_qq_17470165.jpg',
        title: '外界传入小程序组件66666'
    },
    {
        imageUrl: 'https://avatar.csdn.net/D/5/6/3_qq_17470165.jpg',
        title: '外界传入小程序组件66666'
    },
    {
        imageUrl: 'https://avatar.csdn.net/D/5/6/3_qq_17470165.jpg',
        title: '外界传入小程序组件66666'
    },
    {
        imageUrl: 'https://avatar.csdn.net/D/5/6/3_qq_17470165.jpg',
        title: '外界传入小程序组件66666'
    },
    {
        imageUrl: 'https://avatar.csdn.net/D/5/6/3_qq_17470165.jpg',
        title: '外界传入小程序组件66666'
    }
]


Page({
  data: {
    list: list
  },

  onLoad: function () {
      wx.setNavigationBarTitle({
          title: '首页',
      })
  }
})
