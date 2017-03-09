angular
    .module('toDoList.create') //no array since we are extending the module from create.module.js
    .config(createConfig);

function createConfig($stateProvider){
    // This will load the state of create since it is a single-page application
    $stateProvider.state({
        name: 'create', // name of the route
        url: '/create', // url endpoint for the route
        templateUrl: '/toDoList/features/create/create.html', // The url to the view template
        controller: 'CreateCtrl', // The name of the controller to use for this route
        controllerAs: 'CreateVM' // The namespace for the view to access the view model
    });
}