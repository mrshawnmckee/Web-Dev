const open_btn = document.querySelector('.open-btn')
const close_btn = document.querySelector('.close-btn')
// multiple navs, so we have to use querySelectorAll
const nav = document.querySelectorAll('.nav')

open_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.add('visible')) //adds the class of visible
})

close_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.remove('visible')) //removes the class of visible
})