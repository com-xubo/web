//app.js
const sa = require('./utils/sensors');
sa.setPara({
  server_url: 'https://test-syg.datasink.sensorsdata.cn/sa?project=xubo&token=27f1e21b78daf376'
});
sa.init();
App({
  onLaunch: function () {
    
  },
  globalData: {
    
  }
})