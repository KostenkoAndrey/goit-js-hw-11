import"./assets/vendor-Bgfrje-I.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const a=document.querySelector(".form"),u="46815109-801c3b1dec2424a02adace61a";a.addEventListener("submit",p);const l="https://pixabay.com/api/",d=document.querySelector(".loader");function p(i){i.preventDefault();const{button:n,textRow:r}=i.target.elements;r.value.trim()!==""&&(f(r.value).then(o=>{console.log("data:",o),d.innerHTML=m(o.hits)}).catch(o=>console.log(o)),a.reset())}function f(i){const n=new URLSearchParams({key:u,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${l}?${n}`).then(r=>{if(!r.ok)throw new Error;return r.json()})}function m(i){return i.map(({webformatURL:n,largeImageURL:r,tags:o,likes:e=0,views:t=0,comments:s="",downloads:c=0})=>`<div class="gallery">
    <a href="${r}"><img src="${n}" alt="${o}"/></a>
    <div><p>Likes</p>
    <span>${e}</span></div>
    <div><p>Views</p>
    <span>${t}</span></div>
    <div><p>Comments</p>
    <span>${s}</span></div>
    <div><p>Downloads</p>
    <span>${c}</span></div>
</div>`).join("")}
//# sourceMappingURL=index.js.map
