(function() {

  angular.module('forecastApp')
         .controller('Geolocater', Geolocater);

  Geolocater.$inject =  ['$scope', 'LocationList','FindLatLng'];

  function Geolocater($scope, LocationList, FindLatLng){
    $scope.locations = LocationList.get;
    $scope.createLocation = createLocation;

    function createLocation(newLocation){
      LocationList.create(newLocation);
      $scope.newLocation = ' ';
      console.log(LocationList.get);
    }
  }
}());
