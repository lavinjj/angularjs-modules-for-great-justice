// register the controller for the app
myViewModule.controller('myController',['$scope', 'myViewModel', function($scope, myViewModel){
    $scope.model = myViewModel;
    $scope.format = 'M/d/yy h:mm:ss a';
}]);