const form = document.querySelector('form')
const h3 = document.querySelector('h3')
const h4 = document.querySelector('h4')

form.addEventListener('submit', e => {
  e.preventDefault()
  const nome = form.nome.value
  const nota1 = Number(form.nota1.value)
  const nota2 = Number(form.nota2.value)
  const media = (nota1 + nota2) / 2
  h3.innerText = `Media das notas: ${media}`

  if (media >= 7) {
    h4.innerText = `Parabéns ${nome}! Você foi aprovado(a)`
    h4.style.color = 'blue'
  } else {
    h4.innerHTML = `Ops ${nome}... Você foi reprovado(a)`
    h4.style.color = 'red'
  }
})
