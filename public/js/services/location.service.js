(function() {

  angular.module('forecastApp')
         .factory('LocationService', LocationService);

  LocationService.$inject = ['$window', '$http'];

  function LocationService($window, $http){
    var secretToken = {
      secret: '2Fujnz!*DQ_QHxAt](z28X\H7M/KC@=t6mtP'
    };

    var config = {
      headers: secretToken
    };

    var userLocal = JSON.parse($window.localStorage.getItem('userLocal'));
    var latitude;
    var longitude;

    return {
      get: get,
      create: create,
    // update: update,
    // delete: remove,
      reset: reset,
      redirect: redirect,
      getLat: getLat,
      getLng: getLng
    };

    function get(){
      return userLocal;
    }

    function create(description){
      userLocal.push({ desc: description });
      $window.localStorage.setItem('userLocal', JSON.stringify(userLocal));
    }

    // function update(index, newDescription){
    //   userLocal.splice(index, 1, { desc: newDescription });
    //   $window.localStorage.setItem('userLocal', JSON.stringify(userLocal));
    // }
    //
    // function remove(index){
    //   userLocal.splice(index, 1);
    //   $window.localStorage.setItem('userLocal', JSON.stringify(userLocal));
    // }

    function reset(){
      userLocal = [ ];
      $window.localStorage.setItem('userLocal', JSON.stringify(userLocal));
    }

    function redirect(userLocal){
      var url = '/' + userLocal;

      return $http.get(url, config)
                  .then(function(response){
        latitude = response.data.results[0].geometry.location.lat;
        longitude = response.data.results[0].geometry.location.lng;
        console.log(latitude + ', ' + longitude);
      });
    }

    function getLat(){
      return latitude;
    }

    function getLng(){
      return longitude;
    }
  }

}());
