// RETORNAR CANDIDATOS APROVADOS (REQUISITOS: MAIOR DE IDADE, CONHECIMENTOS: REACT, NODE, JAVASCRIPT)
const candidatos = [
  {
    nome: 'Pedro',
    idade: 19,
    conhecimentos: ['React', 'JavaScript', 'HTML', 'CSS', 'Node']
  },
  {
    nome: 'Lucas',
    idade: 29,
    conhecimentos: ['VueJS', 'JavaScript', 'Python', 'React', 'node']
  },
  {
    nome: 'Juliana',
    idade: 22,
    conhecimentos: ['PHP', 'Laravel', 'SQL', 'MySql']
  },
  {
    nome: 'Bruno',
    idade: 17,
    conhecimentos: ['React', 'JavaScript', 'HTML', 'Node', 'CSS']
  },
  {
    nome: 'Mariana',
    idade: 21,
    conhecimentos: ['Angular', 'JavaScript', 'HTML', 'React', 'CSS']
  }
]

function FiltraCandidatos(candidato) {
  let pessoas = candidato
  for (let pessoa of pessoas) {
    // pessoa.nome = pessoa.nome.toUpperCase()
    pessoa.conhecimentos = pessoa.conhecimentos.map(tech => {
      return tech.toUpperCase()
    })
  }
  // console.log(pessoas)
  let aprovados = pessoas.filter(
    aprovado =>
      aprovado.idade >= 18 &&
      aprovado.conhecimentos.includes('JAVASCRIPT') &&
      aprovado.conhecimentos.includes('REACT') &&
      aprovado.conhecimentos.includes('NODE')
  )
  let candidatosAprovados = []
  for (let aprovado of aprovados) {
    candidatosAprovados.push(aprovado.nome)
  }
  console.log(`Candidato(s) aprovado(s): ${candidatosAprovados}`)
}
FiltraCandidatos(candidatos)
// console.log(candidatos[0].conhecimentos.toUpperCase())
