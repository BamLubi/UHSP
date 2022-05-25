// pages/appoint/appoint.js
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
    departList: [],
    selectDepart: {},
    selectDepartDoctorList: [],
    selectDoctorId: null,
    selectTime: 0,
    isRegistryModel: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;

    // 获取部门列表
    let url = "http://localhost:8080/depart";
    return API.Request(url, {}, "GET", "获取部门列表")
      .then(res => {
        that.setData({
          departList: res
        })
      })
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

  },

  /**
   * 关闭预约信息
   */
  closeRegistryModel: function () {
    this.setData({
      isRegistryModel: false
    })
  },

  /**
   * 打开预约信息
   */
  showRegistryModel: function (e) {
    let that = this
    let id = e.currentTarget.dataset.id;
    let depart = that.data.departList.filter(x => x.id == id)[0];
    // 获取该科室今日值班医生
    // 当前星期由服务端处理
    let url = '';
    if (id == '999') url = "http://localhost:8080/doctor/findAllByDepartId";
    else url = "http://localhost:8080/doctor/findAllAvlByDepartId";
    API.Request(url, {
        "departId": id
      }, "POST", "获取该科室医生信息")
      .then(res => {
        that.setData({
          selectDepartDoctorList: res
        })
      })
    that.setData({
      selectDepart: depart,
      isRegistryModel: true
    })
  },

  /**
   * 按钮组选择医生
   */
  selectDoctor: function (e) {
    this.data.selectDoctorId = e.detail.value;
  },

  /**
   * 按钮组选择医生
   */
  selectTime: function (e) {
    this.data.selectTime = e.detail.value;
  },

  /**
   * 预约
   */
  registry: function (e) {
    let that = this;
    let selectTime = that.data.selectTime;
    let selectDoctorId = that.data.selectDoctorId;
    let userId = app.globalData.userInfo.id;
    // 如果未选择医生，则提示用户选择医生
    if (selectDoctorId == null || selectDoctorId == "") {
      API.ShowToast("请选择医生", 'error');
      return;
    }

    let departId = that.data.selectDepartDoctorList.filter(x => x.id == selectDoctorId)[0].depart.id;
    let doctor = that.data.selectDepartDoctorList.filter(x => x.id == selectDoctorId)[0].userInfo.realName;
    let price = that.data.selectDepartDoctorList.filter(x => x.id == selectDoctorId)[0].rank.price;

    // 将信息打印出来，让用户选择是否确认
    let content = '';
    if (that.data.selectDepart.id == '999') {
      let introduce = that.data.selectDepartDoctorList.filter(x => x.id == selectDoctorId)[0].rank.rankName;
      content = `检查项目:${introduce}; 挂号费用:${price}元;`;
    } else {
      content = `科室:${that.data.selectDepart.departName}; 医生姓名:${doctor}; 挂号费用:${price}元;`;
    }
    API.ShowModal("请确认挂号信息", content)
      .then(res => {
        wx.showLoading({
          title: '挂号中'
        })
        let url = "http://localhost:8080/registry/insert";
        API.Request(url, {
            "patientId": userId,
            "doctorId": selectDoctorId,
            "departId": departId,
            "time": selectTime,
            "status": 0,
            "registerFee": price
          }, "POST", "新增挂号信息")
          .then(res => {
            // 显示成功样式
            wx.hideLoading().then(() => {
              API.ShowToast('挂号成功', 'success');
              // 后面在考虑，是否返回到其他页面
              that.closeRegistryModel();
            });
          })
      }, res => {})
  }
})