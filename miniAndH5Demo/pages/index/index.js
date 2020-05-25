//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    distinctID : ''
  },
  onLoad: function () {
    
  },
  onShow(){
    const distinctID = app.sensors.quick('getAnonymousID');
    this.setData({
      distinctID
    });
  }
})
