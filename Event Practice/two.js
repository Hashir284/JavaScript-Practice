let students = []
let rollnumber = []
function get2(i) {  
    rollnumber.splice(i, 1)
    students.splice(i, 1)
    let tbodydata = document.getElementById('tbody')
    tbodydata.innerHTML = ''
    for (let j = 0; j < students.length; j++) {
        tbodydata.innerHTML += `<tr>
    <td>${j+1}</td>
    <td>${students[j]}</td>
    <td>${rollnumber[j]}</td>
    <td><button onclick="get2(${j})">Delete</button></td>
    </tr>`
    }
}

function userinput() {
    let sn = document.getElementById('sn').value
    let srn = document.getElementById('srn').value
    let flagvariable

    if (rollnumber.length === 0) {
        flagvariable = true
    } else if (rollnumber.length >= 1) {
        for (let i = 0; i < rollnumber.length; i++) {
            if (srn != rollnumber[i]) {
                flagvariable = true
            } else {
                flagvariable = false
                break
            }
        }
    }


    if (flagvariable) {
        students.push(sn)
        rollnumber.push(srn)
        let tbodydata = document.getElementById('tbody')
        tbodydata.innerHTML += `<tr>
    <td>${students.length}</td>
    <td>${sn}</td>
    <td>${srn}</td>
    <td><button onclick="get2(${students.length - 1})">Delete</button></td>
    </tr>`
        flagvariable = false
    } else {
        alert('wrong roll number')
    }
}