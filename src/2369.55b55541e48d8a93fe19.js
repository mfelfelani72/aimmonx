"use strict";(self.webpackChunkbuiler=self.webpackChunkbuiler||[]).push([[2369],{2369:(e,n,r)=>{r.r(n),r.d(n,{default:()=>s});var t=r(6540),a=r(7767);const i=function(){return!!sessionStorage.getItem("session_id")};var l=["/dashboard","/landing"],o=["/confirm","/change-password","/change-password-confirm","/login","/sign-up","/profile","/profile/edit-profile","/profile/change-avatar","/profile/invite-friends"];function u(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=Array(n);r<n;r++)t[r]=e[r];return t}var c=(0,t.lazy)((function(){return r.e(1075).then(r.bind(r,1075))}));const s=function(){var e,n=(0,a.Zp)(),r=(0,a.zy)(),s=function(e){if(Array.isArray(e))return e}(e=(0,t.useState)())||function(e){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,t,a,i,l=[],o=!0,u=!1;try{for(a=(n=n.call(e)).next,!2;!(o=(r=a.call(n)).done)&&(l.push(r.value),2!==l.length);o=!0);}catch(e){u=!0,t=e}finally{try{if(!o&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw t}}return l}}(e)||function(e){if(e){if("string"==typeof e)return u(e,2);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,2):void 0}}(e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),f=s[0],d=s[1];return(0,t.useEffect)((function(){return d(function(e){return o.includes(e.pathname)?"404":"app"}(r)),l.includes(r.pathname)&&!1===i()?n("/landing"):l.includes(r.pathname)&&!0===i()?n("/dashboard",{state:{from_location:"redirect"}}):"app"===f&&"/"===r.pathname?!0===i()?n("/dashboard"):n("/landing"):void 0}),[f]),t.createElement("div",{className:"!font-yekanBakh"},"app"===f&&t.createElement(c,null),"404"===f&&t.createElement("div",null,"404"),"403"===f&&t.createElement("div",null,"403"))}}}]);