'use strict';

angular.module('myApp.product', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/product/:productId/:action', {
    templateUrl: 'product/product.html',
    controller: 'productCtrl'
  });
}])

.controller('productCtrl', ['$routeParams', '$scope', function($routeParams, $scope) {
  $scope.productId = $routeParams.productId;
  $scope.action = $routeParams.action;

  $scope.product = $scope.action === 'create' ? {} : JSON.parse(localStorage.getItem('products')).filter(function (product) {
    return product.id == $scope.productId;
  })[0];
}]);