let tasks = []; // Array to hold our tasks

function addTask() {
 const taskText = document.getElementById("new-task-text").value.trim();

 if (taskText !== "") {
   const newTask = {
     id : Date.now(), // Generate a unique ID
     text : taskText,
     completed : false
   };

   tasks.push(newTask);
   
   document.getElementById("new-task-text").value = ""; // Clear the input

   renderTasks();
 }

}

function toggleComplete(taskId) {

tasks = tasks.map(task => {

if (task.id === taskId) {

// Toggle completion status

 task.completed = !task.completed;

}

return task;

});

renderTasks();

}

function deleteTask(taskId) {

tasks = tasks.filter(task => task.id !== taskId);

renderTasks();

}

function renderTasks() {

const taskListElement = document.getElementById("task-list");

// Clear existing list

	taskListElement.innerHTML= "";

	tasks.forEach((task,index) =>{

		const checkboxCheckedStatus=.task.completed ? 'checked' : '';

		const deleteButtonHtml=`<a href='#' style=color:red onClick=deleteTask(${taskId}) >Delete<a/>`;

		const taskIdForCheckboxAndDeleteButton=JSON.stringify(task.id);

		taskListElement.innerHTML+=`

			<div class=${(checkboxCheckedStatus)? "completed":" "}id=${taskIdForCheckboxAndDeleteButton} >

				<input type=checkbox ${checkboxCheckedStatus} onChange=togleComplete(${taskIdForCheckboxAndDeleteButton}) >${(index+1)}. ${text}<br/>

				Delete Button:${deleteButtonHtml}</div>`;


			updateProgress(); 

})

updateProgress(); 

}


function updateProgress(){

const totalCompleted=tasks.filter((t)=>t.completed).length;

document.getElementById('progress-value').textContent=((totalCompleted/tasks.length)*100 ||0).toFixed(2)+'%';

document.getElementById('completed-tasks-count').textContent=totalCompleted;

document.getElementById('total-tasks-count').textContent=tasks.length;


}


// Save and Load from local storage functions


 function saveTasks(){

 localStorage.setItem('tasks', JSON.stringify(tasks));

alert("Saved successfully!");

 }


 function loadTasks(){

 const storedDataFromLocalStorage=localStorage.getItem('tasks');

 if(storedDataFromLocalStorage){

	tasks=JSON.parse(storedDataFromLocalStorage);

	renderTasks();

 }

 else{

 alert("No saved data found!");

 }

 }


 function clearLocalStorage(){

 localStorage.removeItem('tasks');

 alert("Cleared successfully!");

 }


 function deleteAllLocalStoredData(){


 localStorage.clear()


 alert(`All local storage cleared!`);

 }


 function deleteAllLocalStoredDataTaskTrackerSpecific(){


 localStorage.removeItem(`course-task-tracker-data`);

 alert(`Specific tracker data cleared!`);

 }


 // Delete all current session's stored data in memory:


 function deleteAllCurrentSessionDataTaskTracker(){


	tasks=[];

	renderTaks()

	alert(`Deleted all current session's data!`);
	
}
