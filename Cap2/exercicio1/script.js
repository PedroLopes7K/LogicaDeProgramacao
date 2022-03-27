const form = document.querySelector('form')
const h3 = document.querySelector('h3')
const h4 = document.querySelector('h4')

form.addEventListener('submit', e => {
  const produto = form.medicamento.value
  const valor = Math.floor(Number(form.valor.value))
  h3.innerText = ` Promoção de ${produto}`
  h4.innerText = ` Leve dois por apenas R$: ${(valor * 2).toFixed(2)}`
  e.preventDefault()
})
