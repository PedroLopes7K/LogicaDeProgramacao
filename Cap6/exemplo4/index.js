const form = document.querySelector('form')
const resp = document.querySelector('pre')

const criancas = []

function verificaArray() {
  if (criancas.length == 0) {
    alert('Não há crianças na lista')
    return
  }
}

form.addEventListener('submit', e => {
  e.preventDefault()
  const nome = form.inNome.value
  const idade = Number(form.inIdade.value)
  criancas.push({ nome, idade })
  form.reset()
  form.inNome.focus()
  form.btListar.dispatchEvent(new Event('click'))
})

form.btListar.addEventListener('click', () => {
  verificaArray()
  let lista = ''
  for (const crianca of criancas) {
    // const {nome, idade} = crianca   COM DESESTRUTURÇÃO
    // lista += `${nome} -- ${idade} Anos\n`
    lista += `${crianca.nome} -- ${crianca.idade} Anos\n`
  }
  resp.innerText = lista
})

form.btResumir.addEventListener('click', () => {
  verificaArray()

  const copia = [...criancas] // criando copia do array com spread
  copia.sort((a, b) => a.idade - b.idade)
  console.log(copia)
  let resumo = ''
  let aux = copia[0].idade // menor idade do vetor ordenado
  console.log(aux)
  let nomes = [] // array para nomes de cada idade
  for (const crianca of copia) {
    const { nome, idade } = crianca
    if (idade == aux) {
      nomes.push(nome)
    } else {
      // quando a condicao se torna falsa ele escreve os dados da idade anterior e passa para a proxima idade na linha 53
      resumo += `${aux} ano(s): ${nomes.length} criança(s) - `
      resumo += `${((nomes.length / copia.length) * 100).toFixed(2)}%\n`
      resumo += `( ${nomes.join(', ')} )\n\n`
      aux = idade
      nomes = []
      nomes.push(nome)
    }
  }
  // após a ultima interação do array a ultima idade não pode ser montada, então e montada agora, com o valor atual de aux e nomes
  resumo += `${aux} ano(s): ${nomes.length} criança(s)`
  resumo += `${((nomes.length / copia.length) * 100).toFixed(2)}%\n`
  resumo += `( ${nomes.join(', ')} )\n\n`
  resp.innerText = resumo
})
