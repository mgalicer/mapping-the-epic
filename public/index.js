var map;
var geocoder;

var hannos_journey = {
  "Straits of Gibraltar": "description",
  "Mehdya Morocco": "description",
  "cape cantin": "description",
  "Imfout": "description",
  "Morocco": "description",
  "Oued Draa": "description",
  "Morocco": "description",
  "Jbel Sirwa": "description",
  "Ad Dakhla": "description",
  "Arguin": "description",
  "Mauretania": "description",
  "Senegal river": "description",
  "Cape Mesurado": "description",
  "liberia": "description",
  "Gulf of Guinea": "description",
  "Cape Three Points": "description",
  "Ghana": "description",
  "Mount Cameroon": "description",
  "Cameroon": "description",
  "Corisco bay": "description",
  "Libreville": "description",
  "test":"test"
}

var loc_results = results[0].geometry.location;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'),
  {
    center: {lat: 24.6571694, lng: 32.4466171},
    zoom: 4
  });

  geocoder = new google.maps.Geocoder();
  for(var key in hannos_journey){
    console.log(key)
    geocoder.geocode( { 'address': key }, function(results, status) {
      if (status == 'OK') {

      } else {
        console.log("key " + key + "was not successful")
      }

    });
  }
}

