const dayjs = require('dayjs');
const fs = require('fs');

const filename = "myfile.html";

let currentHour = dayjs().format('H');
console.log(currentHour);
let today = dayjs().format('D');


const todayIs = (dayjs().format('[Today is] D MMMM YYYY [,] dddd'));
const timeNow = (dayjs().format('[Time Now:] H [:] mm'));
const workhours = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];
//const workhours = [13, 14, 15, 16, 17, 18];

function schedule(day, hour){
    this.day = today;
    this.hour = hour;
//     this.timing = function(){if(hour < currentHour){timing = "past";}
//                             else if(hour = currentHour){timing = "present"}
//                             else if (hour > currentHour){timing = "future"}};
//     this.defineTiming = function(){console.log(`${timing}`)};
//     this.printHour = function(){console.log(`<form id = "input-form" class="${timing}">
//                                             <div id = "entryHour" class="${hour}">${hour} </div>`)};

}

const HTML1 = `<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8" />
   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   <meta http-equiv="X-UA-Compatible" content="IE=edge" />
   <link rel="stylesheet" href="assets/style/style1.css" />
   <title>Work Day Scheduler</title>
  </head>
<body>
<header">
<h1">Work Day Scheduler</h1>
<p>A simple calendar app for scheduling your work day</p>
<p id="currentDay">${todayIs}</p>
<p id="currentTime">${timeNow}</p>
</header>
<div id="container_day"> `;

fs.writeFile(filename, HTML1, (err) =>
{err ? console.log(err) : console.log('Success!')})

function reviewTime(){
      for (let h=0; h<workhours.length; h++){
            if(workhours[h] < currentHour){timing = "past"; hour = workhours[h]; printHour1(hour, timing)}
            // else if (workhours[h] = currentHour){timing = "present"; console.log(timing);
            //                               console.log(`class="${timing}"`)}
            else if (workhours[h] >= currentHour){timing = "future"; hour = workhours[h]; printHour1(hour, timing)}  
                                    };};

//const hourA = new schedule(today, 18);    
function printHour1(hour, timing){
      fileOutput = (`
<form id = "input-form" class="${timing}">
 <div class = "entryHour">${hour}</div>
 <input type = "text" placeholder= "my task" id = "input-field"/>
<button id = "saveBtn" class="saveBtn" aria-label="save">
      <i class="fas fa-save" aria-hidden="true">save</i>
</button>
</form>
 `);
      fs.appendFile(filename, fileOutput, (err) =>
      { err ? console.log(err) : console.log('Success!')})

      }; 

reviewTime();

const HTML2 =` </div>
 <script src="assets/scripts/script1.js"></script>
</body>
</html>`
fs.appendFile(filename, HTML2, (err) =>
 { err ? console.log(err) : console.log('Success!')})


