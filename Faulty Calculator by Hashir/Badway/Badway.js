function Toget() {
    var v1 = 2
    var v2 = 2
    var select = '/'
    let Oper

    if (select == '+') {
        a = Math.random() > 0.1 ? select : '-'
        Oper = a == '+' ? v1 + v2 : v1 - v2
    } else if (select == '-') {
        a = Math.random() > 0.1 ? select : '/'
        Oper = a == '-' ? v1 - v2 : v1 / v2
    } else if (select == '/'){
        a = Math.random() > 0.1 ? select : '**'
        Oper = a == '/' ? v1/v2 : v1*v2
    }else if(select == '*'){
        a = Math.random() > 0.1 ? select : '+'
        Oper = a = '*' ? v1*v2 : v1+v2
    }else if(select == '**'){
        a = Math.random() > 0.14 ? select : '?'
        Oper = a == '**' ? v1**v2 : v1*23-9*8+v2
    }

    console.log(Oper);
    
}
Toget()