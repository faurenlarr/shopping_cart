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
            template: '<h1>ebae</h1><a href="#/admin">Login as Admin</a><a href="#/customer">Login as Customer</a>',
            controller: 'MainController'
          })

          //CUSTOMER


          .when('/customer', {
            templateUrl: 'views/customer/list.html',
            controller: 'CustController'

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






})();
