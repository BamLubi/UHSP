// pages/inspection/inspection.js
// rootPackage/pages/inspect_manage/inspect_manage.js
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
    inspectList: [],
    selectInspect: {},
    isInspectModel: false,
    details: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
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
    let url = "http://localhost:8080/inspect/" + app.globalData.userInfo.id;
    // 显示loading
    wx.showLoading({
      title: '加载中'
    })
    API.Request(url, {}, "GET", "获取已完成的检查单")
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

  delete (e){
    let that = this;
    let id = e.currentTarget.dataset.id;
    API.ShowModal("确认删除", `请确认是否删除检查号为${id}的检查单吗？`)
      .then(res => {
        let url = "http://localhost:8080/inspect/delete";
        // 显示loading
        wx.showLoading({
          title: '删除中'
        })
        return API.Request(url, {
          "id": id
        }, "POST", "删除检查单")
      }, res => {

      })
      .then(res => {
        if (res.code == 20000) {
          // 显示成功样式
          wx.hideLoading().then(() => {
            API.ShowToast('删除成功', 'success');
            that.getInspectList();
          });
        } else {
          throw Error("服务器错误");
        }
      })
      .catch(err => {
        console.log(err);
        wx.hideLoading().then(() => {
          API.ShowToast('删除失败', 'error');
          that.onLoad();
        });
      })
  }
})