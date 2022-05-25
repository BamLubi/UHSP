// pages/userInfo/userInfo.js
const app = getApp()
const API = require("../../promise/wxAPI.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    openid: null,
    hasUserInfo: false,
    userInfo: null,
    form: {
      "address": null,
      "age": null,
      "idCard": null,
      "medCard": null,
      "phone": null,
      "realName": null,
      "sex": null,
      "userName": null
    },
    hasModify: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let that = this
    // 判断获取个人信息
    if (app.globalData.hasUserInfo == true) {
      that.setData({
        userInfo: app.globalData.userInfo,
        openid: app.globalData.openid,
        hasUserInfo: true,
      })
    } else if (app.globalData.hasUserInfo == null) {
      // 异步操作
      app.userInfoReadyCallback = res => {
        that.setData({
          userInfo: app.globalData.userInfo,
          openid: app.globalData.openid,
          hasUserInfo: true,
        })
      }
    }

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

  userNameInput(e) {
    this.data.userInfo.userName = e.detail.value;
    this.data.hasModify = true;
  },

  realNameInput(e) {
    this.data.userInfo.realName = e.detail.value;
    this.data.hasModify = true;
  },

  ageInput(e) {
    this.data.userInfo.age = e.detail.value;
    this.data.hasModify = true;
  },

  sexChange(e) {
    this.data.userInfo.sex = e.detail.value ? 0 : 1;
    this.data.hasModify = true;
  },

  phoneInput(e) {
    this.data.userInfo.phone = e.detail.value;
    this.data.hasModify = true;
  },

  addressInput(e) {
    this.data.userInfo.address = e.detail.value;
    this.data.hasModify = true;
  },

  idCardInput(e) {
    this.data.userInfo.idCard = e.detail.value;
    this.data.hasModify = true;
  },

  medCardInput(e) {
    this.data.userInfo.medCard = e.detail.value;
    this.data.hasModify = true;
  },

  confirm() {
    let that = this;
    if (!that.data.hasModify) {
      return wx.navigateBack({
        delta: 0
      })
    }
    // 显示loading
    wx.showLoading({
      title: '更新中'
    })
    let url = "http://localhost:8080/user/update";
    API.Request(url, that.data.userInfo, "POST", "更新用户信息")
      .then(res => {
        if (res.code == 20000) {
          // 更新成功，将当前信息更新到全局
          app.globalData.userInfo = that.data.userInfo;
          // 显示成功样式
          wx.hideLoading()
          return API.ShowModal("更新成功", "您已成功修改信息", false);
        } else {
          throw Error("服务端更新失败");
        }
      })
      .then(res => {
        wx.navigateBack({
          delta: 0
        })
      })
      .catch(err => {
        console.log("更新用户信息失败", err);
        wx.hideLoading().then(() => {
          API.ShowToast('更新失败', 'error');
        });
      })
  },

  cancel() {
    wx.navigateBack({
      delta: 0,
    })
  }
})