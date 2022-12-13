const definicaoLista = document.querySelectorAll('.definicao-lista dt')

function showList(event) {
  this.classList.toggle('ativo')
  this.nextElementSibling.classList.toggle('ativo')
  console.log(event.currentTarget)
}

definicaoLista.forEach((item) => {
  item.addEventListener('click', showList)
})