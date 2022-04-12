const elHeaderNav = document.querySelector('.sitenav')
const elHeaderBtn = document.querySelector('.js-header-btn')



elHeaderBtn.addEventListener('click', () => {
  elHeaderNav.classList.toggle('sitenav--open')
})