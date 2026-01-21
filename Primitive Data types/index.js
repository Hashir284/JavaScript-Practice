//There are 7 primitives data types in JavaScript:
//1. String
//2. Number
//3. Boolean
//4. Null
//5. Undefined
//6. Symbol
//7. BigInt

//Example of String
let name = "John Doe";
console.log("String:", name, 'Type:', typeof name);

//Example of Number
let age = 30;
console.log("Number:", age, 'Type:', typeof age);

//Example of Boolean
let isStudent = true;
console.log("Boolean:", isStudent, 'Type:', typeof isStudent);

//Example of Null
let emptyValue = null;
//Note: typeof null returns 'object' due to a historical bug in JavaScript.
//However, null is still considered a primitive data type.
console.log("Type of null:", typeof emptyValue);
console.log("Null:", emptyValue, 'Type:', typeof emptyValue);

//Example of Undefined
let notAssigned;
console.log("Undefined:", notAssigned, 'Type:', typeof notAssigned);
//Note: typeof null returns 'object' due to a historical bug in JavaScript.
//However, null is still considered a primitive data type.

//Example of Symbol 
let uniqueId = Symbol('id');
console.log("Symbol:", uniqueId, 'Type:', typeof uniqueId);

//Example of BigInt
let bigNumber = BigInt(9007199254740991);
console.log("BigInt:", bigNumber, 'Type:', typeof bigNumber);


//Summary of all primitive data types
//      ("Summary of Primitive Data Types:");
//      ("1. String - Example:", name);
//      ("2. Number - Example:", age);
//      ("3. Boolean - Example:", isStudent);
//      ("4. Null - Example:", emptyValue);
//      ("5. Undefined - Example:", notAssigned);
//      ("6. Symbol - Example:", uniqueId);
//      ("7. BigInt - Example:", bigNumber);

//       Objects and Arrays are non-primitive data types in JavaScript.
console.log("Summary of non-Primitive Data Types:");

// Array
let primitives = [
    {type: "String", example: name},
    {type: "Number", example: age},
    {type: "Boolean", example: isStudent}
]

console.log('Type of array is', typeof primitives);
console.log('Type of array index[0] is', typeof primitives[0]);
console.log('Type of array index[0] object type', typeof primitives[0].type,  'and example is', typeof primitives[0].example);



// Object
let person = {
    name: "John Doe",
    age: 30,
    isStudent: true
}

console.log('Type of object is', typeof person);  
console.log('Type of object property name is', typeof person.name);
console.log('Type of object property age is', typeof person.age);
console.log('Type of object property isStudent is', typeof person.isStudent);  

console.log(typeof '');
