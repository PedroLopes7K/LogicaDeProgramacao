const veiculo = document.getElementById('veiculo').value
const preco = document.getElementById('preco')
const form = document.querySelector('form')

form.addEventListener('submit', e => {
  const h3 = document.querySelector('h3')
  const h4 = document.querySelector('h4')
  const h5 = document.querySelector('h5')

  const valor = Number(preco.value)
  const entrada = valor / 2
  const parcela = entrada / 12

  h3.innerText = `Promoção: ${veiculo}`
  h4.innerText = ` Entrada de: R$${entrada.toFixed(2)}`
  h5.innerText = `+12X de: R$${parcela.toFixed(2)}`
  e.preventDefault()
})
