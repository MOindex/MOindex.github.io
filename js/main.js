
// jQuery(function($){
//    $("#task-time").mask("99/99/9999",{placeholder:"mm/dd/yyyy"});
// }


$('.button').on('click', function (){
	$('#new-task').removeClass('error-no-input')
	$('#task-time').removeClass('error-no-input')
	var newTask = $('#new-task').val();
	var newTaskTime = $('#task-time').val();
	console.log(newTask)
	if (newTask === ""){
	$('#new-task').addClass('error-no-input');
	}
	else if (newTaskTime === ""){
	$('#task-time').addClass('error-no-input');
	} 
	// else if (newTaskTime != )
	else {
	$('.task-container').append('<li class=\"task-list\"><input class=\"task-name\" value="'+newTask+'""><input class=\"task-time\" value='+newTaskTime+'><img class=\"checkmark\" src=\"img/check33 (1).png\" alt=\"Checkmark-Button\"><img class=\"close\" src=\"img/cancel4.png\" alt=\"X-Button\"></li>');
	}
	$("#new-task").val("");
	$("#task-time").val("");



});


$('.task-container').on('click', '.close', function (){
	console.log('hello')
	$(this).closest('.task-list').remove();

});

$('.task-container').on('click', '.checkmark', function (){
	console.log('hello2')
	$(this).closest('.task-list').addClass('completed-task');
});
