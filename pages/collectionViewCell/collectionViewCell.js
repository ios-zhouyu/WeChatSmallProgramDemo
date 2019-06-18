// pages/collectionViewCell/collectionViewCell.js
Component({
    options: {
        multipleSlots: true // 在组件定义时的选项中启用多slot支持
    },
    /**
     * 组件的属性列表
     */
    properties: {
        imageUrl: {
            type: String,
            value: 'https://avatar.csdn.net/D/5/6/3_qq_17470165.jpg'
        },
        title: {
            type: String,
            value: '哈哈😁默认值'
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        imageWidth: ''
    },

    /**
     * 组件的方法列表
     */
    methods: {
        selectedItem: function(event) {
            let detail = {
                imageUrl: this.properties.imageUrl,
                title: this.properties.title
            }
            this.triggerEvent("selectedCell",detail,{})
        }
    },

    lifetimes: {
        // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
        attached: function () { 
            let screenWidth = wx.getSystemInfoSync().windowWidth
            this.setData({
                imageWidth: screenWidth / 3 + 'rpx'
            })
        },
        moved: function () { },
        detached: function () { },
    },

    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () { }, // 此处attached的声明会被lifetimes字段中的声明覆盖
    ready: function () { },

    pageLifetimes: {
        // 组件所在页面的生命周期函数
        show: function () { },
        hide: function () { },
        resize: function () { },
    },
})
