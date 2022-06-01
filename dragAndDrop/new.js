window.addEventListener('load', doFirst);

function doFirst() {
  image = document.getElementById('image');
  image.addEventListener('dragstart', startDrag);
  image.addEventListener('dragend', endDrag);

  rightbox = document.getElementById('rightbox');
  rightbox.addEventListener('dragenter', function (e) {
    e.preventDefault();
  });
  rightbox.addEventListener('dragover', function (e) {
    e.preventDefault();
  });
  rightbox.addEventListener('drop', dropped);
}

function startDrag(e) {
  let data = `<img src="${image.src}" class="object-cover" />`;
  e.dataTransfer.setData('image/jpeg', data); // setData(type,data) type 參數請用自訂名稱
}
function endDrag() {
  // image.style.visibility = 'hidden';
  image.style.display = 'none';
}
function dropped(e) {
  e.preventDefault();
  rightbox.innerHTML = e.dataTransfer.getData('image/jpeg');
}
