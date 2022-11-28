const emailSent = document.getElementById('buttonSubmit')

emailSent.addEventListener('click', emailEnviado)

function emailEnviado() {
    const inputEmail = document.getElementById('inputEmail').value

    if (inputEmail.length >= 16) {
        window.alert('E-mail enviado!')
    }
}

