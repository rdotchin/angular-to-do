angular
    .module('toDoList.list')
    .controller('ListCtrl', ListCtrl);

function ListCtrl($http){
    var vm = this;

    vm.todoData = [];

    $http({
		method: 'GET',
		url: '/api/todos'
	}).then(function(response){
		console.log(response);
		//for each todo push into the todoData aray
		response.data.forEach(function(element){
			vm.todoData.push(element);
		});
		console.log(vm.todoData[0].todoText);
	});
}