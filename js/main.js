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

	//Function to retrieve input's value
	function retrieveContent(){
		var $value = $('input[name=task]').val();
		return $value;
	}

	//Function write to list
	function toList(task){
		$list.append("<p>" + task + "</p>");
	}

	//Function clear input field
	function clearInput(){
		$('input[name=task]').val("");
	}
});