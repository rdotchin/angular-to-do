angular
    .module('toDoList.completed')
    .config(completedConfig);

function completedConfig($stateProvider){
    $stateProvider.state({
        name: 'completed', // name of the route
        url: '/completed', // url endpoint for the route
        templateUrl: '/toDoList/features/completed/completed.html', // The url to the view template
        controller: 'CompletedCtrl', // The name of the controller to use for this route
        controllerAs: 'CompletedVM' // The namespace for the view to access the view model
    });

}