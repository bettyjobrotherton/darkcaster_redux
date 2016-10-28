(function() {

  angular.module('forecastApp')
         .controller('HomeController', HomeController);

  HomeController.$inject = ['$scope', 'LocationService'];

  function HomeController($scope, LocationService){
    $scope.locations = LocationService.get();
    $scope.setLocation = setLocation;

    function setLocation(newLocation){
      LocationService.reset();
      LocationService.create(newLocation);
      LocationService.redirect();
    }
  }

}());
