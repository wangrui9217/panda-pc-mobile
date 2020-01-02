(function (doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      console.log(clientWidth)
      if (isPC()) {
        if (clientWidth >= 1850) {
          docEl.style.fontSize = '100px';
        } else if (clientWidth < 1200) {
          docEl.style.fontSize = '65px';
        } else {
          docEl.style.fontSize = 100 * (clientWidth / 1920) + 'px';
        }
      } else {
        docEl.style.fontSize = clientWidth / 10 + 'px'
      }
    };

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

function isPC () {
  var userAgentInfo = navigator.userAgent.toLowerCase()
  var Agents = ['android', 'iphone', 'symbianOS', 'windows phone', 'ipad', 'ipod']
  var flag = true
  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false
      break
    }
  }
  return flag
}
