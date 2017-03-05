angular
    .module('toDoList', [
        // Global Dependencies
        'ui.router',
        //features
        'toDoList.create',
        'toDoList.list'
    ])
    .config(toDoListConfig);

function toDoListConfig($urlRouterProvider) {
    //configure the application

    // If the URL does not exist as a route, redirect to /
    $urlRouterProvider.otherwise('/')
}