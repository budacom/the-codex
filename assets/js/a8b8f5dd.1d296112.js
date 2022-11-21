"use strict";(self.webpackChunkthe_codex_docusaurus=self.webpackChunkthe_codex_docusaurus||[]).push([[968],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1106:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=t(7462),o=(t(7294),t(3905));const a={sidebar_position:2},i="Nombres de archivos y variables",s={unversionedId:"guia-frontend/code/naming",id:"guia-frontend/code/naming",title:"Nombres de archivos y variables",description:"Convenciones para nombres de archivos, constantes y variables.",source:"@site/docs/guia-frontend/code/naming.md",sourceDirName:"guia-frontend/code",slug:"/guia-frontend/code/naming",permalink:"/the-codex/guia-frontend/code/naming",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Queries y calls",permalink:"/the-codex/guia-frontend/code/queries"},next:{title:"Uso de props spreading",permalink:"/the-codex/guia-frontend/code/props-spreading"}},l={},c=[{value:"Nombres de archivos",id:"nombres-de-archivos",level:2},{value:"Ejemplos \ud83d\udd0d",id:"ejemplos-",level:3}],p={toc:c};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"nombres-de-archivos-y-variables"},"Nombres de archivos y variables"),(0,o.kt)("p",null,"Convenciones para nombres de archivos, constantes y variables."),(0,o.kt)("h2",{id:"nombres-de-archivos"},"Nombres de archivos"),(0,o.kt)("p",null,"Para mantener el est\xe1ndar en el nombre de los archivos frontend de nuestros proyectos, utilizamos la\nconvenci\xf3n de llamar a los archivos como lo que exportan por defecto."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Componentes de React e interfaces de TypeScript utilizan ",(0,o.kt)("inlineCode",{parentName:"li"},"PascalCase"),", por lo que el archivo tambi\xe9n\ndebe escribirse en ",(0,o.kt)("inlineCode",{parentName:"li"},"PascalCase"),"."),(0,o.kt)("li",{parentName:"ul"},"Hooks de React y otras funciones de JS utilizan ",(0,o.kt)("inlineCode",{parentName:"li"},"camelCase"),", por lo que el archivo tambi\xe9n debe\nescribirse en ",(0,o.kt)("inlineCode",{parentName:"li"},"camelCase"),".")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"S\xf3lo para el caso de componentes que est\xe1n organizados en diferentes archivos, nombramos su carpeta en\n",(0,o.kt)("inlineCode",{parentName:"p"},"PascalCase")," y su archivo principal ",(0,o.kt)("inlineCode",{parentName:"p"},"index.ts"),", porque exportamos el mismo nombre de la carpeta.")),(0,o.kt)("h3",{id:"ejemplos-"},"Ejemplos \ud83d\udd0d"),(0,o.kt)("p",null,"\u25ba ",(0,o.kt)("strong",{parentName:"p"},"Componentes")),(0,o.kt)("p",null,"En el caso del componente ",(0,o.kt)("inlineCode",{parentName:"p"},"<Button />")," que est\xe1 contenido en un solo archivo, se nombra de la\nsiguiente forma:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"shared\n\u2514\u2500\u2500 components\n    \u2514\u2500\u2500 Button.ts\n")),(0,o.kt)("p",null,"\u25ba ",(0,o.kt)("strong",{parentName:"p"},"Componentes organizados en varios archivos")),(0,o.kt)("p",null,"En el caso del componente ",(0,o.kt)("inlineCode",{parentName:"p"},"<FormikCurrencyInput />")," que est\xe1 organizado en dos archivos, se nombran\nde la siguiente forma:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"shared\n\u2514\u2500\u2500 components\n    \u2514\u2500\u2500 FormikCurrencyInput\n        \u251c\u2500\u2500 index.ts\n        \u2514\u2500\u2500 getFormatSeparators.ts\n")),(0,o.kt)("p",null,"\u25ba ",(0,o.kt)("strong",{parentName:"p"},"Hooks de React y otras funciones")),(0,o.kt)("p",null,"Un ejemplo de hook son las queries, donde su archivo se nombre de la forma ",(0,o.kt)("inlineCode",{parentName:"p"},"use<Action><Resource>"),".\nPor ejemplo: ",(0,o.kt)("inlineCode",{parentName:"p"},"useFetchTransactions.ts"),". Donde ",(0,o.kt)("inlineCode",{parentName:"p"},"Action")," corresponde a un nombre descriptivo de lo que hace la llamada a la API\n(fetch, create, delete, update, cancel, etc.), no al verbo HTTP."),(0,o.kt)("p",null,"Un ejemplo de funci\xf3n es la funci\xf3n ",(0,o.kt)("inlineCode",{parentName:"p"},"getFormatSeparators")," del componente ",(0,o.kt)("inlineCode",{parentName:"p"},"<FormikCurrencyInput />"),", que se nombra\nde la misma manera usando ",(0,o.kt)("inlineCode",{parentName:"p"},"camelCase"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"getFormatSeparators.ts"),"."))}d.isMDXComponent=!0}}]);