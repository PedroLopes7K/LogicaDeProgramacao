const form = document.querySelector('form')
const valorChinchilas = document.getElementById('chinchilas')
const valorAnos = document.getElementById('anos')
const resp = document.getElementById('res')

form.addEventListener('submit', e => {
  e.preventDefault()
  resp.innerText = ''
  let chinchilas = Number(valorChinchilas.value)
  const anos = Number(valorAnos.value)

  resp.innerText = `1 Ano: ${chinchilas} Chinchilas\n`
  for (let i = 2; i <= anos; i++) {
    chinchilas = chinchilas * 3
    resp.innerText += `${i} Ano: ${chinchilas} Chinchilas\n`
  }
  valorAnos.value = ''
  valorChinchilas.value = ''
  valorChinchilas.focus()
})
