// rootPackage/pages/news_manage/news_manage.js
const API = require("../../../promise/wxAPI.js")
const Util = require("../../../utils/util.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: "",
    content: "",
    type: 0,
    picker: ["公告", "健康知识"],
    index: 0,
    news: [],
    isNewsModel: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getNews();
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
  
  // 获取新闻列表
  getNews() {
    let that = this;
    // 获取新闻列表
    let url = "http://localhost:8080/news";
    API.Request(url, {}, "GET", "获取公告")
      .then(res => {
        res.filter(x => {
          x.createTime = Util.formatTime(new Date(x.createTime));
          x.updateTime = Util.formatTime(new Date(x.updateTime));
        })
        that.setData({
          news: res
        })
      })
  },

  // 提交
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
        that.closeNewsModel();
        that.getNews();
      })
      .catch(err => {
        console.log("新增公告失败", err);
        wx.hideLoading().then(() => {
          API.ShowToast('新增失败', 'error');
        });
      })
  },

  // 删除新闻
  delNews(e) {
    let that = this;
    let id = e.currentTarget.dataset.id;
    let title = e.currentTarget.dataset.title;
    API.ShowModal("确认删除", `请确认是否删除标题《${title}》的公告吗？`)
      .then(res => {
        let url = "http://localhost:8080/news/delete";
        // 显示loading
        wx.showLoading({
          title: '删除中'
        })
        return API.Request(url, {
          "id": id
        }, "POST", "删除公告")
      }, res => {

      })
      .then(res => {
        // 显示成功样式
        wx.hideLoading().then(() => {
          API.ShowToast('删除成功', 'success');
          that.getNews();
        });
      })
  },

  // 显示模态框
  showNewsModel() {
    let that = this;
    that.setData({
      isNewsModel: true
    })
  },
  
  // 关闭模态框
  closeNewsModel() {
    this.setData({
      isNewsModel: false
    })
  },
})