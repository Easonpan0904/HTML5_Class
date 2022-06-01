window.addEventListener('load', doFirst);

function doFirst() {
  // 先跟 HTML 畫面產生關連，再建事件聆聽功能
  // alert(canvas.width);
  let canvas = document.getElementById('canvas');
  context = canvas.getContext('2d');
  // canvas.addEventListener('mousemove', function (e) {
  //   console.log(e);
  // });
  context.beginPath();

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

  // --------------四分之一線--------------

  // context.beginPath();
  // context.moveTo(0, canvas.height / 2);
  // context.lineTo(canvas.width, canvas.height / 2);
  // context.moveTo(canvas.width / 2, 0);
  // context.lineTo(canvas.width / 2, canvas.height);
  // context.strokeStyle = 'rgba(0,0,0,0.7)';
  // context.stroke();
  // -----------------------------

  context.lineWidth = 15;
  context.strokeStyle = 'red';

  let gradient = context.createLinearGradient(100, 100, 600, 100);
  gradient.addColorStop(0, 'red');
  gradient.addColorStop(0.5, 'yellow');
  gradient.addColorStop(1, 'blue');

  context.fillStyle = gradient;
  context.fillRect(100, 100, 500, 300);
}
