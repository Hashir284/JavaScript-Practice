let b = [11,2,3,4,5,6,7,8,9,10]
b.forEach(e=>{
    console.log(e);
})
b.forEach((value, index, arr)=>{
    console.log(value, index, arr);
}) 