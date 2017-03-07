angular
	.module('toDoList.component.todos')
	.service('todos', TodosService);


/*TodosService will provide the $http GET, POST and PUT routes for
create.controller, list.controller and completed.controller*/
function TodosService($http) {
	return {

		/*$http GET to retrieve todo data from mongoDB*/
		getContent: function(todos){
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
		/*This function will run the $http post to send todo data to the server
  	app.post('/api/todo') will use the data to add the todo to mongodb. */
		createContent: function(text, date){
			$http({
			method: 'POST',
			url: '/api/todo',
			data: {
				todoText: text, // todo text data vm.todo.todoText
				completeBy: date // date selected data vm.todo.completeBy
			}
			}).then(function(response){
				console.log('new todo created'); // console.log on success
			}).catch(function(err){ //catch if an error
				console.log(err);
			});

		},

		updateContent: function(id, bool){
			$http({
				method: 'PUT',
				url: 'api/todo',
				data: {
					_id: id,
					completed: bool//id
					//completed true or false
				}
			}).then(function(){
				console.log('updated ' + id);
			}).catch(function(err){
				console.log(err);
			});

		}
	
	}; //End of return	

} //End of TodosServied()	