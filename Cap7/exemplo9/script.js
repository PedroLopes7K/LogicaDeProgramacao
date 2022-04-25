// const prompt = require('prompt-sync')()
// const formula = prompt('Formula: ')
let formula = '(4 + 5) * (6 / 3)'
let abre = 0
let fecha = 0

for (const simbolo of formula) {
  if (simbolo == '(') {
    abre++
  } else if (simbolo == ')') {
    fecha++
  }
  // se em algum momento, fecha for maior que abre... sai do loop
  if (fecha > abre) {
    break
  }
}
if (abre == fecha) {
  console.log('formula valida! (em relação a quantidade de parênteses)')
} else {
  console.log('Erro... Fórmula incorreta.')
}
