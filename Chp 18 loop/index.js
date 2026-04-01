var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu", ''];
var city = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];
 
for (let i = 0; i < cleanestCities.length; i++) {
    if (cleanestCities[i] === city[i]) {
        console.log("It's one of the cleanest cities");
    }
    else{
        console.log('else it is not on the list');
    }
}
