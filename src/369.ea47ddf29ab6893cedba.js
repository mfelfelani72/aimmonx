"use strict";(self.webpackChunkbuiler=self.webpackChunkbuiler||[]).push([[369],{2369:(e,n,t)=>{t.r(n),t.d(n,{default:()=>s});var r=t(6540),a=t(7767);const l=function(){return!!sessionStorage.getItem("session_id")};var i=["/profile","/landing"],o=["/confirm","/change-password","/change-password-confirm","/login","/sign-up"];function u(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}var c=(0,r.lazy)((function(){return t.e(75).then(t.bind(t,1075))}));const s=function(){var e,n=(0,a.Zp)(),t=(0,a.zy)(),s=function(e){if(Array.isArray(e))return e}(e=(0,r.useState)())||function(e){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var t,r,a,l,i=[],o=!0,u=!1;try{for(a=(n=n.call(e)).next,!2;!(o=(t=a.call(n)).done)&&(i.push(t.value),2!==i.length);o=!0);}catch(e){u=!0,r=e}finally{try{if(!o&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(u)throw r}}return i}}(e)||function(e){if(e){if("string"==typeof e)return u(e,2);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,2):void 0}}(e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),f=s[0],p=s[1];return(0,r.useEffect)((function(){return p(function(e){return o.includes(e.pathname)?"404":"app"}(t)),i.includes(t.pathname)&&!1===l()?n("/landing"):i.includes(t.pathname)&&!0===l()?n("/profile",{state:{from_location:"redirect"}}):"app"===f&&"/"===t.pathname?!0===l()?n("/profile"):n("/landing"):void 0}),[f]),r.createElement("div",{className:"!font-yekanBakh"},"app"===f&&r.createElement(c,null),"404"===f&&r.createElement("div",null,"404"),"403"===f&&r.createElement("div",null,"403"))}}}]);