var express = require('express');
var app = express();
var firebase = require("firebase");
var geocoder;
// require('dotenv').config();
// geocoder = new google.maps.Geocoder();
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/discussion', function (req, res) {
  res.render('discussion')
})


app.listen(app.get('port'), function () {
  console.log('Example app listening on port ' + app.get('port'));
});
