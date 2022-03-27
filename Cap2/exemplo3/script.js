const form = document.querySelector('form')
const h3 = document.querySelector('h3')

form.addEventListener('submit', e => {
  const quilo = Number(form.quilo.value)
  const consumo = Number(form.consumo.value)

  const valor = (quilo / 1000) * consumo
  h3.innerText = `Valor a pagar R$: ${valor.toFixed(2)}`
  e.preventDefault()
})
