//Chp 35
tellTime()

function tellTime() {
    var now = new Date();
    var theHr = now.getHours();
    var theMin = now.getMinutes();
    console.log("Current time: " + theHr + ":" + theMin);
}

//Chp 36
function greetUser(greeting) {
    console.log(greeting)
}
greetUser("Hello, there.")
let greeting = greetUser('Hello2')

function showMessage(a, string, num) {
    console.log(a, string, num)
}
showMessage(true, 'string', 1)
var month = "March";
showMessage(month, "is winner number is ", 23);

//Chp 37   //Return

var orderTot;

function calcTot(merchTot) {
if (merchTot >= 100) {
     orderTot = merchTot;
}
else if (merchTot < 50.01) {
     orderTot =  merchTot + 5; 
}
else {
     orderTot = merchTot + 5 + (.03 * (merchTot - 50));
   }
//    return orderTot;
}
calcTot(50)
console.log(orderTot);
calcTot(500)
console.log(orderTot);
calcTot(70)
console.log(orderTot);

//Return
function calcTot2(merchTot) {
if (merchTot >= 100) {
     orderTot = merchTot;
}
else if (merchTot < 50.01) {
     orderTot =  merchTot + 5; 
}
else {
     orderTot = merchTot + 5 + (.03 * (merchTot - 50));
   }
   return orderTot;
}
calcTot2(50)
console.log(orderTot);
calcTot2(500)
console.log(orderTot);
calcTot2(70)
console.log(orderTot);
let totalToCharge = calcTot(78.99)
console.log(orderTot);
console.log(calcTot2(79.99));
console.log(totalToCharge);

function calcship(parameteer) {
    return parameteer
}

function calcTot3(price) {
   return result = calcTot2(500) + calcship(price)
}
console.log('Three connected functions ' + calcTot3('oop'));
console.log('Three connected functions ' + calcTot3(1));
console.log('Three connected functions ' + calcTot3('1'));
console.log('Three connected functions ' + calcTot3(2));






