(function() {

  angular.module('forecastApp')
         .controller('HourlyWeatherController', HourlyWeatherController);

  HourlyWeatherController.$inject = ['$scope', 'WeatherService'];

  function HourlyWeatherController($scope, WeatherService){
    $scope.weather = WeatherService.weatherData;

    $scope.$watch(function(){
      return WeatherService.weatherData;
      }, function(){
        $scope.weather = WeatherService.weatherData;
    });

  }


}());
