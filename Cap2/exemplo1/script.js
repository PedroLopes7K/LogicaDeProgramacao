const titulo = document.getElementById('titulo')
const valMin = document.getElementById('duracao')
// const btn = document.getElementById('submit')
const form = document.querySelector('form')

form.addEventListener('submit', e => {
  const h3 = document.querySelector('h3')
  const h4 = document.querySelector('h4')
  const duracao = Number(valMin.value)
  let horas = Math.floor(duracao / 60)
  let minutos = duracao % 60

  h3.innerText = titulo.value
  h4.innerHTML = ` ${horas} hora(s) e ${minutos} minuto(s)`
  e.preventDefault()
})
