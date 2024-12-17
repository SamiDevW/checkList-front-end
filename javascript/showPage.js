
const container = document.querySelector('.container');
const h1 = document.querySelector('h1');
const tempData = JSON.parse(localStorage.getItem('temp'))
//
h1.textContent = tempData.title
const showInfoDiv = document.createElement('div');
showInfoDiv.classList.add('show-info');
//
const category = document.createElement('p');
category.innerHTML = `<strong>Category :</strong> ${tempData.category}`;
showInfoDiv.appendChild(category);
//
const genre = document.createElement('p');
genre.innerHTML = `<strong>Genre :</strong> ${tempData.genre}`;
showInfoDiv.appendChild(genre);
//
const comment = document.createElement('p');
comment.textContent = tempData.comment;
showInfoDiv.appendChild(comment);
//
container.appendChild(showInfoDiv);
//
const showImgDiv = document.createElement('div');
showImgDiv.classList.add('show-img');
//
const imgElement = document.createElement('img');
imgElement.src = (tempData.image).includes('http') ? tempData.image : '../images/cody-board-UMlXDGxY6Kc-unsplash.jpg';
imgElement.alt = '';
showImgDiv.appendChild(imgElement);

container.appendChild(showImgDiv);