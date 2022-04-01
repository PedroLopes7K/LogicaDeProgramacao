// PROGRAMA PARQUIMETRO
// const prompt = require('prompt-sync')()
// const valor = Number(prompt('Insira um valor R$:'))
const valor = 3.98
// let tempo
let troco

if (valor < 1) {
  console.log('Valor Insuficiente para estacionar! (Min: R$ 1,00)')
} else if (valor >= 1 && valor < 1.75) {
  troco = valor % 1
  console.log(`Seu tempo de estacionamento: 30 min`)
  if (troco > 0) {
    console.log(`Seu troco R$: ${troco.toFixed(2)}`)
  }
} else if (valor >= 1.75 && valor < 3) {
  troco = valor % 1.75
  console.log(`Seu tempo de estacionamento: 60 min`)
  if (troco > 0) {
    console.log(`Seu troco R$: ${troco.toFixed(2)}`)
  }
} else if (valor >= 3) {
  troco = valor % 3
  console.log(`Seu tempo de estacionamento: 120 min`)
  if (troco > 0) {
    console.log(`Seu troco R$: ${troco.toFixed(2)}`)
  }
}

// OUTRO METODO
// if (valor >= 3.00) {
//   tempo = 120
//   troco = valor - 3.00
// } else if (valor >= 1.75) {
//   tempo = 60
//   troco = valor - 1.75
// } else {
//   tempo = 30
//   troco = valor - 1.00
// }
