const menuBurger = document.querySelector('.menu-burger'); // this returns an array
console.log(menuBurger);
const navbar = document.querySelector('.navbar'); // this returns an array
menuBurger.addEventListener('click', () => {
    navbar.classList.toggle('active')
})