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
form.btFiltrar.addEventListener('click', () => {
  const maximo = Number(
    prompt('Qual o valor máximo que o cliente deseja pagar?')
  )
  if (maximo === 0 || isNaN(maximo)) {
    // se valor for = 0 ou invalido
    return
  }
  const filtroCarros = carros.filter(carro => carro.preco <= maximo)
  if (filtroCarros.length == 0) {
    alert('Não temos carros disponiveis nessa faixa de preço!')
    return
  }
  let lista = ''
  for (const carro of filtroCarros) {
    lista += `${carro.modelo} - R$: ${carro.preco.toFixed(2)}\n`
  }
  resp.innerText = `Carros até R$: ${maximo.toFixed(2)}\n ${'-'.repeat(
    40
  )}\n ${lista} `
})

form.btSimular.addEventListener('click', () => {
  const desconto = Number(prompt('Qual o percentual de desconto?'))
  if (desconto === 0 || isNaN(desconto)) {
    return
  }

  const carrosEmPromo = carros.map(car => ({
    modelo: car.modelo,
    preco: car.preco - (car.preco * desconto) / 100
  }))
  let lista = ''
  for (const carro of carrosEmPromo) {
    lista += `${carro.modelo} - R$: ${carro.preco.toFixed(2)}\n`
  }
  resp.innerText = `Carros com  ${desconto}% de desconto:\n ${'-'.repeat(
    40
  )}\n ${lista} `
})
