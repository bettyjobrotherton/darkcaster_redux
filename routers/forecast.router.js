var express = require('express');
var router = express.Router();
var axios = require('axios');
var authorize = require('../middleware/auth.js');

var timeoutConfig = {
  timeout: 5000
};

var apiKey = process.env.APIKEY || require('../config.js').apiKey;

//router.use(authorize);

router.get('/forecast/:latitude,:longitude', function(request, response){
  var url = forecastURLbuilder(request.params.latitude, request.params.longitude);

  axios.get(url, timeoutConfig)
       .then(function(forecast){
         response.send(forecast.data);
       })
       .catch(function(error){
         response.send(error);
       });
});

module.exports = router;

function forecastURLbuilder (latitude, longitude){
    var url = "https://api.darksky.net/forecast/" + apiKey + '/' + latitude + ',' + longitude;
    return url;
}
