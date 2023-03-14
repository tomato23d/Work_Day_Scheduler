// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function(){});

const workhours = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm"] 
var day = $(".container_day1");
//var hour =document.getElementById("hour"); 
var hour = $ ("#hour"); 
var hourPast =$(".past");
var hourPresent =$(".present");
var hourFuture =$(".future");
var btnNextHour = $("#nextHour");
var currentTime = dayjs().format('ha');
//var currentTime = "12pm";
//var dayy = $("#currentDay")+1;

$(function () {
  // TODO: Add a listener for click events on the save button. This code should use the id in the containing time-block as a key to save the user input in local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
 
});

$("#currentDay").text(dayjs().format('[Today is] D MMMM YYYY [,] dddd'));
$("#currentTime").text(dayjs().format('[Time Now:] H [:] mm'));
console.log(currentTime);
console.log(dayy);

function populateTask (){
  for (let h=0; h<workhours.length; h++){
      $("#entryHour").clone().appendTo(hour);
      $("#task").clone().appendTo(hour);
      $("#saveBtn").clone().appendTo(hour);
      $("#entryHour").text(workhours[h]);     
  } ;  
};
  function reviewTime(){
     for (let h=0; h<workhours.length; h++){
            if(workhours[h]>currentTime){
             // hour.setAttribute("class", "future");
              console.log("future: " + h)
                  }
            else if (workhours[h]<currentTime){
             // hour.setAttribute("class", "past");
              console.log("past : " + workhours[h]);
                  }
            else  {
           //   hour.setAttribute("class", "present");
              console.log("present : " +workhours[h]);
                  }
          };}
          

populateTask();
reviewTime();
//cleanDay();


function bringTask(){

$("#entryHour").clone().appendTo(hour);
$("#task").clone().appendTo(hour);
$("#saveBtn").clone().appendTo(hour);
}


btnNextHour.click(bringTask);


