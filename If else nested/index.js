// let a = 5, b = 6, c = 7
// if(a<b){
//     if(b<c){
//         console.log('B is smaller')
//     }
// }else{
//     console.log('A is greater')
// }

let a = 10, b = 20, c = 30

if(a > b){
    if(a > c){
        console.log('A is greater then c and b');
        
    }
    else{
        console.log('A is greater then b and A is less then c');
    }
}else if(a > c){
    console.log('A is greater then c and A is less then b');
}else if(a < c){
    if(a < b){
        console.log('A is less then c and b'); 
    }
}

// if(a > b){
//     if(a > c){
//         console.log('A is greater then c');
//     }
//     else{
//         console.log('A is less then b and c');
//     }
// }
