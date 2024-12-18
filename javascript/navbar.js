import navbarResponsive from "./components/navbarResponsive.js";
// Select the nav element
const nav = document.querySelector('nav');

// Create the logo container with an anchor and image
defineLogo(nav);
// Create the menu burger
const menuBurger = document.createElement('a');
menuBurger.href = '#';
menuBurger.classList.add('menu-burger');
const menuBurgerImg = document.createElement('img');
menuBurgerImg.src = '../icons/icons8-menu-ios-17-glyph/icons8-menu-60.png';
menuBurgerImg.alt = 'menu icon';
menuBurger.appendChild(menuBurgerImg);
nav.appendChild(menuBurger);

// Create the navbar
const navbar = document.createElement('div');
navbar.classList.add('navbar');

// Add navigation links
const links = [
    { text: 'Home', href: '../' },
    { text: 'MyList', href: './myList.html' },
    { text: 'Search', href: './search.html' },
    { text: 'Market', href: './market.html' },
];

links.forEach(link => {
    const a = document.createElement('a');
    a.classList.add('text-anchor');
    a.href = link.href;
    a.textContent = link.text;
    navbar.appendChild(a);
});

// Add navbar icons
const navIcons = document.createElement('div')
const userIcon = document.createElement('a');
userIcon.href = './login.html';
//
const userImg = document.createElement('img');
userImg.src = '../icons/icons8-male-user-ios-17-glyph/icons8-male-user-60.png';
userImg.alt = 'login';
userIcon.appendChild(userImg);
//
const loginIcon = document.createElement('a');
loginIcon.href = './login.html';
const loginImg = document.createElement('img');
loginImg.src = '../icons/icons8-login-ios-17-glyph/icons8-login-60.png';
loginImg.alt = 'login';
loginIcon.appendChild(loginImg);
//
const signupIcon = document.createElement('a');
signupIcon.href = './signup.html';
const signupImg = document.createElement('img');
signupImg.src = '../icons/icons8-register-ios-17-glyph/icons8-register-60.png';
signupImg.alt = 'signup';
//
signupIcon.appendChild(signupImg);
navIcons.appendChild(userIcon);
navIcons.appendChild(loginIcon);
navIcons.appendChild(signupIcon);
navbar.appendChild(navIcons)
nav.appendChild(navbar);
//
function defineLogo(nav) {
    // Create the logo container
    const logoContainer = document.createElement('div');
    logoContainer.classList.add('logo-container');
    // Create the anchor element for the logo
    const logoAnchor = document.createElement('a');
    logoAnchor.href = '#';
    // Create the logo image
    const logoImg = document.createElement('img');
    logoImg.id = 'logo';
    logoImg.src = '../icons/Icon_checklist-removebg-preview.png';
    logoImg.alt = 'Logo';
    // Append the image to the anchor and the anchor to the logo container
    logoAnchor.appendChild(logoImg);
    logoContainer.appendChild(logoAnchor);
    // Append the logo container to the nav element
    nav.appendChild(logoContainer);
}
navbarResponsive(navbar, menuBurger);