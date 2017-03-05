angular
    .module('toDoList.create') //extending the module from create.module.js
    .controller('CreateCtrl', CreateCtrl);

function CreateCtrl(){
	var vm = this; // vm stands for View Model - anything on "the vm" is exposed to the view

	//reset the text input and Datepicker to blank
	function resetView(){
  		vm.todo = {
  			todoText: '',
  			completeBy: ''
  		};	
  	}
	

	vm.addTodo = function(){
		vm.todo = {
		todoText: vm.todo.todoText,
		completeBy: new Date()
	};
	console.log(vm.todo);
	
	resetView();

	};
	



 	
  	
}