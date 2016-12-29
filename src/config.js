(function() {
  vConsole.removePlugin('network');

  // var wx = {version: {version: 0, updateTime: 'xxxx.xx.xx'}}
  if (!!wx && !!wx.version) {
    console.info('[system]', 'WeChatLib:', wx.version.version + ' (' + wx.version.updateTime + ')');
  }
  
  var wxVConsoleTab = new vConsole.VConsolePlugin('wechat', 'WeChat');
  wxVConsoleTab.on('init', function() {

  });
  wxVConsoleTab.on('renderTab', function(callback) {
    var html = [
      '<div style="padding:6px 8px;border-bottom:1px solid #EEE">', // wx.clearStorage()
        '<a style="border:1px solid #D9D9D9; background:#efeff4; display:inline-block; padding:6px 8px; color:#000;" href="javascript:;" onclick="wx.clearStorage();">wx.clearStorage()</a>',
      '</div>'
    ];
    callback(html.join(''));
  });
  vConsole.addPlugin(wxVConsoleTab);
})();
