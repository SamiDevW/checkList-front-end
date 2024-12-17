import confirmPasswordMatch from "./components/confirmPasswordMatch.js"
import checkValidity from "./components/checkValidity.js";
import getFormDataIntoObject from "./components/getFormDataIntoObject.js";
import customAlert from "./components/customAlert.js";
const passwords = document.querySelectorAll('input[type=password]')
const form = document.querySelector('form')
//
const handleSubmit = (e) => {
    e.preventDefault()
    if (confirmPasswordMatch()) {
        if (e.key === 'Enter' || e.type === "submit") {
            const dataObject = getFormDataIntoObject()
            if (passwords.length > 1) {
                customAlert("Account has been created")
                setTimeout(() => {
                    window.location.href = "./myList.html";
                }, 2000)

                console.log(dataObject);
            } else {
                customAlert("Login successful")
                console.log(dataObject);
                setTimeout(() => {
                    window.location.href = "./myList.html";
                }, 2000)

            }

        }
    } else {

        customAlert("Passwords don't match", true)
    }
}
//
if (form) {
    form.addEventListener("submit", handleSubmit)
}
//


passwords.forEach(x => {
    x.addEventListener('keyup', (e) => {
        checkValidity(e.target)
    })
})
