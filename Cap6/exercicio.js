// RETORNAR CANDIDATOS APROVADOS (REQUISITOS: MAIOR DE IDADE, CONHECIMENTOS: ReactJS, Node, JavaScript)
const candidatos = [
  {
    nome: 'Pedro',
    idade: 19,
    conhecimentos: ['ReactJS', 'JavaScript', 'HTML', 'CSS', 'Node']
  },
  {
    nome: 'Lucas',
    idade: 29,
    conhecimentos: ['VueJS', 'JavaScript', 'Python', 'ReactJS']
  },
  {
    nome: 'Juliana',
    idade: 22,
    conhecimentos: ['PHP', 'Laravel', 'SQL', 'MySql']
  },
  {
    nome: 'Bruno',
    idade: 17,
    conhecimentos: ['ReactJS', 'JavaScript', 'HTML', 'Node', 'CSS']
  },
  {
    nome: 'Mariana',
    idade: 21,
    conhecimentos: ['Angular', 'JavaScript', 'HTML', 'ReactJS', 'CSS']
  }
]

function FiltraCandidatos(candidato) {
  let aprovados = candidato.filter(
    aprovado =>
      aprovado.idade >= 18 &&
      aprovado.conhecimentos.includes('JavaScript') &&
      aprovado.conhecimentos.includes('ReactJS') &&
      aprovado.conhecimentos.includes('Node')
  )
  let candidatosAprovados = []

  for (let aprovado of aprovados) {
    candidatosAprovados.push(aprovado.nome)
  }
  console.log(`Candidato(s) aprovado(s): ${candidatosAprovados}`)
}
FiltraCandidatos(candidatos)
// console.log(candidatos[0].conhecimentos.toUpperCase())
