// let password = prompt('Enter the password'), username = prompt('Enter the username')
let password = 'admin123', username = 'root'

if (username === 'root') {
    if (password === 'admin123') {
        console.log('login Successful')
    }else if (password != 'admin123') {
        console.log('Password not match');
    }
} 

else if (password === '') {
        if(username === ""){
            console.log("You have not enter the username and password")
        }else{
            console.log("You have not enter the password")
        }
    }

else if (username != 'root') {
    if (password != 'admin123') {
        console.log('Username and Password did not match')
    }
    else {
        console.log('Username did not match')
    }
} 

else {
    console.log('You have not Enter the username')
}