(function() {

  angular.module('forecastApp')
         .controller('HourlyWeatherController', HourlyWeatherController);

  HourlyWeatherController.$inject = ['$scope', 'WeatherService', 'CompassService'];

  function HourlyWeatherController($scope, WeatherService, CompassService){
    $scope.weather = WeatherService.weatherData;

    $scope.$watch(function(){
      return WeatherService.weatherData;
      }, function(){
        $scope.weather = WeatherService.weatherData;
        $scope.windDirNum = WeatherService.weatherData.currently.windBearing;
    });

    CompassService.find($scope.windDirNum);
    $scope.windDirection = CompassService.compass;
  }

}());
