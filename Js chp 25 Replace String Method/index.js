let war = 'The New Yorker magazine doesnt allow the phrase "World War iI. " They say it should be "the World War II." So lets search the following sentence for the banned characters and replace them with World War II the phrase that World War ii the New Yorker prefers.'

let newwar = war.replace(/World War II/g, 'Second World War')
console.log(newwar);

newwar = war.replaceAll(/World War II/gi, 'Second World War')
console.log(newwar);

newwar = war.replace(/World War II/i, 'Second World War')
console.log(newwar);