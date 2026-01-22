let v1 = prompt('Enter the value one')
let operator = prompt('Enter the operator')
let v2 = prompt('Enter the value two')

let obj = {
    '+':'-',
    '-':'/',
    '/':'**',
    '*':'+'
}

let random = Math.random()

if(random > 0.1){
    document.getElementById('ans').innerText = eval(`${v1} ${operator} ${v2}`)
    console.log(eval(`${v1} ${operator} ${v2}`))
    console.log(v1, operator, v2);
    
}
else{
    operator = obj[operator]
    console.log(v1, operator, v2);
    console.log(eval(`${v1} ${operator} ${v2}`))
    document.getElementById('ans').innerText = eval(`${v1} ${operator} ${v2}`)
}