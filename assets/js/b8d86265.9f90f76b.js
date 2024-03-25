"use strict";(self.webpackChunkthe_codex_docusaurus=self.webpackChunkthe_codex_docusaurus||[]).push([[396],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),c=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=c(e.components);return a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(t),m=r,b=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return t?a.createElement(b,i(i({ref:n},l),{},{components:t})):a.createElement(b,i({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=p;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8188:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=t(7462),r=(t(7294),t(3905));const o={},i="RabbitMQ",s={unversionedId:"guia-backend/Comunicaci\xf3n/rabbitmq",id:"guia-backend/Comunicaci\xf3n/rabbitmq",title:"RabbitMQ",description:"Rabbit es un broker de mensajes que permite construir distintos esquemas de comunicaci\xf3n tipo pub-sub.",source:"@site/docs/guia-backend/Comunicaci\xf3n/rabbitmq.md",sourceDirName:"guia-backend/Comunicaci\xf3n",slug:"/guia-backend/Comunicaci\xf3n/rabbitmq",permalink:"/the-codex/guia-backend/Comunicaci\xf3n/rabbitmq",draft:!1,editUrl:"https://github.com/budacom/the-codex/edit/master/docs/guia-backend/Comunicaci\xf3n/rabbitmq.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Gu\xeda Backend",permalink:"/the-codex/guia-backend"},next:{title:"Happy queues",permalink:"/the-codex/guia-backend/Estandares/happy_queues"}},u={},c=[{value:"Como lo usamos en Buda",id:"como-lo-usamos-en-buda",level:2},{value:"Como se ve en el c\xf3digo cuando queremos publicar eventos",id:"como-se-ve-en-el-c\xf3digo-cuando-queremos-publicar-eventos",level:2},{value:"Referencias de infrastructura",id:"referencias-de-infrastructura",level:3},{value:"Como se ve en el c\xf3digo cuando queremos consumir eventos",id:"como-se-ve-en-el-c\xf3digo-cuando-queremos-consumir-eventos",level:2},{value:"Cuando usarlo?",id:"cuando-usarlo",level:2}],l={toc:c};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rabbitmq"},"RabbitMQ"),(0,r.kt)("p",null,"Rabbit es un broker de mensajes que permite construir distintos esquemas de comunicaci\xf3n tipo pub-sub."),(0,r.kt)("h2",{id:"como-lo-usamos-en-buda"},"Como lo usamos en Buda"),(0,r.kt)("p",null,"Rabbit se usa principalmente para comunicar eventos desde nuestra aplicaciones de backend como patabit o investments a surbtc, desde donde se despachan notificaciones a los usuarios (emails, push, websockets, etc)."),(0,r.kt)("p",null,"Actualmente tenemos 4 colas de mensajes distintas:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"patabit.events"),": eventos gen\xe9ricos generados por patabit"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"investments.events"),": eventos gen\xe9ricos generados por investments"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"loans.events"),": eventos gen\xe9ricos generados por loans"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"patabit.realtime"),": eventos generados por patabit en la cola de trading, deben ser consumidos en el orden en que son publicados.")),(0,r.kt)("h2",{id:"como-se-ve-en-el-c\xf3digo-cuando-queremos-publicar-eventos"},"Como se ve en el c\xf3digo cuando queremos publicar eventos"),(0,r.kt)("p",null,"Utilizamos la gema ",(0,r.kt)("inlineCode",{parentName:"p"},"bunny")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/ruby-amqp/bunny"},"https://github.com/ruby-amqp/bunny")),(0,r.kt)("p",null,"Luego incluimos el siguiente m\xf3dulo en el proyecto"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"module EventPublishUtils\n  extend self\n\n  def publish(data, routing_key = 'events')\n    exchange.publish(data, routing_key: routing_key, persistent: true)\n  end\n\n  def exchange\n    Thread.current[:pub_exchange] ||= channel.direct(\"patabit.events\", passive: true)\n  end\n\n  def channel\n    # sharing channels between threads is not recommended\n    Thread.current[:pub_channel] ||= connection.create_channel\n  end\n\n  def connection\n    @connection ||= Bunny.new(\n      host: ENV.fetch('RABBIT_HOST', 'rabbitmq'),\n      vhost: ENV.fetch('RABBIT_VHOST'),\n      port: ENV.fetch('RABBIT_PORT'),\n      username: ENV.fetch('RABBIT_USERNAME'),\n      password: ENV.fetch('RABBIT_PASSWORD'),\n      connection_name: \"patabit/#{ENV.fetch('HOSTNAME', '')}\"\n    ).start\n  end\nend\n")),(0,r.kt)("p",null,"Como se puede ver en el m\xe9todo ",(0,r.kt)("inlineCode",{parentName:"p"},"exchange"),", estamos usando el modo 'pasivo', lo que significa que la topograf\xeda de exchange, bindings y colas est\xe1 definida a nivel de schema en la infraestructura. Por lo que cuando se agrega un nuevo elemento, es importante que se haga a nivel de infra y no en el c\xf3digo."),(0,r.kt)("h3",{id:"referencias-de-infrastructura"},"Referencias de infrastructura"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/budacom/k8s-gitops/tree/master/clusters/apps-prod/patabit-engine"},"https://github.com/budacom/k8s-gitops/tree/master/clusters/apps-prod/patabit-engine"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/budacom/surbtc-infra/tree/master/services/rabbitmq"},"https://github.com/budacom/surbtc-infra/tree/master/services/rabbitmq")),(0,r.kt)("h2",{id:"como-se-ve-en-el-c\xf3digo-cuando-queremos-consumir-eventos"},"Como se ve en el c\xf3digo cuando queremos consumir eventos"),(0,r.kt)("p",null,"[WIP]"),(0,r.kt)("h2",{id:"cuando-usarlo"},"Cuando usarlo?"),(0,r.kt)("p",null,"Cuando quiero empujar un evento que quiero que otra aplicaci\xf3n consuma. "),(0,r.kt)("p",null,"Por ahora no hay una garant\xeda 'estricta' de que los mensajes enviados por rabbit vayan a alcanzar a su destinatario, para este tipo de garant\xedas prefiere usar una llamada al API de la otra aplicaci\xf3n directamente."))}d.isMDXComponent=!0}}]);