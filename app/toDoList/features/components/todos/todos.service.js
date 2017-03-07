angular
	.module('toDoList.component.todos')
	.service('todos', TodosService);


/*TodosService will provide the $http GET, POST and PUT routes for
create.controller, list.controller and completed.controller*/
function TodosService($http) {
	return {

		/*$http GET to retrieve todo data from mongoDB*/
		getTodos: function(todos){
			$http({
				method: 'GET',
				url: '/api/todos'
			}).then(function(response){
				//loop through the response data
				response.data.forEach(function(element){
				//push data into vm.todoData in list.controller
				todos.push(element);
				console.log(todos);
			});
			
			
			});
		},

		pushTodos: function(){


		},

		putTodos: function(){


		}
	
	}; //End of return	

} //End of TodosServied()	