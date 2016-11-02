(function() {

  angular.module('forecastApp')
         .controller('DailyWeatherController', DailyWeatherController);

  DailyWeatherController.$inject = ['$scope', 'WeatherService'];

  function DailyWeatherController($scope, WeatherService){
    $scope.weather = WeatherService.weatherData;

    $scope.$watch(function(){
      return WeatherService.weatherData;
      }, function(){
        $scope.weather = WeatherService.weatherData;
    });

  }


}());
