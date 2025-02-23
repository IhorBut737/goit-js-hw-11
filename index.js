import{a as f,S as p,i as n}from"./assets/vendor-tnUJPedx.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const y="48994521-1332b5dc6d32291391eccb048",g="https://pixabay.com/api/";function h(s){const t=new URLSearchParams({q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}),o=`${g}?key=${y}&${t.toString()}`;return f.get(o).then(a=>a.data.hits.length===0?Promise.reject("Sorry, there are no images matching your search query. Please try again!"):a.data.hits)}const u=document.querySelector(".gallery");let L=new p(".gallery a",{captionsData:"alt",captionDelay:250});function S(s){const t=s.map(({webformatURL:o,largeImageURL:a,tags:e,likes:r,views:i,comments:m,downloads:d})=>`
      <a href="${a}" class="gallery-item">
        <img src="${o}" alt="${e}" />
        <div class="info">
          <p>Likes ${r}</p>
          <p>Views ${i}</p>
          <p>Comments ${m}</p>
          <p>Downloads ${d}</p>
        </div>
      </a>
      `).join("");u.innerHTML=t,L.refresh()}function b(){u.innerHTML=""}const c=document.querySelector("#search-form"),l=document.querySelector(".loader");c.addEventListener("submit",s=>{s.preventDefault();const t=s.target.elements.searchQuery.value.trim();if(!t){n.error({title:"Error",message:"Please enter a search query!"});return}b(),l.style.display="block",h(t).then(o=>{S(o),n.success({title:"Success",message:"Images loaded!"})}).catch(o=>{n.error({title:"Error",message:o})}).finally(()=>{l.style.display="none",c.reset()})});
//# sourceMappingURL=index.js.map
