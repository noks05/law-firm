(() => {
  let idTimeout = 0

  document.querySelector('.head__burger-btn').addEventListener('click', (e) => {
    if (idTimeout) return
    const btnBurgerActive = e.currentTarget
    const burgerMenu = btnBurgerActive.closest('.header').lastElementChild
    const activeClass = burgerMenu.classList.contains('active')

    if (activeClass) {
      document.body.style.overflow = 'initial'

      btnBurgerActive.classList.remove('active')
      burgerMenu.classList.remove('fade-right-in')
      burgerMenu.classList.add('fade-right-out')

      idTimeout = setTimeout(() => {
        burgerMenu.classList.remove('active')
        idTimeout = 0
      }, 700)
    } else {
      document.body.style.overflow = 'hidden'

      btnBurgerActive.classList.add('active')
      burgerMenu.classList.remove('fade-right-out')
      burgerMenu.classList.add('active', 'fade-right-in')
    }
  })
})()
