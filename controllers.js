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
              $scope.newBoy.description="";


            };

           $scope.thingy = function (newBoy) {
                  BoyService.createBoy(newBoy);
                  setTimeout(clearForm,25);
                  alert('added to catalog');

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

            //
            // var clearForm = function(boy){
            //   $scope.newBoy.title="";
            //   $scope.newBoy.image="";
            //   $scope.newBoy.price="";
            //
            // };

            $scope.addToCart = function(bae) {
              CartService.addToCart(bae);
              alert('added to cart');

            };





  })
  .controller('CartController', function ($scope, CartService) { //$routeParams


          CartService.getBae().success(function (bae) {
            $scope.BoyFace = bae;
          });

          $scope.removeBaefromCart = function(baeID){
            CartService.removeBaefromCart(baeID);
          };


            // $scope.addToCart = function(bae) {
            //   CartService.addToCart(bae);
            //
            // };





  });

})();
