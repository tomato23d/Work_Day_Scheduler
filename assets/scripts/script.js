
$(document).ready(function(){});

const workhours = ["7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm",  "5pm", "6pm"] 



var day = $(".container_day1");
//var hour =document.getElementById("hour"); 
//var hour = $ ("#hour"); 
var hour = $(day.children[0])  ;
var hourPast =$(".past");
var hourPresent =$(".present");
var hourFuture =$(".future");
var btnNextHour = $("#nextHour");
var currentTime = dayjs().format('ha');
//var currentTime = "12pm";


 //var dayy = dayjs().hour(5);


$(function () {

});

$("#currentDay").text(dayjs().format('[Today is] D MMMM YYYY [,] dddd'));
$("#currentTime").text(dayjs().format('[Time Now:] H [:] mm'));
console.log(currentTime);



     //$("#entryHour").clone().appendTo(hour);
    // $("#task").clone().appendTo(hour);
   //  $("#saveBtn").clone().appendTo(hour);
   //  $("#entryHour").text(workhours[i]);  
   
    // $("#hour").clone().appendTo(day);
     
    

  function reviewTime(){
     for (let h=0; h<workhours.length; h++){
            if(workhours[h]>currentTime){
              var newHour = $('<div>');
              newHour.addClass('future');
              $("#entryHour").clone().appendTo(newHour);
              $("#task").clone().appendTo(newHour);
              $("#saveBtn").clone().appendTo(newHour);
              $("#entryHour").text(workhours[h]); 
              newHour.appendTo(day);
              console.log("future: " + workhours[h]);
             
              
                  }
            else if (workhours[h]<currentTime){
              var newHour = $('<div>');
              newHour.addClass('past');
              $("#entryHour").clone().appendTo(newHour);
              $("#task").clone().appendTo(newHour);
              $("#saveBtn").clone().appendTo(newHour);
              $("#entryHour").text(workhours[h]); 
              newHour.appendTo(day);
              console.log("past: " + workhours[h]);
                  }
            else  {
              var newHour = $('<div>');
              newHour.addClass('present');
              $("#entryHour").clone().appendTo(newHour);
              $("#task").clone().appendTo(newHour);
              $("#saveBtn").clone().appendTo(newHour);
              $("#entryHour").text(workhours[h]); 
              newHour.appendTo(day);
              console.log("present: " + workhours[h]);
                  }
          };}
          

reviewTime();
//cleanDay();


function bringTask(){

$("#entryHour").clone().appendTo(hour);
$("#task").clone().appendTo(hour);
$("#saveBtn").clone().appendTo(hour);
}


btnNextHour.click(bringTask);


