
const dataSlicer = (postData, current_page, rows) => {
    const startIndx = (current_page - 1) * rows;
    const endIndx = current_page * rows;
    return postData.slice(startIndx, endIndx);
}

// const dataFilter = (data, searchInput) => {
//     const filteredData = data.filter(el => el.title.trim().lowerCase().includes(searchInput))
// }
export { dataSlicer } 