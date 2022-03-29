const form = document.querySelector('form')
const resposta = document.querySelector('h3')

form.addEventListener('submit', e => {
  e.preventDefault()

  const horaBr = Number(form.hora.value)
  let horaFr = horaBr + 5

  if (horaFr > 24) {
    horaFr = horaFr - 24
  }

  resposta.innerText = `Hora na França: ${horaFr}:00`
})
