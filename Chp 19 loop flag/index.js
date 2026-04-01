let cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];
let cityToCheck = 'Tucson'
// let matchFound = false;

// for (var i = 0; i < cleanestCities.length; i++) {
//     if (cityToCheck === cleanestCities[i]) {
//         matchFound = true;
//         console.log("It's one of the cleanest cities");
//     }
// }
// if (matchFound === false) {
//     console.log("It's not on the list");
// }
if (cleanestCities.includes(cityToCheck)) {
    console.log("It's one of the cleanest cities");
} else {
    console.log("It's not on the list");
}

