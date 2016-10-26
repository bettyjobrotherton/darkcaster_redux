(function() {

  angular.module('forecastApp')
         .controller('HomeController', HomeController);

  HomeController.$inject = ['$scope', 'LocationService'];

  function HomeController($scope, LocationService){
    $scope.locations = LocationService.get();
    $scope.createLocation = createLocation;

    function createLocation(newLocation){
      LocationService.create(newLocation);
    }
  }

}());
