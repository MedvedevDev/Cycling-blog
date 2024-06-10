const navBtn = document.querySelector('.nav__btn')
const navClose = document.querySelector('.nav__close')
const navList = document.querySelector('.nav__list')
const navShadow = document.querySelector('.nav__background')

navBtn.addEventListener('click', () => {
    navList.classList.toggle('nav__list--open')
    navShadow.classList.toggle('nav__background-active')
})

navClose.addEventListener('click', () => {
    navList.classList.remove('nav__list--open')
    navShadow.classList.remove('nav__background-active')
})