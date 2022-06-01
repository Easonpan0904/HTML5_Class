window.addEventListener('load', doFirst);

function doFirst() {
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback, { enableHighAccuracy: false, timeout: 5000000, maximumAge: 0 });
}

function successCallback(e) {
  let latitude = e.coords.latitude;
  let longitude = e.coords.longitude;
  let accuracy = e.coords.accuracy;

  if (accuracy > 10000) {
    position.innerHTML = `超過偵測範圍`;
  } else {
    position.innerHTML = `
    緯度: ${latitude} <br/>
    經度: ${longitude} <br/>
    準確度: ${accuracy} 公尺<br/>
    `;
  }
}

function errorCallback(e) {
  position.innerHTML = `
  錯誤碼: ${e.code} <br/>
  錯誤訊息: ${e.message} <br/>
  `;
}
