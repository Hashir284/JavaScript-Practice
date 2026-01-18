let obj = {
    Name: 'Hashir',
    Skills: ['Html', 'Css', "Bootstrap"],
    'Currently Learning': 'Javascript'
}
for (const key in obj) {
    const element = obj[key];  
    console.log(key + ':', element);
}

