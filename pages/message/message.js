var list = [
    {
        title: "副书记诶飞机",
        subTitle: "房间爱色飞机哦啊二十"
    },
    {
        title: "解释为",
        subTitle: "发生金额非说"
    },
    {
        title: "附件阿斯尔附近",
        subTitle: "发射机覅偶阿尔发了见覅偶按二级覅偶阿瑟积分发色法尔法尔法色粉发色发色发色"
    },
    {
        title: "示例;风格迥",
        subTitle: "发角色ifO记爱哦色"
    },
    {
        title: "富婆额ufim",
        subTitle: "见覅哦啊恶房间啊发解放军爱哦杰尔夫日哦啊接问佛价位"
    },
    {
        title: "faefae",
        subTitle: "格式如果和深入各色如果特虽然各色人歌虽然各色人工"
    },
    {
        title: "公司担任公司认购",
        subTitle: "高收入生日歌散热膏色如黑色人很少人刚好也让他哥是我让他给他个人生过得舒服个黑色软各色人共同"
    },
    {
        title: "很多人听好多人推荐他人的与环境儿童和热点推荐回答让他几分工业进入体育人间妨功害能投放以及南方体育",
        subTitle: "公诉人归属人黄色融合色入褐色如何是如何认定体检通用集团与我进入局汉语言"
    }
]

Page({
    data: {
        text: "This is page data.",
        listArr: []
    },
    onLoad: function (options) {
        this.setData({
            listArr: list
        })
    },
    onReady: function () {
        //console.log(this)
    },
    onShow: function () {
        //console.log(this)
    },
    onHide: function () {
        //console.log(this)
    },
    onUnload: function () {
        //console.log(this)
    },
    onPullDownRefresh: function (event) {
        console.log("下拉刷新")
        this.setData({
            listArr: list
        })
    },
    onReachBottom: function () {
        console.log("上拉加载")
        this.setData({
            listArr : list.concat(list)
        })
    },
    onShareAppMessage: function () {
        //console.log(this)
    },
    onPageScroll: function (event) {
        console.log(event.scrollTop)
    },
    onResize: function () {
        //console.log(this)
    },
    onTabItemTap(item) {
        console.log(item.index)
        console.log(item.pagePath)
        console.log(item.text)
    },
    // Event handler.
    didSelectedItem: function(event) {
        var index = parseInt(event.currentTarget.dataset.index)
        var data = this.data.listArr[index]
        console.log(data)
    },
    customData: {
        hi: 'MINA'
    }
})
