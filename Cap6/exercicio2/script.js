const form = document.querySelector('form')
const respLista = document.getElementById('outLista')
const respOrdem = document.getElementById('outOrdem')

let numeros = []
let lista = ''
form.addEventListener('submit', e => {
  lista = ''
  e.preventDefault()
  let numero = Number(form.inNum.value)
  if (numeros.includes(numero)) {
    alert('Esse número já foi inserido!')
    return
  }
  numeros.push(numero)
  lista += `Números: ${numeros.join(', ')}`
  respLista.innerText = lista
})

let condicao = true
form.btVerificar.addEventListener('click', () => {
  if (numeros.length == 0) {
    alert('Alista de números está vazia!')
    return
  }
  for (let i = 0; i <= numeros.length; i++) {
    if (numeros[i] > numeros[i + 1]) {
      condicao = false
    } else {
      condicao = true
      // break
    }
  }
  console.log(condicao)
  // if (condicao == true) {
  //   respOrdem.innerText = `Os números estão em ordem crescente... ${numeros.join(
  //     ', '
  //   )}`
  // } else {
  //   respOrdem.innerText = `Os números não estão em ordem crescente...`
  // }
})
