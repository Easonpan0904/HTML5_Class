window.addEventListener('load', doFirst);

function doFirst() {
  // 先跟 HTML 畫面產生關連，再建事件聆聽功能
  // alert(canvas.width);
  let canvas = document.getElementById('canvas');
  let context = canvas.getContext('2d');
  // canvas.addEventListener('mousemove', function (e) {
  //   console.log(e);
  // });
  context.fillStyle = 'red';

  context.font = 'bold 50px Comic Sans MS';
  // context.textBaseline = 'top';

  // 第一個字
  context.strokeText('Hello World!!', 100, 100);
  // 第二個字
  context.shadowColor = 'steelblue';
  context.shadowOffsetX = 3;
  context.shadowOffsetY = 3;
  context.shadowBlur = 5;

  context.fillText('Hello World!!', 100, 200);

  // 第三個字
  context.shadowColor = '#888';
  context.shadowOffsetX = 0;
  context.shadowOffsetY = 3;
  context.shadowBlur = 5;
  context.fillStyle = '#fff';

  context.fillText('Hello World!!', 100, 300);
  // 第四個字 多重陰影
  context.shadowColor = '#f00';
  context.fillText('Hello World!!', 100, 400);
  context.shadowColor = '#00f';
  context.fillText('Hello World!!', 100, 400);

  context.strokeStyle = 'blue';
  context.moveTo(100, 100);
  context.lineTo(400, 100);
  context.stroke();
}
