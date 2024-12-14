const confirmPasswordMatch = () => {
    const passwords = document.querySelectorAll('input[type=password]')
    if (passwords.length > 1) {
        return passwords[0].value === passwords[1].value;
    }
    return true;
}

export default confirmPasswordMatch;