(this["webpackJsonpbastientraille.fr_2.0"]=this["webpackJsonpbastientraille.fr_2.0"]||[]).push([[0],{14:function(e,t,i){},16:function(e,t,i){},17:function(e,t,i){"use strict";i.r(t);var n=i(1),s=i.n(n),a=i(9),c=i.n(a),r=i(5),o=(i(14),i(2)),l=i.p+"static/media/frenchImg.078f4950.png",d=i.p+"static/media/englishImg.dd09601f.png",h=i(3);var u=i(0),m=Object(n.createContext)({french:!1,setFrench:function(){}}),j=m,b=function(e){var t=e.children,i=Object(n.useState)(!1),s=Object(h.a)(i,2),a=s[0],c=s[1],r=Object(n.useState)(!1),o=Object(h.a)(r,2),l=o[0],d=o[1],j=Object(n.useState)({}),b=Object(h.a)(j,2),p=b[0],g=b[1],v=Object(n.useState)([]),f=Object(h.a)(v,2),x=f[0],O=f[1],A=function(){var e=Object(n.useState)({width:window.innerWidth,height:window.innerHeight}),t=Object(h.a)(e,2),i=t[0],s=t[1];return Object(n.useEffect)((function(){function e(){s({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),i}();return Object(u.jsx)(m.Provider,{value:{french:a,setFrench:c,checked:l,setChecked:d,handleCheck:function(){d(!l)},currentBackground:p,setCurrentBackground:g,backgrounds:x,setBackgrounds:O,size:A},children:t})},p=i(8),g=i.p+"static/media/sunsetVideo.6ec78fc4.mp4",v=i.p+"static/media/forestVideo.ca9031f0.mp4",f=i.p+"static/media/oceanVideo.a27e44e1.mp4",x=i.p+"static/media/skyVideo.c4779696.mp4",O=i.p+"static/media/skyImg.ceefc135.png",A=i.p+"static/media/spaceVideo.b5a525e2.mp4",N=i.p+"static/media/spaceImg.a1774630.png",k=i.p+"static/media/forestImg.46ba2849.png",S=i.p+"static/media/oceanImg.9b44d4d3.png",w=i.p+"static/media/sunsetImg.fe3cadf7.png",y=i.p+"static/media/ocean.de3a11e3.mp4",E=i.p+"static/media/sunset.d5541765.mp4",R=i.p+"static/media/sky.497580a1.mp4",C=i.p+"static/media/forest.d3f29507.mp4",F=i.p+"static/media/space.40d98f65.mp4",T=[{theme:"sunset",image:w,video:g},{theme:"ocean",image:S,video:f},{theme:"space",image:N,video:A},{theme:"sky",image:O,video:x},{theme:"forest",image:k,video:v}],I=[{theme:"sunset",image:w,video:E},{theme:"ocean",image:S,video:y},{theme:"space",image:N,video:F},{theme:"sky",image:O,video:R},{theme:"forest",image:k,video:C}],M=function(){var e=Object(n.useContext)(j),t=e.french,i=e.currentBackground,s=e.setCurrentBackground,a=e.backgrounds,c=e.size,r=e.setChecked;return c.width>1370?Object(u.jsxs)("div",{className:"theme-container",children:[Object(u.jsx)("p",{children:t?"Choissisez votre ambiance":"Select your ambiance"}),Object(u.jsx)("div",{className:"bg-buttons",children:T.map((function(e,t){if(e.theme!==i.theme)return Object(u.jsx)("div",{className:"bg-".concat(e.theme),onClick:function(e){return function(e){var t=a.find((function(t){return e===t.theme}));s(t),r(!1)}(e.target.alt)},children:Object(u.jsx)("img",{src:e.image,alt:e.theme})},t)}))})]}):null},L=function(){var e=Object(n.useContext)(j),t=e.currentBackground,i=e.setCurrentBackground,s=e.backgrounds,a=e.setChecked;return Object(u.jsx)("div",{className:"bg-buttons-mobile",children:T.map((function(e,n){if(e.theme!==t.theme)return Object(u.jsx)("div",{className:"bg-".concat(e.theme),onClick:function(e){return function(e){var t=s.find((function(t){return e===t.theme}));i(t),a(!1)}(e.target.alt)},children:Object(u.jsx)("img",{src:e.image,alt:e.theme})},n)}))})},P=function(){var e=Object(n.useContext)(j),t=e.currentBackground,i=e.size,s=e.setCurrentBackground,a=e.backgrounds,c=e.setBackgrounds;return Object(n.useEffect)((function(){s(i.width<i.height?Object(p.a)({},I[0]):Object(p.a)({},T[0]))}),[]),Object(n.useEffect)((function(){c(i.width<i.height?I:T)}),[i]),Object(n.useEffect)((function(){var e=a.find((function(e){return e.theme===t.theme}));e&&s(e)}),[a]),Object(u.jsx)("div",{className:"full-screen",children:Object(u.jsx)("video",{className:"video",autoPlay:!0,preload:"auto",loop:!0,muted:!0,src:t.video,type:"video/mp4"})})},B=function(){var e=Object(n.useContext)(j),t=e.french,i=e.setFrench,s=e.checked,a=e.handleCheck;return Object(u.jsxs)("div",{className:"navigation",children:[Object(u.jsx)("input",{type:"checkbox",checked:s,readOnly:!0,className:"navigation__checkbox",id:"navi-toggle",onClick:a}),Object(u.jsx)("label",{htmlFor:"navi-toggle",className:"navigation__button",children:Object(u.jsx)("span",{className:"navigation__icon",children:"\xa0"})}),Object(u.jsx)("div",{className:"navigation__background",children:"\xa0"}),Object(u.jsx)("nav",{className:"navigation__nav",children:Object(u.jsxs)("ul",{className:"navigation__list",children:[Object(u.jsx)("li",{className:"navigation__item",children:Object(u.jsx)(r.b,{onClick:a,className:function(e){return e.isActive?"navigation__link__active":"navigation__link"},to:"/welcome",children:t?"Acceuil":"Home"})}),Object(u.jsx)("li",{className:"navigation__item",children:Object(u.jsx)(r.b,{onClick:a,className:function(e){return e.isActive?"navigation__link__active":"navigation__link"},to:"/mytech",children:t?"Mes tech":"My Tech"})}),Object(u.jsx)("li",{className:"navigation__item",children:Object(u.jsx)(r.b,{onClick:a,className:function(e){return e.isActive?"navigation__link__active":"navigation__link"},to:"/myprojects",children:t?"Mes projets":"My Projects"})}),Object(u.jsx)("li",{className:"navigation__item",children:Object(u.jsx)(r.b,{onClick:a,className:function(e){return e.isActive?"navigation__link__active":"navigation__link"},to:"/aboutme",children:t?"A propos de moi":"About Me"})}),Object(u.jsx)("li",{className:"navigation__item",children:Object(u.jsxs)("div",{className:"navigation__flags-container",children:[Object(u.jsx)("div",{onClick:function(){return i(!0)},className:"navigation__flags-container__french",children:Object(u.jsx)("img",{src:l,alt:"french"})}),Object(u.jsx)("div",{onClick:function(){return i(!1)},className:"navigation__flags-container__english",children:Object(u.jsx)("img",{src:d,alt:"english"})})]})}),Object(u.jsx)("li",{className:"navigation__item",children:Object(u.jsx)("div",{className:"navigation__flags-container",children:Object(u.jsx)(L,{})})})]})})]})},q=function(){var e=Object(n.useContext)(j),t=e.french,i=e.setFrench;return Object(u.jsxs)("div",{className:"header",children:[Object(u.jsx)(B,{}),Object(u.jsxs)("ul",{className:"menu",children:[Object(u.jsx)("li",{children:Object(u.jsx)(r.b,{className:function(e){return e.isActive?"activeLink":"nav-link"},to:"/welcome",children:t?"Acceuil":"Home"})}),Object(u.jsx)("li",{children:Object(u.jsx)(r.b,{className:function(e){return e.isActive?"activeLink":"nav-link"},to:"/mytech",children:t?"Mes tech":"My Tech"})}),Object(u.jsx)("li",{children:Object(u.jsx)(r.b,{className:function(e){return e.isActive?"activeLink":"nav-link"},to:"/myprojects",children:t?"Mes projets":"My Projects"})}),Object(u.jsx)("li",{children:Object(u.jsx)(r.b,{className:function(e){return e.isActive?"activeLink":"nav-link"},to:"/aboutme",children:t?"A propos de moi":"About Me"})}),Object(u.jsx)("li",{className:"li-languages",children:Object(u.jsxs)("div",{className:"flags-container",children:[Object(u.jsx)("div",{onClick:function(){return i(!0)},className:"french",children:Object(u.jsx)("img",{src:l,alt:"french"})}),Object(u.jsx)("div",{onClick:function(){return i(!1)},className:"english",children:Object(u.jsx)("img",{src:d,alt:"english"})})]})})]})]})},V=i.p+"static/media/github.f9edc44f.svg",D=i.p+"static/media/linkedin.32e20978.svg",W=i.p+"static/media/email.a49e0158.png",z=function(){var e=Object(n.useContext)(j).french;return Object(u.jsx)("div",{className:"landing-screen",children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("div",{className:"div-name",children:Object(u.jsx)("h1",{children:"BASTIEN TRAILLE"})}),Object(u.jsx)("div",{className:"div-dev",children:Object(u.jsx)("h1",{children:e?"D\xe9veloppeur Web Full Stack":"Full Stack Web Developer"})}),Object(u.jsxs)("div",{className:"links",children:[Object(u.jsx)("a",{href:"https://github.com/bast44trl",target:"blank",className:"git",children:Object(u.jsx)("img",{src:V,alt:"My Github account"})}),Object(u.jsx)("a",{href:"mailto:bastien.traille@gmail.com",children:Object(u.jsx)("img",{src:W,alt:"email icon"})}),Object(u.jsx)("a",{href:"https://www.linkedin.com/in/bastientraille/",className:"linkedin",children:Object(u.jsx)("img",{src:D,alt:"My LinkedIn account"})})]})]})})},G=function(e){var t=e.logo,i=e.techName,n=e.techText,s=e.link;return Object(u.jsx)("div",{className:"tech-container",children:Object(u.jsxs)("a",{href:s,target:"_blank",rel:"noreferrer",children:[Object(u.jsx)("img",{src:t,alt:""}),Object(u.jsxs)("div",{className:"logo-card-infos",children:[Object(u.jsx)("h4",{className:"tech-name-p",children:i}),Object(u.jsx)("p",{className:"tech-text-div",children:n})]})]})})},J=i.p+"static/media/express.75fff9be.svg",H=i.p+"static/media/figma.72ff3502.svg",Z=i.p+"static/media/nodejs.52cbf9a8.svg",X=i.p+"static/media/postman.e65afafe.svg",K=i.p+"static/media/react.e68b35f4.svg",Q=i.p+"static/media/mysql.6d88cbd9.svg",Y=i.p+"static/media/vs-code.b8b1e001.svg",U=[{techTextFrench:"React.js est une biblioth\xe8que JavaScript dont le but principal est de faciliter la cr\xe9ation d'application web monopage, via la cr\xe9ation de composants.",techTextEnglish:"React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library[3] for building user interfaces based on UI components.",techName:"ReactJS",logo:K,link:"https://reactjs.org/"},{techTextFrench:"Sass est un langage de styles qui est compil\xe9 en CSS. Il permet d'utiliser des variables, r\xe8gles nich\xe9es, mixins, fonctions et plus encore.",techTextEnglish:"Sass is a stylesheet language that\u2019s compiled to CSS. It allows you to use variables, nested rules, mixins, functions, and much more.",techName:"Sass",logo:i.p+"static/media/sass.8aa78a83.svg",link:"https://sass-lang.com/"},{techTextFrench:"Tailwind CSS analyse toutes les 'class names' afin de g\xe9n\xe9rer le CSS dans un fichier CSS statique.",techTextEnglish:"Tailwind CSS works by scanning all of your class names, generating the corresponding styles and then writing them to a static CSS file.",techName:"Tailwind CSS",logo:i.p+"static/media/tailwind.315d0ac2.svg",link:"https://tailwindcss.com/"},{techTextFrench:"Node.js est un environnement bas niveau permettant l\u2019ex\xe9cution de JavaScript c\xf4t\xe9 serveur.",techTextEnglish:"Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.",techName:"NodeJS",logo:Z,link:"https://nodejs.org/"},{techTextFrench:"Express.js est un framework pour construire des applications web bas\xe9es sur Node.js.",techTextEnglish:"Express is a back end web application framework for Node.js, designed for building web applications and APIs.",techName:"Express",logo:J,link:"https://expressjs.com/"},{techTextFrench:"MySQL est un syst\xe8me de gestion de bases de donn\xe9es relationnelles (SGBDR)",techTextEnglish:"MySQL (Structured Query Language) is an open-source relational database management system (RDBMS)",techName:"MySql",logo:Q,link:"https://www.mysql.com/"},{techTextFrench:"Postman est une application permettant de construire et de tester des API.",techTextEnglish:"Postman is an API platform for building and using APIs. Postman simplifies each step of the API lifecycle so you can create better APIs\u2014faster.",techName:"Postman",logo:X,link:"https://www.postman.com/"},{techTextFrench:"GitHub est un service web d'h\xe9bergement et de gestion de d\xe9veloppement de logiciels, utilisant le logiciel de gestion de versions Git.",techTextEnglish:"GitHub is a provider of Internet hosting for software development and version control using Git.",techName:"GitHub",logo:V,link:"https://github.com/"},{techTextFrench:"Visual Studio Code est un \xe9diteur de code extensible d\xe9velopp\xe9 par Microsoft pour Windows, Linux et macOS.",techTextEnglish:"Visual Studio Code is a code editor redefined and optimized for building and debugging modern web and cloud applications.",techName:"Visual Studio Code",logo:Y,link:"https://code.visualstudio.com/"},{techTextFrench:"Figma est un \xe9diteur de graphiques vectoriels et un outil de prototypage.",techTextEnglish:"Figma is a vector graphics editor and prototyping tool which is primarily web-based, with additional offline features enabled by desktop applications.",techName:"Figma",logo:H,link:"https://www.figma.com/"}],_=function(){var e=Object(n.useContext)(j).french;return Object(u.jsx)("div",{className:"overlay",children:Object(u.jsxs)("div",{className:"tech-content",children:[Object(u.jsx)("h1",{className:e?"french-tech-title":"english-tech-title",children:e?"Mes langages et technologies":"Here are technologies I use"}),Object(u.jsx)("div",{className:"all-tech-container",children:U.map((function(t,i){return Object(u.jsx)(G,{className:"logo-card",index:i,logo:t.logo,techName:t.techName,techText:e?t.techTextFrench:t.techTextEnglish,link:t.link},i)}))})]})})},$=function(e){var t=e.type,i=e.length,n=e.details;return Object(u.jsxs)("div",{className:"section",children:[Object(u.jsxs)("div",{className:"section-title",children:[Object(u.jsx)("h1",{children:t}),Object(u.jsx)("h3",{children:i})]}),Object(u.jsx)("ul",{className:"section-infos",children:n.map((function(e,t){return Object(u.jsx)("li",{children:e.includes("Spartan")?Object(u.jsx)("a",{className:"spartan-a",href:"https://fr.spartan.com/fr/race/super",target:"blank",children:e}):e},t)}))})]})},ee=(i(16),function(){var e=Object(n.useContext)(j).french;return Object(u.jsxs)("div",{className:"about-me",children:[Object(u.jsx)("div",{className:"about-me-title",children:Object(u.jsx)("h1",{children:e?"Quelques trucs sur moi":"Some stuff about myself"})}),Object(u.jsx)("div",{className:"sections",children:[{typeFR:"Australie",typeEN:"AUSTRALIA",lenghtFR:"2 ans",lenghtEN:"2 years",detailsFR:["Voyage en sac \xe0 dos durant 7 mois","Educateur dans une cr\xe8che \xe0 Sydney durant 5 mois","Responsable d'une boutique DIESEL \xe0 Sydney durant 6 mois"],detailsEN:["Backpacking for 7 months around Australia","Educator in a Childcare Center in Sydney, NSW for 5 months","DIESEL Store manager in Sydney, NSW for 6 months"]},{typeFR:"Etats-Unis",typeEN:"USA",lenghtFR:"1 an",lenghtEN:"1 year",detailsFR:["6 mois \xe0 Seattle, WA","6 mois \xe0 San Francisco, CA","Jeune Homme aupair m'occupant d'un enfant autiste et de ses deux jeunes fr\xe8res"],detailsEN:["6 months in Seattle, WA","6 months in San Francisco, CA","Au Pair taking care of an autistic boy and his 2 younger brothers"]},{typeFR:"Sports",typeEN:"Sports",lenghtFR:"",lenghtEN:"",detailsFR:["Semi-Marathon de Seattle","Spartan Race de Sydney","2 fois m\xe9daill\xe9 des Championnats de France de Cyclisme sur piste"],detailsEN:["Seattle Half Marathon","Sydney Spartan Race","Track cycling national championships medalist"]},{typeFR:"Passe-temps",typeEN:"Hobbies",lenghtFR:"",lenghtEN:"",detailsFR:["Guitare basse","Fan de pop culture","Escalade en salle"],detailsEN:["Bass player","Pop culture enthousiast","Bouldering"]}].map((function(t,i){return Object(u.jsx)($,{type:e?t.typeFR:t.typeEN,length:e?t.lenghtFR:t.lenghtEN,details:e?t.detailsFR:t.detailsEN},i)}))})]})}),te=function(e){var t=e.title,i=e.image,s=e.techs,a=e.presentationText,c=e.presentationDuration,r=e.presentationDates,o=e.presentationTeam,l=e.link,d=Object(n.useContext)(j).french;return Object(u.jsx)("a",{href:l,target:"blank",children:Object(u.jsx)("div",{className:"rotation",children:Object(u.jsx)("div",{className:"project-card",children:Object(u.jsxs)("div",{className:"project-card-inner",children:[Object(u.jsxs)("div",{className:"project-card-front",children:[Object(u.jsx)("div",{className:"project-card-img",children:Object(u.jsx)("img",{src:i,alt:""})}),Object(u.jsx)("h2",{children:t})]}),Object(u.jsxs)("div",{className:"project-card-back",children:[Object(u.jsx)("h2",{children:t}),Object(u.jsx)("div",{className:"stats-tech",children:s&&s.map((function(e,t){return Object(u.jsx)("img",{src:e,alt:""},t)}))}),Object(u.jsxs)("div",{className:"card-back-stats",children:[Object(u.jsxs)("div",{className:"stats-duration",children:[Object(u.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAADcUlEQVR4nO2aS08UQRCAPx+AiSJo4kYj3BQQOZgIxAie1LMY4y8x/gPC42RCuIr6D9SDiRg0KpyWk2iIxosPPGhEJRE8COuhup3Z7Ox0z+68FvpLOjvbU91TVVPdXd0ZcDgcDsfOphmYBL4ApW1SVoAJZZuRiRwonFQZt3HAihI+byPcIAzjRYIR7a3thpVdu1NQJNfseAfs9V1vx2FgxEWA73pXZlokg1VE7/gIcA7IWoGsqdUBBWAReBmjLpkRNRMsAEuqTTERjeLB2i6T4DxiaIFy45fUf80ClZuRecP9Woq/z3rsAsqXwWrsA84Cc+p/H/AauAh89cltBbTdMtyvhbj6+Y/JU0eAVz65ZeBo3EokQGxDACTUi3hDoRGI1QGNiNsO2+DyAFwekGgekERpqDwgCVweYInLA3B5gMsDjNhMgkEUgEfABnAhPnUi0Q2MAJeB40AnsAdYBd5E6ajR8oB+ZEWyXTafAkNhHeYlDzCt703ANLIMloDvwG3gChIN+1XRkTGDRENJtZlClvTIDlj0GVzNeJC0uB4HvAjR4RDyJkvAOjAKHAyR17QBY6qNfkZFO5MD/G+9mvFJ0oRn/GckKYtKv2qrI63su4G85wHTeMZ3hMgtED6MOvCcMO2/kec8oB8Zv+uY37yNHQPIyrUFnIvSMCv0bD9qIWtrh/4i5lnUhmnTjTfbt1nI29rRjrc6nMpzJjiifu8Dv2Ls9yfwQF1fz7MDLqnfhwn0rfscgvwOgXeIXics5aPYoYfXh2oNg5aUtOvWlF6tQRYEoO2wWaZblexvf8OgzrKsi+qAIvaJmnbAWpwKx133Vl13BVkQgP/kahk4FiLbo+WqbYfnA5RLu+4jYnwvMh+Y+IZMnHPIueUsleeWml7fM3I7Cd5E9JqJ2M4mEu6p+zfA+1R2uFZNE6IL0WsVu0TIT9iZRTvwQ907CfJBcT3b2DTKWEQHaCcUqdxmT6o+H+uKZuUEHQl5LBvIxqheBlVfm8CZGPpLhSnECabtsIlOvJd8Kwa9UqMFeI7nhIEa+hjEM36W2g+DM6MNGct6OIwjk5mJdmTM/8Ez3qZdLmmh/FB0FbgDXEUSmwOq9Ki6u3iz/SYS9g335oMYwjsjtCmzhEx4jfyBdB9wDXHIaeAw8Bf4pMoT5CzhfVYKOhyO/PMPgWF0ntYNgTsAAAAASUVORK5CYII=",alt:""}),Object(u.jsx)("span",{children:c})]}),Object(u.jsxs)("div",{className:"stats-team",children:[Object(u.jsx)("img",{src:"data:image/png;base64,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",alt:""}),Object(u.jsx)("span",{children:"".concat(o,d?" \xe9tudiants d\xe9veloppeurs":" student devs")})]}),Object(u.jsxs)("div",{className:"stats-calendar",children:[Object(u.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAADjUlEQVR4nO2dO2gUURSGv5jESEw0hogSQRBrH4WChTYWliJaKVjYiVUECwutbBRsU4i1WAj2gp0WikUiEkXEVEpAQcSYxDw0Fmdi4rCz2czO48yd/4MlmT1n5z7+nTv3n7uzC0IIIYQQQgghhBCiZDoCj1WKbuAj8CTQWOUYApaBr4HGMqUrx31vBrYCA9F2B7AjllPl2DSwhGN6gSvAU+ydtBz44zcwBTwGLgCd7XdhdieqM8AoMLzmuQVgJipjAGvE9wblVzXWz/8jzARwCXhFyVwF/mCVfQGcB3atiXsa77OMbQL2ApeBD1F8Fjjd4PWFcRYTYwkTptER56Hz8oyBzcJGo5wZ4HBCXq70YWPoMjDSJK8TO3IeBBpby31WR4rCfctIVPjzdfKCMVQRzdrTC3zG+uVUMdVZ5VlU8LmE+EFgDJjHZl7DCXlVodX23MD65V5B9frHz6jgbQnxCeAiNhO5BTwqqF550Wp7jmH9Uuhsqz8q9EdCfAs241g5vPcBkwXUKy820p49WN98SlPQpjQvAnqiv/MJ8V/YO2oE2A1cw4a4qrKR9qz0SU9CPBdaubazH7sYNwU8BAYLqFeetNqewq57lV5oRWirb9IOWSInJIgzJIgz2l0PabR2EDKz2CyqF5tFxbdhde0kFe0KMogtbdaFceySyFvMEMe3oaRLRZplJaNZVkhIEGdIEGdIEGdIEGdIEGdIEGfk+cnFtMRdcPz5OF7yMsGbIF2Y690OfMPWIMBWKL8Ac7H8Did5pZO3Ux+K7Tu+7S0vHqu0Uw/tY0JtUbYg/dgQJSLKFqQHO8RFhIeTerP7MaqUlwllCzKH3bbQaE1lskJ5paP1kGQqP8sSa8hzyPLurGvl1L0769o5de/OWk5dtIYEcYYEcUaesyzvzrpWTt27s5ZTrxGaZYWEnHp2eZkgp55NXunIqcup1wMJ4gwJ4gw59ezyMkFOPZu80pFTT0azrJCos1N3SV2dulvyEqQH+8a5nbHnh4B3DvLconOIMySIM+oiyBzwvuxKtEJdnPoscLxxNX1RF6c+DpxsXuVqI6eejJx6SEgQZ0gQZ0gQZ0gQZ0gQZ6QVZOUydh/l38nrjfV+qKApaTtzGngDHADuArfTViAwuoHr0f9jRRd+Alik/N8T9PhYAI6k6dR2v/jlKHAHOJTBvkJgEXgN3ARellwXIYQQQgghhBBCiND4CyzORHcT4OYXAAAAAElFTkSuQmCC",alt:""}),Object(u.jsx)("span",{children:r})]})]}),Object(u.jsx)("p",{children:a})]})]})})})})},ie=function(e){var t=e.lastProjectIndex,i=e.projectNb,n=e.firstProject,s=e.lastProject,a=e.previousProject,c=e.nextProject,r=e.currentProject,o=e.french,l=e.slowAppear,d=e.projectMoveLeft,h=e.projectMoveRight,m=e.projectGoesLeft,j=e.projectGoesRight;return Object(u.jsx)("div",{className:"my-projects",children:Object(u.jsxs)("div",{className:"big-project-container",children:[Object(u.jsx)("div",{className:"project-left ".concat(m?"project-goes-left":""),onClick:function(){return d()},children:Object(u.jsx)(te,{image:0===i?s.image:a.image,title:0===i?s.title:a.title})}),Object(u.jsx)("div",{className:l?"big-project slow-appear":"big-project",children:Object(u.jsx)(te,{image:r.image,title:r.title,techs:r.techs,presentationText:o?r.presentation.textFR:r.presentation.textEN,presentationDuration:o?r.presentation.durationFR:r.presentation.durationEN,presentationDates:o?r.presentation.datesFR:r.presentation.datesEN,presentationTeam:r.presentation.team,link:r.link})}),Object(u.jsx)("div",{className:"project-right ".concat(j?"project-goes-right":""),onClick:function(){return h()},children:Object(u.jsx)(te,{image:i===t?n.image:c.image,title:i===t?n.title:c.title})})]})})},ne=i.p+"static/media/lbm.86923e88.svg",se=i.p+"static/media/dobby.8b5ddcd9.jpg",ae=i.p+"static/media/llm.f1749d80.svg",ce=i.p+"static/media/html5.f318c8b1.svg",re=i.p+"static/media/css3.4e47c312.svg",oe=i.p+"static/media/javascript.b879f838.svg",le=(i.p,[{link:"https://bast44trl.github.io/laBelleMiche/",title:"La Belle Miche",image:ne,techs:[ce,re,oe,V,Y],presentation:{team:4,durationFR:"4 semaines",durationEN:"4 weeks",datesFR:"Sept - Oct 2021",datesEN:"Sept - Oct 2021",textFR:"Le premier projet, quelques jours apr\xe8s mon entr\xe9e en formation \xe0 la Wild Code School, r\xe9alis\xe9 avec un brin d'humour, nous ayant surtout permit de prendre en main des outils tels que Git et GitHub, ainsi que l'utilisation de Flex et Grid en CSS",textEN:"My very first project, just few days after I started my training at Wild Code School. Realised with a tiny bit of humor, it allowed us to get used to Git and GitHub, but also made us use Flex and Grid on CSS"}},{link:"https://bast44trl.github.io/DobbyAndFriends/#/",title:"Dobby And Friends",image:se,techs:[K,re,H,V,Y],presentation:{team:4,durationFR:"5 semaines",durationEN:"5 weeks",datesFR:"Nov - Dec 2021",datesEN:"Nov - Dec 2021",textFR:"Second projet lors de ma formation \xe0 la Wild Code School, il consistait \xe0 nous apprendre l'utilisation et la manipulation d'une API. Notre projet se base sur l'univers d'Harry Potter",textEN:"Second project during my training at Wild Code School, we learned how to use and manipulate an API. Our project is based on the universe of Harry Potter"}},{link:"https://bast44trl.github.io/LLM_WikiMusic",title:"Live Love Music",image:ae,techs:[K,H,V,Y],presentation:{team:6,durationFR:"31 heures",durationEN:"31 hours",datesFR:"Nov 2021",datesEN:"Nov 2021",textFR:"Notre premier projet Hackaton lors de ma formation \xe0 la Wild Code School dont le th\xe8me donn\xe9 le matin m\xeame \xe9tait 'La musique'. Notre id\xe9e fut de cr\xe9er un site permettant d'am\xe9liorer sa culture musicale",textEN:"Our first Hackaton project during my training at Wild Code School. Theme given in the morning was 'Music'. Our idea was to create a website to improve its musical knowledge"}}]),de=function(){var e=Object(n.useContext)(j).french,t=Object(n.useState)(0),i=Object(h.a)(t,2),s=i[0],a=i[1],c=Object(n.useState)(!1),r=Object(h.a)(c,2),o=r[0],l=r[1],d=Object(n.useState)(!1),m=Object(h.a)(d,2),b=m[0],p=m[1],g=Object(n.useState)(!1),v=Object(h.a)(g,2),f=v[0],x=v[1],O=le[0],A=le[le.length-1],N=le.length-1,k=le[s-1],S=le[s+1],w=le[s];return Object(n.useEffect)((function(){l(!0),setTimeout((function(){l(!1)}),600)}),[s]),Object(u.jsx)(ie,{projectNb:s,firstProject:O,lastProject:A,previousProject:k,nextProject:S,currentProject:w,lastProjectIndex:N,french:e,slowAppear:o,projectMoveLeft:function(){x(!f),0===s?setTimeout((function(){a(le.length-1)}),600):setTimeout((function(){a(s-1)}),600),setTimeout((function(){x(!1)}),600)},projectMoveRight:function(){p(!b),s===le.length-1?setTimeout((function(){a(0)}),600):setTimeout((function(){a(s+1)}),600),setTimeout((function(){p(!1)}),600)},projectGoesLeft:f,projectGoesRight:b})},he=function(){var e=Object(n.useContext)(j).french;return Object(u.jsx)("div",{className:"update",children:e?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("p",{children:"Portfolio non termin\xe9, merci pour votre indulgence \ud83d\ude0a"}),Object(u.jsx)("p",{children:"(R\xe9solution 1920 x 1080 px uniquement, le responsive arrive bient\xf4t)"})]}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("p",{children:"Portfolio not finished yet, thank you for your indulgence \ud83d\ude0a"}),Object(u.jsx)("p",{children:"(Desktop only, 1920 x 1080 px, responsive coming soon)"})]})})};var ue=function(){return Object(u.jsx)(b,{children:Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(q,{}),Object(u.jsx)(M,{}),Object(u.jsx)(P,{}),Object(u.jsx)(he,{}),Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{path:"*",element:Object(u.jsx)(z,{})}),Object(u.jsx)(o.a,{path:"/mytech",element:Object(u.jsx)(_,{})}),Object(u.jsx)(o.a,{path:"/aboutme",element:Object(u.jsx)(ee,{})}),Object(u.jsx)(o.a,{path:"/myprojects",element:Object(u.jsx)(de,{})})]})]})})};c.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(r.a,{basename:"/",children:Object(u.jsx)(ue,{})})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.72855393.chunk.js.map