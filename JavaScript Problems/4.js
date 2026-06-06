let password = 'P#@assword'
function get() {
    let u = false
    let l = false
    let specialCharacter = []
    for (let i = 0; i < password.length; i++) {
        if (password[i] >='A' && password[i] <= 'Z') {
            u = true
        }
        if (password[i] >='a' && password[i] <= 'z') {
            l = true
        }
        if (password[i] == '@' || password[i] == '#' || password[i] == '$' || password[i] == '%' || password[i] == '^') {
            specialCharacter.push(password[i])
        }
    }
    if(specialCharacter.length >= 2 && password.length >=8 && u && l) {console.log('Strong Password');}
    else {console.log('Weak Password');}
}
get()