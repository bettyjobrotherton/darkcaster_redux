(function() {
  angular.module('forecastApp')
         .factory('FindLatLng', FindLatLng);

    FindLatLng.$inject = [];

    function FindLatLng(){
      var data = [' '];

      return {
        get: get,
      };

      function get(data){
        window.location = '/' + data;
      }

    }

}());
