/**
 * Created by kendratate on 1/4/17.
 */
(function() {
    angular.module('myListApp')
        .component('todo', {
            controller: todoController,
            templateUrl: "todo/todo.component.html"
        });

    function todoController($location, $rootScope, ListService) {
        var vm = this;
        document.getElementById('todoTitle').focus();
        vm.lists = ListService.getList();
        vm.createList = function () {
            if (vm.viewTitle) {
                vm.lists[vm.viewTitle] = [];
                vm.viewTitle = '';
                ListService.saveList(vm.lists);
            }
            document.getElementById('todoTitle').focus();
        };
        vm.gotoList = function (title) {
            $rootScope.home = 'list';
            $location.path('/list/' + title);
        };
        vm.deleteList = function (title) {
            delete vm.lists[title];
            ListService.saveList(vm.lists);
        };
    }
})();
