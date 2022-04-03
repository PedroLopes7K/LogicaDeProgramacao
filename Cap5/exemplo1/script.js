const form = document.querySelector('form')
const numero = document.getElementById('numero')
const resposta = document.getElementById('resposta')

form.addEventListener('submit', e => {
  e.preventDefault()
  let valor = numero.value
  // let res = ''
  for (let i = 1; i <= 10; i++) {
    let resultado = valor * i
    // res += `${valor} x ${i} = ${resultado}\n`
    resposta.innerText += `${valor} x ${i} = ${resultado}\n`
  }
  // resposta.innerText = res
})
