let students = []
let studentid = []
function deleted(i) {
    studentid.splice(i, 1)
    students.splice(i, 1)
    document.getElementById('tbody').innerHTML = ''
    for (let j = 0; j < students.length; j++) {
                document.getElementById('tbody').innerHTML += `<tr>
                <td>${students.length}</td>
                <td>${students[j]}</td>
                <td>${studentid[j]}</td>
                <td><button onclick='deleted(students.length - 1)'>Delete</button></td>
            </tr>`
    }
}

function userinput() {
    let studentName = document.getElementById('sn').value
    let studentRollNumber = document.getElementById('srn').value
    let flagvariable

    if (students.length === 0) {
        flagvariable = true
    } else if (students.length >= 1) {
        for (let j = 0; j < students.length; j++) {
            if (studentid[j] != studentRollNumber) {
                flagvariable = true
            } else {
                flagvariable = false
            }
        }
    }

    if (flagvariable) {
        students.push(studentName)
        studentid.push(studentRollNumber)
        document.getElementById('tbody').innerHTML += `            <tr>
                <td>${students.length}</td>
                <td>${studentName}</td>
                <td>${studentRollNumber}</td>
                <td><button onClick='deleted(students.length - 1)'>Delete</button></td>
            </tr>`
        flagvariable = false
    } else {
        alert('Wrong Roll Number')
    }
}