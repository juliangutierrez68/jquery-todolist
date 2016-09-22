$(document).ready(function(){
	//Cache List
	//var $list = $('#taskList');

	//Button click event handler
	$('button').click(function(event){
		event.preventDefault();
		var currentTask = retrieveContent();
		toList(currentTask);
	});

	//Function to retrieve input's value
	function retrieveContent(){
		var $value = $('input[name=task]').val();
		return $value;
	}

	//Function write to list
	function toList(task){
		$('#taskList').append("<p>" + task + "</p>");
		//alert(task);
	}
});