if(!self.define){let e,f={};const i=(i,c)=>(i=new URL(i+".js",c).href,f[i]||new Promise((f=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=f,document.head.appendChild(e)}else e=i,importScripts(i),f()})).then((()=>{let e=f[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(c,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(f[r])return;let o={};const s=e=>i(e,r),t={module:{uri:r},exports:o,require:s};f[r]=Promise.all(c.map((e=>t[e]||s(e)))).then((e=>(n(...e),o)))}}define(["./workbox-958fa2bd"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"index.html",revision:"0d018cf53a3b8a635da78e85e0b57fc1"},{url:"mass.iife.js",revision:"25b2b5c544407a2914df7c571ef0eaef"},{url:"favicon.svg",revision:"ecfda4076e793b6ffd619ed24e66c36d"},{url:"favicon.ico",revision:"60d77c1713c2255be3f6de69c4de24d9"},{url:"robots.txt",revision:"f77c87f977e0fcce05a6df46c885a129"},{url:"apple-touch-icon.png",revision:"5df8fc5720b1140aafaacfca983ca756"},{url:"pwa-192x192.png",revision:"4074ff35afc6fb4ff1b81fc7da3a8b4e"},{url:"pwa-512x512.png",revision:"cfbfab311bf615832e8d062969345c1b"},{url:"manifest.webmanifest",revision:"ca857dc742f554174e8c0880af40c2f1"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
