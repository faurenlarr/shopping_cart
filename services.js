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
                //
                var addReview = function(rev){
                  $http.post(url, rev).then(function(thingy){
                    console.log(thingy);
                  });
                };

                var seeDetails = function(baeId){
                  return $http.get(url + "/" + baeId);
                };

                return {
                  createBoy: addBoy,
                  getBoy: getBoy,
                  deleteBoy: removeBoy ,
                  addReview: addReview,
                  seeDetails : seeDetails
                    //left side is being defined here, right side has to already exist.
                };



  });

  angular.
    module('boyfriend')
    .factory('CartService', function($http) {
        var url = 'https://tiny-tiny.herokuapp.com/collections/ebaecart';

              var addToCart = function (bae) {
                     $http.post(url, bae).then(function (res) {
                       console.log(res);
                     });
                  };


                  var getBae = function () {
                    return $http.get(url);
                  };

                  var removeBaefromCart= function(boy){
                    var newUrl = url + "/" + boy;
                    console.log(newUrl);
                    $http.delete(newUrl).success(function(data) {
                      console.log("SUCCESS", data);
                    }).error(function(data) {
                      console.log("ERROR", data);
                    });
                  };

                  return {
                    addToCart: addToCart,
                    removeBaefromCart: removeBaefromCart,
                    getBae: getBae,

                  };


});



})();
