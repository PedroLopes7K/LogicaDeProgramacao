const form = document.querySelector('form')
const numero = document.getElementById('valor')
const resp = document.getElementById('resp')
let resposta = ''

form.addEventListener('submit', e => {
  e.preventDefault()
  const valor = Number(numero.value)
  for (let i = valor; i >= 2; i--) {
    // if (i == 1) {
    //   resposta += ` ${i}.`
    //   break
    // }
    resposta += ` ${i},`
  }
  resposta += ` 1.`
  resp.innerText = `Entre ${valor} e 1:  ${resposta}`
  numero.value = ''
  resposta = ''
})
