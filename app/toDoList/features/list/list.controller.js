angular
    .module('toDoList.list')
    .controller('ListCtrl', ListCtrl);

function ListCtrl(todos){
	var vm = this;
	vm.todoData = [];//Array to hold todo text and completedBy
	vm.currentDate = getDate();// current date 

	/*get teh current date, set the hours to 0000 so it can be compared with
	the date in the todo completeBy*/
	function getDate(){
		var currDate = new Date();
		currDate.setHours(0, 0, 0, 0);
		return currDate;	
	}


	/*call the $http GET function from todos.service to get the todos data and 
	pass them into the vm.todoData array*/
	todos.getContent(vm.todoData); 
	
	/*when a checkbox is clicked it will call this function which calls
	the update function in todos.service with the todo _id and true
	passed in.  The todo will be removed from list.html and appear in completed.html*/
	vm.updatedTodo = function(id){
		todos.updateContent(id, true);
	};



}