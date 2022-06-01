window.addEventListener('load', doFirst);

function doFirst() {
  theFile = document.getElementById('theFile');
  theFile.onchange = fileChange;
}

function fileChange() {
  let file = theFile.files[0];
  console.log(file);
  let message = ``;
  message += `File name: ${file.name} \n`;
  message += `File type: ${file.type} \n`;
  message += `File size: ${file.size} \n`;
  message += `lastModifiedDate: ${file.lastModifiedDate} \n`;

  fileInfo.value = message;
}
