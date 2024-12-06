const container = document.querySelector('.container');
const fetchDataAndDisplay = async () => {
    const fetchs = [fetch('https://api.jikan.moe/v4/top/anime'), fetch('../jikanAppFullData.json')]
    const response = await Promise.any(fetchs)
    // const response = await fetch('https://api.jikan.moe/v4/top/anime');
    console.log(response);

    if (response.ok) {
        const data = await response.json()
        displayData(data)
    }

}
const displayData = (dataFile) => {
    dataFile.data.forEach(el => {
        // Add card to container
        const card = document.createElement('div');
        card.setAttribute('class', 'card');
        container.appendChild(card);
        //Add card-header to card
        const cardHeader = document.createElement('div');
        cardHeader.setAttribute('class', 'card-header');
        card.appendChild(cardHeader);
        const title = document.createElement('h3');
        title.innerText = el.title
        cardHeader.appendChild(title)
        //Add card-img to card
        const cardImg = document.createElement('div');
        cardImg.setAttribute('class', 'card-img');
        card.appendChild(cardImg);
        const img = document.createElement('img');
        img.src = el.images.jpg.image_url;
        cardImg.appendChild(img)
        //
        const cardIcons = document.createElement('div');
        cardIcons.setAttribute('class', 'card-icons');
        card.appendChild(cardIcons)
        for (let i = 0; i <= 1; i++) {
            const iconSrc = ["../icons/icons8-heart-ios-17-glyph/icons8-heart-60.png", "../icons/icons8-add-file-ios-17-outlined/icons8-add-file-50.png"]
            const iconLinks = ['#', "/html/addWork.html"]
            const iconLink = document.createElement('a');
            iconLink.href = iconLinks[i]
            const icon = document.createElement('img');
            icon.src = iconSrc[i]
            iconLink.appendChild(icon)
            cardIcons.appendChild(iconLink)
        }

    })
}
fetchDataAndDisplay()