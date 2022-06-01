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

  context.beginPath();
  context.moveTo(0, canvas.height / 2);
  context.lineTo(canvas.width, canvas.height / 2);
  context.moveTo(canvas.width / 2, 0);
  context.lineTo(canvas.width / 2, canvas.height);
  context.strokeStyle = 'rgba(0,0,0,0.7)';
  context.stroke();
  // -----------------------------

  context.lineWidth = 5;
  context.strokeStyle = 'red';

  // 左上角

  context.beginPath();
  context.moveTo(150, 250);
  context.arcTo(275, 100, 350, 300, 120);
  context.stroke();

  //輔助線
  context.strokeStyle = 'blue';
  context.lineWidth = 1;
  context.beginPath();
  context.moveTo(150, 250);
  context.lineTo(275, 100);
  context.lineTo(350, 300);
  context.stroke();

  // 右上角
  context.beginPath();

  context.stroke();
  // 左下角
  context.beginPath();

  context.stroke();

  // 右下角
  context.beginPath();

  context.stroke();
}

const loadImage = () => {
  context.globalAlpha = 0.5;

  context.drawImage(pic1, 0, 0, canvas.width, canvas.height);

  context.globalAlpha = 1;

  context.drawImage(pic2, 0, 0, 300, 300);
  context.drawImage(pic2, canvas.width - 300, 0, 300, 300);
  context.drawImage(pic2, canvas.width - 300, canvas.height - 300, 300, 300);
  context.drawImage(pic2, 0, canvas.height - 300, 300, 300);
};
