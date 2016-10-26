(function() {

  angular.module('forecastApp')
         .factory('LocationService', LocationService);

  LocationService.$inject = ['$window'];

  function LocationService($window){
    var data = JSON.parse($window.localStorage.getItem('data'));

    return {
      get: get,
      create: create,
      update: update,
      delete: remove,
    };

    function get(){
      return data;
    }

    function create(description){
      data.push({ desc: description });
      $window.localStorage.setItem('data', JSON.stringify(data));
      console.log($window.localStorage);
    }

    function update(index, newDescription){
      data.splice(index, 1, { desc: newDescription });
      $window.localStorage.setItem('data', JSON.stringify(data));
    }

    function remove(index){
      data.splice(index, 1);
      $window.localStorage.setItem('data', JSON.stringify(data));
    }
  }

}());
