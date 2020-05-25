//app.js
const sa = require('./utils/sensors');
sa.setPara({
  server_url: 'https://test-syg.datasink.sensorsdata.cn/sa?project=xubo&token=27f1e21b78daf376'
});
wx.login({
  success: function(code){
    if(res.code){
      wx.request({
        url: '获取 openid 的url',
        success: function(res){
          sa.setOpenid(res.openid);
          sa.init();
        }
      });
    }
    
  }
})
// sa.init();
App({
  onLaunch: function () {
    
  },
  wxLogin: function(that){
    wx.login({
      success: function(res){
        that.setData({
          isShow: true,
          code: res.code
        });
      }
    })
  },
  globalData: {
    
  }
})