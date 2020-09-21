(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],Array(18).concat([function(e,t,a){e.exports=a(49)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(15),c=a.n(i),r=a(7),o=a(17),s=(a(23),a(24),a(25),function(e){var t=e.link,a=e.title,n=e.icon,i=e.toggleIsActive;return l.a.createElement("li",{className:"nav-item"},l.a.createElement(r.c,{exact:"/"===t,className:"nav-link",to:t,activeClassName:"nav-link_active",onClick:i},l.a.createElement("i",{className:n}),l.a.createElement("span",{className:"nav-link-text"},a)))}),m=(a(31),function(e){var t=e.toggleIsActive,a=e.isActive;return l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",onClick:t},l.a.createElement("span",{className:"toggler-icon ".concat(a?" toggler-icon_active":"")}))}),u=[{id:1,link:"/",title:"Home",icon:"fas fa-home"},{id:2,link:"/about",title:"About",icon:"fas fa-address-card"},{id:3,link:"/portfolio",title:"My Projects",icon:"fas fa-briefcase"},{id:4,link:"/contact",title:"Contact",icon:"fas fa-envelope"}],d=function(e){var t=e.toggleIsActive,a=e.isActive,n=u.map((function(e){return l.a.createElement(s,{key:e.id,link:e.link,title:e.title,icon:e.icon,toggleIsActive:t})}));return l.a.createElement("nav",{className:"navbar navbar-expand-lg"},l.a.createElement(m,{toggleIsActive:t,isActive:a}),l.a.createElement("div",{className:"collapse navbar-collapse ".concat(a?" show":""),id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav mr-auto"},n)))},v=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],i=t[1];return l.a.createElement("header",{className:"header ".concat(a?" header_active":"")},l.a.createElement(d,{toggleIsActive:function(){return i(!a)},isActive:a}))},f=(a(32),a(33),function(e){var t=e.children,a=e.link;return l.a.createElement(r.b,{to:a,className:"button"},t)}),p=(a(34),function(){return l.a.createElement("div",{className:"text-block"},l.a.createElement("p",{className:"text-uppercase"},l.a.createElement("b",null,"Hello everyone!")),l.a.createElement("h1",{className:"text-uppercase "},l.a.createElement("b",null,"I am"," ",l.a.createElement("span",{className:"highlighted-text"},"Yaroslav Yukhymchuk"))),l.a.createElement("p",null,"This is my small site and if you can call it that - my portfolio. I study at KPI and want to work in the field of frontend development. I have already taken several online courses and obtained certificates. Also, I have good soft skills. I am looking for a job as a front-end developer."," "),l.a.createElement(f,{link:"/about"},"About me"))}),E=(a(35),function(){return l.a.createElement("div",{className:"intro-img"})}),g=a(6),h={in:{opacity:1,y:0},out:{opacity:0,y:"-100vh"}},N=function(){return l.a.createElement(g.b.div,{initial:"out",animate:"in",exit:"out",variants:h,className:"row intro"},l.a.createElement("div",{className:"col-lg-5 order-lg-2 p-0"},l.a.createElement(E,null)),l.a.createElement("div",{className:"col-lg-5 order-lg-1 d-flex align-items-center"},l.a.createElement(p,null)))},b=(a(36),a(1)),k=(a(37),function(e){var t=e.bgText,a=e.firstPart,n=e.secondPart;return l.a.createElement("h1",{className:"text-uppercase title"},l.a.createElement("b",null,a,l.a.createElement("span",{className:"highlighted-text"}," ",n)),l.a.createElement("span",{className:"title-bg"},t))}),y=(a(38),function(e){var t=e.timeText,a=e.position,n=e.company,i=e.descrText;return l.a.createElement("div",null,l.a.createElement("div",{className:"exp-icon"},l.a.createElement("i",{className:"fas fa-briefcase"})),l.a.createElement("div",{className:"col exp-block"},l.a.createElement("p",{className:"time-text"},t),l.a.createElement("p",{className:"activity-text"},a,l.a.createElement("span",null,n)),l.a.createElement("p",{className:"descr-text"},i)))}),x=function(){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 mb-5 mb-md-0"},l.a.createElement(y,{timeText:"October 2019 - Present",position:"HTML/CSS Developer - ",company:"Freelance",descrText:"I was involved in the development of HTML\r templates and writing styles and also dealt with\r some JS scripts."})),l.a.createElement("div",{className:"col-md-6"},l.a.createElement(y,{timeText:"September 2018 - June 2022",position:"Bachelor degree - ",company:"Kyiv Polytechnic Institute",descrText:"Student of FICT, specialty - computer\r engineering. I am studying in the 3rd year."})))},w=(a(39),function(e){var t=e.text,a=e.additionalClasses,n="subtitle";return a&&(n+=" ".concat(a)),l.a.createElement("h2",{className:n},t)}),A=(a(40),function(){return l.a.createElement("hr",{className:"delimiter"})}),j=(a(41),function(e){var t=e.title,a=e.info;return l.a.createElement("li",null,l.a.createElement("span",null,t,": "),l.a.createElement("span",null,a))}),C=function(e){var t=e.infoListData.map((function(e){return l.a.createElement(j,{key:e.id,title:e.title,info:e.info})}));return l.a.createElement("ul",{className:"info-list"},t)},I=[{title:"First name",info:"Yaroslav",id:1},{title:"Last name",info:"Yukhymchuk",id:2},{title:"Age",info:"19 years",id:3},{title:"Nationality",info:"Ukrainian",id:4},{title:"Marital status",info:"Unmarried",id:5},{title:"Address",info:"Kyiv",id:6},{title:"Phone",info:"+380961952963",id:7},{title:"Email",info:"yaroslaw460@gmail.com",id:8},{title:"Languages",info:"Ukr, Rus, Eng",id:9},{title:"Work status",info:"Open to work",id:10}],P=function(){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12"},l.a.createElement(w,{text:"Personal info",additionalClasses:"m-0 text-left"})),l.a.createElement("div",{className:"col-6"},l.a.createElement(C,{infoListData:I.slice(0,5)})),l.a.createElement("div",{className:"col-6"},l.a.createElement(C,{infoListData:I.slice(5,10)})),l.a.createElement("div",{className:"col-12"},l.a.createElement(f,{link:"/mycv"},"View CV")))},S=(a(42),function(e){var t=e.number,a=e.title;return l.a.createElement("div",{className:"achievement"},l.a.createElement("span",{className:"achievement-num"},t,"+"),l.a.createElement("span",{className:"achievement-title"},a))}),T=[{id:1,number:1,title:"Years of experience"},{id:2,number:10,title:"Projects"},{id:3,number:3,title:"Years in university"},{id:4,number:1,title:"Years of experience"}],M=function(){var e=T.map((function(e){return l.a.createElement("div",{key:e.id,className:"col-6"},l.a.createElement(S,{number:e.number,title:e.title}))}));return l.a.createElement("div",{className:"row"},e)},L=(a(43),function(e){var t=e.level,a=e.title;return l.a.createElement("div",null,l.a.createElement("div",{className:"skill-".concat(t)},l.a.createElement("span",null,t,"%")),l.a.createElement("h5",{className:"skill-title"},a))}),Y=[{id:1,level:75,title:"HTML5"},{id:2,level:75,title:"CSS3"},{id:3,level:70,title:"JavaScript"},{id:4,level:50,title:"ReactJs"},{id:5,level:60,title:"SCSS"},{id:6,level:50,title:"Bootstrap"},{id:7,level:40,title:"jQuery"},{id:8,level:50,title:"Git"}],J=function(){var e=Y.map((function(e){return l.a.createElement("div",{key:e.id,className:"col-6 col-md-3"},l.a.createElement(L,{level:e.level,title:e.title}))}));return l.a.createElement("div",{className:"row"},e)},_={in:{opacity:1,y:0},out:{opacity:0,y:"-100vh"}},B=function(){return l.a.createElement(g.b.div,{initial:"out",animate:"in",exit:"out",variants:_,className:"content"},l.a.createElement(k,{bgText:"Resume",firstPart:"About",secondPart:"me"}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-6"},l.a.createElement(P,null)),l.a.createElement("div",{className:"col-lg-6 mt-5 mt-lg-0"},l.a.createElement(M,null))),l.a.createElement(A,null),l.a.createElement(w,{text:"My skills"}),l.a.createElement(J,null),l.a.createElement(A,null),l.a.createElement(w,{text:"Experience & education"}),l.a.createElement(x,null)))},D=(a(44),function(e){var t=e.link,a=e.icon;return l.a.createElement("a",{href:t},l.a.createElement("i",{className:a}))}),H=[{id:1,link:"https://t.me/badb1ood",icon:"fab fa-telegram"},{id:2,link:"https://www.instagram.com/yukhymchuk_ya/",icon:"fab fa-instagram"},{id:3,link:"https://github.com/darkness8129",icon:"fab fa-github"},{id:4,link:"linkedin.com/in/yaroslav-yukhymchuk-425ba2195",icon:"fab fa-linkedin"}],O=function(){var e=H.map((function(e){return l.a.createElement(D,{key:e.id,link:e.link,icon:e.icon})}));return l.a.createElement("div",{className:"social-block"},e)},F=(a(45),function(e){var t=e.action,a=e.info;return l.a.createElement("div",{className:"contact-info__item"},l.a.createElement("i",{className:"fas fa-envelope"}),l.a.createElement("span",null,l.a.createElement("span",{className:"d-block text-uppercase"},t),a))}),W=(a(46),function(){return l.a.createElement("div",{className:"contact-info"},l.a.createElement("h3",{className:"text-uppercase"},l.a.createElement("b",null,"Don't be shy!")),l.a.createElement("p",null,"Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions."),l.a.createElement(F,{action:"Mail me",info:"yaroslaw460@gmail.com"}),l.a.createElement(F,{action:"Phone me",info:"+380961952953"}),l.a.createElement(O,null))}),K=(a(47),function(){return l.a.createElement("div",{className:"contact-img"},l.a.createElement("img",{src:"../images/contactme.jpg",alt:""}))}),R={in:{opacity:1,y:0},out:{opacity:0,y:"-100vh"}},U=function(){return l.a.createElement(g.b.div,{initial:"out",animate:"in",exit:"out",variants:R,className:"content"},l.a.createElement(k,{bgText:"Contact",firstPart:"Get in",secondPart:"touch"}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-6"},l.a.createElement(W,null)),l.a.createElement("div",{className:"col-6"},l.a.createElement(K,null)))))},G=(a(48),function(e){var t=e.title,a=e.link,n=e.img;return l.a.createElement("div",{className:"project-card"},l.a.createElement("span",{className:"project-card-title"},t),l.a.createElement("div",{className:"project-card-img"},l.a.createElement("a",{href:a},l.a.createElement("img",{src:n,alt:"project-img",className:"project-img"}))))}),V=[{id:1,title:"Calculator",link:"https://darkness8129.github.io/dark-calculator/",img:"/images/projects/calculator.png"},{id:2,title:"Matrix effect",link:"https://darkness8129.github.io/matrix-effect/",img:"/images/projects/matrixEffect.png"},{id:3,title:"Notes App",link:"https://darkness8129.github.io/notes-app/",img:"/images/projects/notesApp.png"},{id:4,title:"Abi Compass",link:"https://github.com/darkness8129/abi-compass",img:"/images/projects/abiCompass.png"},{id:5,title:"Axit",link:"https://github.com/darkness8129/Axit",img:"/images/projects/axit.png"},{id:6,title:"Pex",link:"#",img:"/images/projects/pex.png"}],Q={in:{opacity:1,y:0},out:{opacity:0,y:"-100vh"}},$=function(){var e=V.map((function(e){return l.a.createElement("div",{key:e.id,className:"col-12 col-sm-6 col-lg-4"},l.a.createElement(G,{title:e.title,link:e.link,img:e.img}))}));return l.a.createElement(g.b.div,{initial:"out",animate:"in",exit:"out",variants:Q,className:"content"},l.a.createElement(k,{bgText:"Works",firstPart:"My",secondPart:"Portfolio"}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},e)))};var q=function(){var e=Object(b.f)();return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row",style:{height:"100vh"}},l.a.createElement(v,null),l.a.createElement("div",{className:"col-lg-12"},l.a.createElement(g.a,{exitBeforeEnter:!0},l.a.createElement(b.c,{location:e,key:e.pathname},l.a.createElement(b.a,{exact:!0,path:"/",component:N}),l.a.createElement(b.a,{path:"/about",component:B}),l.a.createElement(b.a,{path:"/portfolio",component:$}),l.a.createElement(b.a,{path:"/contact",component:U})))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(r.a,null,l.a.createElement(q,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}]),[[18,1,2]]]);
//# sourceMappingURL=main.4d813d2f.chunk.js.map