//forin
let obj1 = {
    a:1,
    b:'str',
    c:true
}
for (const key in obj1) {
    if (!Object.hasOwn(obj1, key)) continue;
    
    const element = obj1[key];
    console.log(key, element);
}

 //for of
let arr = [2,45,true]
for (const element of arr) {
    console.log(element);
    
}