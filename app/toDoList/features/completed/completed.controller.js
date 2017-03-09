angular
    .module('toDoList.completed')
    .controller('CompletedCtrl', CompletedCtrl);


function CompletedCtrl(todos){
	var vm = this; // vm stands for View Model - anything on "the vm" is exposed to the view
	vm.todoData = [];//Array to hold the todo data, use ng-repeat to display the data in the view

	/*call the function from todos.service containing $http GET to retrieve 
	the todos data from MongoDB and pass them into the vm.todoData array*/
	todos.getContent(vm.todoData); 

	//set <md-checkbox> ng-click to this function
	vm.updatedTodo = function(id){
		//call the update function from todos.service and pass in the id and false
		todos.updateContent(id, false);
	};

}