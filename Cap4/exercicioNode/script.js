// const prompt = require('prompt-sync')()
// const pessoas = Number(prompt('Numero de Pessoas:'))
// const peixes = Number(prompt('Numero de Peixes:'))
const pessoas = 4
const peixes = 5

let pagar

if (peixes <= pessoas) {
  pagar = peixes * 20
  console.log(`Valor a Pagar: ${pagar}`)
} else {
  let modulo = peixes % pessoas
  console.log(`Modulo: ${modulo}`)
  pagar = (peixes - modulo) * 20 + modulo * 12
  console.log(`Valor a Pagar: ${pagar}`)
}
