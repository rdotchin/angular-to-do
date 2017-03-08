angular
    .module('toDoList.list')
    .controller('ListCtrl', ListCtrl);

function ListCtrl(todos){
	var vm = this;
	vm.todoData = [];//Array to hold todo text and completedBy
	vm.currentDate = getDate();//current date 


	function getDate(){
		var currDate = new Date();
		currDate.setHours(0, 0, 0, 0);
		return currDate;	
	}


	/*call the $http GET function from todos.service to get the todos data and 
	pass them into the vm.todoData array*/
	todos.getContent(vm.todoData); 
	
	/*when checkbox is clicked it will call this function whichcalls
	the update function in todos.service with the todo _id and true
	passed in*/
	vm.updatedTodo = function(id){
		todos.updateContent(id, true);
	};



}