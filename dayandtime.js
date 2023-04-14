const dayjs = require('dayjs');

console.log(dayjs().format('[Today is] D MMMM YYYY [,] dddd'));

let currentHour = dayjs().format('H');
console.log(currentHour);