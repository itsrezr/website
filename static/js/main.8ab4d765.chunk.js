(this["webpackJsonprezportfolio2.0"]=this["webpackJsonprezportfolio2.0"]||[]).push([[0],{138:function(e,a,t){},152:function(e,a,t){},22:function(e,a,t){},231:function(e,a,t){},232:function(e,a,t){},236:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(10),o=t.n(i),r=(t(89),t(5)),c=t(6),s=t(8),m=t(7),u=(t(22),t(45)),d=(t(28),t(138),t(82)),p=t(237),g=t(238),v=t(239),f=t(66),E=t.n(f),h=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(r.a)(this,t),(e=a.call(this)).vantaRef=l.a.createRef(),e}return Object(c.a)(t,[{key:"componentDidMount",value:function(){this.vantaEffect=E()({el:".home-page-background",mouseControls:!0,touchControls:!0,gyroControls:!1,minHeight:200,minWidth:200,baseColor:13923,xOffset:-.18,size:1.3})}},{key:"componentWillUnmount",value:function(){this.vantaEffect&&this.vantaEffect.destroy()}},{key:"render",value:function(){return l.a.createElement("div",{className:"home-page-background",ref:this.vantaRef},l.a.createElement("div",{className:"home-text"},l.a.createElement(p.a,null,l.a.createElement(g.a,null,l.a.createElement(v.a,{md:{offset:4}},l.a.createElement("header",null,l.a.createElement("b",null,"REZ RIAZI")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(d.a,null,l.a.createElement("span",{id:"loop-text"}," Software Developer."),l.a.createElement("span",{id:"loop-text"}," Creator.")))))))}}]),t}(n.Component),b=t(16),y=(t(152),t(13)),w=t.n(y),j=(n.Component,t(65),t(30)),P=t.n(j),M=t(31),k=t.n(M),x=t(68),O=t.n(x),T=t(69),C=t.n(T),N=t(70),S=t.n(N),I=function(e){return l.a.createElement("a",{class:"carousel-item modal-trigger",href:e.modal},e.title,l.a.createElement("img",{src:e.logo,alt:""}))},D=function(e){return l.a.createElement("div",{id:e.id,class:"modal"},l.a.createElement("div",{id:"popUpModal",class:"modal-content center-align"},l.a.createElement("h4",null,e.title),e.content))},U=function(e){return Object(n.useEffect)((function(){var e=document.querySelectorAll(".modal");w.a.Modal.init(e,{}),e=document.querySelectorAll(".carousel"),w.a.Carousel.init(e,{});document.getElementById("myVideo")})),l.a.createElement("div",{className:"container section"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{class:"grid-container",className:"carousel col s12",id:"appsNameText"},l.a.createElement(I,{className:"picApps",logo:P.a,title:"Pill Up",modal:"#PillUpModal"}),l.a.createElement(I,{logo:k.a,title:"Planet Panic",modal:"#PlanetPanicModal"}),l.a.createElement(I,{logo:O.a,title:"To-Do List",modal:"#ToDoModal",alt:"To Do Picture"}))),l.a.createElement(D,{id:"PillUpModal",title:"Pill Up - Interactive Arcade Game",content:l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"Fun and addictive game made using Java in IntelliJ with JavaFX. The objective of the game is to survive as long as possible, by avoiding spikes, aging pills, and growth pills. This was a team project, and in addition to coding, I was responsible for the User Interface, User Experience Design, creating the graphics (made on Krita), and debugging. This was made at the 48-hour BC Game Jam."),l.a.createElement("p",null,"Use Left/Right/Up/Down arrows to move & SPACE bar to pause game"),l.a.createElement("div",{className:"row"},l.a.createElement("video",{controls:!0,src:C.a,className:"responsive-vid",alt:"Game Demo"})))}),l.a.createElement(D,{id:"PlanetPanicModal",title:"Planet Panic - Educational Kids Game",content:l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"At the Hacking For Humanity Hackathon hosted by Girls in Tech, I made the game \u201cPlanet-Panic\u201d. The objective of the game is to collect different pieces of garbage and put it in the bin it belongs to, which educates kids about waste. I created all of the graphics and User Interface Design using photoshop environment, and the game was implemented in Python."),l.a.createElement("div",{className:"row"},l.a.createElement("video",{controls:!0,src:S.a,className:"responsive-vid",alt:"Game Demo"})))}),l.a.createElement(D,{className:"regText",id:"ToDoModal",title:"To Do List",content:l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"Created a To-Do List Application using Java in IntelliJ IDEA with JUnit testing and GUI as an academic project. Specific abstract design implementations were used to ensure a coherent and cohesive structure. This includes subject-observer design, composite patterns, and advanced iteration."))}))},A=t(32),G=t(17),R=t(71),J=t.n(R);function W(){var e=Object(b.a)(["",""]);return W=function(){return e},e}function z(){var e=Object(b.a)(["\n      animation: 3s ",";\n    "]);return z=function(){return e},e}var H=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(r.a)(this,t),(e=a.call(this)).vantaRef=l.a.createRef(),e}return Object(c.a)(t,[{key:"componentDidMount",value:function(){this.vantaEffect=J()({el:".apps-page-background",mouseControls:!1,touchControls:!1,gyroControls:!1,minHeight:200,minWidth:200,scale:1,scaleMobile:1,points:9,maxDistance:23,spacing:20})}},{key:"componentWillUnmount",value:function(){this.vantaEffect&&this.vantaEffect.destroy()}},{key:"render",value:function(){var e=G.a.div(z(),Object(G.b)(W(),A.fadeInUp));return l.a.createElement("div",{className:"apps-page-background",id:"apps",ref:this.vantaRef},l.a.createElement(e,null,l.a.createElement("h1",{className:"appsgamesText"},"APPS & GAMES")),l.a.createElement(U,null))}}]),t}(n.Component),L=t(75),B=t.n(L),_=t(76),F=t.n(_),q=t(77),K=t.n(q),Q=t(78),V=t.n(Q),X=t(79),Z=t.n(X),Y=function(e){return Object(n.useEffect)((function(){var e=document.querySelectorAll(".modal");w.a.Modal.init(e,{}),e=document.querySelectorAll(".carousel"),w.a.Carousel.init(e,{})})),l.a.createElement("div",{className:"display-items-center"},l.a.createElement("div",{className:"container section"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"carousel col s12"},l.a.createElement(I,{logo:Z.a}),l.a.createElement(I,{logo:F.a}),l.a.createElement(I,{logo:B.a}),l.a.createElement(I,{logo:V.a}),l.a.createElement(I,{logo:k.a}),l.a.createElement(I,{logo:P.a}),l.a.createElement(I,{logo:K.a})))))},$=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"sectionPage",id:"designs"},l.a.createElement(Y,null)))}}]),t}(n.Component),ee=(t(231),t(80)),ae=t.n(ee);function te(){var e=Object(b.a)(["",""]);return te=function(){return e},e}function ne(){var e=Object(b.a)(["\n      animation: 3s ",";\n    "]);return ne=function(){return e},e}var le=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=document.querySelector(".collapsible.expandable");w.a.Collapsible.init(e,{accordion:!1})}},{key:"render",value:function(){var e=G.a.div(ne(),Object(G.b)(te(),A.fadeInUp));return l.a.createElement("div",{className:"AboutMePage",id:"aboutme"},l.a.createElement(e,null,l.a.createElement("h1",{id:"aboutmeText"},"ABOUT ME \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",l.a.createElement("a",{id:"connect",href:"https://www.linkedin.com/in/rezriazi/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{class:"material-icons"},"supervisor_account"),"\xa0CONNECT WITH ME"))),l.a.createElement("div",{id:"aboutMeSection"},l.a.createElement("img",{src:ae.a,className:"circle responsive-img",id:"AboutPicture",alt:"ProfilePic"}),l.a.createElement("div",null,l.a.createElement("div",{className:"bodyText"},l.a.createElement("p",{id:"aboutMeWritten"},"Who am I? I'm a Full Stack Developer and a student at the University of British Columbia studying Computer Science. Most people know me for my creativity. I've been creating projects from a young age in different platforms. From the age of 9, I created and ran my own blog on WordPress, made a YouTube channel of lyric videos which would reach 50,000 views, created my own cartoon series using GoAnimate, wrote a mini book series, and have composed a dozen songs on the piano. In the recent years, my creativity has been focused on making my own apps and games using object-orientated programming as well as creating projects such as websites through front-end development and scripting languages.")),l.a.createElement("div",{id:"CollapseSection"},l.a.createElement("ul",{class:"collapsible expandable"},l.a.createElement("li",null,l.a.createElement("div",{class:"collapsible-header"},l.a.createElement("i",{class:"material-icons"},"build"),"Technical Skills"),l.a.createElement("div",{class:"collapsible-body"},l.a.createElement("span",null,"My technical skills include language proficiency in Java, C#, C++, JavaScript, CSS, and HTML. Knowledge in frameworks and libraries include React and .NET, and I have experience in databases such as SQL and NoSQL (MongoDB). My design experience is very strong, evident through being the UI, UX, and Graphic Designer for all of my individual and collaborative projects."))),l.a.createElement("li",null,l.a.createElement("div",{class:"collapsible-header"},l.a.createElement("i",{class:"material-icons"},"person"),"Personal Strengths"),l.a.createElement("div",{class:"collapsible-body"},l.a.createElement("span",null,"My strengths include my strong problem-solving skills, my attention to detail, as well as being a fast learner. Being on competitive volleyball and softball teams throughout the years has taught me to be very comfortable in collaborative settings and being a team player. My leadership skills are evident through being a supervisor and training new employees at my job as a Wine Sales Representative."))),l.a.createElement("li",null,l.a.createElement("div",{class:"collapsible-header"},l.a.createElement("i",{class:"material-icons"},"create"),"About This Website"),l.a.createElement("div",{class:"collapsible-body"},l.a.createElement("span",null,"I coded this website using React with languages JavaScript, HTML, and CSS. It is implemented through Node.js in Microsoft Visual Studio Code, and Github.io used to host the site's URL online."))))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null))))}}]),t}(n.Component),ie=(t(232),n.Component,function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"everything",id:"everything"},l.a.createElement(u.Header,{className:"regText",id:"header-row",transparent:!0,title:" "},l.a.createElement("ul",{transparent:!0},l.a.createElement(u.Navigation,{transparent:!0},l.a.createElement("li",null,l.a.createElement("a",{id:"navigationText",href:""},"HOME")),l.a.createElement("li",null,l.a.createElement("a",{id:"navigationText",href:"#apps"},"APPS & GAMES")),l.a.createElement("li",null,l.a.createElement("a",{id:"navigationText",href:"#designs"},"DESIGNS")),l.a.createElement("li",null,l.a.createElement("a",{id:"navigationText",href:"#aboutme"},"ABOUT ME"))))),l.a.createElement(h,null),l.a.createElement(H,null),l.a.createElement($,null),l.a.createElement(le,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(233),t(234);var oe=t(81);o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(oe.a,null,l.a.createElement(ie,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},28:function(e,a,t){},30:function(e,a,t){e.exports=t.p+"static/media/maingamepicture.525d163e.jpg"},31:function(e,a,t){e.exports=t.p+"static/media/Planet_Panic_MainPic.112c47d2.png"},65:function(e,a,t){},68:function(e,a,t){e.exports=t.p+"static/media/toDoList.e0524739.png"},69:function(e,a,t){e.exports=t.p+"static/media/PillUpDemo.0e8de080.mp4"},70:function(e,a,t){e.exports=t.p+"static/media/PlanetPanicDemo.43066bb0.mp4"},75:function(e,a,t){e.exports=t.p+"static/media/rezzmix.f91033dc.JPG"},76:function(e,a,t){e.exports=t.p+"static/media/ubctalentsized.fd068e91.jpg"},77:function(e,a,t){e.exports=t.p+"static/media/portrait_logo_rez_with_paint1.a9f3707c.png"},78:function(e,a,t){e.exports=t.p+"static/media/ubcwomeninsciencelogo_byRez.7ea7726a.jpg"},79:function(e,a,t){e.exports=t.p+"static/media/heavydatacorplogo.d94189b3.png"},80:function(e,a,t){e.exports=t.p+"static/media/AboutMePic.c8076e03.jpeg"},84:function(e,a,t){e.exports=t(236)},89:function(e,a,t){}},[[84,1,2]]]);
//# sourceMappingURL=main.8ab4d765.chunk.js.map