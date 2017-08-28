$(document).ready(function () {
  function current() {
    var d = new Date(), str = '';
    str += d.getFullYear() + '年'; //獲取當前年份 
    str += d.getMonth() + 1 + '月'; //獲取當前月份（0——11） 
    str += d.getDate() + '日';
    str += d.getHours() + '時';
    str += d.getMinutes() + '分';
    str += d.getSeconds() + '秒';
    return str;
  }
  setInterval(function () { $("#nowTime").html(current) }, 1000);
});




