(function() {

  angular.module('forecastApp')
         .controller('HomeController', HomeController);

  HomeController.$inject = ['$scope', 'LocationService', 'WeatherService'];

  function HomeController($scope, LocationService, WeatherService){
    //$scope.locations = LocationService.get();
    //$scope.setLocation = setLocation;
    $scope.getWeather = getWeather;

    function getWeather(latitude, longitude){
      WeatherService.getWeather(latitude, longitude)
                    .then(function(response){
                      $scope.weather = response.data;
                    });

    }

    //function setLocation(newLocation){
      //LocationService.reset();
      //LocationService.create(newLocation);
      //LocationService.redirect(newLocation)
      //               .then(function(response){
      //     $scope.latitude =
      //     $Scope.longitude =   
    //});
  //  }
  }

}());
