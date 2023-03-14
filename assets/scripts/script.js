
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


function populateTask (){
 for (let i=0; i<workhours.length; i++){
     $("#entryHour").clone().appendTo(hour);
     $("#task").clone().appendTo(hour);
     $("#saveBtn").clone().appendTo(hour);
     $("#entryHour").text(workhours[i]);  
     $("#hour").clone().appendTo(day);
     
    
 } ;  
};
  function reviewTime(){
     for (let h=0; h<workhours.length; h++){
            if(workhours[h]>currentTime){
              hour.addClass('future');
              console.log("future: " + workhours[h]);
              populateTask();
              
                  }
            else if (workhours[h]<currentTime){
              hour.addClass('past');
              console.log("past : " + workhours[h]);
              populateTask();
                  }
            else  {
              hour.addClass('present');
              console.log("present : " + workhours[h]);
              populateTask();
                  }
          };}
          

//populateTask();
reviewTime();
//cleanDay();


function bringTask(){

$("#entryHour").clone().appendTo(hour);
$("#task").clone().appendTo(hour);
$("#saveBtn").clone().appendTo(hour);
}


btnNextHour.click(bringTask);


