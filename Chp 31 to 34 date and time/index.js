// Chapter 31 to 32

let now = new Date()
console.log(now);
let dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
console.log(dayNames[now.getDay()]);
let now1 = (new Date).toString()
console.log(now1);


// Chapter 33
// Days

let doomsday = new Date("June 30, 2035")
// set time at 0
// Time ko 00:00:00 par set kar dete hain taake exact days milen
now.setHours(0,0,0,0);
doomsday.setHours(0,0,0,0);
let milisecondstoday = now.getTime()
let msdoomsday = doomsday.getTime()

let msdiff = msdoomsday - milisecondstoday

let convertitindate = msdiff / (1000 * 60 * 60 * 24);

convertitindate = Math.floor(convertitindate)

console.log('days', convertitindate); // IT GIVES DAYS

// Months
// let days = msdiff / (1000 * 60 * 60 * 24 * 30);
// console.log(days);  // But this is not accurate

let months = now.getMonth()
let msdoomsdayinMonths = doomsday.getMonth()
let years = doomsday.getFullYear() - now.getFullYear()
months = msdoomsdayinMonths - months

console.log('Years',years);
console.log('Months',months);

let totalmonths = years * 12 + months
console.log('totalmonths',+totalmonths);

// HOURS
let hours = Math.floor(msdiff / (1000 * 60 * 60));
console.log('hours', hours);

//Minutes
let minutes = Math.floor(msdiff / (1000 * 60));
console.log('minutes', minutes);

//Seconds
let seconds = Math.floor(msdiff / (1000));
console.log('seconds', seconds);

//Chapter 34

var d = new Date("July 21, 1983 13:25:00");
console.log(d);

d.setFullYear(2007)
console.log(d.getFullYear());

now = new Date()
console.log(now.getHours());

d.setMinutes(0)
console.log(d.getMinutes());

d.setTime(0)
console.log(d);


