var express = require('express');
var app = express();
var firebase = require("firebase");
var geocoder;
// require('dotenv').config();
// geocoder = new google.maps.Geocoder();

app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/discussion', function (req, res) {
  res.render('discussion')
})


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
