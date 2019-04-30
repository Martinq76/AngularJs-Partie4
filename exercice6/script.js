var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
    $scope.hide1 = false;
    $scope.hide2 = false;
    $scope.cacherP2 = function() {
        $scope.hide2 = true;
        $scope.hide1 = false;
    }
    $scope.cacherP1 = function() {
        $scope.hide1 = true;
        $scope.hide2 = false;
    }
});