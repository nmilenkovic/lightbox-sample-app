'use strict';

angular.module('dt-lightbox-app')
  .controller('CallbackCtrl', function ($scope, $routeParams, $location) {
      $scope.$location = $location;
      $scope.callbackUrl =  $location.path();
      $scope.$routeParams = $routeParams;
  });
