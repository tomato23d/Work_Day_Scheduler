function Diary() {

//var day = document.getElementById("container_day")
var taskForm = document.getElementById("input-form");
var taskField = document.getElementById("input-field");
var taskHour1 = document.getElementById("entryHour");
var taskHour = document.querySelectorAll(".entryHour");

// define working hours  
const workhours = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];

//$("#currentDay").text(dayjs().format('[Today is] D MMMM YYYY [,] dddd'));
//$("#currentTime").text(dayjs().format('[Time Now:] H [:] mm'));

var createTask = function(event) {
        event.preventDefault();
       
        var newTask = taskField.value.trim();
        var newTaskHour = taskHour1.innerHTML;
        console.log(newTask);
        // console.log(taskForm.children[0]);
        // console.log(taskForm.children[1]);
        // console.log(taskForm.children[2]);

        var toDoArray = {
            newTask: newTask,
            taskHour: newTaskHour,
};
localStorage.setItem(newTaskHour, JSON.stringify(toDoArray));
}

taskForm.addEventListener('submit', createTask);
};

Diary();

