const form = document.querySelector('form')
const h3 = document.querySelector('h3')

form.addEventListener('submit', e => {
  e.preventDefault()

  let numero = Number(form.numero.value)
  let raiz = Math.sqrt(numero)
  // let modulo = numero % raiz

  if (Number.isInteger(raiz)) {
    h3.innerText = ` Raiz: ${raiz}`
  } else {
    h3.innerText = `Não existe raiz quadrada exata para ${numero}`
  }
})
