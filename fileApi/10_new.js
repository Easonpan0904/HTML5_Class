window.addEventListener('load', doFirst);

function doFirst() {
  theFile = document.getElementById('theFile');
  theFile.onchange = fileChange;
}

function fileChange() {
  let files = theFile.files;
  let message = ``;

  for (let i = 0; i < files.length; i++) {
    const element = files[i];
    message += `File name: ${files[i].name} \n`;
    message += `File type: ${files[i].type} \n`;
    message += `File size: ${files[i].size} \n`;
    message += `lastModifiedDate: ${files[i].lastModifiedDate} \n`;
    message += `================= \n`;
  }

  fileInfo.value = message;
}
