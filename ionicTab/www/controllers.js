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

  .controller('CustController', function ($scope, BoyService, CartService, $routeParams) {




        BoyService.seeDetails($routeParams.baeId).success(function(data){
          console.log("custdetail" ,data);
          $scope.Bae = data;
        });

        BoyService.getBoy().success(function (boy) {
          console.log(boy);
          $scope.BoyFace = boy;
        });


            $scope.addReview = function(rev){
              BoyService.addReview(rev);
            };

            $scope.addToCart = function(bae) {
              CartService.addToCart(bae);
              alert('added to cart');

            };



  })
  .controller('CartController', function ($scope, CartService) { //$routeParams

        $scope.testmessage = "string";

          CartService.getBoy().success(function (bae) {
            console.log(bae);
            $scope.CartBaes = bae;
          });

          $scope.removeBaefromCart = function(baeID){
            console.log("HEOFS",baeID);
            CartService.removeBaefromCart(baeID);
          };





  });

})();
