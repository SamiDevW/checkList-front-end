
const toggleList = document.querySelector(".btn-list");
const container = document.querySelector(".container")
import { card } from "./cardMyList.js"
const randomImg = 'https://picsum.photos/400?random=${Math.random()}'
fetch('http://localhost:8000/works')
    .then(response => response.json())
    .then(data => {
        data.forEach(x => {
            card(container, x.title, x.image || randomImg)


        });

        const cardElement = document.querySelectorAll(".card")
        toggleList.addEventListener("click", () => {
            container.classList.toggle('listMode')
            cardElement.forEach(x => x.classList.toggle('cardListMode'))

        })

    })