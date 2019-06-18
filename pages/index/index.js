//index.js
//获取应用实例
const app = getApp()

var list = [
    {
        imageUrl: 'https://avatar.csdn.net/D/5/6/3_qq_17470165.jpg',
        title: '外界传入'
    },
    {
        imageUrl: 'https://avatar.csdn.net/3/D/A/3_susuzhe123.jpg',
        title: '过水热'
    },
    {
        imageUrl: 'https://avatar.csdn.net/5/D/E/3_a772116804.jpg',
        title: '法尔法额'
    },
    {
        imageUrl: 'https://avatar.csdn.net/4/6/5/3_kingov.jpg',
        title: '果然是'
    },
    {
        imageUrl: 'https://avatar.csdn.net/2/4/6/3_weixin_34218579.jpg',
        title: '公司认购'
    },
    {
        imageUrl: 'https://avatar.csdn.net/F/F/7/3_txw0415.jpg',
        title: '过水热公司认购粉色粉色发'
    },
    {
        imageUrl: 'https://avatar.csdn.net/9/2/9/3_xiasohuai.jpg',
        title: '风太大'
    },
    {
        imageUrl: 'https://avatar.csdn.net/2/9/7/3_fly_wugui.jpg',
        title: '好多天'
    }
]

var imgUrls = [
    'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
    'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
    'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
]

Page({
    data: {
        list: list,
        imgUrls: imgUrls
    },

    onLoad: function () {
        wx.setNavigationBarTitle({
            title: '首页',
        })
    },
    swiperViewTap: function(event) {
        console.log(event.detail.imageUrl)
        wx.navigateTo({
            url: '../createReCheck/createReCheck',
        })
    },
    selectedCell: function(event) {
        wx.navigateTo({
            url: '../reCheckDetail/reCheckDetail' + '?title=' + event.detail.title + '&imageUrl=' + event.detail.imageUrl,
        })
    }

})
