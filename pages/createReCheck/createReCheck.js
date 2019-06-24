var HDFNet = require('../../module/HDFNet.js')

Page({
    data: {
        dateColor: '#999999',
        buttonTextColor: '#FFFFFF',
        buttonBackGroundColor: '#DCDCDC',
        isShare: true,
        dateText: '请选择日期',
        dateArr: [],
        arr: [],
        pikerViewWidth: '750rpx',
        name: '',
        project: '',
        purpose: '',
        checkDate: '',
        checkDateKey: '',
        risk: '',
        isShare: true
    },

    onLoad: function (options) {
        wx.setNavigationBarTitle({
            title: '新建复查复诊',
        })
        var width = wx.getSystemInfoSync().windowWidth - 30
        if (width > 750) {
            width = width - 50
        }
        this.setData({
            pikerViewWidth: width.toString() + 'px'
        })
        this.selectedDate()
    },

    selectedDate: function() {
        var self = this
        wx.showLoading({
            title: '加载中...',
        })

        HDFNet.hdfRequest({
            type: 'POST',
            url: 'http://10.1.21.216/doctorapi/teamfollowup_getSelectOptions4ReCheck',
            data: {
                userId: '34974',
            },
            success: function(res) {
                wx.hideLoading()
                if (res.statusCode == 200 && res.data.errorCode == '0') {
                    var arr = []
                    var isNeedCheck = res.data.content.isNeedCheck
                    for (var index in isNeedCheck) {
                        arr.push(isNeedCheck[index].name)
                    }
                    self.setData({
                        dateArr: isNeedCheck,
                        arr: arr
                    })
                } else {
                    wx.showToast({
                        title: '返回结果异常',
                    })
                }
            },
            fail: function(res) {
                wx.hideLoading()
                wx.showToast({
                    title: res.data.msg,
                })
            }
        })
    },

    bindPickerChange: function (e) {
        this.setData({
            dateText: this.data.arr[e.detail.value],
            dateColor: '#000000',
            checkDate: this.data.arr[e.detail.value],
            checkDateKey: this.data.dateArr[e.detail.value].key
        })
    },

    textareaDidChanged: function(e) {
        let elementID = e.currentTarget.id
        if (elementID == 'name') {
            this.setData({
                name: e.detail.value
            })
        } else if (elementID == 'project') {
            this.setData({
                project: e.detail.value
            })
        } else if (elementID == 'purpose') {
            this.setData({
                purpose: e.detail.value
            })
        } else if (elementID == 'risk') {
            this.setData({
                risk: e.detail.value
            })
        }
        
        if (this.data.name.length > 0 && this.data.purpose.length > 0 && this.data.risk.length > 0) {
            this.setData({
                buttonBackGroundColor: '#46A0F0'
            })
        } else {
            this.setData({
                buttonBackGroundColor: '#DCDCDC'
            })
        }
    },

    previewButtonTap: function(e) {
        if (this.data.name.length <= 0 || this.data.purpose.length <= 0 || this.data.risk.length <= 0) {
            wx.showToast({
                title: '请填写模板名称/复查目的/不复查的风险',
                icon: 'none',
                mask: false
            })
        } else {
            console.log(this.data)
            var model = new Object()
            model.name = this.data.name
            model.isShare = this.data.isShare
            var dataArr = new Array()
            if (this.data.project.length > 0) {
                let item = {key: '复查项目', value: this.data.project}
                dataArr.push(item)
            }
            if (this.data.purpose.length > 0) {
                let item = { key: '复查目的', value: this.data.purpose }
                dataArr.push(item)
            }
            if (this.data.checkDate.length > 0) {
                model.checkDateKey = this.data.checkDateKey
                let item = { key: '是否经常需要检查', value: this.data.checkDate }
                dataArr.push(item)
            }
            if (this.data.risk.length > 0) {
                let item = { key: '不复查有哪些风险', value: this.data.risk }
                dataArr.push(item)
            }
            model.dataArr = dataArr
            console.log(model)
            var jsonModelString = JSON.stringify(model)
            console.log(jsonModelString)
            wx.navigateTo({
                url: '../reCheckDetail/reCheckDetail?modelString=' + jsonModelString,
            })
        }
    },

    switchTap: function(e) {
        this.setData({
            isShare: e.detail.value
        })
    }

})