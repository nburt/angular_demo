(function () {
  var app = angular.module('app', []);

  app.controller('StoreController', ['$scope', function ($scope) {
    $scope.product = {};

    $scope.filter = '-created_at';

    $scope.products = [
      {
        created_at: new Date('2015-01-26 10:04:07 -0600'),
        name: 'Product 1',
        price: 9.99
      },
      {
        created_at: new Date('2015-01-20 10:04:20 -0600'),
        name: 'Product 2',
        price: 10.27
      },
      {
        created_at: new Date('2015-01-23 10:04:28 -0600'),
        name: 'Product 3',
        price: 3.87
      }
    ];

    $scope.addProduct = function () {
      $scope.products.push(
        {
          created_at: new Date(Date.now()),
          name: $scope.product.name,
          price: $scope.product.price
        }
      );
      $scope.reset();
    };

    $scope.reset = function () {
      $scope.product = {};
    };
  }]);
})();