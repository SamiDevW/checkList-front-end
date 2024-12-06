const form = document.querySelector('form')

const handleSubmit = (e) => {
    e.preventDefault()

    if (e.key === 'Enter' || e.type === "submit") {
        const inputs = document.querySelectorAll('input')
        let dataObject = {}
        inputs.forEach(inp => {
            dataObject[inp.name] = inp.value
        })
        console.log(dataObject);




    }
}
form.addEventListener("submit", handleSubmit)


