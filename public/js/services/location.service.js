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

    return {
      get: get,
      create: create,
      update: update,
      delete: remove,
      reset: reset,
      redirect: redirect
    };

    function get(){
      return userLocal;
    }

    function create(description){
      userLocal.push({ desc: description });
      $window.localStorage.setItem('userLocal', JSON.stringify(userLocal));
      console.log($window.localStorage);
    }

    function update(index, newDescription){
      userLocal.splice(index, 1, { desc: newDescription });
      $window.localStorage.setItem('userLocal', JSON.stringify(userLocal));
    }

    function remove(index){
      userLocal.splice(index, 1);
      $window.localStorage.setItem('userLocal', JSON.stringify(userLocal));
    }

    function reset(){
      userLocal = [ ];
      $window.localStorage.setItem('userLocal', JSON.stringify(userLocal));
    }

    function redirect(userLocal){
      var url = '/' + userLocal;
      return $http.get(url, config);
      
    }

  }

}());
