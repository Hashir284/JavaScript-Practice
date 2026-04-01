// alert() .

let cities = ["Karachi", "Lahore", "Islamabad", "Peshawar", "Quetta"];

let citiesa = cities.slice(1, 4)
console.log(cities)
// let citiesb = cities.splice(1, 4)
console.log(cities)
console.log(citiesa)
// console.log(citiesb)


// .toString
// .join(' ')
// .delete
// .concat  // for join the arrays ye original array change nhi kerta

// .foreach()
// .push()       // Array k End mai value add krta hai 
// .pop()       //  Array k End mai se 1 item ko remove krdeta hai
// .unshift()  //   Array k Start mai value add krta hai 
// .shift()   //    Array k Start mai se 1 item ko remove krdeta hai


// .splice()    || Array k kisi bhi index mai value add aur remove krwa skta hai
// .slice()     || Array ki copy banata hai array ko change kiye bagair

// pehla parameter starting index (ye index ismai include hota hai), dusra parameter delete item, rest of parameter add items (ye index ismai include nhi hota hai isse pehle ka index include hota hai)
//.splice(2, 1, "Ziyarat", "Skardu")

// let someCities = cities.slice(1, 4)

// pehla wo starting index, dusra index last index
//.slice(2,4)

// cities.push("Ziyarat", "Skardu", "Faislabad")

// cities.pop();
// cities.pop();

// cities.unshift("Ziyarat", "Skardu", "Faislabad")

// cities.shift();

// console.log(someCities)
// console.log(cities)

let a = cities.toString()
console.log(a);
cities.toString()
console.log(cities);



