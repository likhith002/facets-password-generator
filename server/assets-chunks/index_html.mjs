export default `<!DOCTYPE html><html lang="en" data-beasties-container><head>
  <meta charset="utf-8">
  <title>FacetsPasswordGenerator</title>
  <base href="https://likhith002.github.io/facets-password-generator/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
<link rel="stylesheet" href="styles-5INURTSO.css"><style ng-app-id="ng">[_nghost-ng-c2661406110]{--bright-blue: oklch(51.01% .274 263.83);--electric-violet: oklch(53.18% .28 296.97);--french-violet: oklch(47.66% .246 305.88);--vivid-pink: oklch(69.02% .277 332.77);--hot-red: oklch(61.42% .238 15.34);--orange-red: oklch(63.32% .24 31.68);--gray-900: oklch(19.37% .006 300.98);--gray-700: oklch(36.98% .014 302.71);--gray-400: oklch(70.9% .015 304.04);--red-to-pink-to-purple-vertical-gradient: linear-gradient( 180deg, var(--orange-red) 0%, var(--vivid-pink) 50%, var(--electric-violet) 100% );--red-to-pink-to-purple-horizontal-gradient: linear-gradient( 90deg, var(--orange-red) 0%, var(--vivid-pink) 50%, var(--electric-violet) 100% );--pill-accent: var(--bright-blue);font-family:Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol;box-sizing:border-box;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}h1[_ngcontent-ng-c2661406110]{font-size:3.125rem;color:var(--gray-900);font-weight:500;line-height:100%;letter-spacing:-.125rem;margin:0;font-family:Inter Tight,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol}p[_ngcontent-ng-c2661406110]{margin:0;color:var(--gray-700)}main[_ngcontent-ng-c2661406110]{width:100vw;height:100vh;min-height:100%;display:flex;justify-content:center;align-items:center;padding:1rem;box-sizing:inherit;position:relative}</style><style ng-app-id="ng">label[_ngcontent-ng-c1739892627]{display:block;margin-bottom:10px;font-size:small}button[_ngcontent-ng-c1739892627]{width:90%;padding:8px;margin-bottom:15px}input[type=number][_ngcontent-ng-c1739892627]{outline:0}button[_ngcontent-ng-c1739892627]{background-color:#007bff;color:#fff;border:none;cursor:pointer;border-radius:4px;align-self:center}button[_ngcontent-ng-c1739892627]:hover{background-color:#0056b3}.container[_ngcontent-ng-c1739892627]{max-width:400px;margin:50px auto;padding:20px;border:1px solid #ccc;border-radius:8px;background-color:#f9f9f9;box-shadow:0 10px 25px #00000014}.password[_ngcontent-ng-c1739892627]{width:80%;padding:8px;margin-bottom:15px}.output[_ngcontent-ng-c1739892627]{background-color:#e9ecef;border:1px solid #ccc;padding:5px;display:flex;flex-direction:column;justify-items:center;align-items:center;border-radius:4px}.warning[_ngcontent-ng-c1739892627]{color:red;font-weight:700;font-size:smaller}</style></head>
<body><!--nghm--><script type="text/javascript" id="ng-event-dispatch-contract">(()=>{function p(t,n,r,o,e,i,f,m){return{eventType:t,event:n,targetElement:r,eic:o,timeStamp:e,eia:i,eirp:f,eiack:m}}function u(t){let n=[],r=e=>{n.push(e)};return{c:t,q:n,et:[],etc:[],d:r,h:e=>{r(p(e.type,e,e.target,t,Date.now()))}}}function s(t,n,r){for(let o=0;o<n.length;o++){let e=n[o];(r?t.etc:t.et).push(e),t.c.addEventListener(e,t.h,r)}}function c(t,n,r,o,e=window){let i=u(t);e._ejsas||(e._ejsas={}),e._ejsas[n]=i,s(i,r),s(i,o,!0)}window.__jsaction_bootstrap=c;})();
</script><script>window.__jsaction_bootstrap(document.body,"ng",["input","compositionstart","compositionend","keyup","change","click"],["blur"]);</script>
  <app-root _nghost-ng-c2661406110 ng-version="19.0.5" ngh="1" ng-server-context="ssg"><main _ngcontent-ng-c2661406110 class="main"><div _ngcontent-ng-c2661406110 class="content"><app-password-generator _ngcontent-ng-c2661406110 _nghost-ng-c1739892627 ngh="0"><div _ngcontent-ng-c1739892627 class="container"><h1 _ngcontent-ng-c1739892627>Password Generator</h1><div _ngcontent-ng-c1739892627><label _ngcontent-ng-c1739892627 for="length">Password Length:</label><input _ngcontent-ng-c1739892627 type="number" id="length" min="1" max="20" class="password ng-untouched ng-pristine ng-valid" value="8" style="margin-bottom: 15px;" jsaction="input:;blur:;compositionstart:;compositionend:;keyup:;"><!----></div><div _ngcontent-ng-c1739892627><label _ngcontent-ng-c1739892627><input _ngcontent-ng-c1739892627 type="checkbox" class="ng-untouched ng-pristine ng-valid" checked jsaction="change:;blur:;"> Include Alphabets </label></div><div _ngcontent-ng-c1739892627><label _ngcontent-ng-c1739892627><input _ngcontent-ng-c1739892627 type="checkbox" class="ng-untouched ng-pristine ng-valid" jsaction="change:;blur:;"> Include Numbers </label></div><div _ngcontent-ng-c1739892627><label _ngcontent-ng-c1739892627><input _ngcontent-ng-c1739892627 type="checkbox" class="ng-untouched ng-pristine ng-valid" jsaction="change:;blur:;"> Include Special Characters </label></div><button _ngcontent-ng-c1739892627 jsaction="click:;">Generate Password</button><!----><!----></div></app-password-generator></div></main></app-root>
<script src="polyfills-FFHMD2TL.js" type="module"></script><script src="main-VJDASSSL.js" type="module"></script>

<script id="ng-state" type="application/json">{"__nghData__":[{"t":{"7":"t0","22":"t1","23":"t2"},"c":{"7":[],"22":[],"23":[]}},{}]}</script></body></html>`;