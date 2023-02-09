"use strict";(self.webpackChunkthe_codex_docusaurus=self.webpackChunkthe_codex_docusaurus||[]).push([[609],{3905:(e,r,a)=>{a.d(r,{Zo:()=>i,kt:()=>b});var n=a(7294);function o(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function t(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?t(Object(a),!0).forEach((function(r){o(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function s(e,r){if(null==e)return{};var a,n,o=function(e,r){if(null==e)return{};var a,n,o={},t=Object.keys(e);for(n=0;n<t.length;n++)a=t[n],r.indexOf(a)>=0||(o[a]=e[a]);return o}(e,r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(n=0;n<t.length;n++)a=t[n],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),u=function(e){var r=n.useContext(c),a=r;return e&&(a="function"==typeof e?e(r):l(l({},r),e)),a},i=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var a=e.components,o=e.mdxType,t=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),p=u(a),b=o,m=p["".concat(c,".").concat(b)]||p[b]||d[b]||t;return a?n.createElement(m,l(l({ref:r},i),{},{components:a})):n.createElement(m,l({ref:r},i))}));function b(e,r){var a=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var t=a.length,l=new Array(t);l[0]=p;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var u=2;u<t;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},3290:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>t,metadata:()=>s,toc:()=>u});var n=a(7462),o=(a(7294),a(3905));const t={sidebar_position:1},l="Observer",s={unversionedId:"guia-backend/Patrones/observer",id:"guia-backend/Patrones/observer",title:"Observer",description:"Un observer es una clase que, como dice su nombre se encarga de observar al modelo que lleva su nombre y tienen una labor muy parecida o igual a los callbacks de modelos.",source:"@site/docs/guia-backend/Patrones/observer.md",sourceDirName:"guia-backend/Patrones",slug:"/guia-backend/Patrones/observer",permalink:"/the-codex/guia-backend/Patrones/observer",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Gu\xeda Backend",permalink:"/the-codex/guia-backend"},next:{title:"Introducci\xf3n",permalink:"/the-codex/intro"}},c={},u=[{value:"\xbfPor qu\xe9 ocupar observers?",id:"por-qu\xe9-ocupar-observers",level:3},{value:"\xbfCu\xe1l es el criterio para poner algo en un callback o en el observer?",id:"cu\xe1l-es-el-criterio-para-poner-algo-en-un-callback-o-en-el-observer",level:3}],i={toc:u};function d(e){let{components:r,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},i,a,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"observer"},"Observer"),(0,o.kt)("p",null,"Un observer es una clase que, como dice su nombre se encarga de observar al modelo que lleva su nombre y tienen una labor muy parecida o igual a los callbacks de modelos.\nPor ejemplo si queremos llamar una funci\xf3n cada vez que se crea una instancia de un modelo lo podemos hacer de la siguiente manera:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ rails generate observer MyModel\n")),(0,o.kt)("p",null,"Esto generar\xe1 un observer de MyModel"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},"class MyModelObserver < PowerTypes::Observer\n  after_create: :puts_hello\n\n  def puts_hello\n    puts 'hello'\n  end\nend\n")),(0,o.kt)("p",null,"Luego en MyModel debemos a\xf1adir:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},"class MyModel < ActiveRecord::Base\n  include PowerTypes::Observable\nend\n")),(0,o.kt)("p",null,"Ahora cada vez que se ejecute"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"MyModel.create\n")),(0,o.kt)("p",null,"se ejecutar\xe1 ",(0,o.kt)("inlineCode",{parentName:"p"},"puts_hello"),"."),(0,o.kt)("p",null,"Esto tambi\xe9n se puede hacer con callbacks de la siguiente manera:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},"class MyModel < ActiveRecord::Base\n  after_create: :puts_hello\n\n  def puts_hello\n    puts 'hello'\n  end\nend\n")),(0,o.kt)("p",null,"Como pueden ver las dos formas son equivalentes. Entonces \xbfPor qu\xe9 usar observers?"),(0,o.kt)("h3",{id:"por-qu\xe9-ocupar-observers"},"\xbfPor qu\xe9 ocupar observers?"),(0,o.kt)("p",null,"Porque nos permite desacoplar l\xf3gicas de los modelos que no est\xe1n directamente relacionadas con ellos."),(0,o.kt)("h3",{id:"cu\xe1l-es-el-criterio-para-poner-algo-en-un-callback-o-en-el-observer"},"\xbfCu\xe1l es el criterio para poner algo en un callback o en el observer?"),(0,o.kt)("p",null,'Por un lado en los callbacks va todo lo necesario para mantener la integridad del objeto, por ejemplo, el formateo de un rut. Si guardamos un objeto sin formato de rut y todos los dem\xe1s est\xe1n formateados, entonces ese modelo en s\xed estar\xe1 "corrupto".'),(0,o.kt)("p",null,"Por otro lado, en observers deber\xeda ir toda la l\xf3gica que est\xe1 relacionada con el modelo pero que no es necesaria para mantener la integridad de este, por ejemplo, el env\xedo de un mail.\nEntonces la regla general ser\xeda algo como: \xbfMi objeto puede vivir sin esto?, si la respuesta es s\xed, entonces va en un observer, si la respuesta es no, va en un callback."),(0,o.kt)("p",null,"Por \xfaltimo la l\xf3gica de negocios debe estar fuera del mismo observer. Puede ser que llame alg\xfan job, comando, value, etc. Por ejemplo:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},"class SalesObserver\n  after_update :add_to_sales_report\n\n  def generate_report\n    AddToSalesReportJob.perform_later(object) # En este job va toda la l\xf3gica\n  end\nend\n")))}d.isMDXComponent=!0}}]);