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
    $scope.location = LocationService.getLocal();
    // $scope.log = log;

    $scope.firstImpression = true;
    $scope.current = false;

    function setLocation(newLocation){
      LocationService.reset();
      LocationService.create(newLocation);
      LocationService.redirect(newLocation);


      $scope.$watch(function(){
        return LocationService.getLat();
        }, function(){
          $scope.latitude = LocationService.getLat();
          $scope.longitude = LocationService.getLng();
          $scope.location = LocationService.getLocal();
          WeatherService.getWeather($scope.latitude, $scope.longitude);
      });

      $scope.$watch(function(){
        return WeatherService.weatherData;
        }, function(){
          $scope.weather = WeatherService.weatherData;
          $scope.firstImpression = false;
          $scope.current = true;
      });

    }

  }

  // function log(){
  //   console.log($scope.latitude);
  //   console.log(WeatherService.weatherData);
  // }

}());
