const form = document.querySelector('form')
const h3 = document.querySelector('h3')

form.addEventListener('submit', e => {
  const valor = Number(form.valor.value)
  const tempo = Number(form.tempo.value)

  // math.ceil areddonda o valor para cima
  const valorPagar = Math.ceil(tempo / 15) * valor
  h3.innerText = `Valor a Pagar R$: ${valorPagar.toFixed(2)}`
  e.preventDefault()
})
