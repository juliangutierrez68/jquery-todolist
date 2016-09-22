$(document).ready(function(){
	//Cache
	var $list = $('#taskList');

	//Button click event handler
	$('button').click(function(event){
		event.preventDefault();
		var currentTask = retrieveContent();
		toList(currentTask);
		clearInput();
	});

	//Hover over task to show delete button

	$(document).on('mouseenter','.task-item',function(){
		$(this).children().show();
	});
	$(document).on('mouseleave','.task-item',function(){
		$(this).children().hide();
	});

	//Delete action
		$(document).on('click','.delete-button', function(){
				$(this).parent().remove();
		});

	//Function to retrieve input's value
	function retrieveContent(){
		var $value = $('input[name=task]').val();
		return $value;
	}

	//Function write to list
	function toList(task){
		$list.append('<p class="task-item"> <a class="delete-button"><span>X </span></a>' + task + "</p>");
	}

	//Function clear input field
	function clearInput(){
		$('input[name=task]').val("");
	}
});
