// miniprogram/db/news_db.js
// 对应数据库中 news

const API = require("../promise/wxAPI.js");

function getNewsList() {
  return new Promise(function (resolve, reject) {
    // 向服务器获取用户信息
    let url = "http://localhost:8080/news";
    return API.Request(url, {}, "GET", "获取公告")
  });
}

module.exports = {
  getNewsList
}