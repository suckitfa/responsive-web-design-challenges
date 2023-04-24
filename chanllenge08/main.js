const navToggle = document.querySelector('.nav-toggle')
const nav = documnet.querySelector('.nav')

navToggle.addEventListener('click',() => {
    nav.classList.toggle('nav--visible')
})