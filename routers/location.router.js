var express = require('express');
var router = express.Router();
var axios = require('axios');
var authorize = require('../middleware/auth.js');
var path = require('path');

var apiKey = process.env.APIKEY || require('../config.js').apiKey;
var geoAPIkey = process.env.GEOAPI || require('../config.js').geoAPIkey;

var latitude;
var longitude;

var timeoutConfig = {
  timeout: 5000
};

//router.use(authorize);

router.get('/:location', function(request, response){
  var url = convertLocation(request.params.location);

  axios.get(url, timeoutConfig)
       .then(function(res){
         latitude = res.data.results[0].geometry.location.lat;
         longitude = res.data.results[0].geometry.location.lng;
         //return axios.get(forecastURLbuilder(latitude, longitude));
         response.json(latitude);
         response.json(longitude);
       })
      //  .then(function(weather){
      //    response.send(weather.data);
      //  })
       .catch(function(error){
         response.send(error);
       });
 });

 function forecastURLbuilder (latitude, longitude){
     var url = "https://api.darksky.net/forecast/" + apiKey + '/' + latitude + ',' + longitude;
     return url;
 }

function convertLocation(location){
  var url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + location + '&key=' + geoAPIkey;
  return url;
}


module.exports = router;
