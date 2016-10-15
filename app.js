var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('index');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

var hannos_journey = ["Straits of Gibraltar", "Mehdya, Morocco", "cape cantin", "Im'fout, Morocco", "Oued Draa, Morocco", "Jbel Sirwa", "Ad Dakhla", "Arguin, Mauretania", "Senegal river", "Cape Mesurado, liberia", "Gulf of Guinea", "Cape Three Points, Ghana", "Mount Cameroon, Cameroon", "Corisco bay", "Libreville"]


