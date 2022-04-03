let num1
let num2
let condicao
let condicao2
do {
  num1 = Number(prompt('Primeiro Numero:'))
  num2 = Number(prompt('Segundo Numero:'))
  condicao = num1 == 0 || isNaN(num1)
  condicao2 = num2 == 0 || isNaN(num2)

  if (condicao || condicao2) {
    alert('Valores Invalidos!')
    continue
  }
} while (condicao || condicao2)

let resposta = ''
for (let i = num1; i <= num2; i++) {
  // let par = i % 2
  if (i % 2 == 0) {
    resposta += ` ${i},`
  }
}
alert(`Numeros pares entre ${num1} e ${num2}: ${resposta}`)
// let num = 37

// do {
//   if (num == 0 || isNaN(num)) {
//     alert('Numero Invalido!')
//   }
// } while (num == 0 || isNaN(num))
// let resposta = ''
// for (i = 2; i <= num; i = i + 2) {
//   resposta += ` ${i},`
// }
// alert(`Pares entre 1 e ${num}: ${resposta}`)
