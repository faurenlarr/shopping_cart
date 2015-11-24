(function () {
  "use strict";

angular
    .module('boyfriend', [
        'ngRoute',
        // 'underscore',
        // 'moment'
    ])
    .config(function ($routeProvider) {
        $routeProvider
          .when('/', {
            template: '<h2>{ ebae }</h2><article><a href="#/admin" class="admin">Log in as Admin</a></article><article><a href="#/customer" class="customer">Log in as Customer</a></article>',
            controller: 'MainController'
          })

          //CUSTOMER


          .when('/customer', {
            templateUrl: 'views/customer/list.html',
            controller: 'CustController'
          })

          .when('/customer/:baeId', {
          templateUrl: 'views/customer/show.html',
          controller: 'CustController'
        })

          .when('/customer/cart', {
            templateUrl: 'views/customer/cart.html',
            controller: 'CartController'
          })



          //ADMIN
          .when('/admin', {
            templateUrl: 'views/manyfaces/list.html',
            controller: 'AdminController'

          })

          .when('/admin/addBoyfriend', {
            templateUrl: 'views/manyfaces/create.html',
            controller: 'AdminController'
          })


          .when('/404', {
            templateUrl: 'views/404.html'
          })
          .otherwise({ redirectTo: '/404'});

      });


      angular
          .module('underscore', [])
          .factory('_', function ($window) {
            return $window._;
          });
        angular
          .module('moment', [])
          .factory('moment', function ($window) {
            return $window.moment;
          });




})();
