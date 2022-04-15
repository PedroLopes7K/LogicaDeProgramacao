// import prompt from 'prompt-sync'
// console.log('Informe o valor dos saques ou 0 para sair.')
const saques = [30, 20, 17, 40, 23]
// do {
//   const valor = Number(prompt('Saque R$: '))
//   if (valor == 0) {
//     break
//   }
//   saques.push(valor)
//   if (valor % 10 == 0) {
//     console.log('Saque realizado com sucesso!')
//   } else {
//     console.log('Erro.. Valor inválido (Temos apenas notas de 10')
//   }
// } while (true)
console.log('\nSaques Válidos')
console.log('-'.repeat(40))
const saquesValidos = saques.filter(saque => saque % 10 == 0)
for (const saque of saquesValidos) {
  console.log(saque.toFixed(2))
}
console.log('-'.repeat(40))
const totalSacado = saquesValidos.reduce((total, saque) => {
  return total + saque
})
console.log(`Total sacado R$: ${totalSacado.toFixed(2)}`)

const saquesInvalidos = saques.length - saquesValidos.length
console.log(
  `\n Número de tentativas de Saques (saques inválidos): ${saquesInvalidos}`
)
