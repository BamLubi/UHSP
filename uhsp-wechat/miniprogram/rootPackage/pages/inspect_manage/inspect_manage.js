// rootPackage/pages/inspect_manage/inspect_manage.js
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
    inspectList: [],
    selectInspect: {},
    isInspectModel: false,
    details: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let that = this;
    // 获取检查信息
    this.getInspectList();
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

  getInspectList() {
    let that = this;
    let url = "http://localhost:8080/inspect/findAll";
    // 显示loading
    wx.showLoading({
      title: '加载中'
    })
    API.Request(url, {}, "GET", "获取未完成的检查单")
      .then(res => {
        res.filter(x => {
          x.createTime = Util.formatTime(new Date(x.createTime));
          x.updateTime = Util.formatTime(new Date(x.updateTime));
        })
        that.setData({
          inspectList: res
        })
        // 显示成功样式
        wx.hideLoading();
      })
  },

  showInspectModel(e) {
    let that = this;
    let id = e.currentTarget.dataset.id;
    that.setData({
      selectInspect: that.data.inspectList.filter(x => x.id == id)[0],
      isInspectModel: true
    })
  },

  closeInspectModel() {
    this.setData({
      isInspectModel: false,
      details: ''
    })
  },

  detailsInput(e) {
    this.data.details = e.detail.value;
  },

  upload() {
    let that = this;
    // 上传处方信息
    let url = "http://localhost:8080/inspect/update";
    // 显示loading
    wx.showLoading({
      title: '加载中'
    })
    API.Request(url, {
        "id": that.data.selectInspect.id,
        "details": that.data.details,
        "status": 1
      }, "POST", "更新检查单")
      .then(res => {
        if (res.code == 20000) {
          // 显示成功样式
          wx.hideLoading().then(() => {
            API.ShowToast('更新成功', 'success');
          });
          that.closeInspectModel();
          that.getInspectList();
        } else {
          throw Error("服务端错误");
        }
      })
      .catch(err => {
        console.log(err);
        // 显示成失败样式
        wx.hideLoading().then(() => {
          API.ShowToast('更新失败', 'error');
        });
      })
  }
})