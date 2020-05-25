//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    isShow: false,
    code: ''
  },
  onLoad: function () {
    app.wxLogin(this);
  },
  onShow(){
    
  }
})
