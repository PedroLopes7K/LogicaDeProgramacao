const form = document.querySelector('form')
const resp = document.querySelector('h3')

form.addEventListener('submit', e => {
  e.preventDefault()
  const funcionario = form.inFuncionario.value.trim()

  // divide o nome em itens de um vetor, criados a cada ocorrência de espaço
  const partes = funcionario.split(' ')

  let email = ''
  const tamanho = partes.length
  //percorre os itens da lista, menos o ultimo
  for (let i = 0; i < tamanho - 1; i++) {
    email += partes[i].charAt(0) // pega a letra inicial de cada item
  }
  // concatena as letras iniciais com o ultimo nome + empresa
  email += partes[tamanho - 1] + '@empresa.com.br'

  resp.innerText = `E-mail: ${email.toLowerCase()}`
})
