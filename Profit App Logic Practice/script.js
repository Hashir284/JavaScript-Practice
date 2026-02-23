let items = []

function get(color) {
    let productname = document.getElementById('pn').value
    let amount = document.getElementById('a').value

    if (productname === '' || amount === '') {
        return alert('Plz! Enter the amount and product name')
    }
    amount = Number(amount)
    items.push({ productname, amount, color })
    table()
    totals()
}

function table() {
    document.getElementById('tbody').innerText = ''
    for (let i = 0; i < items.length; i++) {
        itemslist = items[i]
        let del = 'del'
        document.getElementById('tbody').innerHTML += `<tr>
                    <td class='td1'>${i + 1}</td>
                    <td>${itemslist.productname}</td>
                    <td class='${itemslist.color}'>${itemslist.amount}</td>
                    <td><button class="${itemslist.color}" onclick="${del}(${i})">Delete</button></td>                
                    </tr>`
    }
}

function del(inex){
    items.splice(inex, 1)
    document.getElementById('tbody').innerText = ''
    for (let i = 0; i < items.length; i++) {
        itemslist = items[i]
        let del = 'del'
        document.getElementById('tbody').innerHTML += `<tr>
                    <td class='td1'>${i + 1}</td>
                    <td>${itemslist.productname}</td>
                    <td class='${itemslist.color}'>${itemslist.amount}</td>
                    <td><button class="${itemslist.color}" onclick="${del}(${i})">Delete</button></td>                
                    </tr>`
    }
    totals()
}

// function del2(){
// }

function totals() {
    let ti = 0
    let te = 0

    for (let i = 0; i < items.length; i++) {
        if (items[i].color === 'green') {
            ti += items[i].amount //i = 7
        } else {
            te += items[i].amount
        }
    }

    document.getElementById('ti').innerText = ti
    document.getElementById('te').innerText = te
    console.log(ti, te);


    let tp_tl = document.getElementById('ti').innerText - document.getElementById('te').innerText


    document.getElementById('tp').innerText = 0
    document.getElementById('tl').innerText = 0
    if (tp_tl >= 0) {
        document.getElementById('tp').innerText = tp_tl
    } else {
        document.getElementById('tl').innerText = tp_tl
    }

    if (document.getElementById('ti').innerText == '') {
        document.getElementById('ti').innerText = 0
    }
    // if (document.getElementById('tl').innerText == 0) {
    //     document.getElementById('tl').innerText = ''
    // }
    // if (document.getElementById('tp').innerText == 0) {
    //     document.getElementById('tp').innerText = ''
    // }
    if (document.getElementById('te').innerText === '') {
        document.getElementById('te').innerText = 0
    }
}