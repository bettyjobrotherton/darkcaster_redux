(function() {

  angular.module('forecastApp')
         .controller('CurrentWeatherController', CurrentWeatherController);

  CurrentWeatherController.$inject = ['$scope','WeatherService', 'CompassService'];

  function CurrentWeatherController($scope, WeatherService, CompassService){
    $scope.weather = WeatherService.weatherData;
    //$scope.windDirection = CompassService.compass;

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
