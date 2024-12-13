const form = document.querySelector('form')


const handleSubmit = (e) => {
    e.preventDefault()

    if (e.key === 'Enter' || e.type === "submit") {
        const inputs = document.querySelectorAll('input')
        const selects = document.querySelectorAll('select')
        const textarea = document.querySelectorAll('textarea')
        let data;
        data = selects ? [...selects, ...inputs] : inputs;
        data = textarea ? [...data, ...textarea] : data;
        console.dir(data);
        let dataObject = {}
        data.forEach(el => {
            dataObject[el.name] = el.value;
        })
        dataObject.id = Math.random() * 1000
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
