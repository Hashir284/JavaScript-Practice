// forof loop

let forof = 'Modern Web Application Development'

for (const element of forof) {
    console.log(element);

}

let forofforarray = 'Modern Web Application Development'
forofforarray = forofforarray.split(' ')
for (const element of forofforarray) {
    console.log(element);
}

// forin loop

let forin = {
    name: 'John Doe',
    age: 30,
    profession: 'Developer'
}
for (const keys in forin) {
    const element = forin[keys];
    console.log(keys + ': ' + element);
}

// forin with Array
let arr = ["apple", "banana", "cherry"];

for (let keys in arr) {
    console.log(keys, arr[keys]);
}
for (const key in arr) {
    const element = arr[key];
    console.log(key, element);
}

// forof with Object.keys()
for (const element of Object.keys(forin)) {
    console.log(element + ': ' + forin[element]);
}

// While

let whileloop = 0

while (whileloop < 11) {
    console.log(whileloop);
    whileloop++
}

let i = 0

while (i < arr.length) {
    console.log(arr[i]);
    i++
}

// Do While

i = 0

do {
    console.log(arr[i]);
    /*
    arr[0]
    true
    arr[1]
    true
    arr[2]
    false
    */
   i++
} while (i < arr.length);



