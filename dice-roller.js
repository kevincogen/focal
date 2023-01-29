const diceRoller = function(amount) {
  let outcomeArray = [] 
  for (let rolls = 0; rolls < amount; rolls++) {
    outcomeArray.push(Math.ceil(Math.random() * 6))
  } 
  return outcomeArray.join()
}

console.log(diceRoller(process.argv[2]))