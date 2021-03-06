//app.js
const CloudFun = require("./promise/wxCloudFun.js");
const UserInfoDB = require("./db/userInfo_db.js");
const API = require("./promise/wxAPI.js");
App({
  globalData: {
    userInfo: null, // 用户信息
    openid: null, // 用户openid
    hasUserInfo: null, // true代表有数据,false代表没数据,null代表还在请求
  },
  onLaunch: function () {
    if (!wx.cloud) {
      console.error("请使用 2.2.3 或以上的基础库以使用云能力");
    } else {
      wx.cloud.init({
        traceUser: true,
      });
    }
    // 准备用户信息
    this.getUserInfo();
  },

  /**
   * 准备用户信息,包括openid及用户身份信息
   * 用户身份信息由云端获取,并对应着hasUserInfo
   */
  getUserInfo: function () {
    let that = this;
    CloudFun.CallWxCloudFun("login", {})
      .then(res => {
        that.globalData.openid = res.openid;
        // 向服务器获取用户信息
        let url = "http://localhost:8080/user/find";
        return API.Request(url, {
          "wechatOpenid": res.openid
        }, "POST", "获取用户信息")
      })
      .then(res => {
        if (res != null && res != "") {
          that.globalData.userInfo = res;
          that.globalData.hasUserInfo = true;
          // 回调广播函数
          if (that.userInfoReadyCallback) {
            that.userInfoReadyCallback();
          }
        } else {
          // 云端无信息
          that.globalData.hasUserInfo = false;
          // 跳转页面
          wx.switchTab({
            url: "/pages/me/me",
          });
          // 显示弹窗
          API.ShowToast("请先注册", "none", 2000);
        }
      })
      .catch(err => {
        // 登陆失败
        console.log("获取用户个人信息失败", err);
      });
  },
});