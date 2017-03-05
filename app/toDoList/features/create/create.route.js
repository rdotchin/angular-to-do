angular
    .module('toDoList.create') //no array since we are extending the module from create.module.js
    .config(createConfig);

function createConfig($stateProvider){
    // This will load the state of create since it is a single-page application
    $stateProvider.state({
        name: 'create',
        url: '/create',
        templateUrl: '/toDoList/features/create/create.html',
        controller: 'CreateCtrl',
        controllerAs: 'CreateVM'
    });
}