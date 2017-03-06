angular
	.module('toDoList.component.todoData')
	.directive('todoData', TodoData);

function TodoData(){
	return {
		restrict: 'E', //Directive will be an element <todo-data></todo-data>
		scope: {
			todoData: '=',
		},
		templateUrl: '/toDoList/features/components/todoData/todoData.html',
		controller: TodoDataCtrl, // The function to use as the controller for the directive
		controllerAs: 'TodoDataVM', //The namespace for the view to access the view model
		bindToController: true // The scope is isolated because we are using controllerAs
	};
}

function TodoDataCtrl($http) {
	var vm = this;

	$http({
		method: 'GET',
		url: '/api/todos'
	}).then(function(response){
		/*console.log(response);*/
	});

}