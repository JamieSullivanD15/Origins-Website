function myMap() {
  var latLng = {lat: 53.350733, lng: -6.283442}

  var mapOptions = {
      center: new google.maps.LatLng(latLng),
      zoom: 18,
      mapTypeId: google.maps.MapTypeId.ROADMAP
  }

  var map = new google.maps.Map(document.getElementById("map"), mapOptions);

  var marker = new google.maps.Marker({
    position: latLng,
    map: map
  });
}

var menuIsOpen = false;

function openSideMenu() {
  if (menuIsOpen) {
    document.getElementById('mobile-menu').style.width = '0px';
    menuIsOpen = !menuIsOpen;
  } else {
    document.getElementById('mobile-menu').style.width = '250px';
    menuIsOpen = !menuIsOpen;
  }
}

function closeSideMenu() {
  document.getElementById('mobile-menu').style.width = '0px';
  menuIsOpen = !menuIsOpen;
}

console.log('JavaScript files are working.');
