(function() {
  angular.module('forecastApp')
         .factory('LocationList', LocationList);

  LocationList.$inject = [];

  function LocationList(){
    var data = [' '];

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
      data.push(description);
    }
    function update(index, newDescription){
      data.splice(index, 1, newDescription); //modifies the data array
    }
    function remove(index){
      data.splice(index, 1);
    }

  }
}());
