'use strict';

angular
  .module('dt-lightbox-app', [
    'ngRoute',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/error', {
        templateUrl: 'views/callback.html',
        controller: 'CallbackCtrl'
      })
      .when('/success', {
        templateUrl: 'views/callback.html',
        controller: 'CallbackCtrl'
      })
      .when('/cancel', {
        templateUrl: 'views/callback.html',
        controller: 'CallbackCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
