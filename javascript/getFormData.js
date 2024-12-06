const form = document.querySelector('form')

const handleSubmit = (e) => {
    e.preventDefault()
    if (e.key === 'Enter' || e.type === "submit") {
        const inputs = document.querySelectorAll('input')
        const selects = document.querySelectorAll('select')
        let data;
        if (selects) {
            data = [...selects, ...inputs]
        } else {
            data = inputs;
        }
        let dataObject = {}
        data.forEach(el => {
            dataObject[el.name] = el.value
        })
        console.log(dataObject);
    }
}
form.addEventListener("submit", handleSubmit)


