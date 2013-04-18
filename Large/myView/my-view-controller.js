// register the controller for the app
angular.module('my-view-controller', []).controller('myController',['$scope', function($scope){
    $scope.format = 'M/d/yy h:mm:ss a';
}]);