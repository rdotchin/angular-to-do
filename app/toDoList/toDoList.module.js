angular
    .module('toDoList', [
        // Global Dependencies
        'ui.router',
        'ngMaterial', //Angular Material
        //features
        'toDoList.create',
        'toDoList.list',
        'toDoList.completed',
        //components
        'toDoList.component.tabs',
    ])
    .config(toDoListConfig);

function toDoListConfig($urlRouterProvider) {
    //configure the application

    // If the URL does not exist as a route, redirect to /
    $urlRouterProvider.otherwise('/')
}