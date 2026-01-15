let password = 'admin'
let userName = 'root'

if(userName === 'root'){
    if(password === 'admin'){
        console.log('login Successful');
    }else{
        console.log('incorrect password');
    }
}else{
    console.log('incorrect username');
    
}