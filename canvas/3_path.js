window.addEventListener('load', doFirst);

function doFirst() {
  // 先跟 HTML 畫面產生關連，再建事件聆聽功能
  // alert(canvas.width);
  let canvas = document.getElementById('canvas');
  let context = canvas.getContext('2d');
  canvas.addEventListener('mousemove', function (e) {
    console.log(e);
  });

  context.fillStyle = 'red';
  context.strokeStyle = 'blue';
  context.lineWidth = 5;

  context.moveTo(100, 100);
  context.lineTo(250, 250);
  context.lineTo(400, 50);
  context.lineTo(50, 250);
  context.closePath();
  context.stroke();
}
