
var taskNumber = 0;

if (localStorage['storage']) {
    var storage = JSON.parse(localStorage['storage']);
} else {
    var storage = [];
}

for(var i=0;i<storage.length;i++) {
	taskNumber = i;
    addOldTask(i);
}

$('.button').on('click', function (){
	$('#new-task').removeClass('error-no-input')
	$('#task-time').removeClass('error-no-input')
	var newTask = $('#new-task').val();
	var newTaskTime = $('#task-time').val();
	var hasError = validateForm(newTask, newTaskTime);
	if (hasError) { return };
	addTask(newTask, newTaskTime);
	storeTask(newTask,newTaskTime);
});

function addTask(newTask, newTaskTime) {
	taskNumber++;
	$('.task-container').append('<li class=\"task-list\"><input class=\"task-name\" value="'+newTask+'""><input class=\"task-time\" value='+newTaskTime+'><img class=\"checkmark\" src=\"img/check33 (1).png\" alt=\"Checkmark-Button\"><img class=\"close\" src=\"img/cancel4.png\" alt=\"X-Button\" data-id="' + taskNumber + '"></li>');
	$("#new-task").val("");
	$("#task-time").val("");
}

function addOldTask(taskNumber) {
	$('.task-container').append('<li class=\"task-list\"><input class=\"task-name\" value="'+storage[taskNumber].taskName+'"><input class=\"task-time\" value="'+storage[taskNumber].taskTime+'"><img class=\"checkmark\" src=\"img/check33 (1).png\" alt=\"Checkmark-Button\"><img class=\"close\" src=\"img/cancel4.png\" alt=\"X-Button\" data-id="' + taskNumber + '"></li>');
}

function storeTask(newTask, newTaskTime) {
  	storage.push({
    	taskName: newTask,
    	taskTime: newTaskTime
  	});
  	localStorage["storage"] = JSON.stringify(storage);
	}

function removeTask(itemToRemoveIndex) {
  	storage.pop(taskNumber);

  	localStorage["storage"] = JSON.stringify(storage);
}

function validateForm(newTask, newTaskTime) {
	var hasError = false;

	if (!newTask){
		$('#new-task').addClass('error-no-input');
		hasError = true;
	}
	if (!newTaskTime){
		$('#task-time').addClass('error-no-input');
		hasError = true;
	} 
	return hasError;
}

$('.task-container').on('click', '.close', function (){
	console.log('hello');
	var itemToRemoveIndex = $(this).data('id');
	$(this).closest('.task-list').remove();
	removeTask(itemToRemoveIndex); 
 });
	// also use .pop to remove from storage array

$('.task-container').on('click', '.checkmark', function (){
	console.log('hello2')
	$(this).closest('.task-list').addClass('completed-task');
});
