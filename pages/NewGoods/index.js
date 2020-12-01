// pages/NewGoods/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        goodList: [
            {
                title: "测试标题1",
                description: "测试描述1",
                money_num:280,
                imgList: [
                    'https://s3.ax1x.com/2020/12/02/D4Guon.png',
                    'https://s3.ax1x.com/2020/12/02/D4GteJ.png',
                    'https://s3.ax1x.com/2020/12/02/D4GwJx.png'
                ],
                like_count: 520
            },
            {
                title: "测试标题2",
                description: "测试描述2",
                money_num:220,
                imgList: [
                    'https://s3.ax1x.com/2020/12/02/D4Guon.png',
                    'https://s3.ax1x.com/2020/12/02/D4GteJ.png',
                    'https://s3.ax1x.com/2020/12/02/D4GwJx.png'
                ],
                like_count: 660
            },
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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

    }
})