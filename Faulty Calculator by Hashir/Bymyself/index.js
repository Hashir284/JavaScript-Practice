function get() {
    
    let v1 = Number(document.getElementById('v1').value) 
    let v2 = Number(document.getElementById('v2').value)
    let select = document.getElementById('select').value
    let Oper

    let arr = ['+','-','/','**','*']

    for(let i=0; i<arr.length; i++){
        if(select===arr[i]){ 
        if(arr[i]=='+'){
            Oper = Math.random()>0.23 ? v1+v2 : v1-v2
            break
        }else if(arr[i]=='-'){
            Oper = Math.random()>0.23 ? v1-v2 : v1/v2
            break
        }else if(arr[i]=='*'){
            Oper = Math.random()>0.23 ? v1*v2 : v1+v2
            break
        }else if(arr[i]=='/'){
            Oper = Math.random()>0.23 ? v1/v2 : v1**v2
            break
        }
        else if(arr[i]=='**'){
            Oper = Math.random()>0.23 ? v1**v2 : v1+v2-5+v2*v2+4
            break
        }
        }
    }

    document.getElementById('answer').innerText = `Answer ${Oper}`
    console.log(Oper);
}