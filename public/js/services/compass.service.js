(function() {

  angular.module('forecastApp')
         .factory('CompassService', CompassService);

  CompassService.$inject = [];

  function CompassService(){
    var service = {};

    service.compass = [];
    service.find = find;
    return service;

    function find(winDir){
      if(isNaN(winDir) || winDir > 348.75 || winDir < 11.25){
        service.compass = 'N';
        return;
      } else if(winDir > 11.25 && winDir < 33.75){
        service.compass = 'NNE';
        return;
      } else if(winDir > 33.75 && winDir < 56.25){
        service.compass = 'NE';
        return;
      } else if(winDir > 56.25 && winDir < 78.75){
        service.compass = 'ENE';
        return;
      } else if(winDir > 78.75 && winDir < 101.25){
        service.compass = 'E';
        return;
      } else if(winDir > 101.25 && winDir < 123.75){
        service.compass = 'ESE';
        return;
      } else if(winDir > 123.75 && winDir < 146.25){
        service.compass = 'SE';
        return;
      } else if(winDir > 146.25 && winDir < 168.75){
        service.compass = 'SSE';
        return;
      } else if(winDir > 168.75 && winDir < 191.25){
        service.compass = 'S';
        return;
      } else if(winDir > 191.25 && winDir < 213.75){
        service.compass = 'SSW';
        return;
      } else if(winDir > 213.75 && winDir < 236.25){
        service.compass = 'SW';
        return;
      } else if(winDir > 236.25 && winDir < 258.75){
        service.compass = 'WSW';
        return;
      } else if(winDir > 258.75 && winDir < 281.25){
        service.compass = 'W';
        return;
      } else if(winDir > 281.25 && winDir < 303.75){
        service.compass = 'WNW';
        return;
      } else if(winDir > 303.75 && winDir < 326.25){
        service.compass = 'NW';
        return;
      } else {
        service.compass = 'NNW';
        return;
      }
    }
  }

}());
