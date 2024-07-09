System.register(["./index-legacy-CQ0BK08H.js"],(function(g,e){"use strict";var t,i,a;return{setters:[g=>{t=g.m,i=g.n,a=g.I}],execute:function(){var e=document.createElement("style");e.textContent='.container{display:grid;grid-template-rows:.2fr 2.7fr .1fr;grid-auto-columns:1fr;gap:2px 0px;grid-auto-flow:row;grid-template-areas:"Header" "Content" "Footer"}header{grid-area:Header}footer{grid-area:Footer}.content{grid-area:Content}.container{height:100vh;margin:0}\n',document.head.appendChild(e),g("default",(function(){const g=localStorage.getItem("currentPage")||0,[e,v]=t.useState(Number(g));t.useEffect((()=>{localStorage.setItem("currentPage",String(e))}),[e]);const O=function(g){const{trackMouse:e}=g,i=t.useRef(Object.assign({},l)),a=t.useRef(Object.assign({},r)),d=t.useRef(Object.assign({},a.current));let f;for(f in d.current=Object.assign({},a.current),a.current=Object.assign(Object.assign({},r),g),r)void 0===a.current[f]&&(a.current[f]=r[f]);const[v,O]=t.useMemo((()=>function(g,e){const t=e=>{const t="touches"in e;t&&e.touches.length>1||g(((g,a)=>{a.trackMouse&&!t&&(document.addEventListener(x,i),document.addEventListener(U,f));const{clientX:p,clientY:m}=t?e.touches[0]:e,n=h([p,m],a.rotationAngle);return a.onTouchStartOrOnMouseDown&&a.onTouchStartOrOnMouseDown({event:e}),Object.assign(Object.assign(Object.assign({},g),l),{initial:n.slice(),xy:n,start:e.timeStamp||0})}))},i=e=>{g(((g,t)=>{const i="touches"in e;if(i&&e.touches.length>1)return g;if(e.timeStamp-g.start>t.swipeDuration)return g.swiping?Object.assign(Object.assign({},g),{swiping:!1}):g;const{clientX:a,clientY:l}=i?e.touches[0]:e,[x,U]=h([a,l],t.rotationAngle),c=x-g.xy[0],o=U-g.xy[1],u=Math.abs(c),d=Math.abs(o),f=(e.timeStamp||0)-g.start,v=Math.sqrt(u*u+d*d)/(f||1),O=[c/(f||1),o/(f||1)],j=function(g,e,t,i){return g>e?t>0?m:p:i>0?s:n}(u,d,c,o),b="number"==typeof t.delta?t.delta:t.delta[j.toLowerCase()]||r.delta;if(u<b&&d<b&&!g.swiping)return g;const S={absX:u,absY:d,deltaX:c,deltaY:o,dir:j,event:e,first:g.first,initial:g.initial,velocity:v,vxvy:O};S.first&&t.onSwipeStart&&t.onSwipeStart(S),t.onSwiping&&t.onSwiping(S);let w=!1;return(t.onSwiping||t.onSwiped||t[`onSwiped${j}`])&&(w=!0),w&&t.preventScrollOnSwipe&&t.trackTouch&&e.cancelable&&e.preventDefault(),Object.assign(Object.assign({},g),{first:!1,eventData:S,swiping:!0})}))},a=e=>{g(((g,t)=>{let i;if(g.swiping&&g.eventData){if(e.timeStamp-g.start<t.swipeDuration){i=Object.assign(Object.assign({},g.eventData),{event:e}),t.onSwiped&&t.onSwiped(i);const a=t[`onSwiped${i.dir}`];a&&a(i)}}else t.onTap&&t.onTap({event:e});return t.onTouchEndOrOnMouseUp&&t.onTouchEndOrOnMouseUp({event:e}),Object.assign(Object.assign(Object.assign({},g),l),{eventData:i})}))},d=()=>{document.removeEventListener(x,i),document.removeEventListener(U,f)},f=g=>{d(),a(g)},v=(g,e)=>{let p=()=>{};if(g&&g.addEventListener){const m=Object.assign(Object.assign({},r.touchEventOptions),e.touchEventOptions),n=[[u,t,m],[o,i,Object.assign(Object.assign({},m),e.preventScrollOnSwipe?{passive:!1}:{})],[c,a,m]];n.forEach((([e,t,i])=>g.addEventListener(e,t,i))),p=()=>n.forEach((([e,t])=>g.removeEventListener(e,t)))}return p},O=e=>{null!==e&&g(((g,t)=>{if(g.el===e)return g;const i={};return g.el&&g.el!==e&&g.cleanUpTouch&&(g.cleanUpTouch(),i.cleanUpTouch=void 0),t.trackTouch&&e&&(i.cleanUpTouch=v(e,t)),Object.assign(Object.assign(Object.assign({},g),{el:e}),i)}))},j={ref:O};return e.trackMouse&&(j.onMouseDown=t),[j,v]}((g=>i.current=g(i.current,a.current)),{trackMouse:e})),[e]);return i.current=function(g,e,t,i){return e.trackTouch&&g.el?g.cleanUpTouch?e.preventScrollOnSwipe!==t.preventScrollOnSwipe||e.touchEventOptions.passive!==t.touchEventOptions.passive?(g.cleanUpTouch(),Object.assign(Object.assign({},g),{cleanUpTouch:i(g.el,e)})):g:Object.assign(Object.assign({},g),{cleanUpTouch:i(g.el,e)}):(g.cleanUpTouch&&g.cleanUpTouch(),Object.assign(Object.assign({},g),{cleanUpTouch:void 0}))}(i.current,a.current,d.current,O),v}({onSwipedLeft:function(){e>0&&v(e-1)},onSwipedRight:function(){e<f.length-1&&v(e+1)}});return f.length>0?i.jsxs("div",{className:"container",...O,children:[i.jsx("header",{className:"search-wrapper__clz",children:i.jsx(d,{})}),i.jsx("section",{className:"content",children:i.jsx(a,{src:f[e].imageUrl,alt:`الصفحة ${e}`,style:{width:"100%",height:"100%",objectFit:"fill"}})}),i.jsx("footer",{className:"page-info__clz"})]}):null}));const p="Left",m="Right",n="Up",s="Down",r={delta:10,preventScrollOnSwipe:!1,rotationAngle:0,trackMouse:!1,trackTouch:!0,swipeDuration:1/0,touchEventOptions:{passive:!0}},l={first:!0,initial:[0,0],start:0,swiping:!1,xy:[0,0]},x="mousemove",U="mouseup",c="touchend",o="touchmove",u="touchstart";function h(g,e){if(0===e)return g;const t=Math.PI/180*e;return[g[0]*Math.cos(t)+g[1]*Math.sin(t),g[1]*Math.cos(t)-g[0]*Math.sin(t)]}function d(){const[g,e]=t.useState(""),[a,p]=t.useState([]);return i.jsxs("section",{style:{display:"none"},children:[i.jsx("input",{type:"text",value:g,onChange:g=>e(g.target.value),placeholder:"Search..."}),i.jsx("button",{onClick:function(){p([])},children:"Search"}),i.jsxs("div",{children:[i.jsx("h4",{children:"Search Results"}),i.jsx("ul",{children:a.map((g=>i.jsxs("li",{onClick:()=>function(g){console.log({page:g})}(g),children:["Page ",g+1]},g)))})]})]})}const f=[{imageUrl:"./imgs/0.png",text:"page 0"},{imageUrl:"./imgs/10.png",text:"page 10"},{imageUrl:"./imgs/100.png",text:"page 100"},{imageUrl:"./imgs/101.png",text:"page 101"},{imageUrl:"./imgs/102.png",text:"page 102"},{imageUrl:"./imgs/103.png",text:"page 103"},{imageUrl:"./imgs/104.png",text:"page 104"},{imageUrl:"./imgs/105.png",text:"page 105"},{imageUrl:"./imgs/106.png",text:"page 106"},{imageUrl:"./imgs/107.png",text:"page 107"},{imageUrl:"./imgs/108.png",text:"page 108"},{imageUrl:"./imgs/109.png",text:"page 109"},{imageUrl:"./imgs/11.png",text:"page 11"},{imageUrl:"./imgs/110.png",text:"page 110"},{imageUrl:"./imgs/111.png",text:"page 111"},{imageUrl:"./imgs/112.png",text:"page 112"},{imageUrl:"./imgs/113.png",text:"page 113"},{imageUrl:"./imgs/114.png",text:"page 114"},{imageUrl:"./imgs/115.png",text:"page 115"},{imageUrl:"./imgs/116.png",text:"page 116"},{imageUrl:"./imgs/117.png",text:"page 117"},{imageUrl:"./imgs/118.png",text:"page 118"},{imageUrl:"./imgs/119.png",text:"page 119"},{imageUrl:"./imgs/12.png",text:"page 12"},{imageUrl:"./imgs/120.png",text:"page 120"},{imageUrl:"./imgs/121.png",text:"page 121"},{imageUrl:"./imgs/122.png",text:"page 122"},{imageUrl:"./imgs/123.png",text:"page 123"},{imageUrl:"./imgs/124.png",text:"page 124"},{imageUrl:"./imgs/125.png",text:"page 125"},{imageUrl:"./imgs/126.png",text:"page 126"},{imageUrl:"./imgs/127.png",text:"page 127"},{imageUrl:"./imgs/128.png",text:"page 128"},{imageUrl:"./imgs/129.png",text:"page 129"},{imageUrl:"./imgs/13.png",text:"page 13"},{imageUrl:"./imgs/130.png",text:"page 130"},{imageUrl:"./imgs/131.png",text:"page 131"},{imageUrl:"./imgs/132.png",text:"page 132"},{imageUrl:"./imgs/133.png",text:"page 133"},{imageUrl:"./imgs/134.png",text:"page 134"},{imageUrl:"./imgs/135.png",text:"page 135"},{imageUrl:"./imgs/136.png",text:"page 136"},{imageUrl:"./imgs/137.png",text:"page 137"},{imageUrl:"./imgs/138.png",text:"page 138"},{imageUrl:"./imgs/139.png",text:"page 139"},{imageUrl:"./imgs/14.png",text:"page 14"},{imageUrl:"./imgs/140.png",text:"page 140"},{imageUrl:"./imgs/141.png",text:"page 141"},{imageUrl:"./imgs/142.png",text:"page 142"},{imageUrl:"./imgs/143.png",text:"page 143"},{imageUrl:"./imgs/144.png",text:"page 144"},{imageUrl:"./imgs/145.png",text:"page 145"},{imageUrl:"./imgs/146.png",text:"page 146"},{imageUrl:"./imgs/147.png",text:"page 147"},{imageUrl:"./imgs/148.png",text:"page 148"},{imageUrl:"./imgs/149.png",text:"page 149"},{imageUrl:"./imgs/15.png",text:"page 15"},{imageUrl:"./imgs/150.png",text:"page 150"},{imageUrl:"./imgs/151.png",text:"page 151"},{imageUrl:"./imgs/152.png",text:"page 152"},{imageUrl:"./imgs/153.png",text:"page 153"},{imageUrl:"./imgs/154.png",text:"page 154"},{imageUrl:"./imgs/155.png",text:"page 155"},{imageUrl:"./imgs/156.png",text:"page 156"},{imageUrl:"./imgs/157.png",text:"page 157"},{imageUrl:"./imgs/158.png",text:"page 158"},{imageUrl:"./imgs/159.png",text:"page 159"},{imageUrl:"./imgs/16.png",text:"page 16"},{imageUrl:"./imgs/160.png",text:"page 160"},{imageUrl:"./imgs/161.png",text:"page 161"},{imageUrl:"./imgs/162.png",text:"page 162"},{imageUrl:"./imgs/163.png",text:"page 163"},{imageUrl:"./imgs/164.png",text:"page 164"},{imageUrl:"./imgs/165.png",text:"page 165"},{imageUrl:"./imgs/166.png",text:"page 166"},{imageUrl:"./imgs/167.png",text:"page 167"},{imageUrl:"./imgs/168.png",text:"page 168"},{imageUrl:"./imgs/169.png",text:"page 169"},{imageUrl:"./imgs/17.png",text:"page 17"},{imageUrl:"./imgs/170.png",text:"page 170"},{imageUrl:"./imgs/171.png",text:"page 171"},{imageUrl:"./imgs/172.png",text:"page 172"},{imageUrl:"./imgs/173.png",text:"page 173"},{imageUrl:"./imgs/174.png",text:"page 174"},{imageUrl:"./imgs/175.png",text:"page 175"},{imageUrl:"./imgs/176.png",text:"page 176"},{imageUrl:"./imgs/177.png",text:"page 177"},{imageUrl:"./imgs/178.png",text:"page 178"},{imageUrl:"./imgs/179.png",text:"page 179"},{imageUrl:"./imgs/18.png",text:"page 18"},{imageUrl:"./imgs/180.png",text:"page 180"},{imageUrl:"./imgs/181.png",text:"page 181"},{imageUrl:"./imgs/182.png",text:"page 182"},{imageUrl:"./imgs/183.png",text:"page 183"},{imageUrl:"./imgs/184.png",text:"page 184"},{imageUrl:"./imgs/185.png",text:"page 185"},{imageUrl:"./imgs/186.png",text:"page 186"},{imageUrl:"./imgs/187.png",text:"page 187"},{imageUrl:"./imgs/188.png",text:"page 188"},{imageUrl:"./imgs/189.png",text:"page 189"},{imageUrl:"./imgs/19.png",text:"page 19"},{imageUrl:"./imgs/190.png",text:"page 190"},{imageUrl:"./imgs/191.png",text:"page 191"},{imageUrl:"./imgs/192.png",text:"page 192"},{imageUrl:"./imgs/193.png",text:"page 193"},{imageUrl:"./imgs/194.png",text:"page 194"},{imageUrl:"./imgs/195.png",text:"page 195"},{imageUrl:"./imgs/196.png",text:"page 196"},{imageUrl:"./imgs/197.png",text:"page 197"},{imageUrl:"./imgs/198.png",text:"page 198"},{imageUrl:"./imgs/199.png",text:"page 199"},{imageUrl:"./imgs/20.png",text:"page 20"},{imageUrl:"./imgs/200.png",text:"page 200"},{imageUrl:"./imgs/201.png",text:"page 201"},{imageUrl:"./imgs/202.png",text:"page 202"},{imageUrl:"./imgs/203.png",text:"page 203"},{imageUrl:"./imgs/204.png",text:"page 204"},{imageUrl:"./imgs/205.png",text:"page 205"},{imageUrl:"./imgs/206.png",text:"page 206"},{imageUrl:"./imgs/207.png",text:"page 207"},{imageUrl:"./imgs/208.png",text:"page 208"},{imageUrl:"./imgs/209.png",text:"page 209"},{imageUrl:"./imgs/21.png",text:"page 21"},{imageUrl:"./imgs/210.png",text:"page 210"},{imageUrl:"./imgs/211.png",text:"page 211"},{imageUrl:"./imgs/212.png",text:"page 212"},{imageUrl:"./imgs/213.png",text:"page 213"},{imageUrl:"./imgs/214.png",text:"page 214"},{imageUrl:"./imgs/215.png",text:"page 215"},{imageUrl:"./imgs/216.png",text:"page 216"},{imageUrl:"./imgs/217.png",text:"page 217"},{imageUrl:"./imgs/218.png",text:"page 218"},{imageUrl:"./imgs/219.png",text:"page 219"},{imageUrl:"./imgs/22.png",text:"page 22"},{imageUrl:"./imgs/220.png",text:"page 220"},{imageUrl:"./imgs/221.png",text:"page 221"},{imageUrl:"./imgs/222.png",text:"page 222"},{imageUrl:"./imgs/223.png",text:"page 223"},{imageUrl:"./imgs/224.png",text:"page 224"},{imageUrl:"./imgs/225.png",text:"page 225"},{imageUrl:"./imgs/226.png",text:"page 226"},{imageUrl:"./imgs/227.png",text:"page 227"},{imageUrl:"./imgs/228.png",text:"page 228"},{imageUrl:"./imgs/229.png",text:"page 229"},{imageUrl:"./imgs/23.png",text:"page 23"},{imageUrl:"./imgs/230.png",text:"page 230"},{imageUrl:"./imgs/231.png",text:"page 231"},{imageUrl:"./imgs/232.png",text:"page 232"},{imageUrl:"./imgs/233.png",text:"page 233"},{imageUrl:"./imgs/234.png",text:"page 234"},{imageUrl:"./imgs/235.png",text:"page 235"},{imageUrl:"./imgs/236.png",text:"page 236"},{imageUrl:"./imgs/237.png",text:"page 237"},{imageUrl:"./imgs/238.png",text:"page 238"},{imageUrl:"./imgs/239.png",text:"page 239"},{imageUrl:"./imgs/24.png",text:"page 24"},{imageUrl:"./imgs/240.png",text:"page 240"},{imageUrl:"./imgs/241.png",text:"page 241"},{imageUrl:"./imgs/242.png",text:"page 242"},{imageUrl:"./imgs/243.png",text:"page 243"},{imageUrl:"./imgs/244.png",text:"page 244"},{imageUrl:"./imgs/245.png",text:"page 245"},{imageUrl:"./imgs/246.png",text:"page 246"},{imageUrl:"./imgs/247.png",text:"page 247"},{imageUrl:"./imgs/248.png",text:"page 248"},{imageUrl:"./imgs/249.png",text:"page 249"},{imageUrl:"./imgs/25.png",text:"page 25"},{imageUrl:"./imgs/250.png",text:"page 250"},{imageUrl:"./imgs/251.png",text:"page 251"},{imageUrl:"./imgs/252.png",text:"page 252"},{imageUrl:"./imgs/253.png",text:"page 253"},{imageUrl:"./imgs/254.png",text:"page 254"},{imageUrl:"./imgs/255.png",text:"page 255"},{imageUrl:"./imgs/256.png",text:"page 256"},{imageUrl:"./imgs/257.png",text:"page 257"},{imageUrl:"./imgs/258.png",text:"page 258"},{imageUrl:"./imgs/259.png",text:"page 259"},{imageUrl:"./imgs/26.png",text:"page 26"},{imageUrl:"./imgs/260.png",text:"page 260"},{imageUrl:"./imgs/261.png",text:"page 261"},{imageUrl:"./imgs/262.png",text:"page 262"},{imageUrl:"./imgs/263.png",text:"page 263"},{imageUrl:"./imgs/264.png",text:"page 264"},{imageUrl:"./imgs/265.png",text:"page 265"},{imageUrl:"./imgs/266.png",text:"page 266"},{imageUrl:"./imgs/267.png",text:"page 267"},{imageUrl:"./imgs/268.png",text:"page 268"},{imageUrl:"./imgs/269.png",text:"page 269"},{imageUrl:"./imgs/27.png",text:"page 27"},{imageUrl:"./imgs/270.png",text:"page 270"},{imageUrl:"./imgs/271.png",text:"page 271"},{imageUrl:"./imgs/272.png",text:"page 272"},{imageUrl:"./imgs/273.png",text:"page 273"},{imageUrl:"./imgs/274.png",text:"page 274"},{imageUrl:"./imgs/275.png",text:"page 275"},{imageUrl:"./imgs/276.png",text:"page 276"},{imageUrl:"./imgs/277.png",text:"page 277"},{imageUrl:"./imgs/278.png",text:"page 278"},{imageUrl:"./imgs/279.png",text:"page 279"},{imageUrl:"./imgs/28.png",text:"page 28"},{imageUrl:"./imgs/280.png",text:"page 280"},{imageUrl:"./imgs/281.png",text:"page 281"},{imageUrl:"./imgs/282.png",text:"page 282"},{imageUrl:"./imgs/283.png",text:"page 283"},{imageUrl:"./imgs/284.png",text:"page 284"},{imageUrl:"./imgs/285.png",text:"page 285"},{imageUrl:"./imgs/286.png",text:"page 286"},{imageUrl:"./imgs/287.png",text:"page 287"},{imageUrl:"./imgs/288.png",text:"page 288"},{imageUrl:"./imgs/289.png",text:"page 289"},{imageUrl:"./imgs/29.png",text:"page 29"},{imageUrl:"./imgs/290.png",text:"page 290"},{imageUrl:"./imgs/291.png",text:"page 291"},{imageUrl:"./imgs/292.png",text:"page 292"},{imageUrl:"./imgs/293.png",text:"page 293"},{imageUrl:"./imgs/294.png",text:"page 294"},{imageUrl:"./imgs/295.png",text:"page 295"},{imageUrl:"./imgs/296.png",text:"page 296"},{imageUrl:"./imgs/297.png",text:"page 297"},{imageUrl:"./imgs/298.png",text:"page 298"},{imageUrl:"./imgs/299.png",text:"page 299"},{imageUrl:"./imgs/30.png",text:"page 30"},{imageUrl:"./imgs/300.png",text:"page 300"},{imageUrl:"./imgs/301.png",text:"page 301"},{imageUrl:"./imgs/302.png",text:"page 302"},{imageUrl:"./imgs/303.png",text:"page 303"},{imageUrl:"./imgs/304.png",text:"page 304"},{imageUrl:"./imgs/305.png",text:"page 305"},{imageUrl:"./imgs/306.png",text:"page 306"},{imageUrl:"./imgs/307.png",text:"page 307"},{imageUrl:"./imgs/308.png",text:"page 308"},{imageUrl:"./imgs/309.png",text:"page 309"},{imageUrl:"./imgs/31.png",text:"page 31"},{imageUrl:"./imgs/310.png",text:"page 310"},{imageUrl:"./imgs/311.png",text:"page 311"},{imageUrl:"./imgs/312.png",text:"page 312"},{imageUrl:"./imgs/313.png",text:"page 313"},{imageUrl:"./imgs/314.png",text:"page 314"},{imageUrl:"./imgs/315.png",text:"page 315"},{imageUrl:"./imgs/316.png",text:"page 316"},{imageUrl:"./imgs/317.png",text:"page 317"},{imageUrl:"./imgs/318.png",text:"page 318"},{imageUrl:"./imgs/319.png",text:"page 319"},{imageUrl:"./imgs/32.png",text:"page 32"},{imageUrl:"./imgs/320.png",text:"page 320"},{imageUrl:"./imgs/321.png",text:"page 321"},{imageUrl:"./imgs/322.png",text:"page 322"},{imageUrl:"./imgs/323.png",text:"page 323"},{imageUrl:"./imgs/324.png",text:"page 324"},{imageUrl:"./imgs/325.png",text:"page 325"},{imageUrl:"./imgs/326.png",text:"page 326"},{imageUrl:"./imgs/327.png",text:"page 327"},{imageUrl:"./imgs/328.png",text:"page 328"},{imageUrl:"./imgs/329.png",text:"page 329"},{imageUrl:"./imgs/33.png",text:"page 33"},{imageUrl:"./imgs/330.png",text:"page 330"},{imageUrl:"./imgs/331.png",text:"page 331"},{imageUrl:"./imgs/332.png",text:"page 332"},{imageUrl:"./imgs/333.png",text:"page 333"},{imageUrl:"./imgs/334.png",text:"page 334"},{imageUrl:"./imgs/335.png",text:"page 335"},{imageUrl:"./imgs/336.png",text:"page 336"},{imageUrl:"./imgs/337.png",text:"page 337"},{imageUrl:"./imgs/338.png",text:"page 338"},{imageUrl:"./imgs/339.png",text:"page 339"},{imageUrl:"./imgs/34.png",text:"page 34"},{imageUrl:"./imgs/340.png",text:"page 340"},{imageUrl:"./imgs/341.png",text:"page 341"},{imageUrl:"./imgs/342.png",text:"page 342"},{imageUrl:"./imgs/343.png",text:"page 343"},{imageUrl:"./imgs/344.png",text:"page 344"},{imageUrl:"./imgs/345.png",text:"page 345"},{imageUrl:"./imgs/346.png",text:"page 346"},{imageUrl:"./imgs/347.png",text:"page 347"},{imageUrl:"./imgs/348.png",text:"page 348"},{imageUrl:"./imgs/349.png",text:"page 349"},{imageUrl:"./imgs/35.png",text:"page 35"},{imageUrl:"./imgs/350.png",text:"page 350"},{imageUrl:"./imgs/351.png",text:"page 351"},{imageUrl:"./imgs/352.png",text:"page 352"},{imageUrl:"./imgs/353.png",text:"page 353"},{imageUrl:"./imgs/354.png",text:"page 354"},{imageUrl:"./imgs/355.png",text:"page 355"},{imageUrl:"./imgs/356.png",text:"page 356"},{imageUrl:"./imgs/357.png",text:"page 357"},{imageUrl:"./imgs/358.png",text:"page 358"},{imageUrl:"./imgs/359.png",text:"page 359"},{imageUrl:"./imgs/36.png",text:"page 36"},{imageUrl:"./imgs/360.png",text:"page 360"},{imageUrl:"./imgs/361.png",text:"page 361"},{imageUrl:"./imgs/362.png",text:"page 362"},{imageUrl:"./imgs/363.png",text:"page 363"},{imageUrl:"./imgs/364.png",text:"page 364"},{imageUrl:"./imgs/365.png",text:"page 365"},{imageUrl:"./imgs/366.png",text:"page 366"},{imageUrl:"./imgs/367.png",text:"page 367"},{imageUrl:"./imgs/368.png",text:"page 368"},{imageUrl:"./imgs/369.png",text:"page 369"},{imageUrl:"./imgs/37.png",text:"page 37"},{imageUrl:"./imgs/370.png",text:"page 370"},{imageUrl:"./imgs/371.png",text:"page 371"},{imageUrl:"./imgs/372.png",text:"page 372"},{imageUrl:"./imgs/373.png",text:"page 373"},{imageUrl:"./imgs/374.png",text:"page 374"},{imageUrl:"./imgs/375.png",text:"page 375"},{imageUrl:"./imgs/376.png",text:"page 376"},{imageUrl:"./imgs/377.png",text:"page 377"},{imageUrl:"./imgs/378.png",text:"page 378"},{imageUrl:"./imgs/379.png",text:"page 379"},{imageUrl:"./imgs/38.png",text:"page 38"},{imageUrl:"./imgs/380.png",text:"page 380"},{imageUrl:"./imgs/381.png",text:"page 381"},{imageUrl:"./imgs/382.png",text:"page 382"},{imageUrl:"./imgs/383.png",text:"page 383"},{imageUrl:"./imgs/384.png",text:"page 384"},{imageUrl:"./imgs/385.png",text:"page 385"},{imageUrl:"./imgs/386.png",text:"page 386"},{imageUrl:"./imgs/387.png",text:"page 387"},{imageUrl:"./imgs/388.png",text:"page 388"},{imageUrl:"./imgs/389.png",text:"page 389"},{imageUrl:"./imgs/39.png",text:"page 39"},{imageUrl:"./imgs/390.png",text:"page 390"},{imageUrl:"./imgs/391.png",text:"page 391"},{imageUrl:"./imgs/392.png",text:"page 392"},{imageUrl:"./imgs/393.png",text:"page 393"},{imageUrl:"./imgs/394.png",text:"page 394"},{imageUrl:"./imgs/395.png",text:"page 395"},{imageUrl:"./imgs/396.png",text:"page 396"},{imageUrl:"./imgs/397.png",text:"page 397"},{imageUrl:"./imgs/398.png",text:"page 398"},{imageUrl:"./imgs/399.png",text:"page 399"},{imageUrl:"./imgs/4.png",text:"page 4"},{imageUrl:"./imgs/40.png",text:"page 40"},{imageUrl:"./imgs/400.png",text:"page 400"},{imageUrl:"./imgs/401.png",text:"page 401"},{imageUrl:"./imgs/402.png",text:"page 402"},{imageUrl:"./imgs/403.png",text:"page 403"},{imageUrl:"./imgs/404.png",text:"page 404"},{imageUrl:"./imgs/405.png",text:"page 405"},{imageUrl:"./imgs/406.png",text:"page 406"},{imageUrl:"./imgs/407.png",text:"page 407"},{imageUrl:"./imgs/408.png",text:"page 408"},{imageUrl:"./imgs/409.png",text:"page 409"},{imageUrl:"./imgs/41.png",text:"page 41"},{imageUrl:"./imgs/410.png",text:"page 410"},{imageUrl:"./imgs/411.png",text:"page 411"},{imageUrl:"./imgs/412.png",text:"page 412"},{imageUrl:"./imgs/413.png",text:"page 413"},{imageUrl:"./imgs/414.png",text:"page 414"},{imageUrl:"./imgs/415.png",text:"page 415"},{imageUrl:"./imgs/416.png",text:"page 416"},{imageUrl:"./imgs/417.png",text:"page 417"},{imageUrl:"./imgs/418.png",text:"page 418"},{imageUrl:"./imgs/419.png",text:"page 419"},{imageUrl:"./imgs/42.png",text:"page 42"},{imageUrl:"./imgs/420.png",text:"page 420"},{imageUrl:"./imgs/421.png",text:"page 421"},{imageUrl:"./imgs/422.png",text:"page 422"},{imageUrl:"./imgs/423.png",text:"page 423"},{imageUrl:"./imgs/424.png",text:"page 424"},{imageUrl:"./imgs/425.png",text:"page 425"},{imageUrl:"./imgs/426.png",text:"page 426"},{imageUrl:"./imgs/427.png",text:"page 427"},{imageUrl:"./imgs/428.png",text:"page 428"},{imageUrl:"./imgs/429.png",text:"page 429"},{imageUrl:"./imgs/43.png",text:"page 43"},{imageUrl:"./imgs/430.png",text:"page 430"},{imageUrl:"./imgs/431.png",text:"page 431"},{imageUrl:"./imgs/432.png",text:"page 432"},{imageUrl:"./imgs/433.png",text:"page 433"},{imageUrl:"./imgs/434.png",text:"page 434"},{imageUrl:"./imgs/435.png",text:"page 435"},{imageUrl:"./imgs/436.png",text:"page 436"},{imageUrl:"./imgs/437.png",text:"page 437"},{imageUrl:"./imgs/438.png",text:"page 438"},{imageUrl:"./imgs/439.png",text:"page 439"},{imageUrl:"./imgs/44.png",text:"page 44"},{imageUrl:"./imgs/440.png",text:"page 440"},{imageUrl:"./imgs/441.png",text:"page 441"},{imageUrl:"./imgs/442.png",text:"page 442"},{imageUrl:"./imgs/443.png",text:"page 443"},{imageUrl:"./imgs/444.png",text:"page 444"},{imageUrl:"./imgs/445.png",text:"page 445"},{imageUrl:"./imgs/446.png",text:"page 446"},{imageUrl:"./imgs/447.png",text:"page 447"},{imageUrl:"./imgs/448.png",text:"page 448"},{imageUrl:"./imgs/449.png",text:"page 449"},{imageUrl:"./imgs/45.png",text:"page 45"},{imageUrl:"./imgs/450.png",text:"page 450"},{imageUrl:"./imgs/451.png",text:"page 451"},{imageUrl:"./imgs/452.png",text:"page 452"},{imageUrl:"./imgs/453.png",text:"page 453"},{imageUrl:"./imgs/454.png",text:"page 454"},{imageUrl:"./imgs/455.png",text:"page 455"},{imageUrl:"./imgs/456.png",text:"page 456"},{imageUrl:"./imgs/457.png",text:"page 457"},{imageUrl:"./imgs/458.png",text:"page 458"},{imageUrl:"./imgs/459.png",text:"page 459"},{imageUrl:"./imgs/46.png",text:"page 46"},{imageUrl:"./imgs/460.png",text:"page 460"},{imageUrl:"./imgs/461.png",text:"page 461"},{imageUrl:"./imgs/462.png",text:"page 462"},{imageUrl:"./imgs/463.png",text:"page 463"},{imageUrl:"./imgs/464.png",text:"page 464"},{imageUrl:"./imgs/465.png",text:"page 465"},{imageUrl:"./imgs/466.png",text:"page 466"},{imageUrl:"./imgs/467.png",text:"page 467"},{imageUrl:"./imgs/468.png",text:"page 468"},{imageUrl:"./imgs/469.png",text:"page 469"},{imageUrl:"./imgs/47.png",text:"page 47"},{imageUrl:"./imgs/470.png",text:"page 470"},{imageUrl:"./imgs/471.png",text:"page 471"},{imageUrl:"./imgs/472.png",text:"page 472"},{imageUrl:"./imgs/473.png",text:"page 473"},{imageUrl:"./imgs/474.png",text:"page 474"},{imageUrl:"./imgs/475.png",text:"page 475"},{imageUrl:"./imgs/476.png",text:"page 476"},{imageUrl:"./imgs/477.png",text:"page 477"},{imageUrl:"./imgs/478.png",text:"page 478"},{imageUrl:"./imgs/479.png",text:"page 479"},{imageUrl:"./imgs/48.png",text:"page 48"},{imageUrl:"./imgs/480.png",text:"page 480"},{imageUrl:"./imgs/481.png",text:"page 481"},{imageUrl:"./imgs/482.png",text:"page 482"},{imageUrl:"./imgs/483.png",text:"page 483"},{imageUrl:"./imgs/484.png",text:"page 484"},{imageUrl:"./imgs/485.png",text:"page 485"},{imageUrl:"./imgs/486.png",text:"page 486"},{imageUrl:"./imgs/487.png",text:"page 487"},{imageUrl:"./imgs/488.png",text:"page 488"},{imageUrl:"./imgs/489.png",text:"page 489"},{imageUrl:"./imgs/49.png",text:"page 49"},{imageUrl:"./imgs/490.png",text:"page 490"},{imageUrl:"./imgs/491.png",text:"page 491"},{imageUrl:"./imgs/492.png",text:"page 492"},{imageUrl:"./imgs/493.png",text:"page 493"},{imageUrl:"./imgs/494.png",text:"page 494"},{imageUrl:"./imgs/495.png",text:"page 495"},{imageUrl:"./imgs/496.png",text:"page 496"},{imageUrl:"./imgs/497.png",text:"page 497"},{imageUrl:"./imgs/498.png",text:"page 498"},{imageUrl:"./imgs/499.png",text:"page 499"},{imageUrl:"./imgs/5.png",text:"page 5"},{imageUrl:"./imgs/50.png",text:"page 50"},{imageUrl:"./imgs/500.png",text:"page 500"},{imageUrl:"./imgs/501.png",text:"page 501"},{imageUrl:"./imgs/502.png",text:"page 502"},{imageUrl:"./imgs/503.png",text:"page 503"},{imageUrl:"./imgs/504.png",text:"page 504"},{imageUrl:"./imgs/505.png",text:"page 505"},{imageUrl:"./imgs/506.png",text:"page 506"},{imageUrl:"./imgs/507.png",text:"page 507"},{imageUrl:"./imgs/508.png",text:"page 508"},{imageUrl:"./imgs/509.png",text:"page 509"},{imageUrl:"./imgs/51.png",text:"page 51"},{imageUrl:"./imgs/510.png",text:"page 510"},{imageUrl:"./imgs/511.png",text:"page 511"},{imageUrl:"./imgs/512.png",text:"page 512"},{imageUrl:"./imgs/513.png",text:"page 513"},{imageUrl:"./imgs/514.png",text:"page 514"},{imageUrl:"./imgs/515.png",text:"page 515"},{imageUrl:"./imgs/516.png",text:"page 516"},{imageUrl:"./imgs/517.png",text:"page 517"},{imageUrl:"./imgs/518.png",text:"page 518"},{imageUrl:"./imgs/519.png",text:"page 519"},{imageUrl:"./imgs/52.png",text:"page 52"},{imageUrl:"./imgs/520.png",text:"page 520"},{imageUrl:"./imgs/521.png",text:"page 521"},{imageUrl:"./imgs/522.png",text:"page 522"},{imageUrl:"./imgs/523.png",text:"page 523"},{imageUrl:"./imgs/524.png",text:"page 524"},{imageUrl:"./imgs/525.png",text:"page 525"},{imageUrl:"./imgs/526.png",text:"page 526"},{imageUrl:"./imgs/527.png",text:"page 527"},{imageUrl:"./imgs/528.png",text:"page 528"},{imageUrl:"./imgs/529.png",text:"page 529"},{imageUrl:"./imgs/53.png",text:"page 53"},{imageUrl:"./imgs/530.png",text:"page 530"},{imageUrl:"./imgs/531.png",text:"page 531"},{imageUrl:"./imgs/532.png",text:"page 532"},{imageUrl:"./imgs/533.png",text:"page 533"},{imageUrl:"./imgs/534.png",text:"page 534"},{imageUrl:"./imgs/535.png",text:"page 535"},{imageUrl:"./imgs/536.png",text:"page 536"},{imageUrl:"./imgs/537.png",text:"page 537"},{imageUrl:"./imgs/538.png",text:"page 538"},{imageUrl:"./imgs/539.png",text:"page 539"},{imageUrl:"./imgs/54.png",text:"page 54"},{imageUrl:"./imgs/540.png",text:"page 540"},{imageUrl:"./imgs/541.png",text:"page 541"},{imageUrl:"./imgs/542.png",text:"page 542"},{imageUrl:"./imgs/543.png",text:"page 543"},{imageUrl:"./imgs/544.png",text:"page 544"},{imageUrl:"./imgs/545.png",text:"page 545"},{imageUrl:"./imgs/546.png",text:"page 546"},{imageUrl:"./imgs/547.png",text:"page 547"},{imageUrl:"./imgs/548.png",text:"page 548"},{imageUrl:"./imgs/549.png",text:"page 549"},{imageUrl:"./imgs/55.png",text:"page 55"},{imageUrl:"./imgs/550.png",text:"page 550"},{imageUrl:"./imgs/551.png",text:"page 551"},{imageUrl:"./imgs/552.png",text:"page 552"},{imageUrl:"./imgs/553.png",text:"page 553"},{imageUrl:"./imgs/554.png",text:"page 554"},{imageUrl:"./imgs/555.png",text:"page 555"},{imageUrl:"./imgs/556.png",text:"page 556"},{imageUrl:"./imgs/557.png",text:"page 557"},{imageUrl:"./imgs/558.png",text:"page 558"},{imageUrl:"./imgs/559.png",text:"page 559"},{imageUrl:"./imgs/56.png",text:"page 56"},{imageUrl:"./imgs/560.png",text:"page 560"},{imageUrl:"./imgs/561.png",text:"page 561"},{imageUrl:"./imgs/562.png",text:"page 562"},{imageUrl:"./imgs/563.png",text:"page 563"},{imageUrl:"./imgs/564.png",text:"page 564"},{imageUrl:"./imgs/565.png",text:"page 565"},{imageUrl:"./imgs/566.png",text:"page 566"},{imageUrl:"./imgs/567.png",text:"page 567"},{imageUrl:"./imgs/568.png",text:"page 568"},{imageUrl:"./imgs/569.png",text:"page 569"},{imageUrl:"./imgs/57.png",text:"page 57"},{imageUrl:"./imgs/570.png",text:"page 570"},{imageUrl:"./imgs/571.png",text:"page 571"},{imageUrl:"./imgs/572.png",text:"page 572"},{imageUrl:"./imgs/573.png",text:"page 573"},{imageUrl:"./imgs/574.png",text:"page 574"},{imageUrl:"./imgs/575.png",text:"page 575"},{imageUrl:"./imgs/576.png",text:"page 576"},{imageUrl:"./imgs/577.png",text:"page 577"},{imageUrl:"./imgs/578.png",text:"page 578"},{imageUrl:"./imgs/579.png",text:"page 579"},{imageUrl:"./imgs/58.png",text:"page 58"},{imageUrl:"./imgs/580.png",text:"page 580"},{imageUrl:"./imgs/581.png",text:"page 581"},{imageUrl:"./imgs/582.png",text:"page 582"},{imageUrl:"./imgs/583.png",text:"page 583"},{imageUrl:"./imgs/584.png",text:"page 584"},{imageUrl:"./imgs/585.png",text:"page 585"},{imageUrl:"./imgs/586.png",text:"page 586"},{imageUrl:"./imgs/587.png",text:"page 587"},{imageUrl:"./imgs/588.png",text:"page 588"},{imageUrl:"./imgs/589.png",text:"page 589"},{imageUrl:"./imgs/59.png",text:"page 59"},{imageUrl:"./imgs/590.png",text:"page 590"},{imageUrl:"./imgs/591.png",text:"page 591"},{imageUrl:"./imgs/592.png",text:"page 592"},{imageUrl:"./imgs/593.png",text:"page 593"},{imageUrl:"./imgs/594.png",text:"page 594"},{imageUrl:"./imgs/595.png",text:"page 595"},{imageUrl:"./imgs/596.png",text:"page 596"},{imageUrl:"./imgs/597.png",text:"page 597"},{imageUrl:"./imgs/598.png",text:"page 598"},{imageUrl:"./imgs/599.png",text:"page 599"},{imageUrl:"./imgs/6.png",text:"page 6"},{imageUrl:"./imgs/60.png",text:"page 60"},{imageUrl:"./imgs/600.png",text:"page 600"},{imageUrl:"./imgs/601.png",text:"page 601"},{imageUrl:"./imgs/602.png",text:"page 602"},{imageUrl:"./imgs/603.png",text:"page 603"},{imageUrl:"./imgs/604.png",text:"page 604"},{imageUrl:"./imgs/605.png",text:"page 605"},{imageUrl:"./imgs/606.png",text:"page 606"},{imageUrl:"./imgs/607.png",text:"page 607"},{imageUrl:"./imgs/608.png",text:"page 608"},{imageUrl:"./imgs/609.png",text:"page 609"},{imageUrl:"./imgs/61.png",text:"page 61"},{imageUrl:"./imgs/610.png",text:"page 610"},{imageUrl:"./imgs/611.png",text:"page 611"},{imageUrl:"./imgs/62.png",text:"page 62"},{imageUrl:"./imgs/63.png",text:"page 63"},{imageUrl:"./imgs/64.png",text:"page 64"},{imageUrl:"./imgs/65.png",text:"page 65"},{imageUrl:"./imgs/66.png",text:"page 66"},{imageUrl:"./imgs/67.png",text:"page 67"},{imageUrl:"./imgs/68.png",text:"page 68"},{imageUrl:"./imgs/69.png",text:"page 69"},{imageUrl:"./imgs/7.png",text:"page 7"},{imageUrl:"./imgs/70.png",text:"page 70"},{imageUrl:"./imgs/71.png",text:"page 71"},{imageUrl:"./imgs/72.png",text:"page 72"},{imageUrl:"./imgs/73.png",text:"page 73"},{imageUrl:"./imgs/74.png",text:"page 74"},{imageUrl:"./imgs/75.png",text:"page 75"},{imageUrl:"./imgs/76.png",text:"page 76"},{imageUrl:"./imgs/77.png",text:"page 77"},{imageUrl:"./imgs/78.png",text:"page 78"},{imageUrl:"./imgs/79.png",text:"page 79"},{imageUrl:"./imgs/8.png",text:"page 8"},{imageUrl:"./imgs/80.png",text:"page 80"},{imageUrl:"./imgs/81.png",text:"page 81"},{imageUrl:"./imgs/82.png",text:"page 82"},{imageUrl:"./imgs/83.png",text:"page 83"},{imageUrl:"./imgs/84.png",text:"page 84"},{imageUrl:"./imgs/85.png",text:"page 85"},{imageUrl:"./imgs/86.png",text:"page 86"},{imageUrl:"./imgs/87.png",text:"page 87"},{imageUrl:"./imgs/88.png",text:"page 88"},{imageUrl:"./imgs/89.png",text:"page 89"},{imageUrl:"./imgs/9.png",text:"page 9"},{imageUrl:"./imgs/90.png",text:"page 90"},{imageUrl:"./imgs/91.png",text:"page 91"},{imageUrl:"./imgs/92.png",text:"page 92"},{imageUrl:"./imgs/93.png",text:"page 93"},{imageUrl:"./imgs/94.png",text:"page 94"},{imageUrl:"./imgs/95.png",text:"page 95"},{imageUrl:"./imgs/96.png",text:"page 96"},{imageUrl:"./imgs/97.png",text:"page 97"},{imageUrl:"./imgs/98.png",text:"page 98"},{imageUrl:"./imgs/99.png",text:"page 99"}].sort(((g,e)=>parseInt(g.imageUrl.match(/(\d+)/)[0],10)-parseInt(e.imageUrl.match(/(\d+)/)[0],10)))}}}));
