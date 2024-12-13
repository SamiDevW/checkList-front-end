
const dataSlicer = (postData, current_page, rows) => {
    const startIndx = (current_page - 1) * rows;
    const endIndx = current_page * rows;
    return postData.slice(startIndx, endIndx);
}

export default dataSlicer; 