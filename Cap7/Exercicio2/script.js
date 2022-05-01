const form = document.querySelector('form')
const resp = document.getElementById('resp')
let palin2 = ''

form.addEventListener('submit', e => {
  e.preventDefault()
  let mensagem = form.inFrase.value
  mensagem = mensagem.toUpperCase()
  let palin = mensagem.replace(/\s/g, '')
  for (let i = palin.length - 1; i >= 0; i--) {
    palin2 += palin[i]
  }
  console.log(palin2)
  console.log(palin)

  if (palin == palin2) {
    resp.innerText = `${mensagem} é um Palíndromo!`
  } else {
    resp.innerText = `${mensagem} não é um Palíndromo!`
  }
  palin = ''
  palin2 = ''
  form.inFrase.value = ''
})
