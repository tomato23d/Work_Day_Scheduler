
function Diary() {
// var day = $(".container_day1");
// var taskForm = $("#input-form");
// var taskField = $("#input-field");
// var newTaskHour = $("#entryHour");

var day = document.getElementById("container_day")
var taskForm = document.getElementById("input-form");
var taskField = document.getElementById("input-field");
var taskHour = document.getElementById("entryHour");

// define working hours  
const workhours = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];

$("#currentDay").text(dayjs().format('[Today is] D MMMM YYYY [,] dddd'));

$("#currentTime").text(dayjs().format('[Time Now:] H [:] mm'));


function reviewTime(){
    for (let h=0; h<workhours.length; h++){


        var form = document.createElement("div");
        var hour = document.createElement("div");
      
        hour.textContent = "10am";

        day.appendChild(form);
        form.appendChild(hour);

        

    }
};



var createTask = function(event) {
        event.preventDefault();
       
        var newTask = taskField.value.trim();
        console.log(newTask);
        console.log(taskForm.children[0]);
        console.log(taskForm.children[1]);
        console.log(taskForm.children[2]);

        var hourId = 9;

        var toDoArray = {
            newTask: newTask,
            taskHour: hourId,
};
localStorage.setItem("task", JSON.stringify(toDoArray));

}


taskForm.addEventListener('submit', createTask);
};

Diary();
reviewTime();
