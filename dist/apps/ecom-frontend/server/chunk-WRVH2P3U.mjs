import './polyfills.server.mjs';
import{B as L1,E as M1,F as p1,H as C1,I as u1,J as d1,M as h1,S as x1,T as g1,a as C2,b as Z2,c as G,d as j,e as c1,f as l1,g as c2,h as s1,i as a1,j as e1,k as v,l as n1,m as o1,n as i1,o as l2,p as s2,q as t1,r as f1,s as r1,t as z1,u as a2,v as V,w as m1}from"./chunk-STWZOYBA.mjs";function _3(c,l,s){return(l=j3(l))in c?Object.defineProperty(c,l,{value:s,enumerable:!0,configurable:!0,writable:!0}):c[l]=s,c}function N1(c,l){var s=Object.keys(c);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(c);l&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(c,e).enumerable})),s.push.apply(s,a)}return s}function i(c){for(var l=1;l<arguments.length;l++){var s=arguments[l]!=null?arguments[l]:{};l%2?N1(Object(s),!0).forEach(function(a){_3(c,a,s[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(s)):N1(Object(s)).forEach(function(a){Object.defineProperty(c,a,Object.getOwnPropertyDescriptor(s,a))})}return c}function G3(c,l){if(typeof c!="object"||!c)return c;var s=c[Symbol.toPrimitive];if(s!==void 0){var a=s.call(c,l||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(l==="string"?String:Number)(c)}function j3(c){var l=G3(c,"string");return typeof l=="symbol"?l:l+""}var b1=()=>{},O2={},$1={},K1=null,Q1={mark:b1,measure:b1};try{typeof window<"u"&&(O2=window),typeof document<"u"&&($1=document),typeof MutationObserver<"u"&&(K1=MutationObserver),typeof performance<"u"&&(Q1=performance)}catch{}var{userAgent:S1=""}=O2.navigator||{},F=O2,p=$1,w1=K1,e2=Q1,n6=!!F.document,k=!!p.documentElement&&!!p.head&&typeof p.addEventListener=="function"&&typeof p.createElement=="function",J1=~S1.indexOf("MSIE")||~S1.indexOf("Trident/"),V3=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Y3=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Z1={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},X3={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},c3=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],C="classic",r2="duotone",$3="sharp",K3="sharp-duotone",l3=[C,r2,$3,K3],Q3={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},J3={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},Z3=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),c4={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},l4=["fak","fa-kit","fakd","fa-kit-duotone"],y1={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},s4=["kit"],a4={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},e4=["fak","fakd"],n4={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},k1={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},n2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},o4=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],i4=["fak","fa-kit","fakd","fa-kit-duotone"],t4={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},f4={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},r4={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},N2={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},z4=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],b2=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...o4,...z4],m4=["solid","regular","light","thin","duotone","brands"],s3=[1,2,3,4,5,6,7,8,9,10],L4=s3.concat([11,12,13,14,15,16,17,18,19,20]),M4=[...Object.keys(r4),...m4,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",n2.GROUP,n2.SWAP_OPACITY,n2.PRIMARY,n2.SECONDARY].concat(s3.map(c=>"".concat(c,"x"))).concat(L4.map(c=>"w-".concat(c))),p4={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},w="___FONT_AWESOME___",S2=16,a3="fa",e3="svg-inline--fa",E="data-fa-i2svg",w2="data-fa-pseudo-element",C4="data-fa-pseudo-element-pending",U2="data-prefix",q2="data-icon",A1="fontawesome-i2svg",u4="async",d4=["HTML","HEAD","STYLE","SCRIPT"],n3=(()=>{try{return process.env.NODE_ENV==="production"}catch{return!1}})();function J(c){return new Proxy(c,{get(l,s){return s in l?l[s]:l[C]}})}var o3=i({},Z1);o3[C]=i(i(i(i({},{"fa-duotone":"duotone"}),Z1[C]),y1.kit),y1["kit-duotone"]);var h4=J(o3),y2=i({},c4);y2[C]=i(i(i(i({},{duotone:"fad"}),y2[C]),k1.kit),k1["kit-duotone"]);var v1=J(y2),k2=i({},N2);k2[C]=i(i({},k2[C]),n4.kit);var W2=J(k2),A2=i({},f4);A2[C]=i(i({},A2[C]),a4.kit);var o6=J(A2),x4=V3,i3="fa-layers-text",g4=Y3,N4=i({},Q3),i6=J(N4),b4=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],u2=X3,S4=[...s4,...M4],X=F.FontAwesomeConfig||{};function w4(c){var l=p.querySelector("script["+c+"]");if(l)return l.getAttribute(c)}function y4(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}p&&typeof p.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(l=>{let[s,a]=l,e=y4(w4(s));e!=null&&(X[a]=e)});var t3={styleDefault:"solid",familyDefault:C,cssPrefix:a3,replacementClass:e3,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};X.familyPrefix&&(X.cssPrefix=X.familyPrefix);var W=i(i({},t3),X);W.autoReplaceSvg||(W.observeMutations=!1);var f={};Object.keys(t3).forEach(c=>{Object.defineProperty(f,c,{enumerable:!0,set:function(l){W[c]=l,$.forEach(s=>s(f))},get:function(){return W[c]}})});Object.defineProperty(f,"familyPrefix",{enumerable:!0,set:function(c){W.cssPrefix=c,$.forEach(l=>l(f))},get:function(){return W.cssPrefix}});F.FontAwesomeConfig=f;var $=[];function k4(c){return $.push(c),()=>{$.splice($.indexOf(c),1)}}var P=S2,N={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function A4(c){if(!c||!k)return;let l=p.createElement("style");l.setAttribute("type","text/css"),l.innerHTML=c;let s=p.head.childNodes,a=null;for(let e=s.length-1;e>-1;e--){let n=s[e],o=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=n)}return p.head.insertBefore(l,a),c}var v4="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function K(){let c=12,l="";for(;c-- >0;)l+=v4[Math.random()*62|0];return l}function _(c){let l=[];for(let s=(c||[]).length>>>0;s--;)l[s]=c[s];return l}function _2(c){return c.classList?_(c.classList):(c.getAttribute("class")||"").split(" ").filter(l=>l)}function f3(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function P4(c){return Object.keys(c||{}).reduce((l,s)=>l+"".concat(s,'="').concat(f3(c[s]),'" '),"").trim()}function z2(c){return Object.keys(c||{}).reduce((l,s)=>l+"".concat(s,": ").concat(c[s].trim(),";"),"")}function G2(c){return c.size!==N.size||c.x!==N.x||c.y!==N.y||c.rotate!==N.rotate||c.flipX||c.flipY}function F4(c){let{transform:l,containerWidth:s,iconWidth:a}=c,e={transform:"translate(".concat(s/2," 256)")},n="translate(".concat(l.x*32,", ").concat(l.y*32,") "),o="scale(".concat(l.size/16*(l.flipX?-1:1),", ").concat(l.size/16*(l.flipY?-1:1),") "),t="rotate(".concat(l.rotate," 0 0)"),z={transform:"".concat(n," ").concat(o," ").concat(t)},r={transform:"translate(".concat(a/2*-1," -256)")};return{outer:e,inner:z,path:r}}function T4(c){let{transform:l,width:s=S2,height:a=S2,startCentered:e=!1}=c,n="";return e&&J1?n+="translate(".concat(l.x/P-s/2,"em, ").concat(l.y/P-a/2,"em) "):e?n+="translate(calc(-50% + ".concat(l.x/P,"em), calc(-50% + ").concat(l.y/P,"em)) "):n+="translate(".concat(l.x/P,"em, ").concat(l.y/P,"em) "),n+="scale(".concat(l.size/P*(l.flipX?-1:1),", ").concat(l.size/P*(l.flipY?-1:1),") "),n+="rotate(".concat(l.rotate,"deg) "),n}var D4=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function r3(){let c=a3,l=e3,s=f.cssPrefix,a=f.replacementClass,e=D4;if(s!==c||a!==l){let n=new RegExp("\\.".concat(c,"\\-"),"g"),o=new RegExp("\\--".concat(c,"\\-"),"g"),t=new RegExp("\\.".concat(l),"g");e=e.replace(n,".".concat(s,"-")).replace(o,"--".concat(s,"-")).replace(t,".".concat(a))}return e}var P1=!1;function d2(){f.autoAddCss&&!P1&&(A4(r3()),P1=!0)}var B4={mixout(){return{dom:{css:r3,insertCss:d2}}},hooks(){return{beforeDOMElementCreation(){d2()},beforeI2svg(){d2()}}}},y=F||{};y[w]||(y[w]={});y[w].styles||(y[w].styles={});y[w].hooks||(y[w].hooks={});y[w].shims||(y[w].shims=[]);var b=y[w],z3=[],m3=function(){p.removeEventListener("DOMContentLoaded",m3),t2=1,z3.map(c=>c())},t2=!1;k&&(t2=(p.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(p.readyState),t2||p.addEventListener("DOMContentLoaded",m3));function R4(c){k&&(t2?setTimeout(c,0):z3.push(c))}function Z(c){let{tag:l,attributes:s={},children:a=[]}=c;return typeof c=="string"?f3(c):"<".concat(l," ").concat(P4(s),">").concat(a.map(Z).join(""),"</").concat(l,">")}function F1(c,l,s){if(c&&c[l]&&c[l][s])return{prefix:l,iconName:s,icon:c[l][s]}}var E4=function(l,s){return function(a,e,n,o){return l.call(s,a,e,n,o)}},h2=function(l,s,a,e){var n=Object.keys(l),o=n.length,t=e!==void 0?E4(s,e):s,z,r,m;for(a===void 0?(z=1,m=l[n[0]]):(z=0,m=a);z<o;z++)r=n[z],m=t(m,l[r],r,l);return m};function H4(c){let l=[],s=0,a=c.length;for(;s<a;){let e=c.charCodeAt(s++);if(e>=55296&&e<=56319&&s<a){let n=c.charCodeAt(s++);(n&64512)==56320?l.push(((e&1023)<<10)+(n&1023)+65536):(l.push(e),s--)}else l.push(e)}return l}function v2(c){let l=H4(c);return l.length===1?l[0].toString(16):null}function I4(c,l){let s=c.length,a=c.charCodeAt(l),e;return a>=55296&&a<=56319&&s>l+1&&(e=c.charCodeAt(l+1),e>=56320&&e<=57343)?(a-55296)*1024+e-56320+65536:a}function T1(c){return Object.keys(c).reduce((l,s)=>{let a=c[s];return!!a.icon?l[a.iconName]=a.icon:l[s]=a,l},{})}function P2(c,l){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},{skipHooks:a=!1}=s,e=T1(l);typeof b.hooks.addPack=="function"&&!a?b.hooks.addPack(c,T1(l)):b.styles[c]=i(i({},b.styles[c]||{}),e),c==="fas"&&P2("fa",l)}var{styles:Q,shims:O4}=b,L3=Object.keys(W2),U4=L3.reduce((c,l)=>(c[l]=Object.keys(W2[l]),c),{}),j2=null,M3={},p3={},C3={},u3={},d3={};function q4(c){return~S4.indexOf(c)}function W4(c,l){let s=l.split("-"),a=s[0],e=s.slice(1).join("-");return a===c&&e!==""&&!q4(e)?e:null}var h3=()=>{let c=a=>h2(Q,(e,n,o)=>(e[o]=h2(n,a,{}),e),{});M3=c((a,e,n)=>(e[3]&&(a[e[3]]=n),e[2]&&e[2].filter(t=>typeof t=="number").forEach(t=>{a[t.toString(16)]=n}),a)),p3=c((a,e,n)=>(a[n]=n,e[2]&&e[2].filter(t=>typeof t=="string").forEach(t=>{a[t]=n}),a)),d3=c((a,e,n)=>{let o=e[2];return a[n]=n,o.forEach(t=>{a[t]=n}),a});let l="far"in Q||f.autoFetchSvg,s=h2(O4,(a,e)=>{let n=e[0],o=e[1],t=e[2];return o==="far"&&!l&&(o="fas"),typeof n=="string"&&(a.names[n]={prefix:o,iconName:t}),typeof n=="number"&&(a.unicodes[n.toString(16)]={prefix:o,iconName:t}),a},{names:{},unicodes:{}});C3=s.names,u3=s.unicodes,j2=m2(f.styleDefault,{family:f.familyDefault})};k4(c=>{j2=m2(c.styleDefault,{family:f.familyDefault})});h3();function V2(c,l){return(M3[c]||{})[l]}function _4(c,l){return(p3[c]||{})[l]}function R(c,l){return(d3[c]||{})[l]}function x3(c){return C3[c]||{prefix:null,iconName:null}}function G4(c){let l=u3[c],s=V2("fas",c);return l||(s?{prefix:"fas",iconName:s}:null)||{prefix:null,iconName:null}}function T(){return j2}var g3=()=>({prefix:null,iconName:null,rest:[]});function j4(c){let l=C,s=L3.reduce((a,e)=>(a[e]="".concat(f.cssPrefix,"-").concat(e),a),{});return l3.forEach(a=>{(c.includes(s[a])||c.some(e=>U4[a].includes(e)))&&(l=a)}),l}function m2(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{family:s=C}=l,a=h4[s][c];if(s===r2&&!c)return"fad";let e=v1[s][c]||v1[s][a],n=c in b.styles?c:null;return e||n||null}function V4(c){let l=[],s=null;return c.forEach(a=>{let e=W4(f.cssPrefix,a);e?s=e:a&&l.push(a)}),{iconName:s,rest:l}}function D1(c){return c.sort().filter((l,s,a)=>a.indexOf(l)===s)}function L2(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{skipLookups:s=!1}=l,a=null,e=b2.concat(i4),n=D1(c.filter(M=>e.includes(M))),o=D1(c.filter(M=>!b2.includes(M))),t=n.filter(M=>(a=M,!c3.includes(M))),[z=null]=t,r=j4(n),m=i(i({},V4(o)),{},{prefix:m2(z,{family:r})});return i(i(i({},m),K4({values:c,family:r,styles:Q,config:f,canonical:m,givenPrefix:a})),Y4(s,a,m))}function Y4(c,l,s){let{prefix:a,iconName:e}=s;if(c||!a||!e)return{prefix:a,iconName:e};let n=l==="fa"?x3(e):{},o=R(a,e);return e=n.iconName||o||e,a=n.prefix||a,a==="far"&&!Q.far&&Q.fas&&!f.autoFetchSvg&&(a="fas"),{prefix:a,iconName:e}}var X4=l3.filter(c=>c!==C||c!==r2),$4=Object.keys(N2).filter(c=>c!==C).map(c=>Object.keys(N2[c])).flat();function K4(c){let{values:l,family:s,canonical:a,givenPrefix:e="",styles:n={},config:o={}}=c,t=s===r2,z=l.includes("fa-duotone")||l.includes("fad"),r=o.familyDefault==="duotone",m=a.prefix==="fad"||a.prefix==="fa-duotone";if(!t&&(z||r||m)&&(a.prefix="fad"),(l.includes("fa-brands")||l.includes("fab"))&&(a.prefix="fab"),!a.prefix&&X4.includes(s)&&(Object.keys(n).find(L=>$4.includes(L))||o.autoFetchSvg)){let L=Z3.get(s).defaultShortPrefixId;a.prefix=L,a.iconName=R(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||e==="fa")&&(a.prefix=T()||"fas"),a}var F2=class{constructor(){this.definitions={}}add(){for(var l=arguments.length,s=new Array(l),a=0;a<l;a++)s[a]=arguments[a];let e=s.reduce(this._pullDefinitions,{});Object.keys(e).forEach(n=>{this.definitions[n]=i(i({},this.definitions[n]||{}),e[n]),P2(n,e[n]);let o=W2[C][n];o&&P2(o,e[n]),h3()})}reset(){this.definitions={}}_pullDefinitions(l,s){let a=s.prefix&&s.iconName&&s.icon?{0:s}:s;return Object.keys(a).map(e=>{let{prefix:n,iconName:o,icon:t}=a[e],z=t[2];l[n]||(l[n]={}),z.length>0&&z.forEach(r=>{typeof r=="string"&&(l[n][r]=t)}),l[n][o]=t}),l}},B1=[],U={},q={},Q4=Object.keys(q);function J4(c,l){let{mixoutsTo:s}=l;return B1=c,U={},Object.keys(q).forEach(a=>{Q4.indexOf(a)===-1&&delete q[a]}),B1.forEach(a=>{let e=a.mixout?a.mixout():{};if(Object.keys(e).forEach(n=>{typeof e[n]=="function"&&(s[n]=e[n]),typeof e[n]=="object"&&Object.keys(e[n]).forEach(o=>{s[n]||(s[n]={}),s[n][o]=e[n][o]})}),a.hooks){let n=a.hooks();Object.keys(n).forEach(o=>{U[o]||(U[o]=[]),U[o].push(n[o])})}a.provides&&a.provides(q)}),s}function T2(c,l){for(var s=arguments.length,a=new Array(s>2?s-2:0),e=2;e<s;e++)a[e-2]=arguments[e];return(U[c]||[]).forEach(o=>{l=o.apply(null,[l,...a])}),l}function H(c){for(var l=arguments.length,s=new Array(l>1?l-1:0),a=1;a<l;a++)s[a-1]=arguments[a];(U[c]||[]).forEach(n=>{n.apply(null,s)})}function D(){let c=arguments[0],l=Array.prototype.slice.call(arguments,1);return q[c]?q[c].apply(null,l):void 0}function D2(c){c.prefix==="fa"&&(c.prefix="fas");let{iconName:l}=c,s=c.prefix||T();if(l)return l=R(s,l)||l,F1(N3.definitions,s,l)||F1(b.styles,s,l)}var N3=new F2,Z4=()=>{f.autoReplaceSvg=!1,f.observeMutations=!1,H("noAuto")},c0={i2svg:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return k?(H("beforeI2svg",c),D("pseudoElements2svg",c),D("i2svg",c)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:l}=c;f.autoReplaceSvg===!1&&(f.autoReplaceSvg=!0),f.observeMutations=!0,R4(()=>{s0({autoReplaceSvgRoot:l}),H("watch",c)})}},l0={icon:c=>{if(c===null)return null;if(typeof c=="object"&&c.prefix&&c.iconName)return{prefix:c.prefix,iconName:R(c.prefix,c.iconName)||c.iconName};if(Array.isArray(c)&&c.length===2){let l=c[1].indexOf("fa-")===0?c[1].slice(3):c[1],s=m2(c[0]);return{prefix:s,iconName:R(s,l)||l}}if(typeof c=="string"&&(c.indexOf("".concat(f.cssPrefix,"-"))>-1||c.match(x4))){let l=L2(c.split(" "),{skipLookups:!0});return{prefix:l.prefix||T(),iconName:R(l.prefix,l.iconName)||l.iconName}}if(typeof c=="string"){let l=T();return{prefix:l,iconName:R(l,c)||c}}}},h={noAuto:Z4,config:f,dom:c0,parse:l0,library:N3,findIconDefinition:D2,toHtml:Z},s0=function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:l=p}=c;(Object.keys(b.styles).length>0||f.autoFetchSvg)&&k&&f.autoReplaceSvg&&h.dom.i2svg({node:l})};function M2(c,l){return Object.defineProperty(c,"abstract",{get:l}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(s=>Z(s))}}),Object.defineProperty(c,"node",{get:function(){if(!k)return;let s=p.createElement("div");return s.innerHTML=c.html,s.children}}),c}function a0(c){let{children:l,main:s,mask:a,attributes:e,styles:n,transform:o}=c;if(G2(o)&&s.found&&!a.found){let{width:t,height:z}=s,r={x:t/z/2,y:.5};e.style=z2(i(i({},n),{},{"transform-origin":"".concat(r.x+o.x/16,"em ").concat(r.y+o.y/16,"em")}))}return[{tag:"svg",attributes:e,children:l}]}function e0(c){let{prefix:l,iconName:s,children:a,attributes:e,symbol:n}=c,o=n===!0?"".concat(l,"-").concat(f.cssPrefix,"-").concat(s):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:i(i({},e),{},{id:o}),children:a}]}]}function Y2(c){let{icons:{main:l,mask:s},prefix:a,iconName:e,transform:n,symbol:o,title:t,maskId:z,titleId:r,extra:m,watchable:M=!1}=c,{width:L,height:u}=s.found?s:l,A=e4.includes(a),B=[f.replacementClass,e?"".concat(f.cssPrefix,"-").concat(e):""].filter(O=>m.classes.indexOf(O)===-1).filter(O=>O!==""||!!O).concat(m.classes).join(" "),x={children:[],attributes:i(i({},m.attributes),{},{"data-prefix":a,"data-icon":e,class:B,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(L," ").concat(u)})},S=A&&!~m.classes.indexOf("fa-fw")?{width:"".concat(L/u*16*.0625,"em")}:{};M&&(x.attributes[E]=""),t&&(x.children.push({tag:"title",attributes:{id:x.attributes["aria-labelledby"]||"title-".concat(r||K())},children:[t]}),delete x.attributes.title);let d=i(i({},x),{},{prefix:a,iconName:e,main:l,mask:s,maskId:z,transform:n,symbol:o,styles:i(i({},S),m.styles)}),{children:g,attributes:I}=s.found&&l.found?D("generateAbstractMask",d)||{children:[],attributes:{}}:D("generateAbstractIcon",d)||{children:[],attributes:{}};return d.children=g,d.attributes=I,o?e0(d):a0(d)}function R1(c){let{content:l,width:s,height:a,transform:e,title:n,extra:o,watchable:t=!1}=c,z=i(i(i({},o.attributes),n?{title:n}:{}),{},{class:o.classes.join(" ")});t&&(z[E]="");let r=i({},o.styles);G2(e)&&(r.transform=T4({transform:e,startCentered:!0,width:s,height:a}),r["-webkit-transform"]=r.transform);let m=z2(r);m.length>0&&(z.style=m);let M=[];return M.push({tag:"span",attributes:z,children:[l]}),n&&M.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),M}function n0(c){let{content:l,title:s,extra:a}=c,e=i(i(i({},a.attributes),s?{title:s}:{}),{},{class:a.classes.join(" ")}),n=z2(a.styles);n.length>0&&(e.style=n);let o=[];return o.push({tag:"span",attributes:e,children:[l]}),s&&o.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),o}var{styles:x2}=b;function B2(c){let l=c[0],s=c[1],[a]=c.slice(4),e=null;return Array.isArray(a)?e={tag:"g",attributes:{class:"".concat(f.cssPrefix,"-").concat(u2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(f.cssPrefix,"-").concat(u2.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(f.cssPrefix,"-").concat(u2.PRIMARY),fill:"currentColor",d:a[1]}}]}:e={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:l,height:s,icon:e}}var o0={found:!1,width:512,height:512};function i0(c,l){!n3&&!f.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(l,'" is missing.'))}function R2(c,l){let s=l;return l==="fa"&&f.styleDefault!==null&&(l=T()),new Promise((a,e)=>{if(s==="fa"){let n=x3(c)||{};c=n.iconName||c,l=n.prefix||l}if(c&&l&&x2[l]&&x2[l][c]){let n=x2[l][c];return a(B2(n))}i0(c,l),a(i(i({},o0),{},{icon:f.showMissingIcons&&c?D("missingIconAbstract")||{}:{}}))})}var E1=()=>{},E2=f.measurePerformance&&e2&&e2.mark&&e2.measure?e2:{mark:E1,measure:E1},Y='FA "6.7.2"',t0=c=>(E2.mark("".concat(Y," ").concat(c," begins")),()=>b3(c)),b3=c=>{E2.mark("".concat(Y," ").concat(c," ends")),E2.measure("".concat(Y," ").concat(c),"".concat(Y," ").concat(c," begins"),"".concat(Y," ").concat(c," ends"))},X2={begin:t0,end:b3},o2=()=>{};function H1(c){return typeof(c.getAttribute?c.getAttribute(E):null)=="string"}function f0(c){let l=c.getAttribute?c.getAttribute(U2):null,s=c.getAttribute?c.getAttribute(q2):null;return l&&s}function r0(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(f.replacementClass)}function z0(){return f.autoReplaceSvg===!0?i2.replace:i2[f.autoReplaceSvg]||i2.replace}function m0(c){return p.createElementNS("http://www.w3.org/2000/svg",c)}function L0(c){return p.createElement(c)}function S3(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{ceFn:s=c.tag==="svg"?m0:L0}=l;if(typeof c=="string")return p.createTextNode(c);let a=s(c.tag);return Object.keys(c.attributes||[]).forEach(function(n){a.setAttribute(n,c.attributes[n])}),(c.children||[]).forEach(function(n){a.appendChild(S3(n,{ceFn:s}))}),a}function M0(c){let l=" ".concat(c.outerHTML," ");return l="".concat(l,"Font Awesome fontawesome.com "),l}var i2={replace:function(c){let l=c[0];if(l.parentNode)if(c[1].forEach(s=>{l.parentNode.insertBefore(S3(s),l)}),l.getAttribute(E)===null&&f.keepOriginalSource){let s=p.createComment(M0(l));l.parentNode.replaceChild(s,l)}else l.remove()},nest:function(c){let l=c[0],s=c[1];if(~_2(l).indexOf(f.replacementClass))return i2.replace(c);let a=new RegExp("".concat(f.cssPrefix,"-.*"));if(delete s[0].attributes.id,s[0].attributes.class){let n=s[0].attributes.class.split(" ").reduce((o,t)=>(t===f.replacementClass||t.match(a)?o.toSvg.push(t):o.toNode.push(t),o),{toNode:[],toSvg:[]});s[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?l.removeAttribute("class"):l.setAttribute("class",n.toNode.join(" "))}let e=s.map(n=>Z(n)).join(`
`);l.setAttribute(E,""),l.innerHTML=e}};function I1(c){c()}function w3(c,l){let s=typeof l=="function"?l:o2;if(c.length===0)s();else{let a=I1;f.mutateApproach===u4&&(a=F.requestAnimationFrame||I1),a(()=>{let e=z0(),n=X2.begin("mutate");c.map(e),n(),s()})}}var $2=!1;function y3(){$2=!0}function H2(){$2=!1}var f2=null;function O1(c){if(!w1||!f.observeMutations)return;let{treeCallback:l=o2,nodeCallback:s=o2,pseudoElementsCallback:a=o2,observeMutationsRoot:e=p}=c;f2=new w1(n=>{if($2)return;let o=T();_(n).forEach(t=>{if(t.type==="childList"&&t.addedNodes.length>0&&!H1(t.addedNodes[0])&&(f.searchPseudoElements&&a(t.target),l(t.target)),t.type==="attributes"&&t.target.parentNode&&f.searchPseudoElements&&a(t.target.parentNode),t.type==="attributes"&&H1(t.target)&&~b4.indexOf(t.attributeName))if(t.attributeName==="class"&&f0(t.target)){let{prefix:z,iconName:r}=L2(_2(t.target));t.target.setAttribute(U2,z||o),r&&t.target.setAttribute(q2,r)}else r0(t.target)&&s(t.target)})}),k&&f2.observe(e,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function p0(){f2&&f2.disconnect()}function C0(c){let l=c.getAttribute("style"),s=[];return l&&(s=l.split(";").reduce((a,e)=>{let n=e.split(":"),o=n[0],t=n.slice(1);return o&&t.length>0&&(a[o]=t.join(":").trim()),a},{})),s}function u0(c){let l=c.getAttribute("data-prefix"),s=c.getAttribute("data-icon"),a=c.innerText!==void 0?c.innerText.trim():"",e=L2(_2(c));return e.prefix||(e.prefix=T()),l&&s&&(e.prefix=l,e.iconName=s),e.iconName&&e.prefix||(e.prefix&&a.length>0&&(e.iconName=_4(e.prefix,c.innerText)||V2(e.prefix,v2(c.innerText))),!e.iconName&&f.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(e.iconName=c.firstChild.data)),e}function d0(c){let l=_(c.attributes).reduce((e,n)=>(e.name!=="class"&&e.name!=="style"&&(e[n.name]=n.value),e),{}),s=c.getAttribute("title"),a=c.getAttribute("data-fa-title-id");return f.autoA11y&&(s?l["aria-labelledby"]="".concat(f.replacementClass,"-title-").concat(a||K()):(l["aria-hidden"]="true",l.focusable="false")),l}function h0(){return{iconName:null,title:null,titleId:null,prefix:null,transform:N,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function U1(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:s,prefix:a,rest:e}=u0(c),n=d0(c),o=T2("parseNodeAttributes",{},c),t=l.styleParser?C0(c):[];return i({iconName:s,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:a,transform:N,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:e,styles:t,attributes:n}},o)}var{styles:x0}=b;function k3(c){let l=f.autoReplaceSvg==="nest"?U1(c,{styleParser:!1}):U1(c);return~l.extra.classes.indexOf(i3)?D("generateLayersText",c,l):D("generateSvgReplacementMutation",c,l)}function g0(){return[...l4,...b2]}function q1(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!k)return Promise.resolve();let s=p.documentElement.classList,a=m=>s.add("".concat(A1,"-").concat(m)),e=m=>s.remove("".concat(A1,"-").concat(m)),n=f.autoFetchSvg?g0():c3.concat(Object.keys(x0));n.includes("fa")||n.push("fa");let o=[".".concat(i3,":not([").concat(E,"])")].concat(n.map(m=>".".concat(m,":not([").concat(E,"])"))).join(", ");if(o.length===0)return Promise.resolve();let t=[];try{t=_(c.querySelectorAll(o))}catch{}if(t.length>0)a("pending"),e("complete");else return Promise.resolve();let z=X2.begin("onTree"),r=t.reduce((m,M)=>{try{let L=k3(M);L&&m.push(L)}catch(L){n3||L.name==="MissingIcon"&&console.error(L)}return m},[]);return new Promise((m,M)=>{Promise.all(r).then(L=>{w3(L,()=>{a("active"),a("complete"),e("pending"),typeof l=="function"&&l(),z(),m()})}).catch(L=>{z(),M(L)})})}function N0(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;k3(c).then(s=>{s&&w3([s],l)})}function b0(c){return function(l){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(l||{}).icon?l:D2(l||{}),{mask:e}=s;return e&&(e=(e||{}).icon?e:D2(e||{})),c(a,i(i({},s),{},{mask:e}))}}var S0=function(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:s=N,symbol:a=!1,mask:e=null,maskId:n=null,title:o=null,titleId:t=null,classes:z=[],attributes:r={},styles:m={}}=l;if(!c)return;let{prefix:M,iconName:L,icon:u}=c;return M2(i({type:"icon"},c),()=>(H("beforeDOMElementCreation",{iconDefinition:c,params:l}),f.autoA11y&&(o?r["aria-labelledby"]="".concat(f.replacementClass,"-title-").concat(t||K()):(r["aria-hidden"]="true",r.focusable="false")),Y2({icons:{main:B2(u),mask:e?B2(e.icon):{found:!1,width:null,height:null,icon:{}}},prefix:M,iconName:L,transform:i(i({},N),s),symbol:a,title:o,maskId:n,titleId:t,extra:{attributes:r,styles:m,classes:z}})))},w0={mixout(){return{icon:b0(S0)}},hooks(){return{mutationObserverCallbacks(c){return c.treeCallback=q1,c.nodeCallback=N0,c}}},provides(c){c.i2svg=function(l){let{node:s=p,callback:a=()=>{}}=l;return q1(s,a)},c.generateSvgReplacementMutation=function(l,s){let{iconName:a,title:e,titleId:n,prefix:o,transform:t,symbol:z,mask:r,maskId:m,extra:M}=s;return new Promise((L,u)=>{Promise.all([R2(a,o),r.iconName?R2(r.iconName,r.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(A=>{let[B,x]=A;L([l,Y2({icons:{main:B,mask:x},prefix:o,iconName:a,transform:t,symbol:z,maskId:m,title:e,titleId:n,extra:M,watchable:!0})])}).catch(u)})},c.generateAbstractIcon=function(l){let{children:s,attributes:a,main:e,transform:n,styles:o}=l,t=z2(o);t.length>0&&(a.style=t);let z;return G2(n)&&(z=D("generateAbstractTransformGrouping",{main:e,transform:n,containerWidth:e.width,iconWidth:e.width})),s.push(z||e.icon),{children:s,attributes:a}}}},y0={mixout(){return{layer(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:s=[]}=l;return M2({type:"layer"},()=>{H("beforeDOMElementCreation",{assembler:c,params:l});let a=[];return c(e=>{Array.isArray(e)?e.map(n=>{a=a.concat(n.abstract)}):a=a.concat(e.abstract)}),[{tag:"span",attributes:{class:["".concat(f.cssPrefix,"-layers"),...s].join(" ")},children:a}]})}}}},k0={mixout(){return{counter(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:s=null,classes:a=[],attributes:e={},styles:n={}}=l;return M2({type:"counter",content:c},()=>(H("beforeDOMElementCreation",{content:c,params:l}),n0({content:c.toString(),title:s,extra:{attributes:e,styles:n,classes:["".concat(f.cssPrefix,"-layers-counter"),...a]}})))}}}},A0={mixout(){return{text(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:s=N,title:a=null,classes:e=[],attributes:n={},styles:o={}}=l;return M2({type:"text",content:c},()=>(H("beforeDOMElementCreation",{content:c,params:l}),R1({content:c,transform:i(i({},N),s),title:a,extra:{attributes:n,styles:o,classes:["".concat(f.cssPrefix,"-layers-text"),...e]}})))}}},provides(c){c.generateLayersText=function(l,s){let{title:a,transform:e,extra:n}=s,o=null,t=null;if(J1){let z=parseInt(getComputedStyle(l).fontSize,10),r=l.getBoundingClientRect();o=r.width/z,t=r.height/z}return f.autoA11y&&!a&&(n.attributes["aria-hidden"]="true"),Promise.resolve([l,R1({content:l.innerHTML,width:o,height:t,transform:e,title:a,extra:n,watchable:!0})])}}},v0=new RegExp('"',"ug"),W1=[1105920,1112319],_1=i(i(i(i({},{FontAwesome:{normal:"fas",400:"fas"}}),J3),p4),t4),I2=Object.keys(_1).reduce((c,l)=>(c[l.toLowerCase()]=_1[l],c),{}),P0=Object.keys(I2).reduce((c,l)=>{let s=I2[l];return c[l]=s[900]||[...Object.entries(s)][0][1],c},{});function F0(c){let l=c.replace(v0,""),s=I4(l,0),a=s>=W1[0]&&s<=W1[1],e=l.length===2?l[0]===l[1]:!1;return{value:v2(e?l[0]:l),isSecondary:a||e}}function T0(c,l){let s=c.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(l),e=isNaN(a)?"normal":a;return(I2[s]||{})[e]||P0[s]}function G1(c,l){let s="".concat(C4).concat(l.replace(":","-"));return new Promise((a,e)=>{if(c.getAttribute(s)!==null)return a();let o=_(c.children).filter(L=>L.getAttribute(w2)===l)[0],t=F.getComputedStyle(c,l),z=t.getPropertyValue("font-family"),r=z.match(g4),m=t.getPropertyValue("font-weight"),M=t.getPropertyValue("content");if(o&&!r)return c.removeChild(o),a();if(r&&M!=="none"&&M!==""){let L=t.getPropertyValue("content"),u=T0(z,m),{value:A,isSecondary:B}=F0(L),x=r[0].startsWith("FontAwesome"),S=V2(u,A),d=S;if(x){let g=G4(A);g.iconName&&g.prefix&&(S=g.iconName,u=g.prefix)}if(S&&!B&&(!o||o.getAttribute(U2)!==u||o.getAttribute(q2)!==d)){c.setAttribute(s,d),o&&c.removeChild(o);let g=h0(),{extra:I}=g;I.attributes[w2]=l,R2(S,u).then(O=>{let q3=Y2(i(i({},g),{},{icons:{main:O,mask:g3()},prefix:u,iconName:d,extra:I,watchable:!0})),p2=p.createElementNS("http://www.w3.org/2000/svg","svg");l==="::before"?c.insertBefore(p2,c.firstChild):c.appendChild(p2),p2.outerHTML=q3.map(W3=>Z(W3)).join(`
`),c.removeAttribute(s),a()}).catch(e)}else a()}else a()})}function D0(c){return Promise.all([G1(c,"::before"),G1(c,"::after")])}function B0(c){return c.parentNode!==document.head&&!~d4.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(w2)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function j1(c){if(k)return new Promise((l,s)=>{let a=_(c.querySelectorAll("*")).filter(B0).map(D0),e=X2.begin("searchPseudoElements");y3(),Promise.all(a).then(()=>{e(),H2(),l()}).catch(()=>{e(),H2(),s()})})}var R0={hooks(){return{mutationObserverCallbacks(c){return c.pseudoElementsCallback=j1,c}}},provides(c){c.pseudoElements2svg=function(l){let{node:s=p}=l;f.searchPseudoElements&&j1(s)}}},V1=!1,E0={mixout(){return{dom:{unwatch(){y3(),V1=!0}}}},hooks(){return{bootstrap(){O1(T2("mutationObserverCallbacks",{}))},noAuto(){p0()},watch(c){let{observeMutationsRoot:l}=c;V1?H2():O1(T2("mutationObserverCallbacks",{observeMutationsRoot:l}))}}}},Y1=c=>{let l={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return c.toLowerCase().split(" ").reduce((s,a)=>{let e=a.toLowerCase().split("-"),n=e[0],o=e.slice(1).join("-");if(n&&o==="h")return s.flipX=!0,s;if(n&&o==="v")return s.flipY=!0,s;if(o=parseFloat(o),isNaN(o))return s;switch(n){case"grow":s.size=s.size+o;break;case"shrink":s.size=s.size-o;break;case"left":s.x=s.x-o;break;case"right":s.x=s.x+o;break;case"up":s.y=s.y-o;break;case"down":s.y=s.y+o;break;case"rotate":s.rotate=s.rotate+o;break}return s},l)},H0={mixout(){return{parse:{transform:c=>Y1(c)}}},hooks(){return{parseNodeAttributes(c,l){let s=l.getAttribute("data-fa-transform");return s&&(c.transform=Y1(s)),c}}},provides(c){c.generateAbstractTransformGrouping=function(l){let{main:s,transform:a,containerWidth:e,iconWidth:n}=l,o={transform:"translate(".concat(e/2," 256)")},t="translate(".concat(a.x*32,", ").concat(a.y*32,") "),z="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),r="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(t," ").concat(z," ").concat(r)},M={transform:"translate(".concat(n/2*-1," -256)")},L={outer:o,inner:m,path:M};return{tag:"g",attributes:i({},L.outer),children:[{tag:"g",attributes:i({},L.inner),children:[{tag:s.icon.tag,children:s.icon.children,attributes:i(i({},s.icon.attributes),L.path)}]}]}}}},g2={x:0,y:0,width:"100%",height:"100%"};function X1(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||l)&&(c.attributes.fill="black"),c}function I0(c){return c.tag==="g"?c.children:[c]}var O0={hooks(){return{parseNodeAttributes(c,l){let s=l.getAttribute("data-fa-mask"),a=s?L2(s.split(" ").map(e=>e.trim())):g3();return a.prefix||(a.prefix=T()),c.mask=a,c.maskId=l.getAttribute("data-fa-mask-id"),c}}},provides(c){c.generateAbstractMask=function(l){let{children:s,attributes:a,main:e,mask:n,maskId:o,transform:t}=l,{width:z,icon:r}=e,{width:m,icon:M}=n,L=F4({transform:t,containerWidth:m,iconWidth:z}),u={tag:"rect",attributes:i(i({},g2),{},{fill:"white"})},A=r.children?{children:r.children.map(X1)}:{},B={tag:"g",attributes:i({},L.inner),children:[X1(i({tag:r.tag,attributes:i(i({},r.attributes),L.path)},A))]},x={tag:"g",attributes:i({},L.outer),children:[B]},S="mask-".concat(o||K()),d="clip-".concat(o||K()),g={tag:"mask",attributes:i(i({},g2),{},{id:S,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[u,x]},I={tag:"defs",children:[{tag:"clipPath",attributes:{id:d},children:I0(M)},g]};return s.push(I,{tag:"rect",attributes:i({fill:"currentColor","clip-path":"url(#".concat(d,")"),mask:"url(#".concat(S,")")},g2)}),{children:s,attributes:a}}}},U0={provides(c){let l=!1;F.matchMedia&&(l=F.matchMedia("(prefers-reduced-motion: reduce)").matches),c.missingIconAbstract=function(){let s=[],a={fill:"currentColor"},e={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};s.push({tag:"path",attributes:i(i({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});let n=i(i({},e),{},{attributeName:"opacity"}),o={tag:"circle",attributes:i(i({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return l||o.children.push({tag:"animate",attributes:i(i({},e),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:i(i({},n),{},{values:"1;0;1;1;0;1;"})}),s.push(o),s.push({tag:"path",attributes:i(i({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:l?[]:[{tag:"animate",attributes:i(i({},n),{},{values:"1;0;0;0;0;1;"})}]}),l||s.push({tag:"path",attributes:i(i({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:i(i({},n),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:s}}}},q0={hooks(){return{parseNodeAttributes(c,l){let s=l.getAttribute("data-fa-symbol"),a=s===null?!1:s===""?!0:s;return c.symbol=a,c}}}},W0=[B4,w0,y0,k0,A0,R0,E0,H0,O0,U0,q0];J4(W0,{mixoutsTo:h});var t6=h.noAuto,A3=h.config,f6=h.library,v3=h.dom,P3=h.parse,r6=h.findIconDefinition,z6=h.toHtml,F3=h.icon,m6=h.layer,_0=h.text,G0=h.counter;var V0=["*"],Y0=c=>{throw new Error(`Could not find icon with iconName=${c.iconName} and prefix=${c.prefix} in the icon library.`)},X0=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},$0=c=>{let l={[`fa-${c.animation}`]:c.animation!=null&&!c.animation.startsWith("spin"),"fa-spin":c.animation==="spin"||c.animation==="spin-reverse","fa-spin-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-spin-reverse":c.animation==="spin-reverse"||c.animation==="spin-pulse-reverse","fa-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-fw":c.fixedWidth,"fa-border":c.border,"fa-inverse":c.inverse,"fa-layers-counter":c.counter,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both",[`fa-${c.size}`]:c.size!==null,[`fa-rotate-${c.rotate}`]:c.rotate!==null,[`fa-pull-${c.pull}`]:c.pull!==null,[`fa-stack-${c.stackItemSize}`]:c.stackItemSize!=null};return Object.keys(l).map(s=>l[s]?s:null).filter(s=>s)},K2=new WeakSet,T3="fa-auto-css";function K0(c,l){if(!l.autoAddCss||K2.has(c))return;if(c.getElementById(T3)!=null){l.autoAddCss=!1,K2.add(c);return}let s=c.createElement("style");s.setAttribute("type","text/css"),s.setAttribute("id",T3),s.innerHTML=v3.css();let a=c.head.childNodes,e=null;for(let n=a.length-1;n>-1;n--){let o=a[n],t=o.nodeName.toUpperCase();["STYLE","LINK"].indexOf(t)>-1&&(e=o)}c.head.insertBefore(s,e),l.autoAddCss=!1,K2.add(c)}var Q0=c=>c.prefix!==void 0&&c.iconName!==void 0,J0=(c,l)=>Q0(c)?c:Array.isArray(c)&&c.length===2?{prefix:c[0],iconName:c[1]}:{prefix:l,iconName:c},Q2=(()=>{class c{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null,this._autoAddCss=!0}set autoAddCss(s){A3.autoAddCss=s,this._autoAddCss=s}get autoAddCss(){return this._autoAddCss}static{this.\u0275fac=function(a){return new(a||c)}}static{this.\u0275prov=C2({token:c,factory:c.\u0275fac,providedIn:"root"})}}return c})(),J2=(()=>{class c{constructor(){this.definitions={}}addIcons(...s){for(let a of s){a.prefix in this.definitions||(this.definitions[a.prefix]={}),this.definitions[a.prefix][a.iconName]=a;for(let e of a.icon[2])typeof e=="string"&&(this.definitions[a.prefix][e]=a)}}addIconPacks(...s){for(let a of s){let e=Object.keys(a).map(n=>a[n]);this.addIcons(...e)}}getIconDefinition(s,a){return s in this.definitions&&a in this.definitions[s]?this.definitions[s][a]:null}static{this.\u0275fac=function(a){return new(a||c)}}static{this.\u0275prov=C2({token:c,factory:c.\u0275fac,providedIn:"root"})}}return c})(),Z0=(()=>{class c{constructor(){this.stackItemSize="1x"}ngOnChanges(s){if("size"in s)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}static{this.\u0275fac=function(a){return new(a||c)}}static{this.\u0275dir=l1({type:c,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[c2]})}}return c})(),c6=(()=>{class c{constructor(s,a){this.renderer=s,this.elementRef=a}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(s){"size"in s&&(s.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${s.size.currentValue}`),s.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${s.size.previousValue}`))}static{this.\u0275fac=function(a){return new(a||c)(v(n1),v(s1))}}static{this.\u0275cmp=j({type:c,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[c2,V],ngContentSelectors:V0,decls:1,vars:0,template:function(a,e){a&1&&(r1(),z1(0))},encapsulation:2})}}return c})(),D3=(()=>{class c{constructor(s,a,e,n,o){this.sanitizer=s,this.config=a,this.iconLibrary=e,this.stackItem=n,this.document=G(p1),o!=null&&n==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(s){if(this.icon==null&&this.config.fallbackIcon==null){X0();return}if(s){let a=this.findIconDefinition(this.icon??this.config.fallbackIcon);if(a!=null){let e=this.buildParams();K0(this.document,this.config);let n=F3(a,e);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(n.html.join(`
`))}}}render(){this.ngOnChanges({})}findIconDefinition(s){let a=J0(s,this.config.defaultPrefix);if("icon"in a)return a;let e=this.iconLibrary.getIconDefinition(a.prefix,a.iconName);return e??(Y0(a),null)}buildParams(){let s={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},a=typeof this.transform=="string"?P3.transform(this.transform):this.transform;return{title:this.title,transform:a,classes:$0(s),mask:this.mask!=null?this.findIconDefinition(this.mask):null,symbol:this.symbol,attributes:{role:this.a11yRole}}}static{this.\u0275fac=function(a){return new(a||c)(v(u1),v(Q2),v(J2),v(Z0,8),v(c6,8))}}static{this.\u0275cmp=j({type:c,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(a,e){a&2&&(f1("innerHTML",e.renderedIconHTML,a1),o1("title",e.title))},inputs:{icon:"icon",title:"title",animation:"animation",mask:"mask",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[c2,V],decls:0,vars:0,template:function(a,e){},encapsulation:2})}}return c})();var B3=(()=>{class c{static{this.\u0275fac=function(a){return new(a||c)}}static{this.\u0275mod=c1({type:c})}static{this.\u0275inj=Z2({})}}return c})();var R3={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"]};var E3=[R3];var s6=()=>["fas","user"],H3=(()=>{class c{faIconLibrary=G(J2);faConfig=G(Q2);ngOnInit(){this.initFontAwesome()}initFontAwesome(){this.faConfig.defaultPrefix="fas",this.faIconLibrary.addIcons(...E3)}static \u0275fac=function(a){return new(a||c)};static \u0275cmp=j({type:c,selectors:[["app-root"]],standalone:!0,features:[V],decls:11,vars:2,consts:[[1,"card","shadow-lg","rounded-lg","p-4","m-4"],[1,"card-header","bg-primary","text-white","rounded-t-lg"],[1,"text-xl","font-semibold"],[1,"card-body","mt-3"],[1,"text-gray-700"],[1,"mt-4"],[1,"bg-blue-500","hover:bg-blue-600","text-white","font-bold","py-2","px-4","rounded"],[3,"icon"]],template:function(a,e){a&1&&(l2(0,"div",0)(1,"div",1)(2,"h3",2),a2(3,"Welcome"),s2()(),l2(4,"div",3)(5,"p",4),a2(6,"This is a sample card component for your e-commerce application."),s2(),l2(7,"div",5)(8,"button",6),a2(9," Learn More "),s2()()()(),t1(10,"fa-icon",7)),a&2&&(e1(10),i1("icon",m1(1,s6)))},dependencies:[g1,B3,D3]})}return c})();var I3=[];var O3={providers:[d1(),L1({eventCoalescing:!0}),x1(I3)]};var a6={providers:[h1()]},U3=M1(O3,a6);var e6=()=>C1(H3,U3),K6=e6;export{K6 as a};
