// programa que leia o peso da ração em kg e quanto um gato consome por dia em gramas.
// informe quantos dias irá durr a ração e quanto sobra da ração em gramas

const prompt = require('prompt-sync')()
const pesoKg = Number(prompt('Peso da Ração (Kg):'))
const consumo = Number(prompt('Consumo diario (gr):'))
const pesoGr = pesoKg * 1000
const duracao = Math.floor(pesoGr / consumo)
const sobra = pesoGr % consumo

console.log(`Duração: ${duracao} dias`)
console.log(`Sobra: ${sobra}`)
