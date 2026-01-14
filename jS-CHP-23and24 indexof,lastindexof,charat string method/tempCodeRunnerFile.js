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