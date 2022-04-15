const form = document.querySelector('form')
const resposta = document.querySelector('pre')
const clubes = []

form.addEventListener('submit', e => {
  e.preventDefault()
  let clube = form.inClube.value
  clubes.push(clube)
  form.inClube.value = ''
  form.inClube.focus()
  clube = ''
  form.btListar.dispatchEvent(new Event('click'))
  // console.log(clubes)
})

form.btListar.addEventListener('click', () => {
  if (clubes.length == 0) {
    alert('Não há clubes cadastrados!')
    return
  }
  resposta.innerText = ''
  for (let clube of clubes) {
    resposta.innerText += `${clube}\n`
  }
})
let resp = ''

form.btMontar.addEventListener('click', () => {
  resposta.innerText = ''
  if (clubes.length % 2 != 0 || clubes.length == 0) {
    alert('Não foi possivel montar a tabela! (Números de clubes ímpar)')
    return
  }
  let clubesContra = [...clubes]
  clubesContra.reverse()
  console.log(clubes)
  console.log(clubesContra)

  for (let i = 0; i < clubes.length / 2; i++) {
    // ou i = 1 e clubes[i - 1]
    resp += `${clubes[i]} X ${clubesContra[i]}\n`
  }
  resposta.innerText = resp
})
