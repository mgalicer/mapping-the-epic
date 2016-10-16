var map;
var geocoder;

var hannos_journey = [
  ["Straits of Gibraltar", "This is where the Straits of Gibraltar, referred to in Hanno's Journey as the Pillars of Herakles, refer to.", {lat: 35.9794336, lng: -5.9108498}],
  ["Mehdya Morocco", "Hanno says \"after sailing beyond the Pillars for two days, we founded our first city, called Thymiaterion\" which the text identifies with the Moroccan harbor of Mehidya.", {lat: 34.2560985, lng: -6.6797949}],
  ["ras cantin", "Hanno then arrived at Soloeis, which is a rendering of Phoenician Selaim, 'rocks'. Lendering (author of the text commentary) notes that most scholars place them at Cape Cantin.", {lat: 32.5408325, lng: -9.2943104}],
  ["Im'fout, Morocco", "This is the location for Im'fout, Morocco, one of the only modernly identifiable interpretations of Hanno's journey along the Oum er Rbia river in Morocco.", {lat: 33.0457411, lng: -7.7940879}],
  ["Oued Draa, Morocco", "Hanno then travels to the Lixos (Phoenician, Ligs), which is often identified with the river Drâa, which flows into the Atlantic Ocean opposite the Canary Islands.", {lat: 29.5760811, lng: -10.5488409}],
  ["anti-atlas", "This point represents the peak of the Anti-Atlas mountain range, which Lendering says is one of the many options of mountain ranges that Hanno could have seen the Ethiopians.", {lat: 30.3508703, lng: -8.0369582}],
  ["Ad Dakhla", "The text states that \"after sailing eastward for one day, we found in the recess of a bay a small island which had a circumference of five stades. We left settlers there and called it Kerne.\" ", {lat: 23.7057938, lng: -15.980853}],
  ["Bay of Arguin, Mauritania", "description", {lat: 20.590526, lng: -17.5880007}],
  ["Senegal river", "description", {lat: 15.2247605, lng: -15.9179334}],
  ["Cape Mesurado", "description", {lat: 6.3124998, lng: -10.8254215}],
  // ["liberia", "description", {lat: , lng: }],
  ["Gulf of Guinea", "description", {lat: 2.8471754, lng: -3.1699268}],
  ["Cape Three Points", "description", {lat: 4.7430556, lng: -2.0924665}],
  ["Mount Cameroon", "description", {lat: 4.2173911, lng: 9.1027071}],
  ["Corisco bay", "description", {lat: 0.8412265, lng: 9.1673075}],
  ["Libreville", "description", {lat: 0.4114468, lng: 9.2945429}]
];


var mapStyles = [
      {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
      {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
      {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
      {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}]
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}]
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{color: '#263c3f'}]
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{color: '#6b9a76'}]
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{color: '#38414e'}]
      },
      {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{color: '#212a37'}]
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{color: '#9ca5b3'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{color: '#746855'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{color: '#1f2835'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{color: '#f3d19c'}]
      },
      {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{color: '#2f3948'}]
      },
      {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{color: '#17263c'}]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{color: '#515c6d'}]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{color: '#17263c'}]
      }
    ];


var markers = [];
function initMap() {
  map = new google.maps.Map(document.getElementById('map'),
  {
    center: {lat: 24.6571694, lng: 32.4466171},
    zoom: 4,
    styles: mapStyles
  });
  placeMarkers()
};

function placeMarkers(){
  for(var i=0; i < hannos_journey.length; i++){
    var marker = new google.maps.Marker({
      map: map,
      position: hannos_journey[i][2],
      animation: google.maps.Animation.DROP
    });
    makeInfoWindow(marker, hannos_journey[i][1])
  }

}


function makeInfoWindow(marker, description) {
  var infowindow = new google.maps.InfoWindow({
     content: description
   });

  marker.addListener('click', function() {
      infowindow.open(map, marker);
    });
}
