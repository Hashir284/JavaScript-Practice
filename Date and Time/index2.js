var today = new Date();
// console.log(today);
// console.log();

// var negotiate = new Date("June 30, 2035");
// console.log(negotiate);
// console.log();

// var msToday = today.getTime();
// console.log(msToday);
// console.log();

// var msDoomsday = negotiate.getTime();
// console.log(msDoomsday);
// console.log();

// var msDiff = msDoomsday - msToday;
// console.log(msDiff);
// console.log();

// let dDiff = msDiff / (1000 * 60 * 60 * 24)
// console.log(dDiff);   
// console.log();

// dDiff = Math.floor(dDiff)
// console.log(dDiff);

var msDiff = new Date("June 30, 2035").getTime() - new Date().getTime();
var daysTillDoom = Math.floor(msDiff / (1000 * 60 * 60 * 24));
var d = new Date("21 July 1983 13:25:00"); - new Date(today.getDate, today.getMonth(), today.getFullYear(), today.getHours(), today.getMinutes(), today.getSeconds())
console.log(d);
