import dataSlicer from "./components/dataSlicer.js";
import filterData from "./components/filterData.js";
import displayCards from "./components/displayCards.js";
let current_page = 1;
const elementsPerPage = 6;
const search = document.querySelector('#search')
const container = document.querySelector('.container');
const btnNext = document.querySelector('#btnNext');
const btnPrevious = document.querySelector('#btnPrevious');
const pageNumber = document.querySelector('#page');
pageNumber.innerText = current_page;
//
const fetchData = async () => {
    try {
        let response = await fetch('https://api.jikan.moe/v4/top/manga')
        if (response.ok) {
            const data = await response.json();
            console.log(data.data);
            return data;
        }
    } catch (error) {
        console.log(error.message);

    }
}
//
const getDataAndDisplay = async () => {
    const dataResponse = await fetchData();
    sliceAndDisplay(dataResponse.data);
    if (search) {
        search.addEventListener('keyup', (e) => {
            container.innerHTML = '';
            current_page = 1;
            pageNumber.innerText = current_page;
            const filteredData = filterData(e, dataResponse.data)
            sliceAndDisplay(filteredData);
        })
    }
    btnNext.addEventListener('click', () => {
        current_page += 1;
        pageNumber.innerText = current_page;
        container.innerHTML = "";
        sliceAndDisplay(dataResponse.data);
        console.log(current_page)
    })
    btnPrevious.addEventListener('click', () => {
        if (current_page > 1) {
            container.innerHTML = "";
            current_page -= 1;
            pageNumber.innerText = current_page;
            sliceAndDisplay(dataResponse.data);
        }
    })
}
//
const sliceAndDisplay = (data) => {
    const slicedData = dataSlicer(data, current_page, elementsPerPage);
    btnPrevious.disabled = current_page === 1;
    btnNext.disabled = current_page === Math.ceil(data.length / elementsPerPage);
    displayCards(slicedData, container);
}
getDataAndDisplay();