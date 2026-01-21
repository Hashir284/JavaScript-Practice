var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
console.log(Date());
let rightnow = new Date()  // new likhna zarrooori he 
console.log(typeof rightnow);

let day = rightnow.getDay()
console.log(dayNames[day]);
console.log(typeof dayNames[day]);
console.log(day);

