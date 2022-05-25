// pages/stat/stat.js
import * as echarts from '../../components/ec-canvas/echarts';
const API = require("../../promise/wxAPI.js")
const CloudDB = require("../../promise/wxCloudDB.js")
const app = getApp()

let chart = null;

function initChart(canvas, width, height, dpr) {
  // 设置图表
  chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);

  // 设置展示的数据
  var option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      },
      confine: true
    },
    title: {
      text: '各科室今日就诊人数',
      left: 'center'
    },
    grid: {
      left: 20,
      right: 20,
      bottom: 15,
      top: 40,
      containLabel: true
    },
    xAxis: [{
      type: 'value',
      axisLine: {
        lineStyle: {
          color: '#999'
        }
      },
      axisLabel: {
        color: '#666'
      }
    }],
    yAxis: [{
      type: 'category',
      axisTick: {
        show: false
      },
      data: [],
      axisLine: {
        lineStyle: {
          color: '#999'
        }
      },
      axisLabel: {
        color: '#666'
      }
    }],
    series: [{
      name: '就诊人数',
      type: 'bar',
      label: {
        normal: {
          show: true,
          position: 'inside'
        }
      },
      data: [],
      itemStyle: {
        emphasis: {
          color: '#37a2da'
        }
      }
    }]
  };

  // 获取数据
  let url = "http://localhost:8080/stat/findList";
  API.Request(url, {
      "type": 0
    }, "POST", "获取今日就诊人数")
    .then(res => {
      let data_title = [];
      let data_value = [];
      res.filter(x => {
        data_title.push(x.title);
        data_value.push(x.value);
      })
      option.yAxis[0].data = data_title;
      option.series[0].data = data_value;
      chart.setOption(option);
      return chart;
    })
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    ec: {
      onInit: initChart
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {}
})