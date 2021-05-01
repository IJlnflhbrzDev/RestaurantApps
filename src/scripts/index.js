import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';

import Data from "../DATA.json";

const btn_nav_mobile = document.getElementById("nav-drawwer");
const handle_drawwer = document.querySelector(".header");
const nav_DrawwerMobile = document.getElementById('nav-drawwer_mobile');

btn_nav_mobile.addEventListener("click", function () {
     nav_DrawwerMobile.classList.toggle("show-menu-mobile");
})

handle_drawwer.addEventListener("click", function () {
     nav_DrawwerMobile.classList.remove('show-menu-mobile')
})

// LOOPONG DATA & menampilkan data
function CardHtml(resto) {
     return `
     <article>
                    <div class="card" tabindex="0">
                         <img src="${resto.pictureId}"  class="card-img" alt=${resto.name} tabindex="0">
                         <div class="card-lokasi">
                              <h3 tabindex="0">Kota,${resto.city}</h3>
                         </div>
                         <div class="card-body">
                              <h4 class="card-rating" tabindex="0">Rating ${resto.rating}</h4>
                              <h5 class="card-title" tabindex="0">${resto.name}</h5>
                              <p class="card-text" tabindex="0">${resto.description}</p>
                         </div>
                    </div>
     </article>

     `
}
Data.restaurants.forEach(items => {
     const conten_main = document.querySelector(".conten");
     conten_main.innerHTML += CardHtml(items);

})