const form = document.querySelector('form')
const resp1 = document.querySelector('#outResp1')
const resp2 = document.querySelector('#outResp2')
const resp3 = document.querySelector('#outResp3')

form.addEventListener('submit', e => {
  e.preventDefault()

  const modelo = form.inModelo.value
  const ano = Number(form.inAno.value)
  const preco = Number(form.inPreco.value)

  const classificacao = classificarVeiculo(ano)
  const entrada = calcEntrada(preco, classificacao)
  const parcela = (preco - entrada) / 10

  resp1.innerText = modelo + ' - ' + classificacao
  resp2.innerText = `Entrada R$: ${entrada.toFixed(2)}`
  resp3.innerText = `+10x R$: ${parcela.toFixed(2)}`
})

function classificarVeiculo(ano) {
  const yea = new Date()
  const anoAtual = yea.getFullYear()
  if (ano == anoAtual) {
    return 'Novo'
  } else if (ano >= anoAtual - 2 && ano < anoAtual) {
    return 'Seminovo'
  } else if (ano < anoAtual - 2) {
    return ' Usado'
  } else {
    return alert('Ano do veiculo invalido!')
  }
}
// classificarVeiculo(2021)

function calcEntrada(preco, classificacao) {
  if (classificacao == 'Novo') {
    return (preco / 100) * 50
  } else if (classificacao == 'Seminovo' || classificacao == 'Usado') {
    return (preco / 100) * 30
  } else {
    alert('ERROR')
  }
}
