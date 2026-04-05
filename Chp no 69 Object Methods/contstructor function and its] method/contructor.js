let o = {
    a: 1,
    b: 2,
    c: function (e) {
        console.log(e);
    }
}
o.c(22524)

function Calc(name, work, skill) {
    this.identitiy = name
    this.work = work
    this.skill = skill
    // this.result = fun.call(this)
    // function fun() {
    //     let js = this.skill.split(', ')
    //     for (let i = 0; i < js.length; i++) {
    //         if (js[i].toLowerCase() == 'javascript') {
    //             return 'Yes, He is a Javascript Programmer'
    //         }
    //     }
    //     return 'No, He is not a Javascript Programmer'
    // }
    Calc.prototype.result = function() {
    let js = this.skill.split(', ');
    for (let i = 0; i < js.length; i++) {
        if (js[i].toLowerCase() === 'javascript') {
            return 'Yes, He is a JavaScript Programmer';
        }
    }
    return 'No, He is not a JavaScript Programmer';
};
}
let p1 = new Calc('Hashir', 'Development', 'Html, Css, JavaScript');
let p2 = new Calc('Ibsam', 'Development', 'Html, Css, JavaScript');
console.log(p1);
console.log(p2);
console.log(p1 == p2);
console.log(p1 === p2);
const f = () => {
    return "Hello!";
};
const ff = (() => {
    return "Hello!";
})();
console.log(f);   // ✅ function definition print karega
console.log(f()); // ✅ function call, returns "Hello!"
console.log(ff);


