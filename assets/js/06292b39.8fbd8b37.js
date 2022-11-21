"use strict";(self.webpackChunkthe_codex_docusaurus=self.webpackChunkthe_codex_docusaurus||[]).push([[48],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||r;return n?o.createElement(f,s(s({ref:t},c),{},{components:n})):o.createElement(f,s({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<r;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9813:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var o=n(7462),a=(n(7294),n(3905));const r={sidebar_position:3},s="Testing",i={unversionedId:"guia-frontend/testing",id:"guia-frontend/testing",title:"Testing",description:"Convenciones y buenas pr\xe1cticas que utilizamos para testing.",source:"@site/docs/guia-frontend/testing.md",sourceDirName:"guia-frontend",slug:"/guia-frontend/testing",permalink:"/the-codex/guia-frontend/testing",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Uso de props spreading",permalink:"/the-codex/guia-frontend/code/props-spreading"}},p={},l=[{value:"Ubicaci\xf3n de los archivos",id:"ubicaci\xf3n-de-los-archivos",level:2},{value:"Contexto",id:"contexto",level:3},{value:"\xbfC\xf3mo ordenamos los tests de los componentes? \ud83c\udfaf",id:"c\xf3mo-ordenamos-los-tests-de-los-componentes-",level:3}],c={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"testing"},"Testing"),(0,a.kt)("p",null,"Convenciones y buenas pr\xe1cticas que utilizamos para testing."),(0,a.kt)("h2",{id:"ubicaci\xf3n-de-los-archivos"},"Ubicaci\xf3n de los archivos"),(0,a.kt)("p",null,"Para el caso de los test unitarios utilizamos una forma con m\xe1s acoplamiento, es decir, que los archivos de test\nse encuentren cercanos al c\xf3digo que queremos testear."),(0,a.kt)("admonition",{title:"TL;DR:",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Utilizamos las carpetas ",(0,a.kt)("inlineCode",{parentName:"p"},"/__tests__")," y ",(0,a.kt)("inlineCode",{parentName:"p"},"/__snapshots__")," dentro de cada carpeta de componente. Ejemplo de nombre\nde ruta: ",(0,a.kt)("inlineCode",{parentName:"p"},"/src/components/ComponentX/__tests__"),".")),(0,a.kt)("h3",{id:"contexto"},"Contexto"),(0,a.kt)("p",null,"Si bien no existe un est\xe1ndar \xfanico, hay un relativo consenso de que es mejor tener m\xe1s acoplamiento, que menos."),(0,a.kt)("p",null,"\u25ba ",(0,a.kt)("strong",{parentName:"p"},"M\xe1s acoplamiento")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Ventajas"),":"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u2705 Visibilidad tests: se desarrolla m\xe1s conscientemente de los tests y se sabe que est\xe1 testeado y que no."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Desventajas"),":"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u274c Mezcla tests con funcionalidades: ",(0,a.kt)("em",{parentName:"li"},'"Visual clutter"'),".")))),(0,a.kt)("p",null,"\u25ba ",(0,a.kt)("strong",{parentName:"p"},"Menos acoplamiento")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Ventajas"),":"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},'\u2705 \xc1rbol "mas limpio".'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Desventajas"),":"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u274c Dificultad para encontrar tests espec\xedficos."),(0,a.kt)("li",{parentName:"ul"},"\u274c Poca visibilidad respecto a tests pendientes. Se est\xe1 menos consciente de los tests.")))),(0,a.kt)("h3",{id:"c\xf3mo-ordenamos-los-tests-de-los-componentes-"},"\xbfC\xf3mo ordenamos los tests de los componentes? \ud83c\udfaf"),(0,a.kt)("p",null,"En cada carpeta de un componente (por ejemplo ",(0,a.kt)("inlineCode",{parentName:"p"},"/components/ComponentX"),"), tendremos una\ncarpeta ",(0,a.kt)("inlineCode",{parentName:"p"},"/__tests__")," que contiene los tests del componente, y de considerarse necesario,\ntambi\xe9n una carpeta ",(0,a.kt)("inlineCode",{parentName:"p"},"/__snapshots__")),(0,a.kt)("p",null,"\ud83d\udcdd Cada componente tiene su propio archivo de test y de snapshot:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"src\n\u2514\u2500\u2500 components\n    \u251c\u2500\u2500 componentX.js\n    \u251c\u2500\u2500 componentY.js\n    \u251c\u2500\u2500 ...\n    \u2514\u2500\u2500 __tests__\n    |       \u251c\u2500\u2500 componentX.spec.js\n    |       \u251c\u2500\u2500 componentY.spec.js\n    |       \u2514\u2500\u2500 ...\n    \u2514\u2500\u2500 __snapshots__\n            \u251c\u2500\u2500 componentX.spec.js.snap\n            \u251c\u2500\u2500 componentY.spec.js.snap\n            \u2514\u2500\u2500 ...\n")))}u.isMDXComponent=!0}}]);