const toggle = document.getElementById('toggle')
const menu = document.querySelector('.menu');
toggle.addEventListener('click', (e => {
    e.preventDefault()
    menu.classList.toggle('active')
}))