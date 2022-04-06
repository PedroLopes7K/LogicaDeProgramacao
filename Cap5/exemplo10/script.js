const valor = 98.45
const numParcelas = 5
const valorParcelas = Math.floor(valor / numParcelas)
const parcelaFinal = valorParcelas + (valor % numParcelas)

console.log(`Valor: R$${valor}`)
for (let i = 1; i < numParcelas; i++) {
  console.log(`${i} parcela: R$${valorParcelas.toFixed(2)}`)
}
console.log(`${numParcelas} parcela: R$${parcelaFinal.toFixed(2)}`)
