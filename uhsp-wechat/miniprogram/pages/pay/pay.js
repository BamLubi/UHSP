// pages/pay/pay.js
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
    TabCur: 0,
    scrollLeft: 0,
    TabCurText: ["挂号", "处方"],
    registryList: [],
    prescriptionList: []
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

  /**
   * 导航栏切换
   */
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })
    // 挂号
    if (e.currentTarget.dataset.id == 0) {
      this.getRegistryList();
    }
    // 处方
    if (e.currentTarget.dataset.id == 1) {
      this.getPrescriptionList();
    }
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
        "patientId": patientId,
        "status": 0
      }, "POST", "获取用户未付款的挂号")
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

  getPrescriptionList() {
    let that = this;
    let url = "http://localhost:8080/pres/findList";
    let patientId = app.globalData.userInfo.id;
    // 显示loading
    wx.showLoading({
      title: '加载中'
    })
    API.Request(url, {
        "patientId": patientId,
        "status": 0
      }, "POST", "获取用户未付款的处方")
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
  },

  cancelRegistry(e) {
    let that = this;
    let id = e.currentTarget.dataset.id;
    API.ShowModal("确认取消", `请确认是否要取消订单号为${id}的挂号吗?`)
      .then(res => {
        let url = "http://localhost:8080/registry/update";
        // 显示loading
        wx.showLoading({
          title: '取消中'
        })
        return API.Request(url, {
          "id": id,
          "status": 2
        }, "POST", "取消订单")
      }, res => {

      })
      .then(res => {
        // 显示成功样式
        wx.hideLoading().then(() => {
          API.ShowToast('取消成功', 'success');
          that.onLoad();
        });
      })
  },

  payRegistry(e) {
    let that = this;
    let id = e.currentTarget.dataset.id;
    let price = e.currentTarget.dataset.price;
    API.ShowModal("确认支付", `请确认是否支付${price}元,订单号为${id}`)
      .then(res => {
        let url = "http://localhost:8080/registry/update";
        // 显示loading
        wx.showLoading({
          title: '支付中'
        })
        return API.Request(url, {
          "id": id,
          "status": 1,
          "chargeTime": new Date().toISOString()
        }, "POST", "支付挂号单")
      }, res => {

      })
      .then(res => {
        // 显示成功样式
        wx.hideLoading().then(() => {
          API.ShowToast('支付成功', 'success');
          that.getRegistryList();
        });
      })
  },

  payPres(e) {
    let that = this;
    let id = e.currentTarget.dataset.id;
    let price = e.currentTarget.dataset.price;
    API.ShowModal("确认支付", `请确认是否支付${price}元,订单号为${id}`)
      .then(res => {
        let url = "http://localhost:8080/pres/update";
        // 显示loading
        wx.showLoading({
          title: '支付中'
        })
        return API.Request(url, {
          "id": id,
          "status": 1,
          "chargeTime": new Date().toISOString()
        }, "POST", "支付处方")
      }, res => {

      })
      .then(res => {
        // 显示成功样式
        wx.hideLoading().then(() => {
          API.ShowToast('支付成功', 'success');
          that.getPrescriptionList();
        });
      })
  }
})