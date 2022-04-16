const form = document.querySelector('form')
const resposta = document.querySelector('h3')

form.addEventListener('submit', e => {
  e.preventDefault()
  // obtém o nome informado e retira espaços em branco do inicio e final da string
  const nome = form.inNome.value.trim()
  console.log(nome)

  // se o nome não (!) possuir espaços
  if (!nome.includes(' ')) {
    alert('Informe o nome completo...')
    return
  }

  const primeiroEspaço = nome.indexOf(' ') // posição do primeiro espaço
  const ultimoEspaço = nome.lastIndexOf(' ') // posição do ultimo espaço
  console.log(primeiroEspaço)
  console.log(ultimoEspaço)
  // copia nome e ultimo nome usando os parâmetros do substr()
  const cracha = nome.substr(0, primeiroEspaço) + nome.substr(ultimoEspaço)
  resposta.innerText = `Cracha: ${cracha}`
})
