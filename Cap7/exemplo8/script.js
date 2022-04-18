const form = document.querySelector('form')
const resposta = document.querySelector('h3')

const taxaMulta = 2 / 100 // multa por atraso
const taxaJuros = 0.33 / 100 // juros por dia de atraso

form.addEventListener('submit', e => {
  e.preventDefault()
  const dataVencimento = form.inDataVenc.value
  const valor = Number(form.inValor.value)
  const hoje = new Date()
  const vencimento = new Date()

  const partes = dataVencimento.split('-') // data vem no formato aaaa-mm-dd
  vencimento.setDate(Number(partes[2]))
  console.log('DIA ' + Number(partes[2]))
  vencimento.setMonth(Number(partes[1]) - 1)
  console.log('MES ' + Number(partes[1] - 1))
  vencimento.setFullYear(Number(partes[0]))
  console.log('ANO ' + Number(partes[0]))

  console.log(vencimento)
  const atraso = hoje - vencimento // calculando a diferença de dias entre as datas (em milesegundos (ms))
  console.log(atraso)
  let multa = 0
  let juros = 0

  if (atraso > 0) {
    // converte milesegundos do atraso em dias (1 dia =24h x 60min x 60seg x 1000ms: 86400000)
    const dias = atraso / 86400000
    multa = valor * taxaMulta
    juros = valor * taxaJuros * dias
  }

  const total = valor + multa + juros

  form.outMulta.value = multa.toFixed(2)
  form.outJuros.value = juros.toFixed(2)
  form.outTotal.value = total.toFixed(2)
})
