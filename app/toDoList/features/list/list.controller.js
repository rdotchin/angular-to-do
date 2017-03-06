angular
    .module('toDoList.list')
    .controller('ListCtrl', ListCtrl);

function ListCtrl($http){
    var vm = this;

    /*push all the todo data from the $http GET in vm.todoData*/
    vm.todoData = [];

    //current date to sort the todos by overdue, due today, due later
    vm.currentDate = new Date();

    $http({
		method: 'GET',
		url: '/api/todos'
	}).then(function(response){
		console.log(response);
		//for each todo push into the todoData aray
		response.data.forEach(function(element){
			vm.todoData.push(element);

		});
	});

	var updateTodo = function(){

	}
}