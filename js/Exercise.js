$(document).ready(function () {
  var yudan = "";
  var now = new Date();
  var month = now.getMonth() + 1;
  var date = now.getDate();
  var year = now.getYear();
  if (year < 2000) year = year + 1900;
  document.write(year + " 年 " + yudan + month + " 月 " + date + " 日 ");
  function ShowTime() {
    var NowDate = new Date();
    var h = NowDate.getHours();
    var m = NowDate.getMinutes();
    var s = NowDate.getSeconds();
    document.getElementById('showbox').innerHTML = h + '時' + m + '分' + s + '秒';
    setTimeout('ShowTime()', 1000);
  }

});


