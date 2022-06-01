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
  // 左上角
  context.translate(250, 200); // 位移起始點座標，(250,200) => (0,0)

  context.beginPath();
  context.arc(0, 0, 150, (Math.PI / 180) * 0, (Math.PI / 180) * 180, false);
  context.stroke();
  context.translate(-250, -200);

  // 右上角
  context.translate(750, 200);
  context.beginPath();
  context.arc(0, 0, 150, (Math.PI / 180) * 0, (Math.PI / 180) * 240, true);
  context.stroke();
  context.translate(-750, -200);
  // 左下角 --- 加上放射狀漸層
  context.translate(250, 600);
  context.beginPath();
  context.lineWidth = 20;
  let r = 150;

  let gradient = context.createRadialGradient(0, 0, r * 0.95, 0, 0, r * 1.05);
  gradient.addColorStop(0, '#333');
  gradient.addColorStop(0.5, '#fff');
  gradient.addColorStop(1, '#333');
  context.strokeStyle = gradient;
  context.arc(0, 0, r, (Math.PI / 180) * 0, (Math.PI / 180) * 360, false);
  context.stroke();
  context.translate(-250, -600);
  // 右下角
  context.translate(750, 600);
  context.beginPath();
  context.arc(0, 0, r, (Math.PI / 180) * 60, (Math.PI / 180) * 240);
  context.stroke();
  context.translate(-750, -600);
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
