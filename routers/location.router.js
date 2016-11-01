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

router.use(authorize);

router.get('/:location', function(request, response){
  var url = convertLocation(request.params.location);

  axios.get(url, timeoutConfig)
       .then(function(location){
         response.send(location.data);
       })
       .catch(function(error){
         response.send(error);
       });
 });

function convertLocation(location){
  var url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + location + '&key=' + geoAPIkey;
  return url;
}


module.exports = router;
