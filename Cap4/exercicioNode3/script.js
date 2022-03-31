// PROGRAMA INVERTE CENTENA
const prompt = require('prompt-sync')()
// const numero = Number(prompt('Numero (centena):'))
const numero = 378
if (numero < 100 || numero > 1000) {
  console.log('Esse numero não e uma centena')
}
const num1 = Math.floor(numero / 100)
console.log(num1)
const sobra = numero % 100
console.log(`Sobra: ${sobra}`)
const num2 = Math.floor(sobra / 10)
console.log(num2)
const num3 = sobra % 10
console.log(num3)
console.log(`Invertido: ${num3}${num2}${num1}`)
