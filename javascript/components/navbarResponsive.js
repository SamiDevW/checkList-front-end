
const navbarResponsive = (navbar, menuBurger) => {
    menuBurger.addEventListener('click', () => {
        navbar.classList.toggle('active')
    })
}
export default navbarResponsive;