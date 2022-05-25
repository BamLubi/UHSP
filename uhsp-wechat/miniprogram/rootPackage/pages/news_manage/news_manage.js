// rootPackage/pages/news_manage/news_manage.js
const API = require("../../../promise/wxAPI.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: "",
    content: "",
    type: 0,
    picker: ["公告", "健康知识"],
    index: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  pickerChange(e) {
    this.setData({
      index: e.detail.value
    })
  },

  titleInput(e) {
    this.data.title = e.detail.value;
  },

  contentInput(e) {
    this.data.content = e.detail.value;
  },

  confirm() {
    let that = this;
    // 显示loading
    wx.showLoading({
      title: '新增中'
    })
    let url = "http://localhost:8080/news/insert";
    API.Request(url, {
        title: that.data.title,
        details: that.data.content,
        type: that.data.type
      }, "POST", "插入公告")
      .then(res => {
        if (res.code == 20000) {
          // 显示成功样式
          wx.hideLoading()
          return API.ShowModal("新增成功", "您已成功新增公告", false);
        } else {
          throw Error("服务端插新增失败");
        }
      }).then(res => {
        wx.navigateBack({
          delta: 0
        })
      })
      .catch(err => {
        console.log("新增公告失败", err);
        wx.hideLoading().then(() => {
          API.ShowToast('新增失败', 'error');
        });
      })
  },

  cancel() {
    wx.navigateBack({
      delta: 0,
    })
  }
})