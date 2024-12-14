const getFormDataIntoObject = () => {
    const inputs = document.querySelectorAll('input')
    const selects = document.querySelectorAll('select')
    const textarea = document.querySelectorAll('textarea')
    let data;
    data = selects ? [...selects, ...inputs] : inputs;
    data = textarea ? [...data, ...textarea] : data;
    let dataObject = {}
    data.forEach(el => {
        dataObject[el.name] = el.value;
    })
    return dataObject;
}
export default getFormDataIntoObject;