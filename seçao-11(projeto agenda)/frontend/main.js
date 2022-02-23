import 'core-js/stable'
import 'regenerator-runtime/runtime'
import './assets/css/style.css'

document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', e => {
        let errors = verifyInputs(e.target)

        if (errors.length > 0) {
            errorMessage(errors)
            e.preventDefault()
            return
        }


    })
})


function verifyInputs(inputs) {
    let errors = []
    for (let input of inputs) {
        if (input.type === 'hidden') continue
        if (input.type === 'submit') continue

        if (input.type === 'email') {
            verifyEmail(input, errors)
        }
        if (input.type === 'password') {
            verifyPassword(input, errors)
        }
        if (input.type === 'text') {
            verifyText(input, errors)
        }
    }
    return errors
}

function verifyEmail(input, errors) {
    if (input.classList.contains('needed')) {
        if (input.value === '') {
            errors.push('e-mail deve ser enviado.')
            return
        }
    }
    if (input.value) {
        input.value.trim()
        let emailRegex = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/
        if (!emailRegex.test(input.value)) {
            errors.push('email invalido.')
        }
    }
    return
}

function verifyPassword(input, errors) {
    if (input.classList.contains('needed')) {
        if (input.value === '') {
            errors.push('senha deve ser enviada.')
            return
        }
    }
    input.value.trim()
    if (input.value.length < 3 || input.value.length > 50) {
        errors.push('senha deve ter entre 3 e 50 caracteres.')
        return
    }
    return
}

function verifyText(input, errors) {
    if (input.classList.contains('needed')) {
        if (input.value === '') {
            errors.push(`${input.placeholder} deve ser enviada.`)
            return
        }
        input.value.trim()
        if (input.value.length > 5 && input.length < 25) {
            errors.push(`${input.placeholder} deve ter entre 5 e 20 caracteres.`)
            return
        }
    }
    return
}

function errorMessage(errors) {
    let errorContainer = document.querySelector('.error-message')
    if (errorContainer) {
        errorContainer.parentNode.removeChild(errorContainer)
    }

    let p = document.querySelector('p.text-center')
    errorContainer = document.createElement('div')
    errorContainer.classList.add('row', 'error-message')

    let errorBox = document.createElement('div')
    errorBox.classList.add('col', 'my-3')

    let errorText = document.createElement('div')
    errorText.classList.add('alert', 'alert-danger')
    errors.forEach(err => {
        errorText.innerHTML += `${err} <br>`
    })

    errorBox.appendChild(errorText)
    errorContainer.appendChild(errorBox)
    p.insertAdjacentElement('afterend', errorContainer)
}

function telMask(telInput) {
    console.log(telInput.value);
    if (telInput.value.length === 9) {
        const part1 = telInput.value.slice(0, 5);
        const part2 = telInput.value.slice(5, 9);
        telInput.value = `${part1}-${part2}`

    } else if (telInput.value.length === 8) {
        const part1 = telInput.value.slice(0, 4);
        const part2 = telInput.value.slice(4, 8);
        telInput.value = `${part1}-${part2}`
    }
    return telInput.value
}

document.querySelector('#tel').addEventListener('blur', e => telMask(e.target))