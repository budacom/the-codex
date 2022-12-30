"use strict";(self.webpackChunkthe_codex_docusaurus=self.webpackChunkthe_codex_docusaurus||[]).push([[36],{3905:(e,n,r)=>{r.d(n,{Zo:()=>d,kt:()=>m});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),l=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},d=function(e){var n=l(e.components);return t.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return r?t.createElement(g,i(i({ref:n},d),{},{components:r})):t.createElement(g,i({ref:n},d))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2887:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var t=r(7462),a=(r(7294),r(3905));const o={sidebar_position:4},i="Uso de props spreading",p={unversionedId:"guia-frontend/code/props-spreading",id:"guia-frontend/code/props-spreading",title:"Uso de props spreading",description:"El operador spread (...) se utiliza para acceder a todos los elementos de un objeto sin necesidad de especificarlos",source:"@site/docs/guia-frontend/code/props-spreading.md",sourceDirName:"guia-frontend/code",slug:"/guia-frontend/code/props-spreading",permalink:"/the-codex/guia-frontend/code/props-spreading",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Nombres de archivos, variables, etc.",permalink:"/the-codex/guia-frontend/code/naming"},next:{title:"Testing",permalink:"/the-codex/testing"}},s={},l=[{value:"Contexto",id:"contexto",level:2}],d={toc:l};function c(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"uso-de-props-spreading"},"Uso de props spreading"),(0,a.kt)("p",null,"El operador ",(0,a.kt)("strong",{parentName:"p"},"spread")," (",(0,a.kt)("inlineCode",{parentName:"p"},"..."),") se utiliza para acceder a todos los elementos de un objeto sin necesidad de especificarlos\nindividualmente o iterarlos. El operador ",(0,a.kt)("strong",{parentName:"p"},"spread"),' hace una copia del objeto "iterado".'),(0,a.kt)("admonition",{title:"TL;DR:",type:"info"},(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-Javascript"},"<Component {...props} /> || # props spreading\n<Component name={name} />\n")),(0,a.kt)("p",{parentName:"admonition"},"Est\xe1 permitido el uso de ",(0,a.kt)("strong",{parentName:"p"},"props spreading")," en los componentes que se encuentren en la carpeta ",(0,a.kt)("inlineCode",{parentName:"p"},"/shared"),". En cualquier\notro caso se deben asignar las props individualmente.")),(0,a.kt)("h2",{id:"contexto"},"Contexto"),(0,a.kt)("p",null,"Si bien podemos utilizar el operador ",(0,a.kt)("strong",{parentName:"p"},"spread")," para asignar props a un componente, debemos utilizarlo con cuidado\nporque podemos asignar props que no utilizaremos, que eventualmente podr\xedan gatillar re-renders y\nafectar el rendimiento."),(0,a.kt)("p",null,"Otra raz\xf3n para evitar el uso de ",(0,a.kt)("strong",{parentName:"p"},"props spreading")," es que no tenemos visibilidad de las props espec\xedficas\nque estamos asignando, aunque esto lo podemos resolver si utilizamos ",(0,a.kt)("inlineCode",{parentName:"p"},"TypeScript")," para tipar el objeto que\nestamos asignando."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Utilizamos la regla de ",(0,a.kt)("strong",{parentName:"p"},"eslint")," ",(0,a.kt)("inlineCode",{parentName:"p"},"react/jsx-props-no-spreading"),", para prevenir el uso de props spreading.")),(0,a.kt)("p",null,"Por otra parte el uso de ",(0,a.kt)("strong",{parentName:"p"},"props spreading")," tiene algunas ventajas:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u2705 Escribir menos c\xf3digo porque no tenemos que asignar expl\xedcitamente cada prop."),(0,a.kt)("li",{parentName:"ul"},"\u2705 En el caso particular de HTML, preferimos no ser expl\xedcitos para asignar props nativas, como por ejemplo:\n",(0,a.kt)("inlineCode",{parentName:"li"},"disabled"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"class"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"id"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"alt"),", etc., sino que m\xe1s bien preferimos tener la libertad de usar f\xe1cilmente\nla API HTML nativa.")),(0,a.kt)("p",null,"Por las ventajas anteriores est\xe1 permitido el uso de ",(0,a.kt)("strong",{parentName:"p"},"props spreading")," pero s\xf3lo en los componentes que se\nencuentren en la carpeta ",(0,a.kt)("inlineCode",{parentName:"p"},"shared"),", por lo que s\xf3lo en esta carpeta se encuentra deshabilitada la regla de\n",(0,a.kt)("strong",{parentName:"p"},"eslint")," ",(0,a.kt)("inlineCode",{parentName:"p"},"react/jsx-props-no-spreading"),"."))}c.isMDXComponent=!0}}]);