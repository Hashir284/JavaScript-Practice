function rest(...num){
    return num.reduce((acc, curr)=>{
        return acc + curr
    }, 0)
}
console.log(rest(1,2));
