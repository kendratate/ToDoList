/**
 * Created by kendratate on 12/15/16.
 */
(function(){
angular.module('myListApp', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {  //ui.router always goes in config block
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('about', {
                url: '/',
                templateUrl: 'about.html',

                })
            .state('ToDo', {
                url: '/ToDo',
                templateUrl: 'ToDo.html',
                controller: 'ToDoCtrl'
            })
            .state('list', {
                url: '/list/:title',
                templateUrl: 'list.html',
                controller: 'listCtrl'
            })


    })


})();