angular
    .module('toDoList.list')
    .controller('ListCtrl', ListCtrl);

function ListCtrl(todos){
	var vm = this;
	vm.todoData = [];//Array to hold todo text and completedBy
	vm.currentDate = new Date();//current date 

	/*call the $http GET function from todos.service to get the todos data and 
	pass them into the vm.todoData array*/
	todos.getTodos(vm.todoData); 

}