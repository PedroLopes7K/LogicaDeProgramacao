const form = document.querySelector('form')
const resposta = document.querySelector('h3')

form.addEventListener('submit', e => {
  e.preventDefault()

  const senha = form.inSenha.value
  // array com os erros
  const erros = []

  // verifica se o tamanho da senha é inválido
  if (senha.length < 8 || senha.length > 15) {
    erros.push('possuir entre 8 e 15 caracteres')
  }

  // verifica se não possui números na senha
  if (senha.match(/[0-9]/g) == null) {
    erros.push('possuir números (no mínimo, 1)')
  }

  // verifica se não possui letras minúsculas
  if (!senha.match(/[a-z]/g)) {
    erros.push('possuir letras minúsculas (no mínimo, 1)')
  }
  // verifica se não possui letras maiúsculas ou se possui apenas 1
  if (!senha.match(/[A-Z]/g) || senha.match(/[A-Z]/g).length == 1) {
    erros.push('possuir letras maiúsculas (no mínimo, 2)')
  }

  // verifica se não possui simbolos ou '_'
  if (!senha.match(/[\W|_]/g)) {
    erros.push('possuir simbolos (no mínimo, 1)')
  }
  // se o vetor está vazio (significa que não foram encontrados erros)
  if (erros.length == 0) {
    resposta.innerText = 'OK! Senha Válida'
  } else {
    resposta.innerText = `Erro... A senha deve ${erros.join(', ')}`
  }
})
