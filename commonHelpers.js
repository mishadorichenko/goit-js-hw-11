import{i as u,S as p}from"./assets/vendor-5b791d57.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();function d(r){const i="https://pixabay.com/",t="api/",o=new URLSearchParams({key:"43016560-45bd583880e427992fd0250d3",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${i}${t}?${o}`;return fetch(e).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})}function f(r){return r.length===0?(u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",theme:"dark"}),""):r.map(t=>`<li class="pictures-list-item">
        <a class="picture-link" href="${t.largeImageURL}">
        <img src="${t.webformatURL}" alt="${t.tags}" class="picture" />
        </a>
        <ul class="picture-data-list">
          <li class="picture-data-item"><p class="picture-inf">Likes</p><p class = "picture-inf-data">${t.likes}</p></li>
          <li class="picture-data-item"><p class="picture-inf">Views</p><p class = "picture-inf-data">${t.views}</p></li>
          <li class="picture-data-item"><p class="picture-inf">Comments</p><p class = "picture-inf-data">${t.comments}</p></li>
          <li class="picture-data-item"><p class="picture-inf">Downloads</p><p class = "picture-inf-data">${t.downloads}</p></li>
        </ul>
      </li>`).join("")}const a=document.querySelector(".search-photo"),n=document.querySelector(".pictures-list"),l=document.querySelector(".loader"),m=new p(".pictures-list a",{captionsData:"alt",captionDelay:250});a.addEventListener("submit",h);function h(r){r.preventDefault(),n.innerHTML="";const i=a.search.value.toLowerCase().trim();i!=""?(l.style.display="inline-block",d(i).then(t=>{const o=t.hits;console.log(o),n.innerHTML=f(o),m.refresh(),l.style.display="none"}).catch(t=>console.log(t)),a.reset()):u.error({message:"Please enter valid query.",position:"topRight",theme:"dark"})}
//# sourceMappingURL=commonHelpers.js.map