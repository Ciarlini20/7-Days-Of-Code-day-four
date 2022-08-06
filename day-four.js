let randomNumber = Math.floor(Math.random() * 10)
let attempts = 0
console.log(randomNumber)
while (attempts < 3) {
  const answer = prompt('Advinhe um número entre 0 e 10')
  if (answer == randomNumber) {
    attempts = 3
    alert(`parabéns o número era ${randomNumber}`)
  } else {
    attempts = attempts + 1
    if (attempts < 3) {
      alert(`Você errou, ainda lhe restam ${3 - attempts} tentativas`)
    }
    if (attempts == 3) {
      alert(
        `Que pena, você não conseguiu adivinhar, o número era ${randomNumber}`
      )
    }
  }
}
