"use strict";(self.webpackChunkbuiler=self.webpackChunkbuiler||[]).push([[767],{7767:(e,t,r)=>{var n;r.d(t,{$P:()=>h,BV:()=>D,Ix:()=>B,Zp:()=>g,jb:()=>s,qh:()=>U,x$:()=>C,zy:()=>v});var a=r(6540),o=r(5588);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}const i=a.createContext(null),u=a.createContext(null),s=a.createContext(null),c=a.createContext(null),p=a.createContext({outlet:null,matches:[],isDataRoute:!1}),d=a.createContext(null);function h(e,t){let{relative:r}=void 0===t?{}:t;m()||(0,o.Oi)(!1);let{basename:n,navigator:l}=a.useContext(s),{hash:i,pathname:u,search:c}=C(e,{relative:r}),p=u;return"/"!==n&&(p="/"===u?n:(0,o.HS)([n,u])),l.createHref({pathname:p,search:c,hash:i})}function m(){return null!=a.useContext(c)}function v(){return m()||(0,o.Oi)(!1),a.useContext(c).location}function f(e){a.useContext(s).static||a.useLayoutEffect(e)}function g(){let{isDataRoute:e}=a.useContext(p);return e?function(){let{router:e}=function(){let e=a.useContext(i);return e||(0,o.Oi)(!1),e}(R.UseNavigateStable),t=k(O.UseNavigateStable),r=a.useRef(!1);return f((()=>{r.current=!0})),a.useCallback((function(n,a){void 0===a&&(a={}),r.current&&("number"==typeof n?e.navigate(n):e.navigate(n,l({fromRouteId:t},a)))}),[e,t])}():function(){m()||(0,o.Oi)(!1);let e=a.useContext(i),{basename:t,future:r,navigator:n}=a.useContext(s),{matches:l}=a.useContext(p),{pathname:u}=v(),c=JSON.stringify((0,o.yD)(l,r.v7_relativeSplatPath)),d=a.useRef(!1);return f((()=>{d.current=!0})),a.useCallback((function(r,a){if(void 0===a&&(a={}),!d.current)return;if("number"==typeof r)return void n.go(r);let l=(0,o.Gh)(r,JSON.parse(c),u,"path"===a.relative);null==e&&"/"!==t&&(l.pathname="/"===l.pathname?t:(0,o.HS)([t,l.pathname])),(a.replace?n.replace:n.push)(l,a.state,a)}),[t,n,c,u,e])}()}function C(e,t){let{relative:r}=void 0===t?{}:t,{future:n}=a.useContext(s),{matches:l}=a.useContext(p),{pathname:i}=v(),u=JSON.stringify((0,o.yD)(l,n.v7_relativeSplatPath));return a.useMemo((()=>(0,o.Gh)(e,JSON.parse(u),i,"path"===r)),[e,u,i,r])}function y(){let e=function(){var e;let t=a.useContext(d),r=function(){let e=a.useContext(u);return e||(0,o.Oi)(!1),e}(O.UseRouteError),n=k(O.UseRouteError);return void 0!==t?t:null==(e=r.errors)?void 0:e[n]}(),t=(0,o.pX)(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null;return a.createElement(a.Fragment,null,a.createElement("h2",null,"Unexpected Application Error!"),a.createElement("h3",{style:{fontStyle:"italic"}},t),r?a.createElement("pre",{style:{padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"}},r):null,null)}const E=a.createElement(y,null);class x extends a.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?a.createElement(p.Provider,{value:this.props.routeContext},a.createElement(d.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function b(e){let{routeContext:t,match:r,children:n}=e,o=a.useContext(i);return o&&o.static&&o.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),a.createElement(p.Provider,{value:t},n)}var R=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(R||{}),O=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(O||{});function k(e){let t=function(){let e=a.useContext(p);return e||(0,o.Oi)(!1),e}(),r=t.matches[t.matches.length-1];return r.route.id||(0,o.Oi)(!1),r.route.id}const S={};function U(e){(0,o.Oi)(!1)}function B(e){let{basename:t="/",children:r=null,location:n,navigationType:i=o.rc.Pop,navigator:u,static:p=!1,future:d}=e;m()&&(0,o.Oi)(!1);let h=t.replace(/^\/*/,"/"),v=a.useMemo((()=>({basename:h,navigator:u,static:p,future:l({v7_relativeSplatPath:!1},d)})),[h,d,u,p]);"string"==typeof n&&(n=(0,o.Rr)(n));let{pathname:f="/",search:g="",hash:C="",state:y=null,key:E="default"}=n,x=a.useMemo((()=>{let e=(0,o.pb)(f,h);return null==e?null:{location:{pathname:e,search:g,hash:C,state:y,key:E},navigationType:i}}),[h,f,g,C,y,E,i]);return null==x?null:a.createElement(s.Provider,{value:v},a.createElement(c.Provider,{children:r,value:x}))}function D(e){let{children:t,location:r}=e;return function(e,t,r,n){m()||(0,o.Oi)(!1);let{navigator:i}=a.useContext(s),{matches:u}=a.useContext(p),d=u[u.length-1],h=d?d.params:{},f=(d&&d.pathname,d?d.pathnameBase:"/");d&&d.route;let g,C=v();if(t){var y;let e="string"==typeof t?(0,o.Rr)(t):t;"/"===f||(null==(y=e.pathname)?void 0:y.startsWith(f))||(0,o.Oi)(!1),g=e}else g=C;let R=g.pathname||"/",O=R;if("/"!==f){let e=f.replace(/^\//,"").split("/");O="/"+R.replace(/^\//,"").split("/").slice(e.length).join("/")}let k=(0,o.ue)(e,{pathname:O}),U=function(e,t,r,n){var l;if(void 0===t&&(t=[]),void 0===r&&(r=null),void 0===n&&(n=null),null==e){var i;if(!r)return null;if(r.errors)e=r.matches;else{if(!(null!=(i=n)&&i.v7_partialHydration&&0===t.length&&!r.initialized&&r.matches.length>0))return null;e=r.matches}}let u=e,s=null==(l=r)?void 0:l.errors;if(null!=s){let e=u.findIndex((e=>e.route.id&&void 0!==(null==s?void 0:s[e.route.id])));e>=0||(0,o.Oi)(!1),u=u.slice(0,Math.min(u.length,e+1))}let c=!1,p=-1;if(r&&n&&n.v7_partialHydration)for(let e=0;e<u.length;e++){let t=u[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(p=e),t.route.id){let{loaderData:e,errors:n}=r,a=t.route.loader&&void 0===e[t.route.id]&&(!n||void 0===n[t.route.id]);if(t.route.lazy||a){c=!0,u=p>=0?u.slice(0,p+1):[u[0]];break}}}return u.reduceRight(((e,n,o)=>{let l,i=!1,d=null,h=null;r&&(l=s&&n.route.id?s[n.route.id]:void 0,d=n.route.errorElement||E,c&&(p<0&&0===o?(S["route-fallback"]||(S["route-fallback"]=!0),i=!0,h=null):p===o&&(i=!0,h=n.route.hydrateFallbackElement||null)));let m=t.concat(u.slice(0,o+1)),v=()=>{let t;return t=l?d:i?h:n.route.Component?a.createElement(n.route.Component,null):n.route.element?n.route.element:e,a.createElement(b,{match:n,routeContext:{outlet:e,matches:m,isDataRoute:null!=r},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||0===o)?a.createElement(x,{location:r.location,revalidation:r.revalidation,component:d,error:l,children:v(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):v()}),null)}(k&&k.map((e=>Object.assign({},e,{params:Object.assign({},h,e.params),pathname:(0,o.HS)([f,i.encodeLocation?i.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?f:(0,o.HS)([f,i.encodeLocation?i.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),u,r,n);return t&&U?a.createElement(c.Provider,{value:{location:l({pathname:"/",search:"",hash:"",state:null,key:"default"},g),navigationType:o.rc.Pop}},U):U}(P(t),r)}function P(e,t){void 0===t&&(t=[]);let r=[];return a.Children.forEach(e,((e,n)=>{if(!a.isValidElement(e))return;let l=[...t,n];if(e.type===a.Fragment)return void r.push.apply(r,P(e.props.children,l));e.type!==U&&(0,o.Oi)(!1),e.props.index&&e.props.children&&(0,o.Oi)(!1);let i={id:e.props.id||l.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(i.children=P(e.props.children,l)),r.push(i)})),r}(n||(n=r.t(a,2))).startTransition,new Promise((()=>{})),a.Component}}]);