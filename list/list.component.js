/**
 * Created by kendratate on 1/4/17.
 */
(function() {
    angular.module('myListApp')
        .component('list',{
            controller: listController,
            templateUrl: "list/list.component.html"

    });

    function listController($stateParams, $rootScope, $state, ListService) {
        var vm = this;
        document.getElementById('todoItem').focus();
        vm.lists = ListService.getList();
        vm.listTitle = $stateParams.title;

        vm.createItem = function () {
            if (vm.lists[vm.listTitle].indexOf(vm.item) === -1 && vm.item) {
                vm.lists[vm.listTitle].push(vm.item);
                ListService.saveList(vm.lists);
            }
            vm.item = '';
            document.getElementById('todoItem').focus();
        };
        vm.deleteItem = function (item) {
            var currentList = vm.lists[$scope.listTitle];
            currentList.splice(currentList.indexOf(item), 1);
            ListService.saveList(vm.lists);
        };
        vm.goBack = function () {
            $state.go($rootScope.home);
        };
        vm.checkItem = function (e) {
            e.currentTarget.style.opacity = "1.0";
        };
    }
})();


