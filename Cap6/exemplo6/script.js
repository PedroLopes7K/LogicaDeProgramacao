import prompt from 'prompt-sync'
console.log(
  "Informe os clientes em ordem de chegada ou 'Fim' no nome para sair."
)
const clientes = []
do {
  const nome = prompt('Nome: ')
  if (nome == 'Fim') {
    break
  }
  const idade = Number(prompt('Nome: '))
  clientes.push({ nome, idade })
  console.log('Ok! Cliente cadastrado.')
} while (true)

console.log('\nFila preferencial')
console.log('-'.repeat(40))
const filaPref = clientes.filter(cliente => cliente.idade >= 60)
filaPref.forEach((fila, i) => {
  // fila representa o objeto do array e i representa o indice
  console.log(`${i + 1}. ${fila.nome}`)
})
console.log('\nFila normal')
console.log('-'.repeat(40))
const filaNormal = clientes.filter(cliente => cliente.idade < 60)
filaNormal.forEach((fila, i) => {
  console.log(`${i + 1}. ${fila.nome}`)
})
