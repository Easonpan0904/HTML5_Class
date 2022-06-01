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
  let file = e.dataTransfer.files[0];
  fileName.innerText = file.name;

  let readFile = new FileReader();
  readFile.readAsDataURL(file);
  readFile.addEventListener('load', function () {
    document.getElementById('myVideo').src = readFile.result;
    document.getElementById('myVideo').controls = true;
  });
}
