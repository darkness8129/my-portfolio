(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],Array(21).concat([function(e,t,a){e.exports=a.p+"static/media/contactme.1b9d1350.jpg"},function(e,t,a){e.exports=a.p+"static/media/calculator.35b71937.png"},function(e,t,a){e.exports=a.p+"static/media/matrixEffect.775aeeb5.png"},function(e,t,a){e.exports=a.p+"static/media/notesApp.40142467.png"},function(e,t,a){e.exports=a.p+"static/media/confusion.512a6ab4.png"},function(e,t,a){e.exports=a.p+"static/media/ollo.37d7d11d.png"},function(e,t,a){e.exports=a.p+"static/media/calendar.9a01446b.png"},function(e,t,a){e.exports=a.p+"static/media/axit.dfbaf3bd.png"},function(e,t,a){e.exports=a.p+"static/media/registration-form.f5fb7d80.png"},function(e,t,a){e.exports=a.p+"static/media/toasts.a2a39331.png"},,function(e,t,a){e.exports=a.p+"static/media/cv.b7dec75a.pdf"},function(e,t,a){e.exports=a(67)},,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);a(34),a(35);var n=a(0),i=a.n(n),l=a(19),c=a.n(l),r=a(5),o=a(8),s=(a(41),a(42),a(43),function(e){var t=e.link,a=e.title,n=e.icon,l=e.toggleIsActive;return i.a.createElement("li",{className:"nav-item"},i.a.createElement(r.c,{exact:!0,className:"nav-link",to:t,activeClassName:"nav-link_active",onClick:l},i.a.createElement("i",{className:n}),i.a.createElement("span",{className:"nav-link-text"},a)))}),m=(a(48),a(6)),u=a.n(m),d=function(e){var t=e.toggleIsActive,a=e.isActive;return i.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",onClick:t},i.a.createElement("span",{className:u()("toggler-icon",{"toggler-icon_active":a})}))},p=[{id:1,link:"/",title:"Home",icon:"fas fa-home"},{id:2,link:"/about",title:"About",icon:"fas fa-address-card"},{id:3,link:"/portfolio",title:"My Projects",icon:"fas fa-briefcase"},{id:4,link:"/contact",title:"Contact",icon:"fas fa-envelope"}],f=function(e){var t=e.toggleIsActive,a=e.isActive,n=p.map((function(e){return i.a.createElement(s,{key:e.id,link:e.link,title:e.title,icon:e.icon,toggleIsActive:t})}));return i.a.createElement("nav",{className:"navbar navbar-expand-lg"},i.a.createElement(d,{toggleIsActive:t,isActive:a}),i.a.createElement("div",{className:u()("collapse","navbar-collapse",{show:a}),id:"navbarSupportedContent"},i.a.createElement("ul",{className:"navbar-nav mr-auto"},n)))},v=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],l=t[1];return i.a.createElement("header",{className:u()("header",{header_active:a})},i.a.createElement(f,{toggleIsActive:function(){return l(!a)},isActive:a}))},E=(a(49),a(50),function(e){var t=e.children,a=e.link;return i.a.createElement(r.b,{to:a,className:"button"},t)}),g=(a(51),function(){return i.a.createElement("div",{className:"text-block"},i.a.createElement("p",{className:"text-uppercase"},i.a.createElement("b",null,"Hello everyone!")),i.a.createElement("h1",{className:"text-uppercase "},i.a.createElement("b",null,"I am"," ",i.a.createElement("span",{className:"highlighted-text"},"Yaroslav Yukhymchuk"))),i.a.createElement("p",null,"Looking for a job as a JUNIOR FRONT-END DEVELOPER. I create projects with clean and supported code, improving my skills and enjoying it. Ready to join the team and conquer web development together:)"),i.a.createElement(E,{link:"/about"},"About me"))}),b=(a(52),function(){return i.a.createElement("div",{className:"intro-img"})}),N=a(2),k={in:{opacity:1,y:0},out:{opacity:0,y:"-100vh"}},h=function(){return i.a.createElement(N.b.div,{initial:"out",animate:"in",exit:"out",variants:k,className:"row intro"},i.a.createElement("div",{className:"col-lg-5 order-lg-2 p-0"},i.a.createElement(b,null)),i.a.createElement("div",{className:"col-lg-5 order-lg-1 d-flex align-items-center"},i.a.createElement(g,null)))},x=(a(53),a(1)),y=(a(54),function(e){var t=e.bgText,a=e.firstPart,n=e.secondPart;return i.a.createElement("h1",{className:"text-uppercase title"},i.a.createElement("b",null,a,i.a.createElement("span",{className:"highlighted-text"}," ",n)),i.a.createElement("span",{className:"title-bg"},t))}),w=(a(55),function(e){var t=e.timeText,a=e.position,n=e.company,l=e.descrText;return i.a.createElement("div",null,i.a.createElement("div",{className:"exp-icon"},i.a.createElement("i",{className:"fas fa-briefcase"})),i.a.createElement("div",{className:"col exp-block"},i.a.createElement("p",{className:"time-text"},t),i.a.createElement("p",{className:"activity-text"},a,i.a.createElement("span",null,n)),i.a.createElement("p",{className:"descr-text"},l)))}),S=function(){return i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-6 mb-5 mb-md-0"},i.a.createElement(w,{timeText:"October 2019 - Present",position:"HTML/CSS Developer - ",company:"Freelance",descrText:"Involved in the development of HTML\r templates and writing styles and also dealt with\r JS scripts."})),i.a.createElement("div",{className:"col-md-6"},i.a.createElement(w,{timeText:"September 2018 - June 2022",position:"Bachelor degree - ",company:"Kyiv Polytechnic Institute",descrText:"Student of Faculty of Informatics and Computer Engineering. Specialty - computer\r engineering. "})))},C=(a(56),function(e){var t=e.text,a=e.additionalClasses,n="subtitle";return a&&(n+=" ".concat(a)),i.a.createElement("h2",{className:n},t)}),j=(a(57),function(){return i.a.createElement("hr",{className:"delimiter"})}),A=(a(58),function(e){var t=e.title,a=e.info;return i.a.createElement("li",null,i.a.createElement("span",null,t,": "),i.a.createElement("span",null,a))}),P=function(e){var t=e.infoListData.map((function(e){return i.a.createElement(A,{key:e.id,title:e.title,info:e.info})}));return i.a.createElement("ul",{className:"info-list"},t)},T=[{title:"First name",info:"Yaroslav",id:1},{title:"Last name",info:"Yukhymchuk",id:2},{title:"Age",info:"19 y. o.",id:3},{title:"Nationality",info:"Ukrainian",id:4},{title:"Marital status",info:"Unmarried",id:5},{title:"Address",info:"Kyiv",id:6},{title:"Phone",info:"+380961952963",id:7},{title:"Email",info:"yaroslaw460@gmail.com",id:8},{title:"Languages",info:"Ukr, Rus, Eng",id:9},{title:"Work status",info:"Open to work",id:10}],R=function(){return i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-12"},i.a.createElement(C,{text:"Personal info",additionalClasses:"m-0 text-left"})),i.a.createElement("div",{className:"col-6"},i.a.createElement(P,{infoListData:T.slice(0,5)})),i.a.createElement("div",{className:"col-6"},i.a.createElement(P,{infoListData:T.slice(5,10)})),i.a.createElement("div",{className:"col-12"},i.a.createElement(E,{link:"/cv"},"View CV")))},I=(a(59),function(e){var t=e.number,a=e.title;return i.a.createElement("div",{className:"achievement"},i.a.createElement("span",{className:"achievement-num"},t,"+"),i.a.createElement("span",{className:"achievement-title"},a))}),M=[{id:1,number:1,title:"Years of experience"},{id:2,number:15,title:"Projects"},{id:3,number:20,title:"Skills"},{id:4,number:5,title:"Passed courses"}],L=function(){var e=M.map((function(e){return i.a.createElement("div",{key:e.id,className:"col-6"},i.a.createElement(I,{number:e.number,title:e.title}))}));return i.a.createElement("div",{className:"row"},e)},O=(a(60),function(e){var t=e.level,a=e.title;return i.a.createElement("div",null,i.a.createElement("div",{className:"skill-".concat(t)},i.a.createElement("span",null,t,"%")),i.a.createElement("h5",{className:"skill-title"},a))}),F=[{id:1,level:90,title:"HTML5"},{id:2,level:90,title:"CSS3"},{id:3,level:80,title:"JavaScript"},{id:4,level:80,title:"React"},{id:5,level:80,title:"Redux"},{id:6,level:75,title:"Redux Thunk"},{id:7,level:50,title:"Redux Form"},{id:8,level:70,title:"React Router"},{id:9,level:75,title:"React Hooks"},{id:10,level:50,title:"Styled Components"},{id:11,level:80,title:"CSS-modules"},{id:12,level:70,title:"Sass/SCSS"},{id:13,level:80,title:"REST API"},{id:14,level:60,title:"Bootstrap"},{id:15,level:40,title:"jQuery"},{id:16,level:50,title:"Webpack"},{id:17,level:60,title:"Git"},{id:18,level:70,title:"npm/yarn"},{id:19,level:30,title:"node.js"},{id:20,level:70,title:"VS Code"},{id:21,level:50,title:"Figma"}],D=function(){var e=F.map((function(e){return i.a.createElement("div",{key:e.id,className:"col-6 col-md-3"},i.a.createElement(O,{level:e.level,title:e.title}))}));return i.a.createElement("div",{className:"row"},e)},H=function(){return i.a.createElement(N.b.div,{initial:"out",animate:"in",exit:"out",variants:k,className:"content"},i.a.createElement(y,{bgText:"Resume",firstPart:"About",secondPart:"me"}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-6"},i.a.createElement(R,null)),i.a.createElement("div",{className:"col-lg-6 mt-5 mt-lg-0"},i.a.createElement(L,null))),i.a.createElement(j,null),i.a.createElement(C,{text:"My skills"}),i.a.createElement(D,null),i.a.createElement(j,null),i.a.createElement(C,{text:"Experience & education"}),i.a.createElement(S,null)))},J=(a(61),function(e){var t=e.link,a=e.icon;return i.a.createElement("a",{href:t},i.a.createElement("i",{className:a}))}),V=[{id:1,link:"https://t.me/badb1ood",icon:"fab fa-telegram"},{id:2,link:"https://www.instagram.com/yukhymchuk_ya/",icon:"fab fa-instagram"},{id:3,link:"https://github.com/darkness8129",icon:"fab fa-github"},{id:4,link:"https://www.linkedin.com/in/yaroslav-yukhymchuk-425ba2195/",icon:"fab fa-linkedin"}],_=function(){var e=V.map((function(e){return i.a.createElement(J,{key:e.id,link:e.link,icon:e.icon})}));return i.a.createElement("div",{className:"social-block"},e)},Y=(a(62),function(e){var t=e.action,a=e.info;return i.a.createElement("div",{className:"contact-info__item"},i.a.createElement("i",{className:"fas fa-envelope"}),i.a.createElement("span",null,i.a.createElement("span",{className:"d-block text-uppercase"},t),a))}),q=(a(63),function(){return i.a.createElement("div",{className:"contact-info"},i.a.createElement("h3",{className:"text-uppercase"},i.a.createElement("b",null,"Don't be shy!")),i.a.createElement("p",null,"Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions."),i.a.createElement(Y,{action:"Mail me",info:"yaroslaw460@gmail.com"}),i.a.createElement(Y,{action:"Phone me",info:"+380961952963"}),i.a.createElement(_,null))}),B=(a(64),a(21)),K=a.n(B),U=function(){return i.a.createElement("div",{className:"contact-img"},i.a.createElement("img",{src:K.a,alt:"Contact me"}))},G=function(){return i.a.createElement(N.b.div,{initial:"out",animate:"in",exit:"out",variants:k,className:"content"},i.a.createElement(y,{bgText:"Contact",firstPart:"Get in",secondPart:"touch"}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-6"},i.a.createElement(q,null)),i.a.createElement("div",{className:"col-6"},i.a.createElement(U,null)))))},W=(a(65),function(e){var t=e.title,a=e.link,n=e.img;return i.a.createElement("div",{className:"project-card"},i.a.createElement("span",{className:"project-card-title"},t),i.a.createElement("div",{className:"project-card-img"},i.a.createElement("a",{href:a},i.a.createElement("img",{src:n,alt:"project-img",className:"project-img"}))))}),Z=a(22),z=a.n(Z),Q=a(23),X=a.n(Q),$=a(24),ee=a.n($),te=a(25),ae=a.n(te),ne=a(26),ie=a.n(ne),le=a(27),ce=a.n(le),re=a(28),oe=a.n(re),se=a(29),me=a.n(se),ue=a(30),de=a.n(ue),pe=[{id:1,title:"Calculator",link:"https://darkness8129.github.io/dark-calculator/",img:z.a},{id:2,title:"Matrix effect",link:"https://darkness8129.github.io/matrix-effect/",img:X.a},{id:3,title:"Notes App",link:"https://darkness8129.github.io/notes-app/",img:ee.a},{id:4,title:"Calendar",link:"https://darkness8129.github.io/test-task-calendar/",img:ce.a},{id:5,title:"Toasts",link:"https://darkness8129.github.io/custom-toasts/",img:de.a},{id:6,title:"Registration Form",link:"https://darkness8129.github.io/registration-form/",img:me.a},{id:7,title:"Axit",link:"https://darkness8129.github.io/axit-landing/",img:oe.a},{id:8,title:"ConFusion",link:"https://github.com/darkness8129/confusion",img:ae.a},{id:9,title:"Ollo",link:"https://github.com/darkness8129/ollo",img:ie.a}],fe=function(){var e=pe.map((function(e){return i.a.createElement("div",{key:e.id,className:"col-12 col-sm-6 col-lg-4"},i.a.createElement(W,{title:e.title,link:e.link,img:e.img}))}));return i.a.createElement(N.b.div,{initial:"out",animate:"in",exit:"out",variants:k,className:"content"},i.a.createElement(y,{bgText:"Works",firstPart:"My",secondPart:"Portfolio"}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},e)))},ve=a(31),Ee=(a(66),a(32)),ge=a.n(Ee),be=function(){var e=Object(n.useRef)(null);return Object(ve.a)({file:ge.a,canvasEl:e}),i.a.createElement(N.b.div,{initial:"out",animate:"in",exit:"out",variants:k,className:"content"},i.a.createElement(y,{bgText:"Resume",firstPart:"My",secondPart:"CV"}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-12 d-flex justify-content-center"},i.a.createElement("div",null,i.a.createElement("canvas",{ref:e,className:"cv-document"}),i.a.createElement("a",{href:"https://drive.google.com/drive/folders/1goqX8A2wyt2Tzq5KL4aK-pZZN4TqhmnM?usp=sharing",className:"cv-mobile-link"},"View on GoogleDrive"))))))};var Ne=function(){var e=Object(x.g)();return i.a.createElement("div",{className:"app"},i.a.createElement("div",{className:"container-fluid"},i.a.createElement("div",{className:"row"},i.a.createElement(v,null),i.a.createElement("div",{className:"col-lg-12"},i.a.createElement(N.a,{exitBeforeEnter:!0},i.a.createElement(x.d,{location:e,key:e.pathname},i.a.createElement(x.b,{exact:!0,path:"/",component:h}),i.a.createElement(x.b,{exact:!0,path:"/about",component:H}),i.a.createElement(x.b,{exact:!0,path:"/portfolio",component:fe}),i.a.createElement(x.b,{exact:!0,path:"/contact",component:G}),i.a.createElement(x.b,{exact:!0,path:"/cv",component:be}),i.a.createElement(N.b.Fragment,{exit:"undefined"},i.a.createElement(x.a,{to:"/"}))))))))};c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(r.a,null,i.a.createElement(Ne,null))),document.getElementById("root"))}]),[[33,1,2]]]);
//# sourceMappingURL=main.a2df18fe.chunk.js.map