const form = document.querySelector('form')
const resposta = document.querySelector('h3')

form.addEventListener('submit', e => {
  e.preventDefault()

  const nome = form.nome.value
  const masculino = form.masculino.checked
  const altura = Number(form.altura.value)

  let peso
  if (masculino) {
    peso = 22 * Math.pow(altura, 2)
  } else {
    peso = 21 * Math.pow(altura, 2)
  }
  resposta.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(2)} kg`
})

form.addEventListener('reset', () => {
  resposta.innerHTML = ''
})
