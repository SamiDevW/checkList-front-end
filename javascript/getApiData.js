import { card } from "./cardHome.js";
const topUrl = 'https://api.jikan.moe/v4/top/anime';
const img = document.querySelector('.imgTest')
const container = document.querySelector('.container');
const getApiData = async () => {
    const response = await fetch(topUrl);
    if (response.ok) {
        const data = await response.json();
        data.data.forEach(x => {
            card(container, x.title, x.images.jpg.image_url)
        });
    } else {
        console.log('Not successful');
    }
}
getApiData();
