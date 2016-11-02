(function() {

  angular.module('forecastApp')
         .controller('MinuteWeatherController', MinuteWeatherController);

  MinuteWeatherController.$inject = ['$scope', 'WeatherService'];

  function MinuteWeatherController($scope, WeatherService){
    $scope.weather = WeatherService.weatherData;

    $scope.$watch(function(){
      return WeatherService.weatherData;
      }, function(){
        $scope.weather = WeatherService.weatherData;
    });

  }


}());
