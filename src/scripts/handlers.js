(() => {

  let idTimeout = 0
  const btnBurgerActive = document.querySelector('.head__burger-btn')
  const burgerMenu = btnBurgerActive.closest('.header').lastElementChild

  btnBurgerActive.addEventListener('click', (e) => {
    if (idTimeout) return
    const activeClass = burgerMenu.classList.contains('active')

    if (activeClass) {
      closeBurgerMenu()
    } else {
      openBurgerMenu()
    }
  })

  document.querySelectorAll('.burger-menu__link').forEach(el => el.addEventListener('click', closeBurgerMenu))

  function closeBurgerMenu() {
    document.body.style.overflow = 'initial'
    document.body.style.paddingRight = '0'

    btnBurgerActive.classList.remove('active')
    burgerMenu.classList.remove('fade-right-in')
    burgerMenu.classList.add('fade-right-out')

    idTimeout = setTimeout(() => {
      burgerMenu.classList.remove('active')
      idTimeout = 0
    }, 700)
  }
  function openBurgerMenu() {
    document.body.style.overflow = 'hidden'
    document.body.style.paddingRight = '16px'

    btnBurgerActive.classList.add('active')
    burgerMenu.classList.remove('fade-right-out')
    burgerMenu.classList.add('active', 'fade-right-in')
  }

  document.querySelectorAll('input[type="email"]').forEach(input => {
    input.addEventListener('input', (e) => {
      e.target.value.trim()
      input.classList.toggle('valid', input.validity.valid)
      input.classList.toggle('invalid', !input.validity.valid)
    })
  }
  )
})()
