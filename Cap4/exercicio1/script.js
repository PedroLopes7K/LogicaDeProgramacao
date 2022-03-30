const form = document.querySelector('form')
const nota100 = document.getElementById('nota100')
const nota50 = document.getElementById('nota50')
const nota10 = document.getElementById('nota10')

form.addEventListener('submit', e => {
  const saque = Number(form.valor.value)
  if (saque % 10 != 0) {
    alert('Valor inválido para notas disponiveis (R$ 10, 50, 1000)')
    form.valor.focus()
    return
  }

  const notasCem = Math.floor(saque / 100)
  let resto = saque % 100
  const notasCinquenta = Math.floor(resto / 50)
  resto = resto % 50

  const notaDez = Math.floor(resto / 10)
  if (notasCem > 0) {
    nota100.innerText = `Notas de R$ 100: ${notasCem}`
  }
  if (notasCinquenta > 0) {
    nota50.innerText = `Notas de R$ 50: ${notasCinquenta}`
  }

  if (notaDez > 0) {
    nota10.innerText = `Notas de R$ 10: ${notaDez}`
  }
  e.preventDefault()
})
