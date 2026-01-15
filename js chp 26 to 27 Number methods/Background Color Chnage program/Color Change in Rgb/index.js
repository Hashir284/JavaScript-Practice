function changecolor() {
    let redcolor = Math.round(Math.random() * 255)
    let greencolor = Math.round(Math.random() * 255)
    let bluecolor = Math.round(Math.random() * 255)


    document.getElementById('body').style.backgroundColor = `rgba(${redcolor}, ${greencolor}, ${bluecolor})`

    document.getElementById('button').innerHTML = `rgba(${redcolor}, ${greencolor}, ${bluecolor})`
    
    console.log(`rgba(${redcolor}, ${greencolor}, ${bluecolor})`);
    
}

// console.log(Math.random() * 255);
