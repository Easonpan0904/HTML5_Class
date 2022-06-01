window.addEventListener('load', doFirst);

function doFirst() {
  let dropzone = document.getElementById('dropzone');
  dropzone.ondragover = dragOver;
  dropzone.ondrop = dropped;
}

function dragOver(e) {
  e.preventDefault();
}
function dropped(e) {
  e.preventDefault();
  let files = e.dataTransfer.files;

  let readFile = new FileReader();

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    readFile.readAsDataURL(file);
    readFile.addEventListener('load', function () {
      // 動態產生 img 標籤
      // 1.先建立標籤
      let image = document.createElement('img');
      // 2.將標籤的屬性和方法先寫好
      image.src = readFile.result;
      // 3.找到父元素，加進去
      dropzone.appendChild(image);

      document.getElementById('image').src = readFile.result;
    });
  }
}
