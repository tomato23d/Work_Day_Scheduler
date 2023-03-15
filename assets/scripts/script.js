
$(document).ready(function(){});
$(function jToDay() {

const workhours = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,22 ];

var day = $(".container_day1");
var hour = $(day.children[0])  ;
var divHour =  $(".hour");
var toDo = $(".task");
var saveBtn = $(".saveBtn");
var points = document.getElementById("points");

//var currentTime = dayjs().format('ha');
//var dayy = dayjs().hour(5);
var currentTime = dayjs().format('H');




$("#currentDay").text(dayjs().format('[Today is] D MMMM YYYY [,] dddd'));
$("#currentTime").text(dayjs().format('[Time Now:] H [:] mm'));


  function reviewTime(){
     for (let h=0; h<workhours.length; h++){
            
          var newHour = $('<div>');
          newHour.id = h;
          //console.log("this hour id: " +newHour.id);
          divHour.clone().appendTo(newHour);
          toDo.clone().appendTo(newHour);
          toDo.text= "hello";
          toDo.id = h+20;
          console.log(toDo);
         
          $("#saveBtn").clone().appendTo(newHour);
          divHour.text(workhours[h]);
            
              if(workhours[h]<currentTime){
               newHour.addClass('past');
              }

              else if (workhours[h]>currentTime){
               newHour.addClass('future');
               $("#saveBtn").text("save");
              }
               else  {
                newHour.addClass('present');
                $("#saveBtn").text("save");
                console.log("present: " + workhours[h]);
              }

               divHour.css({
                 "background-color": "#06aed5",
                  "color":"white", 
                  "font-size": "30px", 
                  "text-align": "center"
                });
                newHour.appendTo(day);
          };}
          

reviewTime();

//points.addEventListener("click", function(event){
//event.preventDefault();
//var newTask = toDo.value;
//console.log(newTask);
//localStorage.setItem("newTask", JSON.stringify(newTask));
//});

function createTask(event){
  event.preventDefault();
  var newTask = toDo.value;
  console.log(newTask);
  localStorage.setItem("newTask", JSON.stringify(newTask));
  };



$(".createTaskBTN").click(createTask);

//$(".format.BTN").click(reviewTime);

//$("#saveBtn").click(bringTask);

});

jToDay();