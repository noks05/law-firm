(() => {
  const inputsTel = document.querySelectorAll('input[name="tel"]');
  inputsTel.forEach(input => {
    const maskOptions = {
      mask: '+7(000)000 00 00',
    };
    const mask = IMask(input, maskOptions);
    input.addEventListener('focus', () => {
      mask.updateOptions({
        lazy: false,
      })
    })
    input.addEventListener('blur', (e) => {
      const res = mask.masked.isComplete
      input.classList.toggle('invalid', !res)
      input.classList.toggle('valid', res)

      if (e.target.value === '+7(___)___ __ __') {
        mask.updateOptions({
          lazy: true,
        })
      }
    })
    input.addEventListener('input', () => {
      const res = mask.masked.isComplete
      const btn = input.parentElement.nextElementSibling
      if (!res) {
        btn.setAttribute('disabled', 'true')
      } else {
        btn.removeAttribute('disabled')
      }
    })
  })

})()
