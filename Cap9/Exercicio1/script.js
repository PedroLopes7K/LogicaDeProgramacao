const form = document.querySelector('form')
const imgClube = document.querySelector('#imgClube')
const divTitulo = document.querySelector('#divTitulo')

const trocarClube = () => {
  let clube // vai receber o nome do clube

  if (form.rbBrasil.checked) {
    clube = 'Brasil'
  } else if (form.rbPelotas.checked) {
    clube = 'Pelotas'
  } else {
    clube = 'Farroupilha'
  }

  // define as classes da divTitulo: row e cores do clube
  divTitulo.className = `row cores-${clube}`

  // modificando a imagem de acordo com a seleção do clube
  imgClube.src = `../img/${clube.toLowerCase()}.png`
  imgClube.className = 'img-fluid'
  imgClube.alt = `Simbolo do ${clube}`

  localStorage.setItem('Clube', clube) // salvando no navegador a escolha do cliente
}

// recuperando dados  do localstorage
const verificarClube = () => {
  if (localStorage.getItem('Clube')) {
    // se estiver salvo algum clbe
    const clube = localStorage.getItem('Clube')

    if (clube == 'Brasil') {
      form.rbBrasil.checked = true
    } else if (clube == 'Pelotas') {
      form.rbPelotas.checked = true
    } else {
      form.rbFarroupilha.checked = true
    }

    trocarClube() // chama função para trocar cores e adicionar imagem do clube
  }
}
// ao carregar a página, verifica se o usuario já selecionou algum clube anteriormente
window.addEventListener('load', verificarClube)

form.rbBrasil.addEventListener('change', trocarClube)
form.rbFarroupilha.addEventListener('change', trocarClube)
form.rbPelotas.addEventListener('change', trocarClube)
