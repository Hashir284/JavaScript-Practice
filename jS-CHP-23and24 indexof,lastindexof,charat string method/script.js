let indexof = 'welcome to tutotial007 tutotial007'
// console.log(indexof.length);
// console.log(indexof.indexOf('o', 4));
// console.log();
// console.log();

let indexof2 = 'Please where search where search occurs'
console.log(indexof2.indexOf('search'));
console.log(indexof2.indexOf('search', 8));
console.log(indexof2.search('where'));

let cityToCheck = '"The New Yorker magazine doesnt allow the phrase "World War II. " They say it shouldbe "World War ii." So lets search the following sentence for the banned charactersand replace them with the phrase that the New Yorker World War II prefers. World War II"'

let replacebyindex = cityToCheck.indexOf('World War ii, 15')
let replacebyindexbycapital = cityToCheck.lastIndexOf('World War II')

if(replacebyindexbycapital !== -1){
    cityToCheck = cityToCheck.slice(0, replacebyindexbycapital) + 'Second World War' + cityToCheck.slice(replacebyindexbycapital+12)
}

console.log(cityToCheck);
console.log(cityToCheck.length);

var text = "To be or no!t to be.!";
var segIndex = text.lastIndexOf(".");

console.log(segIndex);
            //                  19  - 1
console.log(text.charAt(text.length - 1));
console.log(text.charAt(17));
console.log(text.charAt(18));

var arr = [10, 20, 30, 80, 23, 30, 78, 90];
console.log(arr.lastIndexOf(30));



for (var i = 0; i < text.length; i++) {
if (text.charAt(i) === "!") {
console.log("Exclamation point found!");
break;
}
}

for (let index = 0; index < text.length; index++) {
    if(text.slice(index, index+1) === '!')
    {
        console.log('Exclamation point found!');
        break
    }
    
}

