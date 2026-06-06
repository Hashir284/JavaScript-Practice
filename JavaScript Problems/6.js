let a = [1, 34, 54, 1, 34, 54, 1, 34, 54]

async function sum(arr) {
    let result = []
    for (const element of arr) {
        await p(500)
        result.push(element * 2);
    }
    return result
}

(async function i() {
    let b = await sum(a)
    console.log(b);
})()

function p(t) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res()
        }, t)
    })
}