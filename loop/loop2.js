// let usercity = 'Karachi'
let usercity = prompt('Enter the city')
let cities = ['Peshawer', 'Quetta', 'Multan', 'Islamabad', 'Karachi', 'Lahore']

let usercityverify

for(let index = 0; index < cities.length; index++){
    if(cities[index] === usercity){
        // console.log("Usercity Matched");
        usercityverify = true
        break
    }
    else{
        usercityverify = false
        // console.log('Usercity did not match');
    }
}

if(usercityverify === true){
    // console.log("Usercity Matched");
    alert("Usercity Matched");
}else{
    // console.log("Usercity not matched");
    alert("Usercity not matched");
}

