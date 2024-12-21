// 定义背景图片样式类数组
var bgClasses = ["bg-image1", "bg-image2"];
var currentIndex = 0;
function changeBackground() {
  var body = document.getElementsByTagName("body")[0];
  // 移除当前的背景图片类
  body.className = body.className.replace(bgClasses[currentIndex], "");
  // 更新索引，实现循环切换
  currentIndex = (currentIndex + 1) % bgClasses.length;
  // 添加新的背景图片类
  body.className += " " + bgClasses[currentIndex];
}
// 每隔一定时间切换背景（这里是10秒，可根据需要调整）
setInterval(changeBackground, 6000);
