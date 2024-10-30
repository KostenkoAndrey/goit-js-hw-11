`use strict`
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const form = document.querySelector(".form");
const API_KEY = "46815109-801c3b1dec2424a02adace61a";


form.addEventListener("submit", hundleSearch);
const BASE_URL = "https://pixabay.com/api/";
const container = document.querySelector(".loader")

function hundleSearch (event){
event.preventDefault();
const {button, textRow} = event.target.elements;

if(textRow.value.trim() === ""){
    return;
}

fetchData(textRow.value)
.then(data => {
     console.log("data:", data);
    container.innerHTML = (createMarkup(data.hits));
})
.catch(error => console.log(error));

    form.reset();
};


function fetchData(textRow){
    const params = new URLSearchParams ({
        key: API_KEY,
        q: textRow,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
    });

    return fetch(`${BASE_URL}?${params}`)
    .then(response => {
        if(!response.ok) {
           throw new Error;
        }
        return response.json();
    });  
};


function createMarkup(array){
return array.map(( { webformatURL: smallPic, largeImageURL: largePic, tags: alt, likes = 0, views = 0, comments = "", downloads = 0 } ) => 
      `<div class="gallery">
    <a href="${largePic}"><img src="${smallPic}" alt="${alt}"/></a>
    <div><p>Likes</p>
    <span>${likes}</span></div>
    <div><p>Views</p>
    <span>${views}</span></div>
    <div><p>Comments</p>
    <span>${comments}</span></div>
    <div><p>Downloads</p>
    <span>${downloads}</span></div>
</div>`
)
.join("");
}

