var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
    $scope.hide = false;
    $scope.cacher = function() {
        $scope.hide = true;
    }
    $scope.afficher = function() {
        $scope.hide = false;
    }
});