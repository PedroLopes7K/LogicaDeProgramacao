const form = document.querySelector('form')
const resp1 = document.getElementById('resp1')
const resp2 = document.getElementById('resp2')
const numero = document.getElementById('valor')
const conta = document.getElementById('conta')
let resposta = ''
let total = 0
let contas = 0

form.addEventListener('submit', e => {
  e.preventDefault()
  let valor = Number(numero.value)
  let descricao = conta.value
  contas += 1
  total += valor
  resposta += `${descricao} - R$: ${valor.toFixed(2)}\n\n`
  resp1.innerText = resposta
  resp2.innerText = `${contas} Conta(s) - Total = ${total.toFixed(2)}`

  conta.value = ''
  numero.value = ''
  conta.focus()
})
