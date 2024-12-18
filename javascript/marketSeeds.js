const container = document.querySelector(".container")
const card = function (cardContainer) {
    const price = Math.floor(Math.random() * 80)
    let cardHTML = `
                    <img src="https://picsum.photos/400?random=${Math.random()}" alt="Product Image">
                    <div class="card-content">
                        <h2 class="product-name">Product Name</h2>
                        <p class="price">Price : ${price}</p>
                        <a href="#" class="add-to-cart">See seller's profile</a>
                    </div>
                       
`
    const div = document.createElement('div')
    div.setAttribute('class', 'market-card');
    div.innerHTML = cardHTML
    cardContainer.appendChild(div)

}
for (let i = 0; i < 23; i++) {
    card(container)
}
