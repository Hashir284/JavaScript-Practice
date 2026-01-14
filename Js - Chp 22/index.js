//            Problem 1

let cityToCheck = '"The New Yorker magazine doesnt allow the phrase "World War II. " They say it shouldbe "World War ii." So lets search the following sentence for the banned charactersand replace them with the phrase that the New Yorker World War II prefers. World War II"'
console.log(cityToCheck.length);

//            Problem 2

var firstChar = cityToCheck.slice(0, 2);
var otherChars = cityToCheck.slice(2);
firstChar = firstChar.toUpperCase();
otherChars = otherChars.toLowerCase();
var cappedCity = firstChar + otherChars;

console.log(cappedCity);

//            Problem 3


let month = 'january'
let monthabbreviation

if (month.length > 3) {
       monthabbreviation = month.slice(0, 3)
}

console.log(monthabbreviation);

//            Problem 3

// var str = prompt("Enter some text");

for (let index = 0; index < cityToCheck.length; index++) {
       if (cityToCheck.slice(index, index + 2) == '  ') {
              alert('No double spaces!')
              break
       }
}


//           Problem 4

// let cityToCheck = '"The New Yorker magazine doesnt allow the phrase "World War II. " They say it shouldbe "the Second World War." So lets search the following sentence for the banned charactersand replace them with the phrase that the New Yorker prefers."'

for (let index = 0; index < cityToCheck.length; index++) {
       if (cityToCheck.slice(index, index+12) === 'World War II' || cityToCheck.slice(index, index+12) === 'World War ii') {
       cityToCheck = cityToCheck.slice(0, index) + 'Second World War' + cityToCheck.slice(index+12)

       }
}

console.log(cityToCheck);
