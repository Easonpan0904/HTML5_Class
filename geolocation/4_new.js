window.addEventListener('load', doFirst);

function doFirst() {
  let area = document.getElementById('map');
  let position = new google.maps.LatLng(24.9888768, 121.2284928);
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
