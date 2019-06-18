// pages/collectionViewCell/collectionViewCell.js
Component({
    options: {
        multipleSlots: true // 在组件定义时的选项中启用多slot支持
    },
    /**
     * 组件的属性列表
     */
    properties: {
        swiperHeight: {
            type: String,
            value: "240rpx"
        },
        indicatorActiveColor: {
            type: String,
            value: "#000000"
        },
        indicatorDots: { // 默认即可
            type: Boolean,
            value: true
        },
        autoplay: { // 默认即可
            type: Boolean,
            value: true
        },
        circular: { // 默认即可
            type: Boolean,
            value: true
        },
        vertical: { // 默认即可
            type: Boolean,
            value: false
        },
        interval: { // 默认即可
            type: Number,
            value: 2000
        },
        duration: { // 默认即可
            type: Number,
            value: 1000
        },
        imgUrls: {
            type: Array,
            value: []
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        
    },

    /**
     * 组件的方法列表
     */
    methods: {
        swiperItemTap: function(event) {
            let index = parseInt(event.currentTarget.dataset.index)
            let imageUrl = this.properties.imgUrls[index]
            let detail = {
                imageUrl: imageUrl
            }
            this.triggerEvent('swiperViewTap', detail, {}) 
        }
    },

    lifetimes: {
        // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
        attached: function () {
            
        },
        moved: function () { },
        detached: function () { },
    },

    ready: function () { },

    pageLifetimes: {
        // 组件所在页面的生命周期函数
        show: function () { },
        hide: function () { },
        resize: function () { },
    },
})
