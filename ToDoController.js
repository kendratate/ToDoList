angular.module('myListApp')
    .controller('ToDoCtrl', ['$scope', '$location', '$rootScope', 'ListService', function($scope, $location, $rootScope, ListService) {
        document.getElementById('todoTitle').focus();
        $scope.lists = ListService.getList();
        $scope.createList = function() {
            if ($scope.viewTitle) {
                $scope.lists[$scope.viewTitle] = [];
                $scope.viewTitle = '';
                ListService.saveList($scope.lists);
            }
            document.getElementById('todoTitle').focus();
        };
        $scope.gotoList = function(title) {
            $rootScope.home = 'list';
            $location.path('/list/' + title);
        };
        $scope.deleteList = function(title) {
            delete $scope.lists[title];
            ListService.saveList($scope.lists);
        };
    }]);
