import confirmPasswordMatch from "./components/confirmPasswordMatch.js"
import checkValidity from "./components/checkValidity.js";
import getFormDataIntoObject from "./components/getFormDataIntoObject.js";
const form = document.querySelector('form')
//
const handleSubmit = (e) => {
    e.preventDefault()
    if (confirmPasswordMatch()) {
        if (e.key === 'Enter' || e.type === "submit") {
            const dataObject = getFormDataIntoObject()
            console.log('credentials ok , data sent are');
            console.log(dataObject);
        }
    } else {
        console.log('access denied');
    }
}
//
if (form) {
    form.addEventListener("submit", handleSubmit)
}
//
const passwords = document.querySelectorAll('input[type=password]')
passwords.forEach(x => {
    x.addEventListener('keyup', (e) => {
        checkValidity(e.target)
    })
})
