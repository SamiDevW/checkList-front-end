import getFormDataIntoObject from "./components/getFormDataIntoObject"
const form = document.querySelector('form')


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
        window.location.href = "./myList.html";
    }
}
form.addEventListener('submit', handleSubmit)
