function get(){
    let v1 = document.getElementById('v1').value
    let v2 = document.getElementById('v2').value
    let select = document.getElementById('select').value
    let oper
    if(select=='+'){
    oper = Math.random() > 0.1 ? select : '-' 
    }else if(select=='-'){
    oper = Math.random() > 0.1 ? select : '/' 
    }else if(select=='/'){
    oper = Math.random() > 0.1 ? select : '**' 
    }else if(select=='*'){
    oper = Math.random() > 0.1 ? select : '+' 
    }else if(select=='**'){
    oper = Math.random() > 0.1 ? select : '**' 
    }

    if(oper=='+'){
        oper = v1 + v2
    }else if(oper=='-'){
        oper = v1 - v2
    }else if(oper=='/'){
        oper = v1 / v2
    }else if(oper=='*'){
        oper = v1 * v2
    }else if(oper=='**'){
        oper = v1 / v2 + v2 * 5 * 7 / 3
    }

    document.getElementById('answer').innerHTML = `Answer: ${oper}`
}