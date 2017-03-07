angular
    .module('toDoList.completed')
    .controller('CompletedCtrl', CompletedCtrl);

function CompletedCtrl(todos){
	var vm = this;
	vm.todoData = [];//Array to hold todo text and completedBy
	vm.currentDate = new Date();//current date 

	/*call the $http GET function from todos.service to get the todos data and 
	pass them into the vm.todoData array*/
	todos.getContent(vm.todoData); 

	vm.updatedTodo = function(id){
		//call the update function from todos.service and pass in the id and false
		/*todos.updateContent(_id, false);*/
		todos.updateContent(id, false);
	};

}