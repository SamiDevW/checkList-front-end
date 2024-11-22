const form = document.querySelector('form')
const handleSubmit = (e) => {
    e.preventDefault()
    if (e.key === 'Enter' || e.type === "submit") {
        const inputs = document.querySelectorAll('input')
        inputs.forEach(inp => { console.log(inp.value) })
    }
}
form.addEventListener("submit", handleSubmit)


