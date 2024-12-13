const filterData = (e, data) => {
    const filteredData = data.filter(x => x.title.toLowerCase().trim().includes(e.target.value.toLowerCase().trim()))
    return filteredData;
}

export default filterData;