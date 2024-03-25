"use strict";(self.webpackChunkthe_codex_docusaurus=self.webpackChunkthe_codex_docusaurus||[]).push([[99],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>p});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=d(t),p=r,b=m["".concat(l,".").concat(p)]||m[p]||u[p]||o;return t?a.createElement(b,s(s({ref:n},c),{},{components:t})):a.createElement(b,s({ref:n},c))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var d=2;d<o;d++)s[d]=t[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8331:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=t(7462),r=(t(7294),t(3905));const o={},s="Modelos Rails",i={unversionedId:"guia-backend/Estandares/modelos",id:"guia-backend/Estandares/modelos",title:"Modelos Rails",description:"Consideraciones",source:"@site/docs/guia-backend/Estandares/modelos.md",sourceDirName:"guia-backend/Estandares",slug:"/guia-backend/Estandares/modelos",permalink:"/the-codex/guia-backend/Estandares/modelos",draft:!1,editUrl:"https://github.com/budacom/the-codex/edit/master/docs/guia-backend/Estandares/modelos.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Migraciones",permalink:"/the-codex/guia-backend/Estandares/migraciones"},next:{title:"Observer",permalink:"/the-codex/guia-backend/Patrones/observer"}},l={},d=[{value:"Consideraciones",id:"consideraciones",level:2},{value:"AASM",id:"aasm",level:3},{value:"Anotaciones",id:"anotaciones",level:3},{value:"Callbacks",id:"callbacks",level:3},{value:"Concerns",id:"concerns",level:3},{value:"Orden de las secciones",id:"orden-de-las-secciones",level:2}],c={toc:d};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"modelos-rails"},"Modelos Rails"),(0,r.kt)("h2",{id:"consideraciones"},"Consideraciones"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Todos los modelos deben heredar de ",(0,r.kt)("inlineCode",{parentName:"li"},"ApplicationRecord"))),(0,r.kt)("h3",{id:"aasm"},"AASM"),(0,r.kt)("p",null,"Utilizamos AASM para m\xe1quinas de estado en nuestro modelos, en general sobre el atributo ",(0,r.kt)("inlineCode",{parentName:"p"},"state"),".\nUtilizamos ",(0,r.kt)("inlineCode",{parentName:"p"},"whiny_persistence: true"),". Esto hace que se levante una excepci\xf3n cuando falla una transici\xf3n."),(0,r.kt)("h3",{id:"anotaciones"},"Anotaciones"),(0,r.kt)("p",null,"Utilizamos ",(0,r.kt)("inlineCode",{parentName:"p"},"rake annotate_models")," para actualizar las anotaciones del modelo despu\xe9s de una migraci\xf3n. Es importante que los PR que incluyan migraciones incluyan tambi\xe9n anotaciones actualizadas."),(0,r.kt)("h3",{id:"callbacks"},"Callbacks"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Preferir callbacks en m\xe9todos y no inline"),(0,r.kt)("li",{parentName:"ul"},"La implementaci\xf3n de los callbacks deber\xeda ser en un m\xe9todo privado."),(0,r.kt)("li",{parentName:"ul"},"Callbacks de efectos 'secundarios' deber\xedan ir en Observers")),(0,r.kt)("h3",{id:"concerns"},"Concerns"),(0,r.kt)("p",null,"Los concerns permiten definir m\xe9todos y atributos de un modelo en un m\xf3dulo separado, para poder asi reusarlo o distribuir el c\xf3digo. En nuestros modelos usamos concerns de dos maneras:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Para reutilizar un comportamiento en varios modelos")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"module Removable\n  extend ActiveSupport::Concern\n\n  class_methods do\n    def remove_all\n        update_all(removed_at: Time.current)\n    end\n  end\n\n  included do\n    def removed?\n        removed_at.present?\n    end\n  end\nend\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Para encapsular comportamientos de un modelo y asi separarlo en varios archivos m\xe1s peque\xf1os.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"# Falta definir namespacing\n\nmodule Removable\n  extend ActiveSupport::Concern\n\n  class_methods do\n    def remove_all\n        update_all(removed_at: Time.current)\n    end\n  end\n\n  included do\n    def removed?\n        removed_at.present?\n    end\n  end\nend\n")),(0,r.kt)("h2",{id:"orden-de-las-secciones"},"Orden de las secciones"),(0,r.kt)("p",null,"Los modelos deber\xedan seguir "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"class Modelo < ApplicationRecord\n    ## 1. Includes\n    include AASM\n\n    ## 2. Constantes\n    STATE_REASONS = {\n        first_deposit_retention: \"First deposit retention\",\n      }\n\n    ## 3.1 Attributos - asociaciones\n    belongs_to :account\n\n    ## 3.2 Attributos - serializables\n    serialize :lista, Array\n\n    ## 3.3 Attributos - money\n    monetize :amount_cents\n\n    ## 3.4 Atributos - AASM\n    aasm column: :state, whiny_persistence: true do\n        state :confirming\n        state :rejecting\n        state :retaining\n    end\n\n    # 4.1 Validaciones builtin\n    validates :foo, :bar, presence: true\n    validates :foo, numericality: { greater_than: 0 }\n\n    # 4.2 Validaciones custom\n\n    # 5. Callbacks\n    after_save :do_something\n\n    # 6. Scopes\n    scope :confirmed_or_rejected, where(state: ['confirmed', 'rejected'])\n\n    # 7.1 M\xe9todos p\xfablicos de clase\n\n    def self.confirm_all; end\n\n    # 7.2 M\xe9todos p\xfablicos de instancia\n\n    def update_amount; end\n\n    # 7.3 M\xe9todos privados\n\n    private\n\n    def do_something; end\n\n    # 9. Anotaciones\n      # == Schema Information\n      #\n      # Table name: deposits\n      #\n      #  id                    :integer         primary key\n      #  state                 :string(255)\nend\n")))}u.isMDXComponent=!0}}]);