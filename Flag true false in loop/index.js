let Array = ['h', 'e', 'l', 'l', 'o']
Array[0] = 'H'
console.log(Array);


let string = 'hello'
string[0] = 'H'
console.log(string);



let arr = [2, 4, 6, 8, 10];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 6) {
        // found = true;   // flag ON
        console.log('6 match');
        break;
    }
}

let text = "Hello  World";
let hasDoubleSpace = false; // flag
for (let i = 0; i < text.length; i++) {
    if (text.slice(i, i + 2) === "  ") {
        hasDoubleSpace = true;
        break;
    }
}
if (hasDoubleSpace) {
    console.log("Double space found!");
} else {
    console.log("No double space");
}


let isLoggedIn = false;
let password = '123', username = 'admin'
if (username === "admin" && password === "123") {
    isLoggedIn = true;
}

if (isLoggedIn) {
    console.log("Welcome");
} else {
    console.log("Invalid login");
}


