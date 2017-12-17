'use strict';

angular.module('myApp.products', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/products', {
    templateUrl: 'products/products.html',
    controller: 'productsCtrl'
  });
}])

.controller('productsCtrl', ['$scope', function($scope) {
  $scope.productsDefault = [
    {
      name: 'Nexus S',
      sku: 'abc',
      description: 'Fast just got faster with Nexus S.',
      brand: 'LG',
      id: 'nexus5'
    }, {
      name: 'Motorola XOOM™ with Wi-Fi',
      sku: 'abc',
      description: 'The Next, Next Generation tablet.',
      brand: 'Moto',
      id: 'motoxoomwifi'
    }, {
      name: 'MOTOROLA XOOM™',
      sku: 'abc',
      description: 'The Next, Next Generation tablet.',
      brand: 'Moto',
      id: 'motoxoom'
    },
    {
      name: 'MOTOROLA XOOM™ Bluetooth',
      sku: 'abc',
      description: 'The Next, Next Generation tablet.',
      brand: 'Moto',
      id: 'motoxoom'
    }
  ];
  $scope.saved = localStorage.getItem('products');
	$scope.products = (localStorage.getItem('products')!==null) ? JSON.parse($scope.saved) : $scope.productsDefault;
  localStorage.setItem('products', JSON.stringify($scope.products));
  
}]);