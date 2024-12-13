import confirmPasswordMatch from "./components/confirmPasswordMatch.js"
const form = document.querySelector('form')
console.log(form);
const handleSubmit = (e) => {
    e.preventDefault()
    if (confirmPasswordMatch()) {

        // const pwInfo = document.querySelector('#pwInfo')
        // if (pwInfo) { }
        if (e.key === 'Enter' || e.type === "submit") {
            const inputs = document.querySelectorAll('input')
            const selects = document.querySelectorAll('select')
            let data;
            data = selects ? [...selects, ...inputs] : inputs;
            let dataObject = {}
            data.forEach(el => {
                dataObject[el.name] = el.value;
            })
            console.log('credentials ok , data sent are');
            console.log(dataObject);
        }
    } else {
        console.log('access denied');
    }
}


if (form) {
    form.addEventListener("submit", handleSubmit)
}
const firstname = document.querySelector('#firstname')
firstname.addEventListener('keyup', () => console.dir(firstname))