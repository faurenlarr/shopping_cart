(function(){

angular
  .module('boyfriend')
  .controller('MainController', function($scope){

  })

  .controller('AdminController', function ($scope, BoyService) { //$routeParams

      BoyService.getBoy().success(function (boy) {
        console.log(boy);
        $scope.BoyFace = boy;
      });


            var clearForm = function(boy){
              $scope.newBoy.title="";
              $scope.newBoy.image="";
              $scope.newBoy.price="";

            };

           $scope.thingy = function (newBoy) {
                  BoyService.createBoy(newBoy);
                  setTimeout(clearForm,25);

                };


              $scope.removeBoy = function(boy){
                  BoyService.deleteBoy(boy);  //where you call deleteFaces from services

              };

  })

  .controller('CustController', function ($scope, BoyService, CartService) { //$routeParams

      BoyService.getBoy().success(function (boy) {
        console.log(boy);
        $scope.BoyFace = boy;
      });


            var clearForm = function(boy){
              $scope.newBoy.title="";
              $scope.newBoy.image="";
              $scope.newBoy.price="";

            };

            $scope.addToCart = function(bae) {
              CartService.addToCart(bae);
            };





  })
  .controller('CartController', function ($scope, BoyService, CartService) { //$routeParams


          CartService.getBae().success(function (bae) {
            console.log(bae);
            $scope.BoyFace = boy;
          });



            $scope.addToCart = function(bae) {
              CartService.addToCart(bae);
            };





  });

})();
