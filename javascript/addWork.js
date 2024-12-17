import getFormDataIntoObject from "./components/getFormDataIntoObject.js"
const form = document.querySelector('form')
import customAlert from "./components/customAlert.js";


const handleSubmit = (e) => {
    e.preventDefault()
    if (e.key === 'Enter' || e.type === "submit") {
        let dataObject = getFormDataIntoObject();
        dataObject.id = Math.random() * 1000;
        console.log(dataObject);
        let storedData = JSON.parse(localStorage.getItem("myList"))
        if (!storedData) {
            localStorage.setItem("myList", '[]')
        }
        storedData = JSON.parse(localStorage.getItem("myList"))
        console.log(storedData);
        storedData.push(dataObject)
        localStorage.setItem("myList", JSON.stringify(storedData))
        customAlert('Work Added')
        setTimeout(() => {
            window.location.href = "./myList.html";
        }, 2000)

    }
}
form.addEventListener('submit', handleSubmit)
