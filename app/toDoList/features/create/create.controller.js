angular
    .module('toDoList.create') //extending the module from create.module.js
    .controller('CreateCtrl', CreateCtrl);

function CreateCtrl($http){
	var vm = this; // vm stands for View Model - anything on "the vm" is exposed to the view

	//reset the text input and Datepicker to blank 
	vm.resetView = function(){
  		vm.todo = {
  			todoText: '',
  			completeBy: ''
  		};	
  	};
	
	
  	/*This function will run the $http post to send todo data to the server
  	app.post('/api/todo') will use the data to add the todo to mongodb. */
	vm.addTodo = function(){
		$http({
		method: 'POST',
		url: '/api/todo',
		data: {
			todoText: vm.todo.todoText, // todo text data
			completeBy: vm.todo.completeBy // date selected data
		}
		}).then(function(response){
			/*PROMISE IS NOT WORKING!!!!*/
			console.log('PO$T');
			/*console.log(response);*/
			
		});
	};
}