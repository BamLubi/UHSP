// doctorPackage/pages/diagnose/diagnose.js
const app = getApp();
const API = require("../../../promise/wxAPI.js")
const CloudDB = require("../../../promise/wxCloudDB.js")
const AppointsDB = require("../../../db/appoints_db.js")
const Util = require("../../../utils/util.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    registryList: [],
    selectRegistry: {},
    isDiagModel: false,
    drugList: [],
    totalPrice: 0,
    drugs: '',
    details: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let that = this;
    // 获取挂号信息
    this.getRegistryList();
    // 获取药物信息
    let url = "http://localhost:8080/drug";
    API.Request(url, {}, "GET", "获取药物列表")
      .then(res => {
        that.setData({
          drugList: res
        })
      })
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
    let url = "http://localhost:8080/registry/findListDoctor";
    // let patientId = app.globalData.userInfo.id;
    // 显示loading
    wx.showLoading({
      title: '加载中'
    })
    API.Request(url, {
        "doctorId": 202205141636001
      }, "POST", "获取需要诊断挂号")
      .then(res => {
        res.filter(x => {
          x.createTime = Util.formatTime(new Date(x.createTime));
          x.updateTime = Util.formatTime(new Date(x.updateTime));
        })
        that.setData({
          registryList: res
        })
        // 显示成功样式
        wx.hideLoading();
      })
  },

  showDiagModel(e) {
    let that = this;
    let id = e.currentTarget.dataset.id;
    that.setData({
      selectRegistry: that.data.registryList.filter(x => x.id == id)[0],
      isDiagModel: true
    })
  },

  closeDiagModel() {
    this.setData({
      isDiagModel: false,
      details: '',
      totalPrice: 0,
      drugs: ''
    })
  },

  // 药品多选框
  checkboxChange(e) {
    let that = this;
    let value = e.detail.value;
    let totalPrice = 0;
    let drugs = "";
    for (let i = 0; i < value.length; i++) {
      let drug = that.data.drugList.filter(x => x.id == value[i])[0];
      totalPrice += drug.price;
      drugs += drug.drugName + " 1" + drug.unit + ";";
    }
    this.data.totalPrice = totalPrice;
    this.data.drugs = drugs;
  },

  detailsInput(e) {
    this.data.details = e.detail.value;
  },

  upload() {
    let that = this;
    // 上传处方信息
    let url = "http://localhost:8080/pres/insert";
    // 显示loading
    wx.showLoading({
      title: '加载中'
    })
    API.Request(url, {
        "patientId": that.data.selectRegistry.patient.id,
        "registryId": that.data.selectRegistry.id,
        "details": that.data.details,
        "drugs": that.data.drugs,
        "price": that.data.totalPrice,
        "status": 0
      }, "POST", "新增处方信息")
      .then(res => {
        if (res.code == 20000) {
          // 更新原有挂号单为已完成状态3
          url = "http://localhost:8080/registry/update";
          return API.Request(url, {
            "id": that.data.selectRegistry.id,
            "status": 3
          }, "POST", "修改挂号单为已完成状态")
        } else {
          throw Error("服务端错误");
        }
      })
      .then(res => {
        if (res.code == 20000) {
          // 显示成功样式
          wx.hideLoading().then(() => {
            API.ShowToast('新增成功', 'success');
          });
          that.closeDiagModel();
          that.onLoad();
        } else {
          throw Error("服务端错误");
        }
      })
      .catch(err => {
        console.log(err);
        // 显示成失败样式
        wx.hideLoading().then(() => {
          API.ShowToast('新增失败', 'error');
        });
      })
  }
})