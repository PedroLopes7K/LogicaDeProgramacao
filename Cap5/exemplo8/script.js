const prompt = require('prompt-sync')()

console.log('Programa anos da Copa. Digite 0 para sair:')

do {
  const ano = Number(prompt('Ano:'))
  // const ano = 2001
  if (ano === 0) {
    console.log('Fim!')
    break
  } else if (ano == 1942 || ano == 1946) {
    console.log(`Não houve copa em ${ano}! (Segunda Guerra Mundial)`)
  } else if (ano >= 1930 && ano % 4 == 2) {
    console.log(`Sim! ${ano} é ano de copa do mundo!`)
  } else {
    console.log(`Não! ${num} não é um ano de copa do mundo!`)
  }
} while (true)
