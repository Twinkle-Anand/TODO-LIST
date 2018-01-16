$(document).ready(function(){
	//Starting of a single page app
    $.getJSON("/api/todos")
     .then(addTodos)
     .catch(function(err){
     	console.log(err);
     })


  //creating new todo    
    $('#todoInput').keypress(function(event){
       if(event.which==13) //enter key event
       {
           createTodo();
       }
    });


    $('.list').on('click','li',function(){
     
       updateTodo($(this));
    });

   //adding event listener to the list as span is dynamically created so there will be event delay 
    $('.list').on('click','span',function(event){
       event.stopPropagation(); //preventing event on list to be called 
       removeTodo($(this).parent());
   });

});


//===================================================================
//===================================================================
function addTodos(todos){
    todos.forEach(function(item){
       addTodo(item);
    });
}

function addTodo(todo){
   var newListItem = $('<li class="task">'+todo.name+'<span>X</span></li>');
       newListItem.data('id',todo._id); //JQUERY WAY OF ADDING DATA TO ELEMENTS IN DOM
       newListItem.data('completed',todo.completed);
      if(todo.completed){
          	newListItem.addClass("done");
      }
      $('.list').append(newListItem);
}

function createTodo(){
	//send request to create new todo
	var usrInput = $("#todoInput").val();
   if(usrInput.length){
	$.post('/api/todos',{name:usrInput})
	.then(function(newTodo){
		$("#todoInput").val(''); //setting text input to empty string
		addTodo(newTodo);
	})
	.catch(function(err){
       res.send(err);
	});
   }
}

function removeTodo( todo )
{
	//remove a todo 
	 var clickedTodoId = todo.data('id');
        var deleteUrl   ="/api/todos/"+clickedTodoId;
        $.ajax({
        	method:'DELETE',
        	url   :deleteUrl
        })
        .then(function(data){
        	todo.remove();
         });

 }


function updateTodo(todo){

    var updateUrl = 'api/todos/' + todo.data('id');
    var isDone   = !todo.data('completed');
    var updateData = {completed: isDone} ;
    $.ajax({
      method:'PUT',
      url   :updateUrl,
      data  :updateData
    })
    .then(function(updatedTodo){
    	todo.toggleClass("done");
    	todo.data("completed",isDone);
    })
    




}