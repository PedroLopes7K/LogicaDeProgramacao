const form = document.querySelector('form')
const nota100 = document.getElementById('nota100')
const nota50 = document.getElementById('nota50')
const nota20 = document.getElementById('nota20')
const nota10 = document.getElementById('nota10')
const nota5 = document.getElementById('nota5')

form.addEventListener('submit', e => {
  nota10.innerHTML = ''
  nota5.innerHTML = ''
  nota100.innerHTML = ''
  nota50.innerHTML = ''
  nota20.innerHTML = ''
  const saque = Number(form.valor.value)
  if (saque % 5 != 0) {
    alert('Valor inválido para notas disponiveis (R$ 10, 50, 1000)')
    form.valor.focus()
    return
  }

  const notasCem = Math.floor(saque / 100)
  let resto = saque % 100
  const notasCinquenta = Math.floor(resto / 50)
  resto = resto % 50
  const notasVinte = Math.floor(resto / 20)
  resto = resto % 20
  const notasDez = Math.floor(resto / 10)
  resto = resto % 10
  const notasCinco = Math.floor(resto / 5)

  if (notasCem > 0) {
    nota100.innerText = `Notas de R$ 100: ${notasCem}`
  }
  if (notasCinquenta > 0) {
    nota50.innerText = `Notas de R$ 50: ${notasCinquenta}`
  }
  if (notasVinte > 0) {
    nota20.innerText = `Notas de R$ 20: ${notasVinte}`
  }
  if (notasDez > 0) {
    nota10.innerText = `Notas de R$ 10: ${notasDez}`
  }

  if (notasCinco > 0) {
    nota5.innerText = `Notas de R$ 5: ${notasCinco}`
  }
  // form.valor.value = ''
  e.preventDefault()
})
