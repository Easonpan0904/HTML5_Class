window.addEventListener('load', doFirst);

function doFirst() {
  // 先跟 HTML 畫面產生關連，再建事件聆聽功能
  // alert(canvas.width);
  let canvas = document.getElementById('canvas');
  let context = canvas.getContext('2d');
  // canvas.addEventListener('mousemove', function (e) {
  //   console.log(e);
  // });

  for (let i = 0; i < 100; i++) {
    // 水平線
    context.moveTo(0, 50 * i);
    context.lineTo(canvas.width, 50 * i);
    context.fillText(50 * i, 0, 50 * i);

    // 垂直線
    context.moveTo(50 * i, 0);
    context.lineTo(50 * i, canvas.height);
    context.fillText(50 * i, 50 * i, 10);
  }

  context.strokeStyle = 'rgba(0,0,0,0.3)';

  context.stroke();
}
