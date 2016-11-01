(function() {

  angular.module('forecastApp')
         .controller('HomeController', HomeController);

  HomeController.$inject = ['$scope', 'LocationService', 'WeatherService'];

  function HomeController($scope, LocationService, WeatherService){
    $scope.locations = LocationService.get();
    $scope.setLocation = setLocation;
    $scope.weather = WeatherService.weatherData;
    $scope.latitude = LocationService.getLat();
    $scope.longitude = LocationService.getLng();
    // $scope.log = log;

    function setLocation(newLocation){
      LocationService.reset();
      LocationService.create(newLocation);
      LocationService.redirect(newLocation);


      $scope.$watch(function(){
        return LocationService.getLat();
        }, function(){
          $scope.latitude = LocationService.getLat();
          $scope.longitude = LocationService.getLng();
          WeatherService.getWeather($scope.latitude, $scope.longitude);
      });

      $scope.$watch(function(){
        return WeatherService.weatherData;
        }, function(){
          $scope.weather = WeatherService.weatherData;
          console.log($scope.weather);
      });

    }

  }

  // function log(){
  //   console.log($scope.latitude);
  //   console.log(WeatherService.weatherData);
  // }

}());
