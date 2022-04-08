const form = document.querySelector('form')
const respErros = document.querySelector('#outErros')
const respChances = document.querySelector('#outChances')
const respDica = document.querySelector('#outDica')

let erros = []
// numero aleatorio entre 1 e 100
const numeroSorteado = Math.floor(Math.random() * 100) + 1
let chances = 6
respChances.innerHTML = chances

form.addEventListener('submit', e => {
  e.preventDefault()
  console.log(numeroSorteado)
  const numero = Number(form.inNumero.value)
  if (numero == numeroSorteado) {
    respDica.innerText = `Você acertou! O número é: ${numeroSorteado}`
    form.btSubmit.disabled = true
    form.btNovo.className = 'exibe'
  } else {
    if (erros.includes(numero)) {
      alert(`Você já apostou o número ${numero}! Tente outro.`)
    } else {
      erros.push(numero)
      const numErros = erros.length
      const numChances = chances - numErros
      respErros.innerText = `${numErros}  ( ${erros.join(', ')})`
      respChances.innerText = numChances
      if (numChances == 0) {
        alert('Suas chances acabaram... :(')
        form.btSubmit.disabled = true
        form.btNovo.className = 'exibe'
        respDica.innerText = `Game Over! O número sorteado era: ${numeroSorteado}`
      } else {
        const dica = numero < numeroSorteado ? 'maior' : 'menor'
        respDica.innerText = `Tente um numero ${dica} que ${numero}`
      }
    }
  }
  form.inNumero.value = ''
  form.inNumero.focus()
})

// clique no botao jogar novamente
form.btNovo.addEventListener('click', () => {
  location.reload() // recarrega a pagina
})
