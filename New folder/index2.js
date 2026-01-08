let a = 34, b = 20, c = 30

if (a > b) {
    if (a > c) {
        console.log('A is greater then c and b');

    } else if (a < c) {
        console.log('A is greater then b and A is less then c');
    }
} else if (a < b) {
    if(a < c) {
        console.log('A is smaller then c and b');
    }else if (a>c){
        console.log('A is less then b and greator then c')
    }
}