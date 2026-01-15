function changecolor() {
    let redcolor = Math.round(Math.random() * 255)
    let greencolor = Math.round(Math.random() * 255)
    let bluecolor = Math.round(Math.random() * 255)

   //((((((((((((((((((((((((((((if(alpha <= 0.05){
    //     alpha = 0
    // }if(alpha <= 0.1){
    //     alpha = 0.1
    // }else if(alpha <= 0.2){
    //     alpha = 0.2
    // }else if(alpha <= 0.3){
    //     alpha = 0.3
    // }else if(alpha <= 0.4){
    //     alpha = 0.4
    // }else if(alpha <= 0.5){
    //     alpha = 0.5
    // }else if(alpha <= 0.6){
    //     alpha = 0.6
    // }else if(alpha <= 0.7){
    //     alpha = 0.7
    // }else if(alpha <= 0.8){
    //     alpha = 0.8
    // }else if(alpha <= 0.9){
    //     alpha = 0.9
    // }else if(alpha <= 1){
    //     alpha = 1
    // }

    // if(alpha <= 0.2){
    //     alpha = alpha + 0.1
    // }else if(alpha <= 0.1){
    //     alpha = alpha + 0.2
    // }else if(alpha <= 0.05){
    //     alpha = alpha + 0.25
    // }))))))))))))))))))))))))))))))))))))))
    //issse behter

    // let alpha = Math.round(Math.random * 10) / 10     
    // if i want only 0.1 to 1
    alpha = Math.round((Math.random() * 0.9 + 0.1) * 10) / 10; // 0.1 to 1

    // alpha = (alpha == 0.7 || alpha == 0.3 || alpha == 0.5) ? 1 : alpha


    document.getElementById('body').style.backgroundColor = `rgba(${redcolor}, ${greencolor}, ${bluecolor},  ${alpha})`

    document.getElementById('button').innerHTML = `rgba(${redcolor}, ${greencolor}, ${bluecolor},  ${alpha})`
    
    console.log(`rgba(${redcolor}, ${greencolor}, ${bluecolor}, ${alpha})`);
    
}

// console.log(Math.random() * 255);
