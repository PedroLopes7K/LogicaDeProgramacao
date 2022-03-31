const prompt = require('prompt-sync')()
const compra = Number(prompt('Valor da Compra R$:'))
let parcela
let condicaoParcela = Math.floor(compra / 20)
if (condicaoParcela == 0) {
  parcela = 1
} else if (condicaoParcela > 6) {
  parcela = 6
} else {
  parcela = condicaoParcela
}
let valorParcela = compra / parcela

console.log(` Pode pagar em ${parcela}x de R$:${valorParcela.toFixed(2)} `)
