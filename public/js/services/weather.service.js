(function() {
  angular.module('forecastApp')
        .factory('WeatherService', WeatherService);

  WeatherService.$inject = ['$http'];

  function WeatherService($http){
    var secretToken = {
      secret: '2Fujnz!*DQ_QHxAt](z28X\H7M/KC@=t6mtP'
    };

    var lat;
    var lon;
    var service = {};

    service.weatherData = [];
    service.getWeather = getWeather;
    return service;

    // var weatherData = [];
    //
    //
    // return {
    //   weatherData: weatherData,
    //   getWeather: getWeather
    // };

    function getWeather(latitude, longitude){
      lat = latitude;
      lon = longitude;

      var config = {
        headers: secretToken
      };
      var url = '/forecast/' + lat + ',' + lon;

      return $http.get(url, config)
                  .then(function(response){
        service.weatherData = response.data;
                  });
    }
  }
}());
