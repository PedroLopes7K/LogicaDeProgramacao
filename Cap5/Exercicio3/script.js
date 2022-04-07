const form = document.querySelector('form')
const valor = document.getElementById('numero')
const divisores = document.getElementById('divisores')
const resp = document.getElementById('resp')
let divs = ''
let valorDivs = 0

form.addEventListener('submit', e => {
  e.preventDefault()
  divisores.innerText = ''
  const numero = Number(valor.value)
  divs += `Divisores de ${numero}: `
  for (let i = 1; i <= numero / 2; i++) {
    if (numero % i == 0) {
      divs += `${i} - `
      valorDivs += i
    }
  }
  divs += `(Soma: ${valorDivs})`

  if (valorDivs == numero) {
    divisores.innerText = divs
    resp.innerText = `${numero} é um número perfeito!`
  } else {
    resp.innerText = `${numero} não é um número perfeito!`
  }
  divs = ''
  valorDivs = 0
  valor.focus()
})
