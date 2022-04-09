const form = document.querySelector('form')
const resp = document.querySelector('pre')
const carros = []

form.addEventListener('submit', e => {
  e.preventDefault()
  const modelo = form.inModelo.value
  const preco = Number(form.inPreco.value)
  carros.push({ modelo, preco })
  form.inModelo.value = ''
  form.inPreco.value = ''
  form.inModelo.focus()
  // dispara um evento de click em btListar (equivale a um click no botão na página)
  form.btListar.dispatchEvent(new Event('click'))
})

form.btListar.addEventListener('click', () => {
  if (carros.length === 0) {
    alert('Não há carros na lista!')
    return
  }
  // reduce() concatena uma string, obtendo modelo e preço de cada veículo
  const lista = carros.reduce(
    (acumulador, carro) =>
      acumulador + carro.modelo + ' - R$: ' + carro.preco.toFixed(2) + '\n',
    ''
  )
  resp.innerText = `Lista dos Carros Cadastrados\n${'-'.repeat(40)}\n${lista}`
})

// CONTINUA...
