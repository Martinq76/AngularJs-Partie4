var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope, $http) {
    $http.get('voiture.json')
    .then(function(reponse) {
        $scope.voitures = reponse.data;
    });
});