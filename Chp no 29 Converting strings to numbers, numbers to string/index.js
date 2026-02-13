let integerstring = '24'
integerstring = Number(integerstring)
console.log(integerstring);

integerstring = integerstring + '.4235345'
integerstring = Number(integerstring)
console.log(integerstring);

integerstring = 1234
integerstring = integerstring.toString()
console.log(integerstring);

let priceOfkeyboardandmouseset = '2600rupees'
let text = '6.5%'
let salingPrice = parseFloat(priceOfkeyboardandmouseset) + (parseFloat(priceOfkeyboardandmouseset) / 100 * parseFloat(text))
console.log(salingPrice);

//  .tofixed() method   //// ye method number ko string mein bhi convert kerdeta he

let num = 231.23439876
num = num.toFixed(1)
console.log(num);

num = parseFloat(num)
num = num.toFixed(4) + '9999999999999'    //toh ye 3 zero add kerdega
// num = num.toFixed()
console.log(num);

//from example
num = 5555
var str = num.toString();

if (str.charAt(str.length - 1) === "5") {
    str = str.slice(0, str.length - 1) + "6";
}
console.log(num);

num = Number(str)
let prettynum = num.toFixed(2)
console.log(prettynum);




