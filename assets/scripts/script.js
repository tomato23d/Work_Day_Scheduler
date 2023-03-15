
$(document).ready(function(){});


const workhours = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,22 ];

var day = $(".container_day1");
var hour = $(day.children[0])  ;
var divHour =  $(".hour");

//var currentTime = dayjs().format('ha');
//var dayy = dayjs().hour(5);
var currentTime = dayjs().format('H');

$(function () {

});

$("#currentDay").text(dayjs().format('[Today is] D MMMM YYYY [,] dddd'));
$("#currentTime").text(dayjs().format('[Time Now:] H [:] mm'));


  function reviewTime(){
     for (let h=0; h<workhours.length; h++){
            
          var newHour = $('<div>');
          newHour.id = h;
          console.log("this hour id: " +newHour.id);
          divHour.clone().appendTo(newHour);
          $("#task").clone().appendTo(newHour);
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
//cleanDay();


function bringTask(){

$("#entryHour").clone().appendTo(hour);
$("#task").clone().appendTo(hour);
$("#saveBtn").clone().appendTo(hour);
}


//btnNextHour.click(bringTask);


