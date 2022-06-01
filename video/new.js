window.addEventListener('load', doFirst);

function doFirst() {
  // 先跟 HTML 畫面產生關連，再建事件聆聽功能

  myMovie = document.getElementById('myMovie');
  playButton = document.getElementById('playButton');
  stopButton = document.getElementById('stopButton');
  fullButton = document.getElementById('fullButton');
  defaultBar = document.getElementById('defaultBar');
  progress = document.getElementById('progress');

  // 再建事件聆聽功能
  playButton.addEventListener('click', playOrPause);
  defaultBar.addEventListener('click', clickedBar);
  stopButton.addEventListener('click', stopVideo);

  barsize = parseInt(window.getComputedStyle(defaultBar).width); // JS 直接讀取某物件的 CSS 屬性值: window.getComputedStyle(某物件).屬性
  // console.log(barsize);

  // 全螢幕
  // fullButton.addEventListener('click', function () {
  //   myMovie.webkitEnterFullScreen();
  // });
}

function playOrPause(e) {
  // 影片正在跑, 影片既非暫停『且』非結束
  if (!myMovie.paused && !myMovie.ended) {
    myMovie.pause();
    playButton.innerText = 'play';
  } else {
    // 影片暫停了『或是』結束了
    myMovie.play();
    playButton.innerText = 'pause';
    setInterval(update, 300);
  }
}

function stopVideo() {
  progress.style.width = `0px`;
  playButton.innerText = 'play';
  myMovie.currentTime = 0;
}

function update() {
  if (!myMovie.ended) {
    let size = (barsize / myMovie.duration) * myMovie.currentTime;
    progress.style.width = `${size}px`;
  } else {
    progress.style.width = `0px`;
    playButton.innerText = 'play';
    myMovie.currentTime = 0;
  }
}

function clickedBar(e) {
  let mouseX = e.offsetX;
  progress.style.width = `${mouseX}px`;
  myMovie.currentTime = mouseX / (barsize / myMovie.duration);
  // console.log(e.offsetX);
}
