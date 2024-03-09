(() => {
  document.querySelectorAll('form')
    .forEach((elem) => {
      elem.addEventListener('submit', (e) => e.preventDefault())
    })

  // masks
  const inputsTel = document.querySelectorAll('input[name="tel"]');

  inputsTel.forEach(input => addValidationTel(input))

  function addValidationTel(input) {
    const maskOptions = {
      mask: '+7(000)000 00 00',
    };
    const mask = IMask(input, maskOptions);
    input.addEventListener('focus', () => {
      mask.updateOptions({
        lazy: false,
      })
    })
    input.addEventListener('input', (e) => {
      const res = mask.masked.isComplete
      const btn = input.parentElement.nextElementSibling
      input.classList.toggle('invalid', !res)
      input.classList.toggle('valid', res)

      if (e.target.value === '+7(___)___ __ __') {
        mask.updateOptions({
          lazy: true,
        })
      }
      if (!res) {
        btn.setAttribute('disabled', 'true')
      } else {
        btn.removeAttribute('disabled')
      }
    })
  }

  // validation
  const formOfferCall = document.forms.offerCall
  const inputName = formOfferCall.elements.name
  const inputTel = formOfferCall.elements.tel
  const inputEmail = formOfferCall.elements.email
  const elementsForm = Array.from(formOfferCall.elements)
  const inputsForm = elementsForm.slice(0, elementsForm.length - 1)
  const btnForm = Array.from(formOfferCall.elements).pop()


  inputName.addEventListener('input', (e) => {
    const value = e.target.value.trim()
    const messageError = inputName.nextElementSibling.nextElementSibling
    let valid = false

    if (!value.length) {
      messageError.textContent = 'Поле не должно быть пустым'
      valid = false
    } else if (value.length < 3) {
      messageError.textContent = 'Имя должно быть не менее 3 символов'
      valid = false
    } else if (value.length > 20) {
      messageError.textContent = 'Имя должно быть не более 20 символов'
      valid = false
    } else {
      messageError.textContent = ''
      valid = true
    }

    inputName.classList.toggle('invalid', !valid)
    inputName.classList.toggle('valid', valid)
    activeSubmitBtn(inputsForm)
  })

  inputTel.addEventListener('input', () => activeSubmitBtn(inputsForm))

  inputEmail.addEventListener('input', (e) => {
    const value = e.target.value.trim()
    const messageError = inputEmail.nextElementSibling.nextElementSibling
    let valid = false

    if (!value.length) {
      messageError.textContent = 'Поле не должно быть пустым'
      valid = false
    } else if (!value.includes('@') || !value.includes('.')) {
      messageError.textContent = 'Эл. почта должна содержать символы "@", "."'
      valid = false
    } else {
      messageError.textContent = ''
      valid = true
    }

    inputEmail.classList.toggle('invalid', !valid)
    inputEmail.classList.toggle('valid', valid)
    activeSubmitBtn(inputsForm)
  })


  function activeSubmitBtn(formInputs) {
    formInputs.forEach((input) => {
      input.addEventListener('input', () => {
        const validInputs = formInputs.filter(inp => inp.classList.contains('valid'))
        if (validInputs.length === formInputs.length) {
          btnForm.removeAttribute('disabled')
          console.log('valid', validInputs)
        } else {
          btnForm.setAttribute('disabled', true)
        }
      })
    })
  }
})()
