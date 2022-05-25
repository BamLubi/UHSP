// pages/registryList/registryList.js
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
    registryList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 获取挂号信息
    this.getRegistryList();
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

  getRegistryList() {
    let that = this;
    let url = "http://localhost:8080/registry/findList";
    let patientId = app.globalData.userInfo.id;
    // 显示loading
    wx.showLoading({
      title: '加载中'
    })
    API.Request(url, {
        "patientId": patientId
      }, "POST", "获取用户所有的挂号")
      .then(res => {
        res.filter(x => {
          x.createTime = Util.formatTime(new Date(x.createTime));
          x.updateTime = Util.formatTime(new Date(x.updateTime));
          if (x.chargeTime != null) x.chargeTime = Util.formatTime(new Date(x.chargeTime));
          else x.chargeTime = '无';
        })
        that.setData({
          registryList: res
        })
        // 显示成功样式
        wx.hideLoading();
      })
  },

  delRegistry(e){
    let that = this;
    let id = e.currentTarget.dataset.id;
    API.ShowModal("确认删除", `请确认是否删除订单号为${id}的订单`)
      .then(res => {
        let url = "http://localhost:8080/registry/delete";
        // 显示loading
        wx.showLoading({
          title: '删除中'
        })
        return API.Request(url, {
          "id": id
        }, "POST", "删除挂号")
      }, res => {

      })
      .then(res => {
        // 显示成功样式
        wx.hideLoading().then(() => {
          API.ShowToast('支删除成功', 'success');
          that.onLoad();
        });
      })

  }
})