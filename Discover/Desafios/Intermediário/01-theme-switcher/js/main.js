const container = document.querySelector('.container')
const button = document.querySelector('.button')

function switcher() {
  container.classList.toggle('container-dark')
  button.classList.toggle('button-active')
}

button.addEventListener('click', switcher)