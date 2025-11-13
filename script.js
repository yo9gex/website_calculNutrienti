const navToggleBtn = document.querySelector('#navToggleBtn');
const nav = document.querySelector('nav.navigation');


navToggleBtn.addEventListener('click', () =>{
    nav.classList.toggle('active');
})