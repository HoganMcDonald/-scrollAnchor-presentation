//angular module
var app = angular.module('angularPresentation', []);

//main controller
app.controller('mainController', ['$scope', '$location', '$anchorScroll',
  function($scope, $location, $anchorScroll) {
    $anchorScroll.yOffset = 50;

    $scope.nextText = function() {
      $location.hash('text1');
    };

    $scope.nextImage = function() {
      console.log($location);
      $location.hash('image2');
      $anchorScroll();
    };

    $scope.bringTop = function() {
      $location.hash('image1');
      $anchorScroll();
    };

  }
]);
