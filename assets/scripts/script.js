
$(document).ready(function(){});


const workhours = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,22 ];

var day = $(".container_day1");
//var hour =document.getElementById("hour"); 
//var hour = $ ("#hour"); 
var hour = $(day.children[0])  ;

var divHour =  $("#entryHour");
//var btnNextHour = $("#nextHour");

//var currentTime = dayjs().format('ha');
var currentTime = dayjs().format('H');


 //var dayy = dayjs().hour(5);

$(function () {

});

$("#currentDay").text(dayjs().format('[Today is] D MMMM YYYY [,] dddd'));
$("#currentTime").text(dayjs().format('[Time Now:] H [:] mm'));
console.log(currentTime);


  function reviewTime(){
     for (let h=0; h<workhours.length; h++){
            if(workhours[h]<currentTime){
              var newHour = $('<div>');
              newHour.addClass('past');
              divHour.clone().appendTo(newHour);
              $("#task").clone().appendTo(newHour);
              $("#saveBtn").clone().appendTo(newHour);
              divHour.text(workhours[h]);
            divHour.css({
              "background-color": "#06aed5",
               "color":"white", "font-size": "30px", "text-align": "center"});
              newHour.appendTo(day);
              console.log("past: " + workhours[h]);
              
                  }
            else if (workhours[h]>currentTime){
              var newHour = $('<div>');
              newHour.addClass('future');
              $("#entryHour").clone().appendTo(newHour);
              $("#task").clone().appendTo(newHour);
              $("#saveBtn").clone().appendTo(newHour);
              $("#entryHour").text(workhours[h]); 
              $("#saveBtn").text("save task");
              newHour.appendTo(day);
              console.log("future: " + workhours[h]);
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


//btnNextHour.click(bringTask);


