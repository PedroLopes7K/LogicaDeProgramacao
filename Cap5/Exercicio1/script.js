const inputFruta = document.getElementById('fruta')
const num = document.getElementById('numero')
const resp = document.getElementById('resp')
const form = document.querySelector('form')

let resposta = ''

form.addEventListener('submit', e => {
  e.preventDefault()

  let repeticao = Number(num.value)
  let fruta = inputFruta.value
  for (let i = 1; i < repeticao; i++) {
    resposta += `${fruta} * `
  }
  resposta += `${fruta}`
  resp.innerText = resposta
  resposta = ''
  num.value = ''
  inputFruta.value = ''
  inputFruta.focus()
})
