// pages/index/index.js
const API = require("../../promise/wxAPI.js")
const CloudDB = require("../../promise/wxCloudDB.js")
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userType: 0,
    dict: [],
    swiper_list: [
      "/images/hospital.png"
    ],
    naviagteList: [{
      id: 0,
      name: '今日挂号',
      src: '/images/index/guahao.png',
      path: '/pages/registry/registry',
      type: 'page',
      user: 0
    }, {
      id: 1,
      name: '在线缴费',
      src: '/images/index/jiaofei.png',
      path: '/pages/pay/pay',
      type: 'page',
      user: 0
    }, {
      id: 2,
      name: '医保报销',
      src: '/images/index/baoxiao.png',
      path: '/pages/reimburse/reimburse',
      type: 'page',
      user: 0
    }, {
      id: 3,
      name: '检查结果',
      src: '/images/index/jiancha.png',
      path: '/pages/inspection/inspection',
      type: 'page',
      user: 0
    }, {
      id: 4,
      name: '今日就诊',
      src: '/images/index/stat.png',
      path: '/pages/stat/stat',
      type: 'page',
      user: 0
    }, {
      id: 4,
      name: '医生问诊',
      src: '/images/index/wenzhen.png',
      path: '/doctorPackage/pages/diagnose/diagnose',
      type: 'page',
      user: 1
    }, {
      id: 5,
      name: '公告管理',
      src: '/images/index/gonggao.png',
      path: '/rootPackage/pages/news_manage/news_manage',
      type: 'page',
      user: 2
    }, {
      id: 6,
      name: '医保进度管理',
      src: '/images/index/yibao.png',
      path: '/rootPackage/pages/reimburse_manage/reimburse_manage',
      type: 'page',
      user: 2
    }, {
      id: 7,
      name: '检查管理',
      src: '/images/index/jianchaguanli.png',
      path: '/rootPackage/pages/inspect_manage/inspect_manage',
      type: 'page',
      user: 2
    }],
    news: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 判断获取个人信息
    if (app.globalData.hasUserInfo == true) {
      this.setData({
        userType: app.globalData.userInfo.userType
      })
    } else if (app.globalData.hasUserInfo == null) {
      // 异步操作
      app.userInfoReadyCallback = res => {
        this.setData({
          userType: app.globalData.userInfo.userType
        })
      }
    }
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
    this.getNews();
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
   * 跳转页面
   */
  navigatePage: function (e) {
    if (e.currentTarget.dataset.path != '') {
      if (e.currentTarget.dataset.type == 'page') {
        wx.navigateTo({
          url: e.currentTarget.dataset.path,
        })
      } else {
        wx.switchTab({
          url: e.currentTarget.dataset.path,
        })
      }
    } else {
      API.ShowToast('正在施工中...', 'none', 2000)
    }
  },

  getNews() {
    let that = this;
    // 获取新闻列表
    let url = "http://localhost:8080/news";
    API.Request(url, {}, "GET", "获取公告")
      .then(res => {
        that.setData({
          news: res
        })
      })
  }
})