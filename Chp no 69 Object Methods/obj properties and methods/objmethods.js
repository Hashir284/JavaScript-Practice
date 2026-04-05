let plan1 = {
    name: "Basic",
    price: 3.99,
    space: 100,
    transfer: 1000,
    pages: 10,
    discountMonths: [6, 7],
    discount: '15%',
    calcAnnual: function (percentIfDisc) {
        let discount = parseInt(this.discount)
        let bestPrice = this.price;
        let currDate = new Date();
        let thisMo = 6;
        for (let i = 0; i < this.discountMonths.length; i++) {
            if (this.discountMonths[i] === thisMo) {
                console.log(discount);
                
                // bestPrice = this.price * (1 - `0.${discount}`);
                bestPrice = this.price * ((100 - discount)/100);
                break;
            }
        }
        return bestPrice;
    }
};
let plan1duplicate = {
    name: "Basic",
    price: 3.99,
    space: 100,
    transfer: 1000,
    pages: 10,
    discountMonths: [3, 6, 7],
    discount: '15%',
    calcAnnual: function (percentIfDisc) {
        let discount = parseInt(this.discount)
        let bestPrice = this.price;
        let currDate = new Date();
        let thisMo = currDate.getMonth() + 1;
        console.log(percentIfDisc);
        for (let i = 0; i < this.discountMonths.length; i++) {
            if (this.discountMonths[i] === thisMo) {
                console.log(percentIfDisc);
                
                // bestPrice = this.price * (1 - `0.${discount}`);
                bestPrice = this.price * ((100 - percentIfDisc)/100);
                break;
            }
        }
        return bestPrice * 12;
    }
};
console.log(plan1);
console.log(plan1.calcAnnual(15));
console.log(plan1duplicate.calcAnnual(25) + '$');


