"use strict";(self.webpackChunkthe_codex_docusaurus=self.webpackChunkthe_codex_docusaurus||[]).push([[953],{3905:(e,n,a)=>{a.d(n,{Zo:()=>u,kt:()=>g});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function c(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=t.createContext({}),i=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},u=function(e){var n=i(e.components);return t.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=i(a),g=r,m=p["".concat(s,".").concat(g)]||p[g]||d[g]||o;return a?t.createElement(m,l(l({ref:n},u),{},{components:a})):t.createElement(m,l({ref:n},u))}));function g(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=p;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var i=2;i<o;i++)l[i]=a[i];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}p.displayName="MDXCreateElement"},6272:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var t=a(7462),r=(a(7294),a(3905));const o={},l="Interacci\xf3n entre React y Angular",c={unversionedId:"guia-frontend/code/react_angular",id:"guia-frontend/code/react_angular",title:"Interacci\xf3n entre React y Angular",description:"Si bien nos encontramos en una migraci\xf3n desde Angular a React, a veces, es necesario hacer que estos interactuen, en esta gu\xeda podr\xe1s encontrar ejemplos de uso para los casos m\xe1s comunes",source:"@site/docs/guia-frontend/code/react_angular.md",sourceDirName:"guia-frontend/code",slug:"/guia-frontend/code/react_angular",permalink:"/the-codex/guia-frontend/code/react_angular",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Uso de props spreading",permalink:"/the-codex/guia-frontend/code/props-spreading"},next:{title:"Testing",permalink:"/the-codex/testing"}},s={},i=[{value:"Ejecutar c\xf3digo de angular desde react",id:"ejecutar-c\xf3digo-de-angular-desde-react",level:2},{value:"Ejecutar c\xf3digo de react desde angular",id:"ejecutar-c\xf3digo-de-react-desde-angular",level:2},{value:"Definimos la funci\xf3n a compartir",id:"definimos-la-funci\xf3n-a-compartir",level:3}],u={toc:i};function d(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,t.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"interacci\xf3n-entre-react-y-angular"},"Interacci\xf3n entre React y Angular"),(0,r.kt)("p",null,"Si bien nos encontramos en una migraci\xf3n desde Angular a React, a veces, es necesario hacer que estos interactuen, en esta gu\xeda podr\xe1s encontrar ejemplos de uso para los casos m\xe1s comunes"),(0,r.kt)("h2",{id:"ejecutar-c\xf3digo-de-angular-desde-react"},"Ejecutar c\xf3digo de angular desde react"),(0,r.kt)("p",null,"Para este caso, digamos que necesitamos ocultar un componente de angular desde react"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="app/assets/javascripts/surBTC/controllers/portfolio_controller.js"',title:'"app/assets/javascripts/surBTC/controllers/portfolio_controller.js"'}," // ...\nController.$inject = [\n     // ...\n    'reactAngularService',\n\n  ];\n  function Controller(\n     // ...\n    reactAngular\n  ) { \n\n    // Definimos una variable que permita ocultar la vista de angular\n     vm.showBalance = true;\n\n    // Creamos una funci\xf3n que permite cambiar el valor de la funci\xf3n\n    vm.toggleShowBalance = function (showBalance) {\n      vm.showBalance =\n        showBalance === undefined ? !vm.showBalance : showBalance;\n    };\n\n    // Compartimos la funci\xf3n con react\n    reactAngular.shareFunction(\n      'portfolio.toggleShowBalance',\n      vm.toggleShowBalance\n    );\n    //...\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="app/react/features/portfolio/components/NewUsersInstructions.tsx"',title:'"app/react/features/portfolio/components/NewUsersInstructions.tsx"'},"\nimport { reactAngular } from '@/shared/utils/reactAngular';\n\nconst NewUsersInstructions = (props: Props) => {\n\n// Cuando el usuario presiona el bot\xf3n, le pedimos a angular que muestre el balanace\n const hideBanner = () => {\n    reactAngular('portfolio.toggleShowBalance', [true]);\n  };\n\n//  por defecto, el balance se oculta\n  reactAngular('portfolio.toggleShowBalance', [false]);\n  return (<div>\n     <Button onClick={hideBanner} variant=\"primary-outlined\" className=\"w-full md:w-1/2\">\n            {I18n.t('portfolio.new_user_instructions.deposit_later')}\n          </Button>\n        </div>)\n}\n\n")),(0,r.kt)("p",null,"Definimos el tipo "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="app/react/shared/utils/reactAngular.ts"',title:'"app/react/shared/utils/reactAngular.ts"'},"\n// ...\ntype reactAngularServiceTypes = {\n    // ...\n      'portfolio.toggleShowBalance': (value: boolean) => void;\n}\n")),(0,r.kt)("h2",{id:"ejecutar-c\xf3digo-de-react-desde-angular"},"Ejecutar c\xf3digo de react desde angular"),(0,r.kt)("p",null,"En este ejemplo, necesitamos mostrar un modal de react cuando el usuario presiona un bot\xf3n, y adem\xe1s recibe un valor (safeProcessAttemptId) que utilizara para desarrollar el resto de su logica"),(0,r.kt)("h3",{id:"definimos-la-funci\xf3n-a-compartir"},"Definimos la funci\xf3n a compartir"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="app/react/features/safe_process_attempts/pages/WaitingForApproval.tsx"',title:'"app/react/features/safe_process_attempts/pages/WaitingForApproval.tsx"'},"\nimport { reactAngular, setOnModalHiddenCallbackFunction } from '@/shared/utils/reactAngular';\n\n\nexport const WaitingForApproval = () => {\n  const [shouldShow, setShouldShow] = useState(false);\n\n  // 1\n  const sharedFunctionCallback = useRef<setOnModalHiddenCallbackFunction>();\n\n  useEffect(() => {\n    sharedFunctionCallback.current = ({ visible, safeProcessAttemptId }) => {\n      setShouldShow(visible);\n      if (safeProcessAttemptId) setSafeProcessId(safeProcessAttemptId);\n    };\n\n    // 2\n    reactAngular('safeProcessAttempts.setOnModalHiddenCallback', [sharedFunctionCallback.current]);\n  }, [setSafeProcessId]);\n\n  if(!shouldShow) return null;\n  return (<div>the modal</div>);\n  \n}\n")),(0,r.kt)("p",null,"En 1, definimos definimos una referencia a la funci\xf3n que compartiremos para permitir que se mantenga constante entre ejecuciones"),(0,r.kt)("p",null,"En 2, compartimos esta funci\xf3n con angular"),(0,r.kt)("p",null,"Adem\xe1s es necesario definir el tipo de la funci\xf3n a compartir"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="app/react/shared/utils/reactAngular.ts"',title:'"app/react/shared/utils/reactAngular.ts"'},"\n//...\ntype SafeProcessModalCallbackArgs = {\n  visible: boolean;\n  safeProcessAttemptId?: string;\n};\nexport type setOnModalHiddenCallbackFunction = ({\n  visible,\n  safeProcessAttemptId,\n}: SafeProcessModalCallbackArgs) => void;\n\ntype reactAngularServiceTypes = {\n    // ...\n    'safeProcessAttempts.setOnModalHiddenCallback': (\n    callback: setOnModalHiddenCallbackFunction,\n  ) => void;\n    // ...\n}\n\n")),(0,r.kt)("p",null,"A continuaci\xf3n, es necesario editar el controllador de angular desde el cual llamaremos a la funci\xf3n"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="app/assets/javascripts/surBTC/controllers/new_withdrawal_controller.js" showLineNumbers',title:'"app/assets/javascripts/surBTC/controllers/new_withdrawal_controller.js"',showLineNumbers:!0},"\n\n// Pasamos $window y reactAngularService al controlador\n(function () {\n    // ...\n    '$window',\n    'reactAngularService',\n    // ... \n}\n\n// ...\n\n\n    function Controller(\n        // ...\n        $window,\n        reactAngular\n        // ...\n    ) {\n        // helper donde guardaremos la config del bridge\n        vm.reactAngularBridge = {\n        callback: null,\n        // Recibe el callback que definimos en react y lo guardam en una variable\n        setCallback: function (callback) {\n            vm.reactAngularBridge.callback = callback;\n        },\n        // funci\xf3n para hacer trigger del callback en un futuro\n        triggerCallback: function (value) {\n            if (typeof vm.reactAngularBridge.callback === 'function') {\n            vm.reactAngularBridge.callback(value);\n            }\n        },\n        };\n        vm.requiresSafeProcessAttempt = false;\n\n        // Compartimos la funci\xf3n con react \n        reactAngular.shareFunction(\n        'safeProcessAttempts.setOnModalHiddenCallback',\n        reactAngularBridge.setCallback\n        );\n\n        // Luego de ejecutar alguna logica, llamamos a la funci\xf3n\n\n        reactAngularBridge.triggerCallback(\n            {\n            visible: true,\n            safeProcessAttemptId: 1\n            }\n        );\n\n    }\n)\n\n")))}d.isMDXComponent=!0}}]);