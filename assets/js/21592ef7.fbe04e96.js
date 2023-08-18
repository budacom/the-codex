"use strict";(self.webpackChunkthe_codex_docusaurus=self.webpackChunkthe_codex_docusaurus||[]).push([[622],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(a),m=r,k=p["".concat(l,".").concat(m)]||p[m]||u[m]||s;return a?n.createElement(k,o(o({ref:t},c),{},{components:a})):n.createElement(k,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var d=2;d<s;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},1144:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const s={sidebar_position:2},o="Mocks de API calls con MSW",i={unversionedId:"guia-frontend/testing/api-mocks",id:"guia-frontend/testing/api-mocks",title:"Mocks de API calls con MSW",description:"Para los mocks de API calls utilizamos la librer\xeda Mock Service Worker, que nos permite hacer",source:"@site/docs/guia-frontend/testing/api-mocks.md",sourceDirName:"guia-frontend/testing",slug:"/guia-frontend/testing/api-mocks",permalink:"/the-codex/guia-frontend/testing/api-mocks",draft:!1,editUrl:"https://github.com/budacom/the-codex/edit/master/docs/guia-frontend/testing/api-mocks.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Ubicaci\xf3n de los archivos",permalink:"/the-codex/guia-frontend/testing/file-location"},next:{title:"Gu\xeda de testing en front",permalink:"/the-codex/guia-frontend/testing/testing-guide"}},l={},d=[{value:"Gu\xeda r\xe1pida \ud83c\udfc3\u200d\u2642\ufe0f",id:"gu\xeda-r\xe1pida-\ufe0f",level:2},{value:"Definir un handler \ud83c\udfaf",id:"define-handler",level:3},{value:"Activar MSW en tests \ud83e\uddea",id:"activar-msw-en-tests-",level:3},{value:"Activar MSW en ambiente de desarrollo \ud83d\udcbb",id:"activar-msw-en-ambiente-de-desarrollo-",level:3},{value:"Ejemplo en detalle \ud83d\udd0d",id:"ejemplo-en-detalle-",level:2},{value:"Esperar respuesta",id:"esperar-respuesta",level:3},{value:"Sobreescribir respuesta",id:"sobreescribir-respuesta",level:3}],c={toc:d};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mocks-de-api-calls-con-msw"},"Mocks de API calls con MSW"),(0,r.kt)("p",null,"Para los mocks de API calls utilizamos la librer\xeda ",(0,r.kt)("a",{parentName:"p",href:"https://mswjs.io/"},"Mock Service Worker"),", que nos permite hacer\nmocks de requests de manera universal, interceptando el request sin importar la librer\xeda que usemos para enviarlo. "),(0,r.kt)("p",null,"Adem\xe1s de mocks de requests para el ambiente de test, MSW tambi\xe9n nos permite hacer mocks de requests en nuestro ambiente local de desarrollo, lo cual puede ser \xfatil para navegar el sitio sin tener que levantar todos los servicios del backend."),(0,r.kt)("h2",{id:"gu\xeda-r\xe1pida-\ufe0f"},"Gu\xeda r\xe1pida \ud83c\udfc3\u200d\u2642\ufe0f"),(0,r.kt)("h3",{id:"define-handler"},"Definir un handler \ud83c\udfaf"),(0,r.kt)("p",null,"Para a\xf1adir un mock de un request debes definir un handler usando la funci\xf3n ",(0,r.kt)("inlineCode",{parentName:"p"},"rest.get")," o alguna otra dependiendo del m\xe9todo utilizado. Por ejemplo, el siguiente ejemplo hace que cualquier request a ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/v2/user_metadata")," retorne el valor indicado en la funci\xf3n ",(0,r.kt)("inlineCode",{parentName:"p"},"ctx.json"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="userMetadata.js"',title:'"userMetadata.js"'},"import { rest } from \"msw\";\n\nexport function mockUserMetadata() {\n  return rest.get('/api/v2/user_metadata', (req, res, ctx) => {\n    return res(\n      ctx.status(200),\n      ctx.json({\n        user_metadata: {\n          value: '{\"count\":3}',\n        },\n      }),\n    );\n  });\n}\n")),(0,r.kt)("p",null,"Se recomienda dejar los mocks de requests en el mismo directorio y contar con un mismo archivo desde donde exportar todos nuestros request handlers."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"En surbtc definimos los mocks en la carpeta ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/budacom/surbtc/tree/master/spec/_javascript/react/mocks/handlers"},(0,r.kt)("inlineCode",{parentName:"a"},"spec/_javascript/react/mocks/handlers"))," y los exponemos desde el archivo ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/budacom/surbtc/blob/master/spec/_javascript/react/mocks/handlers.js"},(0,r.kt)("inlineCode",{parentName:"a"},"spec/_javascript/react/mocks/handlers.js")),"."),(0,r.kt)("li",{parentName:"ul"},"En buda-expo definimos los mocks en la carpeta ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/budacom/buda-expo/blob/master/src/mocks/handlers.js"},(0,r.kt)("inlineCode",{parentName:"a"},"src/mocks")),".")),(0,r.kt)("p",null,"Por lo tanto, luego de definir el handler deber\xe1s exportarlo desde el archivo correspondiente de la siguiente manera:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="handlers.js"',title:'"handlers.js"'},"import { mockUserMetadata } from './handlers/userMetadata';\n\nexport const handlers = [\n  mockUserMetadata(),\n];\n")),(0,r.kt)("p",null,"Para m\xe1s detalles sobre ",(0,r.kt)("inlineCode",{parentName:"p"},"rest.get")," y las equivalentes funciones para otros m\xe9todos, recomendamos leer ",(0,r.kt)("a",{parentName:"p",href:"https://mswjs.io/docs/api/rest"},"la documentaci\xf3n de MSW"),"."),(0,r.kt)("h3",{id:"activar-msw-en-tests-"},"Activar MSW en tests \ud83e\uddea"),(0,r.kt)("p",null,"Podr\xe1s activar el mock definido usando ",(0,r.kt)("inlineCode",{parentName:"p"},"server.use")," desde cualquier componente que use el request. Siguiendo el ejemplo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="path/to/myTest.spec.js"',title:'"path/to/myTest.spec.js"'},"import server from 'example/path/to/server';\nimport { mockUserMetadata } from 'example/path/to/userMetadata';\n\nbeforeEach(() => {\n  server.use(mockUserMetadata());\n});\n")),(0,r.kt)("p",null,"En surbtc definimos ",(0,r.kt)("inlineCode",{parentName:"p"},"server")," en ",(0,r.kt)("inlineCode",{parentName:"p"},"spec/_javascript/react/mocks/server.js"),". En buda-expo lo definimos en ",(0,r.kt)("inlineCode",{parentName:"p"},"src/mocks/server.js"),"."),(0,r.kt)("h3",{id:"activar-msw-en-ambiente-de-desarrollo-"},"Activar MSW en ambiente de desarrollo \ud83d\udcbb"),(0,r.kt)("p",null,"En surbtc la librer\xeda est\xe1 configurada para activarse en el ambiente de desarrollo definiendo la siguiente variable de entorno:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-env",metastring:'title=".env.local"',title:'".env.local"'},"MOCK_REQUESTS=true\n")),(0,r.kt)("p",null,"Al agregar esta variable podr\xe1s navegar por el sitio usando los mocks que tenemos definidos. Tal como cuando se hacen requests de verdad, podr\xe1s ver los requests y respuestas en la pesta\xf1a Network de las dev tools del navegador. "),(0,r.kt)("h2",{id:"ejemplo-en-detalle-"},"Ejemplo en detalle \ud83d\udd0d"),(0,r.kt)("p",null,"Digamos que tenemos un componente ",(0,r.kt)("inlineCode",{parentName:"p"},"<NewsBanner />")," con un mensaje que ve el usuario al ingresar\nal sitio web que se debe presentar hasta un m\xe1ximo de 3 veces, y este valor est\xe1 dado por un request al endpoint ",(0,r.kt)("inlineCode",{parentName:"p"},"/user_metadata"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/features/news-banner/index.tsx"',title:'"src/features/news-banner/index.tsx"'},'const NewsBanner = () => {\n  // aqu\xed enviamos un request a /user_metadata\n  // y retornamos null si el valor recibido es mayor a 3\n  return (\n    <div\n      testID="news-banner"\n    >\n      // ...\n    </div>\n  );\n};\n')),(0,r.kt)("p",null,"Entonces para poder testear este componente o usarlo en local podemos construir un mock como ",(0,r.kt)("a",{parentName:"p",href:"#define-handler"},"el que definimos antes"),"."),(0,r.kt)("h3",{id:"esperar-respuesta"},"Esperar respuesta"),(0,r.kt)("p",null,"Si quieres utilizar la respuesta del request ",(0,r.kt)("a",{parentName:"p",href:"#define-handler"},"previamente definido en el handler"),"\ny as\xed validar alg\xfan cambio en el DOM, s\xf3lo es necesario esperar que se renderice el componente:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/features/news-banner/__tests__/index.spec.js"',title:'"src/features/news-banner/__tests__/index.spec.js"'},'describe("NewsBanner", () => {\n  it("displays when flag is active and user has seen the banner less than 3 times", async () => {\n    const { getByTestId } = renderComponent();\n\n    await findByTestId("news-banner");\n\n    expect(getByTestId("news-banner")).toBeTruthy();\n  });\n});\n')),(0,r.kt)("h3",{id:"sobreescribir-respuesta"},"Sobreescribir respuesta"),(0,r.kt)("p",null,"Si quieres sobrescribir la respuesta del request definida en el archivo ",(0,r.kt)("inlineCode",{parentName:"p"},"handlers.js"),", puedes volver a definirla al llamar a ",(0,r.kt)("inlineCode",{parentName:"p"},"server.use"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/features/news-banner/__tests__/index.spec.js"',title:'"src/features/news-banner/__tests__/index.spec.js"'},'describe("NewsBanner", () => {\n  context("when the user has seen the banner more than 3 times", async () => {\n    server.use(\n      rest.get(\'/api/v2/user_metadata\', (req, res, ctx) =>\n        res(\n          ctx.json({\n            user_metadata: {\n              value: \'{"count":4}\',\n            },\n          })\n        )\n      )\n    );\n  });\n});\n')),(0,r.kt)("p",null,"En buda-expo tenemos definido el helper ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/budacom/buda-expo/blob/master/src/mocks/helpers.jsx"},(0,r.kt)("inlineCode",{parentName:"a"},"overrideValue"))," que se encarga de llamar a ",(0,r.kt)("inlineCode",{parentName:"p"},"server.use")," con los par\xe1metros correspondientes."))}u.isMDXComponent=!0}}]);