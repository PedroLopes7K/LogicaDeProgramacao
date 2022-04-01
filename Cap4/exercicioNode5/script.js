const prompt = require('prompt-sync')()
const velocidadePermitida = Number(prompt('Insira a velocidade permitida:'))
const condutor = Number(prompt('Insira a velocidade do condutor:'))

let tolerancia20 = velocidadePermitida * 1.2

if (condutor <= velocidadePermitida) {
  console.log('sem multa')
} else if (condutor <= tolerancia20) {
  console.log('Multa leve')
} else {
  console.log('Multa Grave')
}
