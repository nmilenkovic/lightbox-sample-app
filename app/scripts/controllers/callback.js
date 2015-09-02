'use strict';

angular.module('dt-lightbox-app')
  .controller('CallbackCtrl', function ($scope, $route, $routeParams, $location) {
      $scope.$route = $route;
      $scope.$location = $location;
      $scope.callbackUrl =  $location.path();
      $scope.$routeParams = $routeParams;

  });
