

export const card = function (cardContainer, title, image) {
    let cardHTML = `
    <div class='card-header'>  <h3>${title}</h3></div>

<div class="card-img">
 <img src="${image}" alt="manga">
</div>
<div class="card-icons">
 <a href="#"><img src="./icons/icons8-heart-ios-17-glyph/icons8-heart-60.png"
                                alt="add to wishlist"></a>
 <a href="/html/addWork.html"><img
         src="../icons/icons8-add-file-ios-17-outlined/icons8-add-file-50.png"
         alt="add to MyList"></a>
</div>
        
`
    const div = document.createElement('div')
    div.setAttribute('class', 'card');
    div.innerHTML = cardHTML
    cardContainer.appendChild(div)

}


