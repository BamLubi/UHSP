// pages/reimburse_pro/reimburse_pro.js
const app = getApp();
const API = require("../../promise/wxAPI.js")
const CloudDB = require("../../promise/wxCloudDB.js")
const AppointsDB = require("../../db/appoints_db.js")
const Util = require("../../utils/util.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    prescriptionList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getPrescriptionList();
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

  getPrescriptionList() {
    let that = this;
    let url = "http://localhost:8080/medins/findList";
    // 显示loading
    wx.showLoading({
      title: '加载中'
    })
    API.Request(url, {
        "userId": app.globalData.userInfo.id
      }, "POST", "获取报销的订单")
      .then(res => {
        res.filter(x => {
          x.createTime = Util.formatTime(new Date(x.createTime));
          x.updateTime = Util.formatTime(new Date(x.updateTime));
          if (x.chargeTime != null) x.chargeTime = Util.formatTime(new Date(x.chargeTime));
          else x.chargeTime = '无';
        })
        that.setData({
          prescriptionList: res
        })
        // 显示成功样式
        wx.hideLoading();
      })
  }
})