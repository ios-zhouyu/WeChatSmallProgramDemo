

App({
    onLaunch: function () {
        this.getDeviceInfo()
    },
    globalData: {
        userInfo: null,
        deviceInfo: {},
        appBaseData: {
            ck: '442F6766-C8B2-4920-86F1-3E35A6A17C49-i629',
            app: 'smallProgram',
            b: '822',
            certificateToken: '2b30d3c0be7a822f2ff8cfba9f31aad6',
            cid: '34974',
            ct: '2b30d3c0be7a822f2ff8cfba9f31aad6',
            deviceOpenUDID: 'd272e41e3a7694543600a6eb46ce17cab73311e7',
            di: 'd272e41e3a7694543600a6eb46ce17cab73311e7',
            n: '2',
            os: 'ios',
            p: '1',
            pt: '4047cdaee83ae014659df063452c6d22571fc04b6aafecb7ad1e7581af82ce58',
            s: 'APPL',
            sv: '12.2',
            v: '6.2.9'
        }
    },
    onShow: function() {
        //console.log(this)
    },
    onHide: function () {
        //console.log(this)
    },
    onError: function () {
        //console.log(this)
    },
    onError: function () {
        //console.log(this)
    },
    onPageNotFound: function() {
        //console.log(this)
    },

    // 获取设备信息
    getDeviceInfo: function() {
        var self = this
        wx.getSystemInfo({
            success(res) {
                self.globalData.deviceInfo = res
            }
        })
    }
})