// Global Variable
let thesum = 23
function addNumbers() {
    thesum = 2 + 2;
}
addNumbers()
console.log(thesum);

// Local Variable
function addNumbers2() {
    let thesum2 = 2 + 2;
    console.log(thesum2);
}
addNumbers2()
//console.log(thesum2);

// Practice

function a() {
    let variable = 1
}
function b() {
    let variable = 2
}
a()
b()
let variable = 3
console.log(variable);

function addNumbers3(e) {
    var theSum = 2 + e;
    return theSum;
}
console.log(addNumbers3(1));
let fun = addNumbers3(3)
console.log(fun);
// console.log(theSum);  isse error aayega



