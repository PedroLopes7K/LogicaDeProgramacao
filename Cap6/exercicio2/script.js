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

form.btVerificar.addEventListener('click', () => {
  if (numeros.length == 0) {
    alert('Alista de números está vazia!')
    return
  }
  console.log(numeros)
  let condicao

  // precisa iterar 1 numero de vezes a menos que o tamanha do array
  // como i começa em 0 , para iterar por um array de length 5 por exemplo
  // i precisa ir ate i <  array.lenth - 1
  // como ele começa em 0 ele percorre 4 vezes indo ate 3.
  // Ou poderia usar i <= array.length - 2
  for (let i = 0; i < numeros.length - 1; i++) {
    console.log(numeros[i], numeros[i + 1])
    if (numeros[i] < numeros[i + 1]) {
      condicao = true
    } else {
      condicao = false
      break
    }
  }
  console.log(condicao)
  if (condicao == true) {
    respOrdem.innerText = `Os números estão em ordem crescente... (${numeros.join(
      ', '
    )})`
  } else {
    respOrdem.innerText = `Os números não estão em ordem crescente...`
  }
})
