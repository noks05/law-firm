(() => {
  const modal = document.querySelector('.modal');
  const modalBox = document.querySelector('.modal__box');
  const modalClose = document.querySelector('.modal__close');
  const btnActiveModal = document.querySelectorAll('[data-role="btn-active-modal"]');

  const innerWidth = window.innerWidth
  const innerWidthWithScroll = document.documentElement.clientWidth
  const scrollWidth = innerWidth - innerWidthWithScroll

  modal.addEventListener('click', (e) => closeModal(e))
  btnActiveModal.forEach(it => it.addEventListener('click', (e) => openModal(e)))

  function openModal(e) {
    const uniqClass = e.currentTarget.id
    document.body.style.overflow = 'hidden'
    document.body.style.paddingRight = scrollWidth + 'px'

    modal.classList.add('active', uniqClass)

    modal.classList.remove('fadeOut')
    modalBox.classList.remove('scaleOut')
    modal.classList.add('fadeIn')
    modalBox.classList.add('scaleIn')
  }
  function closeModal(e) {
    const target = e.target
    const clickInBox = modalBox.contains(target)
    const clickInClose = modalClose.contains(target)

    if (!clickInBox || clickInClose) {
      document.body.style.overflow = 'initial'
      document.body.style.paddingRight = '0'

      modal.classList.remove('fadeIn')
      modalBox.classList.remove('scaleIn')
      modal.classList.add('fadeOut')
      modalBox.classList.add('scaleOut')

      setTimeout(() => {
        modal.className = 'modal'
      }, 400)
    }
  }


})()
