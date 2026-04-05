//map
let arr = [1,13,17,19,21]
let newarr = arr.map((value, index, array)=>{
    return value*2
})
console.log(newarr);

//filter
let greaterthen13 = (e)=>{
    if(e>13){
        return true
    }
    return false
}
arr.filter(greaterthen13)
console.log(arr);
console.log(arr.filter(greaterthen13));


//reduce
let reducee = (a,b)=>{
    return a+b
}
console.log(arr.reduce(reducee));
 console.log(arr);
 
// ye teenon methods original array ko change nhi kerte 

//filter
let aa = [2,3,4,22,34,54,785]
aa = aa.filter((e)=>{
    if(e > 1){
        return true
    }
    return false
})
console.log(aa);
