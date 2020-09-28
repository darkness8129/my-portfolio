(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],Array(22).concat([function(e,t,a){e.exports=a(56)},,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);a(23),a(24);var n=a(0),l=a.n(n),i=a(19),c=a.n(i),r=a(5),o=a(8),s=(a(30),a(31),a(32),function(e){var t=e.link,a=e.title,n=e.icon,i=e.toggleIsActive;return l.a.createElement("li",{className:"nav-item"},l.a.createElement(r.c,{exact:!0,className:"nav-link",to:t,activeClassName:"nav-link_active",onClick:i},l.a.createElement("i",{className:n}),l.a.createElement("span",{className:"nav-link-text"},a)))}),m=(a(37),a(6)),u=a.n(m),d=function(e){var t=e.toggleIsActive,a=e.isActive;return l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",onClick:t},l.a.createElement("span",{className:u()("toggler-icon",{"toggler-icon_active":a})}))},f=[{id:1,link:"/",title:"Home",icon:"fas fa-home"},{id:2,link:"/about",title:"About",icon:"fas fa-address-card"},{id:3,link:"/portfolio",title:"My Projects",icon:"fas fa-briefcase"},{id:4,link:"/contact",title:"Contact",icon:"fas fa-envelope"}],p=function(e){var t=e.toggleIsActive,a=e.isActive,n=f.map((function(e){return l.a.createElement(s,{key:e.id,link:e.link,title:e.title,icon:e.icon,toggleIsActive:t})}));return l.a.createElement("nav",{className:"navbar navbar-expand-lg"},l.a.createElement(d,{toggleIsActive:t,isActive:a}),l.a.createElement("div",{className:u()("collapse","navbar-collapse",{show:a}),id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav mr-auto"},n)))},v=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],i=t[1];return l.a.createElement("header",{className:u()("header",{header_active:a})},l.a.createElement(p,{toggleIsActive:function(){return i(!a)},isActive:a}))},E=(a(38),a(39),function(e){var t=e.children,a=e.link;return l.a.createElement(r.b,{to:a,className:"button"},t)}),g=(a(40),function(){return l.a.createElement("div",{className:"text-block"},l.a.createElement("p",{className:"text-uppercase"},l.a.createElement("b",null,"Hello everyone!")),l.a.createElement("h1",{className:"text-uppercase "},l.a.createElement("b",null,"I am"," ",l.a.createElement("span",{className:"highlighted-text"},"Yaroslav Yukhymchuk"))),l.a.createElement("p",null,"This is my small site and if you can call it that - my portfolio. I study at KPI and want to work in the field of frontend development. I have already taken several online courses and obtained certificates. Also, I have good soft skills. I am looking for a job as a front-end developer."," "),l.a.createElement(E,{link:"/about"},"About me"))}),h=(a(41),function(){return l.a.createElement("div",{className:"intro-img"})}),b=a(2),N={in:{opacity:1,y:0},out:{opacity:0,y:"-100vh"}},k=function(){return l.a.createElement(b.b.div,{initial:"out",animate:"in",exit:"out",variants:N,className:"row intro"},l.a.createElement("div",{className:"col-lg-5 order-lg-2 p-0"},l.a.createElement(h,null)),l.a.createElement("div",{className:"col-lg-5 order-lg-1 d-flex align-items-center"},l.a.createElement(g,null)))},y=(a(42),a(1)),x=(a(43),function(e){var t=e.bgText,a=e.firstPart,n=e.secondPart;return l.a.createElement("h1",{className:"text-uppercase title"},l.a.createElement("b",null,a,l.a.createElement("span",{className:"highlighted-text"}," ",n)),l.a.createElement("span",{className:"title-bg"},t))}),w=(a(44),function(e){var t=e.timeText,a=e.position,n=e.company,i=e.descrText;return l.a.createElement("div",null,l.a.createElement("div",{className:"exp-icon"},l.a.createElement("i",{className:"fas fa-briefcase"})),l.a.createElement("div",{className:"col exp-block"},l.a.createElement("p",{className:"time-text"},t),l.a.createElement("p",{className:"activity-text"},a,l.a.createElement("span",null,n)),l.a.createElement("p",{className:"descr-text"},i)))}),A=function(){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 mb-5 mb-md-0"},l.a.createElement(w,{timeText:"October 2019 - Present",position:"HTML/CSS Developer - ",company:"Freelance",descrText:"I was involved in the development of HTML\r templates and writing styles and also dealt with\r some JS scripts."})),l.a.createElement("div",{className:"col-md-6"},l.a.createElement(w,{timeText:"September 2018 - June 2022",position:"Bachelor degree - ",company:"Kyiv Polytechnic Institute",descrText:"Student of FICT, specialty - computer\r engineering. I am studying in the 3rd year."})))},j=(a(45),function(e){var t=e.text,a=e.additionalClasses,n="subtitle";return a&&(n+=" ".concat(a)),l.a.createElement("h2",{className:n},t)}),P=(a(46),function(){return l.a.createElement("hr",{className:"delimiter"})}),C=(a(47),function(e){var t=e.title,a=e.info;return l.a.createElement("li",null,l.a.createElement("span",null,t,": "),l.a.createElement("span",null,a))}),T=function(e){var t=e.infoListData.map((function(e){return l.a.createElement(C,{key:e.id,title:e.title,info:e.info})}));return l.a.createElement("ul",{className:"info-list"},t)},I=[{title:"First name",info:"Yaroslav",id:1},{title:"Last name",info:"Yukhymchuk",id:2},{title:"Age",info:"19 years",id:3},{title:"Nationality",info:"Ukrainian",id:4},{title:"Marital status",info:"Unmarried",id:5},{title:"Address",info:"Kyiv",id:6},{title:"Phone",info:"+380961952963",id:7},{title:"Email",info:"yaroslaw460@gmail.com",id:8},{title:"Languages",info:"Ukr, Rus, Eng",id:9},{title:"Work status",info:"Open to work",id:10}],S=function(){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12"},l.a.createElement(j,{text:"Personal info",additionalClasses:"m-0 text-left"})),l.a.createElement("div",{className:"col-6"},l.a.createElement(T,{infoListData:I.slice(0,5)})),l.a.createElement("div",{className:"col-6"},l.a.createElement(T,{infoListData:I.slice(5,10)})),l.a.createElement("div",{className:"col-12"},l.a.createElement(E,{link:"/cv"},"View CV")))},M=(a(48),function(e){var t=e.number,a=e.title;return l.a.createElement("div",{className:"achievement"},l.a.createElement("span",{className:"achievement-num"},t,"+"),l.a.createElement("span",{className:"achievement-title"},a))}),L=[{id:1,number:1,title:"Years of experience"},{id:2,number:10,title:"Projects"},{id:3,number:3,title:"Years in university"},{id:4,number:1,title:"Years of experience"}],O=function(){var e=L.map((function(e){return l.a.createElement("div",{key:e.id,className:"col-6"},l.a.createElement(M,{number:e.number,title:e.title}))}));return l.a.createElement("div",{className:"row"},e)},Y=(a(49),function(e){var t=e.level,a=e.title;return l.a.createElement("div",null,l.a.createElement("div",{className:"skill-".concat(t)},l.a.createElement("span",null,t,"%")),l.a.createElement("h5",{className:"skill-title"},a))}),D=[{id:1,level:75,title:"HTML5"},{id:2,level:75,title:"CSS3"},{id:3,level:70,title:"JavaScript"},{id:4,level:50,title:"ReactJs"},{id:5,level:60,title:"SCSS"},{id:6,level:50,title:"Bootstrap"},{id:7,level:40,title:"jQuery"},{id:8,level:50,title:"Git"}],J=function(){var e=D.map((function(e){return l.a.createElement("div",{key:e.id,className:"col-6 col-md-3"},l.a.createElement(Y,{level:e.level,title:e.title}))}));return l.a.createElement("div",{className:"row"},e)},_=function(){return l.a.createElement(b.b.div,{initial:"out",animate:"in",exit:"out",variants:N,className:"content"},l.a.createElement(x,{bgText:"Resume",firstPart:"About",secondPart:"me"}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-6"},l.a.createElement(S,null)),l.a.createElement("div",{className:"col-lg-6 mt-5 mt-lg-0"},l.a.createElement(O,null))),l.a.createElement(P,null),l.a.createElement(j,{text:"My skills"}),l.a.createElement(J,null),l.a.createElement(P,null),l.a.createElement(j,{text:"Experience & education"}),l.a.createElement(A,null)))},F=(a(50),function(e){var t=e.link,a=e.icon;return l.a.createElement("a",{href:t},l.a.createElement("i",{className:a}))}),H=[{id:1,link:"https://t.me/badb1ood",icon:"fab fa-telegram"},{id:2,link:"https://www.instagram.com/yukhymchuk_ya/",icon:"fab fa-instagram"},{id:3,link:"https://github.com/darkness8129",icon:"fab fa-github"},{id:4,link:"https://www.linkedin.com/in/yaroslav-yukhymchuk-425ba2195/",icon:"fab fa-linkedin"}],K=function(){var e=H.map((function(e){return l.a.createElement(F,{key:e.id,link:e.link,icon:e.icon})}));return l.a.createElement("div",{className:"social-block"},e)},R=(a(51),function(e){var t=e.action,a=e.info;return l.a.createElement("div",{className:"contact-info__item"},l.a.createElement("i",{className:"fas fa-envelope"}),l.a.createElement("span",null,l.a.createElement("span",{className:"d-block text-uppercase"},t),a))}),B=(a(52),function(){return l.a.createElement("div",{className:"contact-info"},l.a.createElement("h3",{className:"text-uppercase"},l.a.createElement("b",null,"Don't be shy!")),l.a.createElement("p",null,"Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions."),l.a.createElement(R,{action:"Mail me",info:"yaroslaw460@gmail.com"}),l.a.createElement(R,{action:"Phone me",info:"+380961952953"}),l.a.createElement(K,null))}),V=(a(53),function(){return l.a.createElement("div",{className:"contact-img"},l.a.createElement("img",{src:"https://darkness8129.github.io/my-portfolio/images/contactme.jpg",alt:""}))}),q=function(){return l.a.createElement(b.b.div,{initial:"out",animate:"in",exit:"out",variants:N,className:"content"},l.a.createElement(x,{bgText:"Contact",firstPart:"Get in",secondPart:"touch"}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-6"},l.a.createElement(B,null)),l.a.createElement("div",{className:"col-6"},l.a.createElement(V,null)))))},G=(a(54),function(e){var t=e.title,a=e.link,n=e.img;return l.a.createElement("div",{className:"project-card"},l.a.createElement("span",{className:"project-card-title"},t),l.a.createElement("div",{className:"project-card-img"},l.a.createElement("a",{href:a},l.a.createElement("img",{src:n,alt:"project-img",className:"project-img"}))))}),U=[{id:1,title:"Calculator",link:"https://darkness8129.github.io/dark-calculator/",img:"https://darkness8129.github.io/my-portfolio/images/projects/calculator.png"},{id:2,title:"Matrix effect",link:"https://darkness8129.github.io/matrix-effect/",img:"https://darkness8129.github.io/my-portfolio/images/projects/matrixEffect.png"},{id:3,title:"Notes App",link:"https://darkness8129.github.io/notes-app/",img:"https://darkness8129.github.io/my-portfolio/images/projects/notesApp.png"},{id:4,title:"Abi Compass",link:"https://github.com/darkness8129/abi-compass",img:"https://darkness8129.github.io/my-portfolio/images/projects/abiCompass.png"},{id:5,title:"Axit",link:"https://github.com/darkness8129/Axit",img:"https://darkness8129.github.io/my-portfolio/images/projects/axit.png"},{id:6,title:"Pex",link:"#",img:"https://darkness8129.github.io/my-portfolio/images/projects/pex.png"}],W=function(){var e=U.map((function(e){return l.a.createElement("div",{key:e.id,className:"col-12 col-sm-6 col-lg-4"},l.a.createElement(G,{title:e.title,link:e.link,img:e.img}))}));return l.a.createElement(b.b.div,{initial:"out",animate:"in",exit:"out",variants:N,className:"content"},l.a.createElement(x,{bgText:"Works",firstPart:"My",secondPart:"Portfolio"}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},e)))},Z=a(21),z=(a(55),function(){var e=Object(n.useRef)(null);return Object(Z.a)({file:"https://darkness8129.github.io/my-portfolio/cv.pdf",canvasEl:e}),l.a.createElement(b.b.div,{initial:"out",animate:"in",exit:"out",variants:N,className:"content"},l.a.createElement(x,{bgText:"Resume",firstPart:"My",secondPart:"CV"}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 d-flex justify-content-center"},l.a.createElement("div",null,l.a.createElement("canvas",{ref:e,className:"cv-document"}),l.a.createElement("a",{href:"https://drive.google.com/drive/folders/1goqX8A2wyt2Tzq5KL4aK-pZZN4TqhmnM?usp=sharing",className:"cv-mobile-link"},"View on GoogleDrive"))))))});var Q=function(){var e=Object(y.g)();return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row",style:{height:"100vh"}},l.a.createElement(v,null),l.a.createElement("div",{className:"col-lg-12"},l.a.createElement(b.a,{exitBeforeEnter:!0},l.a.createElement(y.d,{location:e,key:e.pathname},l.a.createElement(y.b,{exact:!0,path:"/",component:k}),l.a.createElement(y.b,{exact:!0,path:"/about",component:_}),l.a.createElement(y.b,{exact:!0,path:"/portfolio",component:W}),l.a.createElement(y.b,{exact:!0,path:"/contact",component:q}),l.a.createElement(y.b,{exact:!0,path:"/cv",component:z}),l.a.createElement(b.b.Fragment,{exit:"undefined"},l.a.createElement(y.a,{to:"/"}))))))))};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(r.a,null,l.a.createElement(Q,null))),document.getElementById("root"))}]),[[22,1,2]]]);
//# sourceMappingURL=main.fcc4dccf.chunk.js.map