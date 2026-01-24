// let now = new Date()
// console.log(now);

// let dt = new Date(1000000000000*1.7691)
// console.log(new Date(1769104011902));
// console.log(dt);

//let date = new Date(year, month, date, hours, minutes, seconds, milliseconds)
let newDate = new Date(3032, 1, 6, 9, 3, 34, 1000)
console.log(newDate);

let yr = newDate.getFullYear()
console.log('The year is ' + yr);

let mon = newDate.getMonth()
console.log('The month is ' + mon);

let hr = newDate.getHours()
console.log('The hours is ' + hr);

let min = newDate.getMinutes()
console.log('The hours is ' + min);

let dayy = newDate.getDay()
console.log('The day is ' + dayy);

newDate.setDate(8)
newDate.setSeconds(0)
console.log(newDate);




