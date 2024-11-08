
const toggleList = document.querySelector(".btn-list");
const container = document.querySelector(".container")
// import { card } from "./cardMyList.js"
const randomImg = 'https://picsum.photos/400?random=${Math.random()}'
// fetch('http://localhost:8000/works')
//     .then(response => response.json())
//     .then(data => {
//         data.forEach(x => {
//             card(container, x.title, x.image || randomImg)
//         });
//         const cardElement = document.querySelectorAll(".card")
//         toggleList.addEventListener("click", () => {
//             container.classList.toggle('listMode')
//             cardElement.forEach(x => x.classList.toggle('cardListMode'))

//         })

//     })
const card = function (cardContainer) {

    let cardHTML = `
<div class='card-header'>  
     <a href="/html/showPage.html"><h3>Added Card</h3></a> 
</div>
    <div class="card-img">
        <img src="https://picsum.photos/400?random=${Math.random()}" alt="manga">
    </div>
    <div class="card-icons">
        <a href="#"><img src="../icons/icons8-heart-ios-17-filled/icons8-heart-50.png"
        alt="add to wishlist"></a>
        <a href="/html/addWork.html"><img
         src="../icons/icons8-trash-can-ios-17-glyph/icons8-trash-can-60.png"
        alt="add to MyList"></a>
        <a href="/html/addWork.html"><img src="../icons/icons8-modifier-ios-17-glyph/icons8-modifier-60.png"
        alt="add to MyList"></a>
        <input type="checkbox">
        
</div>
        
`
    const div = document.createElement('div')
    div.setAttribute('class', 'card');
    div.innerHTML = cardHTML;
    cardContainer.appendChild(div)
    const cardElement = document.querySelectorAll(".card")
    toggleList.addEventListener("click", () => {
        container.classList.toggle('listMode')
        cardElement.forEach(x => x.classList.toggle('cardListMode'))

    })

}
for (let i = 0; i < 23; i++) {
    console.log(card(container));

}
