const confirmPasswordMatch = () => {
    const passwords = document.querySelectorAll('input[type=password]')
    if (passwords.length > 0) {
        return passwords[0].value === passwords[1].value;
    }
    return true;
}

export default confirmPasswordMatch;