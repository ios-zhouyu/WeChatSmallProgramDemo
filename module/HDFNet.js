
var app = getApp()

function hdfRequest(options) {
    options = options || {}
    options.type = (options.type || 'GET').toUpperCase()
    options.url = options.url || ''
    options.data = options.data || {}
    options.header = options.header || { 'content-type': 'application/json'}
    options.success = options.success || function() {}
    options.fail = options.fail || function() {}
    options.complete = options.complete || function() {}

    // 默认data参数
    var data = app.globalData.appBaseData
    data.m = app.globalData.deviceInfo.model
    data.sdk = app.globalData.deviceInfo.SDKVersion

    // 合并外界传入的参数
    data = Object.assign(data, options.data)

    wx.request({
        method: options.type,
        url: options.url,
        data: data,
        header: options.header,
        success: function(res) {
            if (res.statusCode == 200 && res.data.errorCode == '0') {
                options.success(res)
            } else {
                res.errMessage = '接口返回数据异常: ' + JSON.stringify(res)
                options.success(res)
            }
        },
        fail: function(res) {
            options.fail(res)
        },
        complete: function (res) {
            options.complete(res)
        }
    })
}

module.exports = {
    hdfRequest: hdfRequest
}