angular
    .module('toDoList.create') //extending the module from create.module.js
    .controller('CreateCtrl', CreateCtrl);

function CreateCtrl(todos){
	var vm = this; // vm stands for View Model - anything on "the vm" is exposed to the view

	//reset the text input and Datepicker 
	function resetView(){
  		vm.todo = {
  			todoText: '',
  			completeBy: ''
  		};	
  	}
	
  	//set ng-click to addTodo() then call the create function from todos.service
  	vm.addTodo = function(){
      // call the create function from todos.service and pass in the new todos text and date
  		todos.createContent(vm.todo.todoText, vm.todo.completeBy); 
  		resetView(); //reset the input fields
  	};
}