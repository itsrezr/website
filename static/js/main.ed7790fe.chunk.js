(this["webpackJsonprezportfolio2.0"]=this["webpackJsonprezportfolio2.0"]||[]).push([[0],{136:function(e,a,t){},150:function(e,a,t){},21:function(e,a,t){e.exports=t.p+"static/media/maingamepicture.525d163e.jpg"},22:function(e,a,t){e.exports=t.p+"static/media/Planet_Panic_MainPic.112c47d2.png"},229:function(e,a,t){},230:function(e,a,t){},234:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(11),o=t.n(i),r=(t(87),t(6)),c=t(7),s=t(9),m=t(8),d=(t(25),t(5)),u=(t(31),t(136),t(81)),p=t(236),g=t(237),f=t(238),v=t(69),E=t.n(v),h=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(r.a)(this,t),(e=a.call(this)).vantaRef=l.a.createRef(),e}return Object(c.a)(t,[{key:"componentDidMount",value:function(){this.vantaEffect=E()({el:".home-page-background",mouseControls:!0,touchControls:!0,gyroControls:!1,minHeight:200,minWidth:200,baseColor:13923,xOffset:-.18,size:1.3})}},{key:"componentWillUnmount",value:function(){this.vantaEffect&&this.vantaEffect.destroy()}},{key:"render",value:function(){return l.a.createElement("div",{className:"home-page-background",ref:this.vantaRef},l.a.createElement("div",{className:"home-text"},l.a.createElement(p.a,null,l.a.createElement(g.a,null,l.a.createElement(f.a,{md:{offset:4}},l.a.createElement("header",null,l.a.createElement("b",null,"REZ RIAZI")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(u.a,null,l.a.createElement("span",{id:"loop-text"}," Software Developer."),l.a.createElement("span",{id:"loop-text"}," Creator.")))))))}}]),t}(n.Component),b=t(17),y=(t(150),t(14)),w=t.n(y),j=(n.Component,t(68),t(21)),P=t.n(j),M=t(22),k=t.n(M),x=t(71),O=t.n(x),T=t(72),C=t.n(T),S=t(73),N=t.n(S),I=function(e){return l.a.createElement("a",{class:"carousel-item modal-trigger",href:e.modal},e.title,l.a.createElement("img",{src:e.logo,alt:""}))},U=function(e){return l.a.createElement("div",{id:e.id,class:"modal"},l.a.createElement("div",{id:"popUpModal",class:"modal-content center-align"},l.a.createElement("h4",null,e.title),e.content))},D=function(e){return Object(n.useEffect)((function(){var e=document.querySelectorAll(".modal");w.a.Modal.init(e,{}),e=document.querySelectorAll(".carousel"),w.a.Carousel.init(e,{});document.getElementById("myVideo")})),l.a.createElement("div",{className:"container section"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{class:"grid-container",className:"carousel col s12",id:"appsNameText"},l.a.createElement(I,{className:"picApps",logo:P.a,title:"Pill Up",modal:"#PillUpModal"}),l.a.createElement(I,{logo:k.a,title:"Planet Panic",modal:"#PlanetPanicModal"}),l.a.createElement(I,{logo:O.a,title:"To-Do List",modal:"#ToDoModal",alt:"To Do Picture"}))),l.a.createElement(U,{id:"PillUpModal",title:"Pill Up - Interactive Arcade Game",content:l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"Fun and addictive game made using Java in IntelliJ with JavaFX. The objective of the game is to survive as long as possible, by avoiding spikes, aging pills, and growth pills. This was a team project, and in addition to coding, I was responsible for the User Interface, User Experience Design, creating the graphics (made on Krita), and debugging. This was made at the 48-hour BC Game Jam."),l.a.createElement("p",null,"Use Left/Right/Up/Down arrows to move & SPACE bar to pause game"),l.a.createElement("div",{className:"row"},l.a.createElement("video",{controls:!0,src:C.a,className:"responsive-vid",alt:"Game Demo"})))}),l.a.createElement(U,{id:"PlanetPanicModal",title:"Planet Panic - Educational Kids Game",content:l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"At the Hacking For Humanity Hackathon hosted by Girls in Tech, I made the game \u201cPlanet-Panic\u201d. The objective of the game is to collect different pieces of garbage and put it in the bin it belongs to, which educates kids about waste. I created all of the graphics and User Interface Design using photoshop environment, and the game was implemented in Python."),l.a.createElement("div",{className:"row"},l.a.createElement("video",{controls:!0,src:N.a,className:"responsive-vid",alt:"Game Demo"})))}),l.a.createElement(U,{className:"regText",id:"ToDoModal",title:"To Do List",content:l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"Created a To-Do List Application using Java in IntelliJ IDEA with JUnit testing and GUI as an academic project. Specific abstract design implementations were used to ensure a coherent and cohesive structure. This includes subject-observer design, composite patterns, and advanced iteration."))}))},A=t(33),G=t(18),R=t(74),J=t.n(R);function W(){var e=Object(b.a)(["",""]);return W=function(){return e},e}function z(){var e=Object(b.a)(["\n      animation: 3s ",";\n    "]);return z=function(){return e},e}var B=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(r.a)(this,t),(e=a.call(this)).vantaRef=l.a.createRef(),e}return Object(c.a)(t,[{key:"componentDidMount",value:function(){this.vantaEffect=J()({el:".apps-page-background",mouseControls:!1,touchControls:!1,gyroControls:!1,minHeight:200,minWidth:200,scale:1,scaleMobile:1,points:9,maxDistance:23,spacing:20})}},{key:"componentWillUnmount",value:function(){this.vantaEffect&&this.vantaEffect.destroy()}},{key:"render",value:function(){var e=G.a.div(z(),Object(G.b)(W(),A.fadeInUp));return l.a.createElement("div",{className:"apps-page-background",id:"apps",ref:this.vantaRef},l.a.createElement(e,null,l.a.createElement("h1",{className:"appsgamesText"},"APPS & GAMES")),l.a.createElement(D,null))}}]),t}(n.Component),H=t(46),L=t.n(H),F=t(47),_=t.n(F),q=t(48),K=t.n(q),Q=t(78),V=t.n(Q),X=function(e){return Object(n.useEffect)((function(){var e=document.querySelectorAll(".modal");w.a.Modal.init(e,{}),e=document.querySelectorAll(".carousel"),w.a.Carousel.init(e,{})})),l.a.createElement("div",{className:"display-items-center"},l.a.createElement("div",{className:"container section"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"carousel col s12"},l.a.createElement(I,{logo:_.a,modal:"#modalUBCGotTalent"}),l.a.createElement(I,{logo:L.a,modal:"#modalRezsMix"}),l.a.createElement(I,{logo:V.a,modal:"#modalWIS"}),l.a.createElement(I,{logo:k.a,modal:"#modalPlanetPanic"}),l.a.createElement(I,{logo:P.a,modal:"#modalPillUp"}),l.a.createElement(I,{logo:K.a,modal:"#modalPortrait"})))))},Z=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"sectionPage",id:"designs"},l.a.createElement(X,null)))}}]),t}(n.Component),Y=(t(229),t(79)),$=t.n(Y);function ee(){var e=Object(b.a)(["",""]);return ee=function(){return e},e}function ae(){var e=Object(b.a)(["\n      animation: 3s ",";\n    "]);return ae=function(){return e},e}var te=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=document.querySelector(".collapsible.expandable");w.a.Collapsible.init(e,{accordion:!1})}},{key:"render",value:function(){var e=G.a.div(ae(),Object(G.b)(ee(),A.fadeInUp));return l.a.createElement("div",{className:"AboutMePage",id:"aboutme"},l.a.createElement(e,null,l.a.createElement("h1",{id:"aboutmeText"},"ABOUT ME \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",l.a.createElement("a",{id:"connect",href:"https://www.linkedin.com/in/rezriazi/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{class:"material-icons"},"supervisor_account"),"\xa0CONNECT WITH ME"))),l.a.createElement("div",{id:"aboutMeSection"},l.a.createElement("img",{src:$.a,className:"circle responsive-img",id:"AboutPicture",alt:"ProfilePic"}),l.a.createElement("div",null,l.a.createElement("div",{className:"bodyText"},l.a.createElement("p",{id:"aboutMeWritten"},"Who am I? I'm a Full Stack Developer and a student at the University of British Columbia studying Computer Science. Most people know me for my creativity. I've been creating projects from a young age in different platforms. From the age of 9, I created and ran my own blog on WordPress, made a YouTube channel of lyric videos which would reach 50,000 views, created my own cartoon series using GoAnimate, wrote a mini book series, and have composed a dozen songs on the piano. In the recent years, my creativity has been focused on making my own apps and games using object-orientated programming as well as creating projects such as websites through scripting and front-end development.")),l.a.createElement("div",{id:"CollapseSection"},l.a.createElement("ul",{class:"collapsible expandable"},l.a.createElement("li",null,l.a.createElement("div",{class:"collapsible-header"},l.a.createElement("i",{class:"material-icons"},"build"),"Technical Skills"),l.a.createElement("div",{class:"collapsible-body"},l.a.createElement("span",null,"My technical skills include language proficiency in Java, C#, C++, JavaScript, CSS, and HTML. Knowledge in frameworks and libraries include React and .NET, and I have experience in databases such as SQL and NoSQL (MongoDB). My design experience is very strong, evident through being the UI, UX, and Graphic Designer for all of my individual and collaborative projects."))),l.a.createElement("li",null,l.a.createElement("div",{class:"collapsible-header"},l.a.createElement("i",{class:"material-icons"},"person"),"Personal Strengths"),l.a.createElement("div",{class:"collapsible-body"},l.a.createElement("span",null,"My strengths include my strong problem-solving skills, my attention to detail, as well as being a fast learner. Being on competitive volleyball and softball teams throughout the years has taught me to be very comfortable in collaborative settings and being a team player. My leadership skills are evident through being a supervisor and training new employees at my job as a Wine Sales Representative."))),l.a.createElement("li",null,l.a.createElement("div",{class:"collapsible-header"},l.a.createElement("i",{class:"material-icons"},"create"),"About This Website"),l.a.createElement("div",{class:"collapsible-body"},l.a.createElement("span",null,"I coded this website using React with languages JavaScript, HTML, and CSS. It is implemented through Node.js in Microsoft Visual Studio Code, and Github.io used to host the site's URL online."))))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null))))}}]),t}(n.Component),ne=(t(230),n.Component,function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"everything",id:"everything"},l.a.createElement(d.Header,{className:"regText",id:"header-row",transparent:!0,title:" "},l.a.createElement("ul",{transparent:!0},l.a.createElement(d.Navigation,{transparent:!0},l.a.createElement("li",null,l.a.createElement("a",{id:"navigationText",href:""},"HOME")),l.a.createElement("li",null,l.a.createElement("a",{id:"navigationText",href:"#apps"},"APPS & GAMES")),l.a.createElement("li",null,l.a.createElement("a",{id:"navigationText",href:"#designs"},"DESIGNS")),l.a.createElement("li",null,l.a.createElement("a",{id:"navigationText",href:"#aboutme"},"ABOUT ME"))))),l.a.createElement(h,null),l.a.createElement(B,null),l.a.createElement(Z,null),l.a.createElement(te,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(231),t(232);var le=t(80);o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(le.a,null,l.a.createElement(ne,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},25:function(e,a,t){},31:function(e,a,t){},46:function(e,a,t){e.exports=t.p+"static/media/rezzmix.f91033dc.JPG"},47:function(e,a,t){e.exports=t.p+"static/media/ubctalentsized.fd068e91.jpg"},48:function(e,a,t){e.exports=t.p+"static/media/portrait_logo_rez(new).c4cf497f.png"},68:function(e,a,t){},71:function(e,a,t){e.exports=t.p+"static/media/toDoList.e0524739.png"},72:function(e,a,t){e.exports=t.p+"static/media/PillUpDemo.0e8de080.mp4"},73:function(e,a,t){e.exports=t.p+"static/media/PlanetPanicDemo.43066bb0.mp4"},78:function(e,a,t){e.exports=t.p+"static/media/ubcwomeninsciencelogo_byRez.7ea7726a.jpg"},79:function(e,a,t){e.exports=t.p+"static/media/AboutMePic.c8076e03.jpeg"},82:function(e,a,t){e.exports=t(234)},87:function(e,a,t){}},[[82,1,2]]]);
//# sourceMappingURL=main.ed7790fe.chunk.js.map