const form = document.querySelector('form')
const numero = document.getElementById('numero')
const resp = document.getElementById('resp')

form.addEventListener('submit', e => {
  e.preventDefault()
  const num = Number(numero.value)
  let estrelas = ''
  for (let i = 1; i <= num; i++) {
    if (i % 2 == 1) {
      estrelas += '*'
    } else {
      estrelas += '-'
    }
  }
  resp.innerText = estrelas
})
