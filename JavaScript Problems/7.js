let input = document.getElementById('i')

let s = () => {
    let inputv = input.value.toLowerCase()
    let cards = document.querySelectorAll('.card')

    cards.forEach((card) => {
        let text = card.innerText.toLowerCase()

        if (text.includes(inputv)) {
            card.style.display = 'inline-block'
        } else {
            card.style.display = 'none'
        }
    })
}