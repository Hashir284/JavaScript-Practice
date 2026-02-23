let dayofweek = 1

switch (dayofweek) {
    case 1:
        console.log('Whoopee');
        break
    case 'Sunday':
        console.log('Whoopee');
        break
    default:
        console.log('No Holiday');
}

dayofweek = true

switch (dayofweek) {
    case true:
        console.log('Whoopee1', true);
        break
    case 'Sunday':
        console.log('Whoopee');
        break
    default:
        console.log('No Holiday');
}

//Nested

let password = 'admin'
let username = 'Hashir'

switch (username) {
    case 'Hashir':
        switch (password) {
            case 'admin':
                console.log('Login Successful');
                break
            default:
                console.log('Wrong Password');
        }
        break
    default:
        console.log('Wrong Username');
}

// Practice

let Grade = 'D'
switch (Grade) {
    case 'A':
        console.log('Congratulations, You get A grade');
        break
    case 'A1':
        console.log('Congratulations, You get A1 grade');
        break
        case 'B':
            console.log('Congratulations, You get B grade');
    break
        case 'C':
            console.log('Congratulations, You get C grade');
    break
        case 'D':
            console.log('Congratulations, You get D grade');
    break
    default:
        console.log('Unsatisfactory');
}
