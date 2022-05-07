const form = document.querySelector('form')
const resp = document.querySelector('h3')

form.addEventListener('submit', e => {
  e.preventDefault()

  const nome = form.inAluno.value
  validarNome(nome)
  const sobreNome = ultimoNome(nome)
  const vogais = numVogais(nome)
  resp.innerText = `Senha inicial: ${sobreNome}${vogais} `
})

function validarNome(nome) {
  if (nome.includes(' ') == false) {
    alert('Insira o nome completo!')
  }
}

let sobrenome = ''
function ultimoNome(nome) {
  let ultimoEspaço = nome.lastIndexOf(' ')
  for (let i = ultimoEspaço + 1; i <= nome.length - 1; i++) {
    sobrenome += nome[i]
  }
  // console.log(sobrenome)
  return sobrenome.toLowerCase()
}

function numVogais(nome) {
  let vogais = 0
  for (let i = 0; i < nome.length - 1; i++) {
    let letra = nome[i].toUpperCase()
    if (
      letra == 'A' ||
      letra == 'E' ||
      letra == 'I' ||
      letra == 'O' ||
      letra == 'U'
    ) {
      vogais++
    }
  }
  return vogais >= 10 ? vogais : `0${vogais}`
}
