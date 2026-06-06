let arr = [1, 1, 1, 3, 54, 65, null, false, 88, 88, 9087, 88, 5985, null, null, false]

arr.forEach((e, i) => {
    if (arr.indexOf(e) === i) {
        console.log(e);
    }
})