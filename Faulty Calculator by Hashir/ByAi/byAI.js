function get() {
    let v1 = Number(v1.value);
    let v2 = Number(v2.value);
    let op = select.value;

    let correct = Math.random() > 0.095;

    let ops = {
        '+': () => correct ? v1 + v2 : v1 - v2,
        '-': () => correct ? v1 - v2 : v1 + v2,
        '*': () => correct ? v1 * v2 : v1 / v2,
        '/': () => correct ? v1 / v2 : v1 * v2,
        '**': () => correct ? v1 ** v2 : v1 + v2 - 5 + v2 * v2 + 4
    };

    let Oper = ops[op]();

    answer.innerText = `Answer ${Oper}`;
}
