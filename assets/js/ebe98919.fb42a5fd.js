"use strict";(self.webpackChunkthe_codex_docusaurus=self.webpackChunkthe_codex_docusaurus||[]).push([[332],{3905:(e,a,n)=>{n.d(a,{Zo:()=>d,kt:()=>m});var r=n(7294);function o(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function s(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function t(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?s(Object(n),!0).forEach((function(a){o(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function c(e,a){if(null==e)return{};var n,r,o=function(e,a){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),i=function(e){var a=r.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):t(t({},a),e)),n},d=function(e){var a=i(e.components);return r.createElement(l.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},p=r.forwardRef((function(e,a){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=i(n),m=o,k=p["".concat(l,".").concat(m)]||p[m]||u[m]||s;return n?r.createElement(k,t(t({ref:a},d),{},{components:n})):r.createElement(k,t({ref:a},d))}));function m(e,a){var n=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var s=n.length,t=new Array(s);t[0]=p;var c={};for(var l in a)hasOwnProperty.call(a,l)&&(c[l]=a[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,t[1]=c;for(var i=2;i<s;i++)t[i]=n[i];return r.createElement.apply(null,t)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2831:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>t,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>i});var r=n(7462),o=(n(7294),n(3905));const s={},t="Transacciones y Locks",c={unversionedId:"guia-backend/T\xe9cnicas/transacciones_y_locks",id:"guia-backend/T\xe9cnicas/transacciones_y_locks",title:"Transacciones y Locks",description:"Las transacciones y los locks se usan para coordinar el acceso y la modificaci\xf3n de los datos en la BD.",source:"@site/docs/guia-backend/T\xe9cnicas/transacciones_y_locks.md",sourceDirName:"guia-backend/T\xe9cnicas",slug:"/guia-backend/T\xe9cnicas/transacciones_y_locks",permalink:"/the-codex/guia-backend/T\xe9cnicas/transacciones_y_locks",draft:!1,editUrl:"https://github.com/budacom/the-codex/edit/master/docs/guia-backend/T\xe9cnicas/transacciones_y_locks.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Observer",permalink:"/the-codex/guia-backend/Patrones/observer"},next:{title:"Gu\xeda Frontend",permalink:"/the-codex/guia-frontend"}},l={},i=[{value:"Qu\xe9 son las transacciones",id:"qu\xe9-son-las-transacciones",level:2},{value:"Cuando usarlas?",id:"cuando-usarlas",level:3},{value:"Que son los locks",id:"que-son-los-locks",level:2},{value:"Cuando usarlos?",id:"cuando-usarlos",level:3},{value:"Rerefencias",id:"rerefencias",level:4}],d={toc:i};function u(e){let{components:a,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"transacciones-y-locks"},"Transacciones y Locks"),(0,o.kt)("p",null,"Las transacciones y los locks se usan para coordinar el acceso y la modificaci\xf3n de los datos en la BD."),(0,o.kt)("h2",{id:"qu\xe9-son-las-transacciones"},"Qu\xe9 son las transacciones"),(0,o.kt)("p",null,"En general se usa una transacci\xf3n para que varios cambios a la base de datos sean aplicados en forma at\xf3mica desde el punto de vista de otras conexiones que est\xe1n mirando la BD."),(0,o.kt)("p",null,"Las transacciones adem\xe1s permiten que un set de cambios no se aplique en caso de un error en medio de la transacci\xf3n."),(0,o.kt)("p",null,"Por ejemplo:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},"rpo = ReservedPriceOrder.create! params\nlog rpo\nReservedPriceOrderConfirmJob.perform_later(rpo) # suponiendo que estamos usando delayed job, que usa la DB como backend\n")),(0,o.kt)("p",null,"El caso anterior no garantiza que si se crea la RPO se encole tambi\xe9n el job. Si, por ejemplo, la llamada a ",(0,o.kt)("inlineCode",{parentName:"p"},"log")," fallara con una excepci\xf3n, o si durante la ejecuci\xf3n de ",(0,o.kt)("inlineCode",{parentName:"p"},"log")," se cae el proceso por exceso de uso de memoria, rpo se habr\xeda creado pero el ",(0,o.kt)("inlineCode",{parentName:"p"},"ReservedPriceOrderConfirmJob")," nunca se llamar\xeda."),(0,o.kt)("p",null,"Viendo el mismo caso, pero usando una transacci\xf3n:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},"ActiveRecord::Base.transaction do\n    rpo = ReservedPriceOrder.create! params\n    log rpo\n    ReservedPriceOrderConfirmJob.perform_later(rpo)\nend\n")),(0,o.kt)("p",null,"Ahora si falla la llamada a ",(0,o.kt)("inlineCode",{parentName:"p"},"log"),", se hace rollback de toda la transacci\xf3n, por lo que la rpo creada finalmente no es persistida (y nunca es visible por otros procesos)."),(0,o.kt)("h3",{id:"cuando-usarlas"},"Cuando usarlas?"),(0,o.kt)("p",null,"En general, si se va a hacer m\xe1s de un cambio en la BD que piensas que deber\xedan ir 'juntos', usa una transacci\xf3n."),(0,o.kt)("h2",{id:"que-son-los-locks"},"Que son los locks"),(0,o.kt)("p",null,"Los locks permiten coordinar el acceso a un recurso, cuando se tiene la posibilidad de que varios procesos traten de modificar el mismo recurso al mismo tiempo."),(0,o.kt)("p",null,"Por ejemplo:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},"rpo = ReservedPriceOrder.find 2\nif rpo.may_approve?\n    do_something_dangerous # ej: transferir dinero a un usuario\n    rpo.approve!\nend\n")),(0,o.kt)("p",null,"Si dos procesos (colas de jobs o llamadas al API por ejemplo), corren el mismo c\xf3digo en forma paralela, podr\xeda pasar que ambos lean desde la BD el estado de la RPO #2 antes que el otro lo cambie, y que por lo tanto los dos accedan a ",(0,o.kt)("inlineCode",{parentName:"p"},"do_something_dangerous"),"."),(0,o.kt)("p",null,"La soluci\xf3n de esto es utilizar un lock sobre la fila cuyo estado queremos modificar:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},"ActiveRecord::Base.transaction do\n    rpo = ReservedPriceOrder.lock.find 2 # aqui espera hasta que terminen otras transacciones que tomaron el lock de #2\n    if rpo.may_approve?\n        do_something_dangerous\n        rpo.approve!\n    end\nend # aqui se libera el lock tomado anteriormente\n")),(0,o.kt)("p",null,"Existe otra manera para lograr lo mismo que el c\xf3digo anterior, pero un poco menos eficiente:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},"rpo = ReservedPriceOrder.find 2 # trae los datos de la fila #2\nrpo.with_lock do # inicia la transacci\xf3n y a continuaci\xf3n toma el lock utilizando el id del objeto, cargando nuevamente los datos del objeto y pisando los datos traidos en la consulta anterior.\n    if rpo.may_approve?\n        do_something_dangerous\n        rpo.approve!\n    end\nend\n")),(0,o.kt)("h3",{id:"cuando-usarlos"},"Cuando usarlos?"),(0,o.kt)("p",null,"Cuando quiero coordinar modificaciones a un objeto desde varios procesos."),(0,o.kt)("h4",{id:"rerefencias"},"Rerefencias"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://api.rubyonrails.org/classes/ActiveRecord/Transactions/ClassMethods.html"},"https://api.rubyonrails.org/classes/ActiveRecord/Transactions/ClassMethods.html"),"\n",(0,o.kt)("a",{parentName:"p",href:"https://api.rubyonrails.org/classes/ActiveRecord/Locking/Pessimistic.html"},"https://api.rubyonrails.org/classes/ActiveRecord/Locking/Pessimistic.html")))}u.isMDXComponent=!0}}]);