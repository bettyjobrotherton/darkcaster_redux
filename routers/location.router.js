var express = require('express');
var router = express();
var axios = require('axios');
var geoAPIkey = process.env.GEOAPI || require('../config.js').geoAPIkey;
var latitude;
var longitude;

var timeoutConfig = {
  timeout: 5000
};

router.get('/', function(request, response){
  var url = convertLocation(locationInput);

  axios.get(url, timeoutConfig)
       .then(function(location){
         latitude = results.geometry.location.lat;
         longitude = results.geometry.location.lng;
         return;
       })
       .catch(function(error){
         response.send(error);
       });
});

function convertLocation(locationInput){
  locationInput = $('.location-input').val();
  var url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + locationInput + '&key=' + geoAPIkey;
  return url;
}

module.exports = router;
