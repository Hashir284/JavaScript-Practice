let a = [1,2,9,-5,34]

let sum = 0
for (let i = 0; i < a.length; i++) {
    const element = a[i];
    if(element < 0) {break}
    sum += element
}

console.log(sum);
