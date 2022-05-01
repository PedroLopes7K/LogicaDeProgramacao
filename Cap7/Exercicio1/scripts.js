const form = document.querySelector('form')
const mensagem = document.getElementById('inMensagem')
const descrip = document.getElementById('btDecript')
const resp = document.getElementById('resp')
let senha = ''
form.addEventListener('submit', e => {
  e.preventDefault()
  senha = mensagem.value
  let par = ''
  let impar = ''

  console.log(senha.length)
  // console.log(senha[1])
  for (let i = 0; i < senha.length; i++) {
    if (i % 2 == 0) {
      par += senha[i]
      console.log('par ' + senha[i])
    } else {
      impar += senha[i]
      console.log('impar ' + senha[i])
    }
  }
  resp.innerText = `${par}${impar}`
})

descrip.addEventListener('click', () => {
  resp.innerText = senha
  console.log(senha)
})
