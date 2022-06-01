window.addEventListener('load', doFirst);

function doFirst() {
  navigator.geolocation.getCurrentPosition(successCallback);
}

function successCallback(e) {
  let latitude = e.coords.latitude;
  let longitude = e.coords.longitude;
  let accuracy = e.coords.accuracy;

  document.getElementById('position').innerHTML = `
    緯度: ${latitude} <br/>
    經度: ${longitude} <br/>
    準確度: ${accuracy} 公尺<br/>
    `;

  let area = document.getElementById('map');
  let position = new google.maps.LatLng(latitude, longitude);
  let options = {
    zoom: 14,
    center: position,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  };
  let map = new google.maps.Map(area, options);
  let marker = new google.maps.Marker({
    position,
    map,
  });

  marker.setTitle('聖德基督學院');
}
