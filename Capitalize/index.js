let str = 'Underwater searches, procedures to find known or suspected target objects in a specified search area under water. Water surface searches, procedures carried out on or over the surface of a body of water with the purpose of finding lost vessels, persons, or floating objects'

str = str.split(' ')
console.log(str);

for (let i = 0; i < str.length; i++) {
    str[i] = str[i].slice(0, 1).toUpperCase() + str[i].slice(1).toLowerCase()
    if(str[i] === 'Or'){
        str[i] = 'or'
    }
}

str = str.join            (' ')
console.log(str);


