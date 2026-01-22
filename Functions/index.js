function details(names) {
console.log(`Hey ${names} you are nice`);
console.log(`Hey ${names} your tshirt is good`);
console.log(`Hey ${names} you are good`);
console.log('');
}
// console.log('Hey Hashir you are nice');
// console.log('Hey Hashir your tshirt is good');
// console.log('Hey Hashir you are good');
details('Ibsam')
details('Hashir')

function sum(a, b) {
    console.log(a+b);
}
sum(231,4)

function sum2(a, b) {
    return a+b
}
 result = sum2(21,4)
 console.log(result);
 result = sum2(12,4)
 console.log(result );
 result = sum2(1,4)
console.log(result);

function sum3(a, b, c=3) {
    console.log('');
    console.log(a,b,c);
    return a+b+c
}
 result = sum3(21,4)
 console.log(result);
 result = sum3(12,4)
 console.log(result );
 result = sum3(1,4,3214)
console.log(result);
 result = sum3(1)
console.log(result);

//      Arrow function

const fun1 = (x)=>{
    console.log('I am an arrow function', x);
}
fun1((321).toString())
fun1('321')

let fun2 = (x2) =>{
    console.log();
    console.log('I am an arrow function', x2);
}
fun2(234)
fun2(287)