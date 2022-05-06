const form = document.querySelector('form')
const resp = document.querySelector('pre')
let test = ''

form.addEventListener('submit', e => {
  e.preventDefault()

  const nome = form.inAtleta.value
  const idade = Number(form.inIdade.value)

  const linhas = retornarTracos(nome)

  const categoria = categorizarAluno(idade)
  resp.innerText = `${nome}\n${linhas}\nCategoria: ${categoria}`
})

function retornarTracos(nome) {
  let linhas = ''
  for (let i = 0; i < nome.length; i++) {
    if (nome[i] != ' ') {
      linhas += '-'
    } else {
      linhas += ' '
    }
  }

  return linhas
}

function categorizarAluno(idade) {
  if (idade > 18) {
    return 'Adulto'
  } else if (idade <= 18 && idade >= 13) {
    return 'Juvenil'
  } else {
    return 'Infantil'
  }
}
