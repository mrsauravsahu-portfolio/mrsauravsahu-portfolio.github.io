const v="modulepreload",y=function(a,i){return new URL(a,i).href},h={},E=function(i,c,u){let f=Promise.resolve();if(c&&c.length>0){const r=document.getElementsByTagName("link"),e=document.querySelector("meta[property=csp-nonce]"),d=(e==null?void 0:e.nonce)||(e==null?void 0:e.getAttribute("nonce"));f=Promise.all(c.map(t=>{if(t=y(t,u),t in h)return;h[t]=!0;const o=t.endsWith(".css"),m=o?'[rel="stylesheet"]':"";if(!!u)for(let s=r.length-1;s>=0;s--){const l=r[s];if(l.href===t&&(!o||l.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${t}"]${m}`))return;const n=document.createElement("link");if(n.rel=o?"stylesheet":v,o||(n.as="script",n.crossOrigin=""),n.href=t,d&&n.setAttribute("nonce",d),document.head.appendChild(n),o)return new Promise((s,l)=>{n.addEventListener("load",s),n.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${t}`)))})}))}return f.then(()=>i()).catch(r=>{const e=new Event("vite:preloadError",{cancelable:!0});if(e.payload=r,window.dispatchEvent(e),!e.defaultPrevented)throw r})},_=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));export{E as _,_ as a};