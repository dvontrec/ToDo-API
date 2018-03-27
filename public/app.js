//code will not run until page is loaded.  
$(document).ready(function(){
	$.getJSON("/api/todos")
	.then(addTodos)
	//add listener to the input field
	$("#todoInput").keypress(function(event){
		if(event.which == 13)
		{
			createTodo();
		}
	});

	//add listener to li  that are inside the .list class item
	$(".list").on("click", "li", function(){
		updateTodo($(this));
	}); 

	//add listener to spans that are inside of the .list class item
	$(".list").on("click", "span", function(event){
		//disables parent events
		event.stopPropagation();
		removeTodo($(this).parent());
	});
});

//function used to add todo items to the page.
function addTodos(todos)
{
	//add todos to the page here
	todos.forEach(function(todo){
		addTodo(todo);
	});
		
}

//functionused to create new Todo
function createTodo(){
	//saves the value of the input field to a variable
	var usrInput = $("#todoInput").val();
	//Submits a post request to send the usrInput value as the name.
	$.post("/api/todos", {name: usrInput})
	.then(function(newTodo){
		addTodo(newTodo);
	})
	.catch(function(err)
	{
		console.log(err);
	})
}

//functio used to add todo item to page
function addTodo(todo)
{
	//creates new list item with the name of the todo 
	var newTodo = $("<li class=\"task\">" + todo.name + "<span>X</span></li>");
	//stores id of the new todo item
	newTodo.data("id", todo._id);
	//stores completed boolean
	newTodo.data("completed", todo.Completed);
	//if the to do is completed
	if(todo.Completed)
	{
		//adds the done class
		newTodo.addClass("done");
	}
	//adds the li to the ul that has the class list
	$(".list").append(newTodo);
}

//function used to remove Todo from database
function removeTodo(todo){
	//stores parent id to a variable
	var clickedId = todo.data("id");
	var delurl = "/api/todos/" + clickedId;
	$.ajax({
		method: "DELETE",
		url: delurl
	})
	.then(function(data){
		//removes the parent li item of the span
		todo.remove();
	});
}

//function used to update specific todo
function updateTodo(todo)
{
	var clickedId = todo.data("id");
	var upurl = "/api/todos/" + clickedId;
	var isDone = !todo.data("completed");
	var upData = {Completed: isDone};
	//send put request to change status
	$.ajax({
		method: "PUT",
		url: upurl,
		data: upData
	})
	.then(function(updatedTodo){
		//toggles done class on already present todos
		todo.toggleClass("done");
		//sets the completed data.  
		todo.data("completed", isDone);
	})

	//change class
}