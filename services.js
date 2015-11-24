(function(){
"use strict";
angular.
  module('boyfriend')
  .factory('BoyService', function($http) {
      var url = 'http://tiny-tiny.herokuapp.com/collections/ebae';

      var addBoy = function (newBoy) {
             $http.post(url, newBoy).then(function (res) {
               console.log(res);
             });
          };

                var getBoy = function () {
                  return $http.get(url);
                };

                var removeBoy = function(boy){
                  $http.delete(url+'/'+boy._id); //create function here, pass in below, call deleteFaces in controllers
                };

                return {
                  createBoy: addBoy,
                  getBoy: getBoy,
                  deleteBoy: removeBoy //left side is being defined here, right side has to already exist.
                };


  });

  angular.
    module('boyfriend')
    .factory('CartService', function($http) {
        var url = 'http://tiny-tiny.herokuapp.com/collections/ebaecart';

              var addToCart = function (bae) {
                     $http.post(url, bae).then(function (res) {
                       console.log(res);
                     });
                  };

  
                  var getBoy = function () {
                    return $http.get(url);
                  };

                  var removeBaefromCart= function(boy){
                    $http.delete(url+'/'+boy._id); //create function here, pass in below, call deleteFaces in controllers
                  };

                  return {
                    addToCart: addToCart,
                    removeBaefromCart : removeBaefromCart
                  };


});



})();
