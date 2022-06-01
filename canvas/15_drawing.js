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
  canvas.addEventListener('mousemove', usePen);
}

function usePen(e) {
  context.fillStyle = 'red';
  context.strokeStyle = 'red';
  // console.log(e);
  // 矩形畫筆
  // context.fillRect(e.pageX, e.pageY, 5, 5);
  // 圓形畫筆
  context.beginPath();
  context.arc(e.pageX, e.pageY, 5, (Math.PI / 180) * 0, (Math.PI / 180) * 360);
  context.fill();
  context.stroke();
}
