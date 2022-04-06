// const prompt = required('prompt-sync')()
// const produto = prompt('Produto:')
// const num = Number(prompt('Número de etiquetas:'))
const produto = 'Abacaxi'
const num = 9
// cria um laço de repetição ate num/2 pois imprime 2 etiquetas por linha
for (let i = 1; i <= num / 2; i++) {
  // padend preenche a string ate atingir 30 caracteres
  console.log(`${produto.padEnd(30)} ${produto.padEnd(30)}`)
}
if (num % 2 == 1) {
  console.log(produto)
}
