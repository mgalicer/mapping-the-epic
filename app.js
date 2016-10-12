var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 24.6571694, lng: 32.4466171},
    zoom: 4
  });
}
var hannos_journey = ["Straits of Gibraltar", "Mehdya, Morocco", "cape cantin", "Im'fout, Morocco", "Oued Draa, Morocco", "Jbel Sirwa", "Ad Dakhla", "Arguin, Mauretania", "Senegal river", "Cape Mesurado, liberia", "Gulf of Guinea", "Cape Three Points, Ghana", "Mount Cameroon, Cameroon", "Corisco bay", "Libreville"]