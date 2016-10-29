(function() {
  angular.module('forecastApp')
        .factory('WeatherService', WeatherService);

  WeatherService.$inject = ['$http'];

  function WeatherService($http){
    var secretToken = {
      secret: '2Fujnz!*DQ_QHxAt](z28X\H7M/KC@=t6mtP'
    };

    var latitude;
    var longitude;
    var weatherData = [];


    return {
      weatherData: weatherData,
      getWeather: getWeather
    };

    function getWeather(latitude, longitude){
      latitude = latitude;
      longitude = longitude;

      var config = {
        headers: secretToken
      };
      var url = '/forecast/' + latitude + ',' + longitude;
      return $http.get(url, config);
    }
  }
}());
