(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{37:function(e,a,t){e.exports=t.p+"static/media/tattoo-thumb.ef8f19fd.jpg"},38:function(e,a,t){e.exports=t.p+"static/media/eden-thumb.22415ade.jpg"},39:function(e,a,t){e.exports=t.p+"static/media/bighead-thumb.3e60fec0.jpg"},40:function(e,a,t){e.exports=t.p+"static/media/confection-thumb.9c0c1ef0.jpg"},41:function(e,a,t){e.exports=t.p+"static/media/tattoo-1.764df8ab.jpg"},42:function(e,a,t){e.exports=t.p+"static/media/tattoo-2.0e16a84c.jpg"},43:function(e,a,t){e.exports=t.p+"static/media/door-1.5a19d9be.jpg"},44:function(e,a,t){e.exports=t.p+"static/media/door-2.986027d9.jpg"},45:function(e,a,t){e.exports=t.p+"static/media/furniture-1.2596115c.jpg"},46:function(e,a,t){e.exports=t.p+"static/media/furniture-2.45394fc2.jpg"},47:function(e,a,t){e.exports=t.p+"static/media/confection-1.0dc793fb.jpg"},48:function(e,a,t){e.exports=t.p+"static/media/confection-2.0abcbf73.jpg"},53:function(e,a,t){e.exports=t.p+"static/media/josh-gomora.9468bb03.jpg"},54:function(e,a,t){e.exports=t(77)},59:function(e,a,t){},60:function(e,a,t){},77:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(18),r=t.n(l),o=(t(59),t(14)),s=(t(60),t(3)),i=t(4),m=t(6),u=t(5),d=t(7),p=t(1),v=t.n(p),E=t(37),h=t.n(E),b=t(38),g=t.n(b),f=t(39),N=t.n(f),w=t(40),j=t.n(w),k=t(41),O=t.n(k),y=t(42),T=t.n(y),C=t(43),S=t.n(C),x=t(44),L=t.n(x),W=t(45),D=t.n(W),I=t(46),A=t.n(I),B=t(47),H=t.n(B),X=t(48),J=t.n(X),M={name:"joshuagomora.",headerTagline:["You found me! I am","Joshua Gomora",".","Web Designer. Full-stack Developer."],contactEmail:"joshuadave.gomora@gmail.com",abouttext:"I specialize in creating modern web solutions for individuals and businesses. Using the latest technologies and coding standards, I will strive to build you a great web solution. With over 4 years of experience of web design and development for E-commerce websites and landing pages.",aboutImage:"https://drive.google.com/uc?id=1ZeqTT-92XShbJIRhiYYjF_GnWX4tsLRv",ShowAboutImage:!0,projects:[{id:1,title:"Tattoo Shop",service:"UI/UX Design",imageSrc:h.a,url:"https://havehopetattoo.com/",slug:"tattoo-shop",client:"Have Hope Tattoo",category:"Web \xb7 Wordpress \xb7 UI/UX Design",previewOne:O.a,previewTwo:T.a},{id:2,title:"Eden Roc Garage Doors",service:"Website Development",imageSrc:g.a,url:"https://www.edenrocgaragedoors.com.au/",slug:"eden-roc-garage-doors",client:"Swish Design",category:"Web \xb7 Wordpress \xb7 E-commerce",previewOne:S.a,previewTwo:L.a},{id:3,title:"Big Head Design Studio",service:"Website Development",imageSrc:N.a,url:"http://chetanverma.com/",slug:"big-head-design-studios",client:"Swish Design",category:"Web \xb7 Wordpress \xb7 E-commerce",previewOne:D.a,previewTwo:A.a},{id:4,title:"Confection of Sweets",service:"Logo Design",imageSrc:j.a,url:"",client:"Local",category:"Branding \xb7 Logo Design",slug:"confection-of-sweets",previewOne:H.a,previewTwo:J.a}],social:[{name:"Github",url:"https://github.com/chetanverma16"},{name:"LinkedIn",url:"https://www.behance.net/chetanverma"}]},G=t(12),R=function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(m.a)(this,Object(u.a)(a).call(this))).state={index:null,projectExists:!1,project:{}},e}return Object(d.a)(a,e),Object(i.a)(a,[{key:"componentWillMount",value:function(){var e=this,a=this.props.match.params.slug;M.projects.forEach(function(t,n){a===t.slug&&e.setState({index:n,projectExists:!0,project:M.projects[n]})})}},{key:"render",value:function(){return c.a.createElement("div",null,this.state.projectExists?c.a.createElement("div",{className:"project-view"},c.a.createElement("div",{className:"project-view-container"},c.a.createElement("div",{className:"project-view-col project-view-left"},this.state.project.previewOne?c.a.createElement("img",{src:this.state.project.previewOne,alt:"Mobile view"}):"",this.state.project.previewTwo?c.a.createElement("img",{src:this.state.project.previewTwo,alt:"Desktop view"}):""),c.a.createElement("div",{className:"project-view-col project-view-right"},c.a.createElement("div",{id:"scroll-wrapper"},c.a.createElement("div",{id:"scroll-title"},"Scroll"),c.a.createElement("div",{id:"scroll-down"})),c.a.createElement(G.b,{className:"back-btn",to:"/"},"\u2190 ",c.a.createElement("span",null,"Back to Home")),c.a.createElement(v.a,{bottom:!0},c.a.createElement("div",{className:"project-right-container"},c.a.createElement("div",null,c.a.createElement("h1",{className:"project-name"},this.state.project.title)),c.a.createElement("h2",null,"CLIENT"),c.a.createElement("p",null,this.state.project.client),c.a.createElement("h2",null,"CATEGORY"),c.a.createElement("p",null,this.state.project.category),this.state.project.url?c.a.createElement("div",{className:"view-project-wrap"},c.a.createElement("a",{href:this.state.project.url,className:"view-project-link style4-button",target:"_blank",without:!0,rel:"noopener noreferrer"},c.a.createElement("span",null,"View Project"))):""))))):this.props.history.push("/page-not-found"),console.log(this.state.project))}}]),a}(n.Component),U=t(13),Y=t(9),q=function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(m.a)(this,Object(u.a)(a).call(this))).scrollToTop=function(){Y.animateScroll.scrollToTop()},e.state={isToggleOn:!1},e.handleClick=e.handleClick.bind(Object(U.a)(e)),e}return Object(d.a)(a,e),Object(i.a)(a,[{key:"handleClick",value:function(){this.setState(function(e){return{isToggleOn:!e.isToggleOn}})}},{key:"render",value:function(){return c.a.createElement("div",{className:"site-navigation"},c.a.createElement("nav",null,c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(Y.Link,{className:"link",activeClass:"active",to:"home",spy:!0,smooth:!0,offset:-70,duration:500,onClick:this.scrollToTop},"Home")),c.a.createElement("li",null,c.a.createElement(Y.Link,{className:"link",activeClass:"active",to:"About",spy:!0,smooth:!0,offset:-70,duration:500},"About")),c.a.createElement("li",null,c.a.createElement(Y.Link,{className:"link",activeClass:"active",to:"work",spy:!0,smooth:!0,offset:-70,duration:500},"Work")),c.a.createElement("li",null,c.a.createElement(Y.Link,{className:"link",activeClass:"active",to:"contact",spy:!0,smooth:!0,offset:-70,duration:500},"Contact")))))}}]),a}(n.Component),F=t(51),z=t.n(F),P=function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(m.a)(this,Object(u.a)(a).call(this))).scrollToTop=function(){Y.animateScroll.scrollToTop()},e.state={isToggleOn:!1},e.handleClick=e.handleClick.bind(Object(U.a)(e)),e}return Object(d.a)(a,e),Object(i.a)(a,[{key:"handleClick",value:function(){this.setState(function(e){return{isToggleOn:!e.isToggleOn}})}},{key:"render",value:function(){return c.a.createElement("div",{className:"mobile-nav"},c.a.createElement(z.a,{isOpen:this.state.isToggleOn,menuClicked:this.handleClick,width:18,height:15,strokeWidth:1,rotate:0,color:"black",borderRadius:0,animationDuration:.5}),c.a.createElement("div",{className:"floating-nav ".concat(this.state.isToggleOn?"is-toggleOn":"")},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(Y.Link,{className:"link",activeClass:"active",to:"home",spy:!0,smooth:!0,offset:-70,duration:500,onClick:this.scrollToTop},"Home.")),c.a.createElement("li",null,c.a.createElement(Y.Link,{className:"link",activeClass:"active",to:"About",spy:!0,smooth:!0,offset:-70,duration:500},"About.")),c.a.createElement("li",null,c.a.createElement(Y.Link,{className:"link",activeClass:"active",to:"work",spy:!0,smooth:!0,offset:-70,duration:500},"Work.")),c.a.createElement("li",null,c.a.createElement(Y.Link,{className:"link",activeClass:"active",to:"contact",spy:!0,smooth:!0,offset:-70,duration:500},"Contact.")))))}}]),a}(n.Component),_=function(){return c.a.createElement("header",null,c.a.createElement("div",{className:"nav-container"},c.a.createElement("h1",{className:"logo"},c.a.createElement(v.a,{bottom:!0,cascade:!0},M.name)),c.a.createElement(q,null),c.a.createElement(P,null)))},V=t(52),Z=t.n(V),K=function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(m.a)(this,Object(u.a)(a).call(this))).state={isToggleOn:!1,isTop:!0},e.handleClick=e.handleClick.bind(Object(U.a)(e)),e}return Object(d.a)(a,e),Object(i.a)(a,[{key:"handleClick",value:function(){this.setState(function(e){return{isToggleOn:!e.isToggleOn}})}},{key:"componentDidMount",value:function(){var e=this;document.addEventListener("scroll",function(){var a=window.scrollY<100;a!==e.state.isTop&&e.setState({isTop:a})})}},{key:"render",value:function(){return c.a.createElement("div",{className:"banner-wrap"},c.a.createElement(Z.a,null,c.a.createElement("div",{className:"banner-bg"})),c.a.createElement("div",{id:"scroll-wrapper"},c.a.createElement("div",{id:"scroll-title"},"Scroll"),c.a.createElement("div",{id:"scroll-down"})),c.a.createElement("div",{className:"banner-container"},c.a.createElement(v.a,{bottom:!0},c.a.createElement("div",{className:"header-title-wrap"},c.a.createElement("p",{className:"header-title"},"You found me! I am"," ",c.a.createElement("span",{className:"name"},"Joshua\xa0Gomora"),".",c.a.createElement("br",null),"Web\xa0Designer. Full-stack Developer.",c.a.createElement("br",null)),c.a.createElement("div",{className:"banner-btn-wrap"},c.a.createElement("a",{className:"site-button",href:"mailto:".concat(M.contactEmail),rel:"noopener noreferrer"},"Contact"))))))}}]),a}(n.Component),$=t(53),Q=t.n($),ee=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(m.a)(this,Object(u.a)(a).call(this,e))).handleChange=function(e){var a=document.querySelector(".about-wrap"),t=document.querySelector(".user-photo"),n=document.querySelector(".user-photo-bg"),c=window.innerHeight,l=window.innerWidth;a.addEventListener("mousemove",function(e){var a=((e.clientX/l*100).toFixed(0)-50)/4,r=((e.clientY/c*100).toFixed(0)-50)/4,o="translate3d("+-a+"px, "+-r+"px, 0)",s="translate3d("+a+"px, "+r+"px, 0) translate(-15%,-10%)";t.style.transform=o,n.style.transform=s})},t.state={imageStatus:!1},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"handleImageLoaded",value:function(){this.setState({imageStatus:!0})}},{key:"handleImageErrored",value:function(){this.setState({imageStatus:"failed to load"})}},{key:"render",value:function(){return c.a.createElement("div",{className:"about-wrap"},c.a.createElement("div",{className:"element-1 bounce-2"}),c.a.createElement("div",{className:"about-container"},c.a.createElement("div",{className:"about-content"},c.a.createElement("h1",null,c.a.createElement(v.a,{bottom:!0,cascade:!0},"About.")),c.a.createElement(v.a,{bottom:!0},c.a.createElement("p",null,"I am a web developer at"," ",c.a.createElement("strong",null,c.a.createElement("a",{className:"site-link",href:"https://www.thisisbloop.com/"},"bloop\u2120")),". I specialize in creating modern web solutions for individuals and businesses. Using the latest technologies and coding standards, I will strive to build you a great web solution. With over 4 years of experience in web design and development for"," ",c.a.createElement("span",null,"E-commerce")," websites and"," ",c.a.createElement("span",null,"landing\xa0pages"),".")),c.a.createElement("a",{className:"site-button",href:"https://drive.google.com/open?id=1uHh5BsTUnoLpJ-poSKiTXqXuacB3pupZ",target:"_blank",rel:"noopener noreferrer"},"Download Resum\xe9")),c.a.createElement("div",{className:"about-photo-wrap"},M.ShowAboutImage?c.a.createElement("div",{className:"about-photo",onMouseOver:this.handleChange},c.a.createElement("img",{className:"user-photo",src:Q.a,onLoad:this.handleImageLoaded.bind(this),alt:"Joshua Gomora"}),c.a.createElement("div",{className:"user-photo-bg"})):null,this.state.imageStatus?null:c.a.createElement("div",{className:"img-placeholder"}))))}}]),a}(n.Component),ae=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(m.a)(this,Object(u.a)(a).call(this,e))).state={},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){this.showSkillBar()}},{key:"showSkillBar",value:function(){for(var e=document.getElementsByClassName("bar-group"),a=0;a<e.length;a++){var t=e[a].getAttribute("data-percent"),n=t/100,c=e[a].childNodes[0].children[0],l=e[a].childNodes[1].children[0];c.innerHTML=t+"%",l.setAttribute("style","transform: scaleX("+n+")")}}},{key:"render",value:function(){return c.a.createElement("div",{className:"skills-wrap"},c.a.createElement("div",{className:"skills-bg"}),c.a.createElement(v.a,{bottom:!0},c.a.createElement("div",{className:"skills-container"},c.a.createElement("div",{className:"skills-content"},c.a.createElement("h1",null,c.a.createElement(v.a,{bottom:!0,cascade:!0},"Skills.")),c.a.createElement("div",{className:"skill-bars"},c.a.createElement("div",{className:"bar-chart"},c.a.createElement("div",{className:"bar-group","data-percent":"100"},c.a.createElement("div",{className:"bar-name"},"HTML / CSS",c.a.createElement("div",{className:"percentage"},"0%")),c.a.createElement("div",{className:"bar-holder"},c.a.createElement("div",{className:"bar-percentage"}))),c.a.createElement("div",{className:"bar-group","data-percent":"95"},c.a.createElement("div",{className:"bar-name"},"Wordpress",c.a.createElement("div",{className:"percentage"},"0%")),c.a.createElement("div",{className:"bar-holder"},c.a.createElement("div",{className:"bar-percentage"}))),c.a.createElement("div",{className:"bar-group","data-percent":"68"},c.a.createElement("div",{className:"bar-name"},"React.js",c.a.createElement("div",{className:"percentage"},"0%")),c.a.createElement("div",{className:"bar-holder"},c.a.createElement("div",{className:"bar-percentage"}))),c.a.createElement("div",{className:"bar-group","data-percent":"93"},c.a.createElement("div",{className:"bar-name"},"Adobe Photoshop",c.a.createElement("div",{className:"percentage"},"0%")),c.a.createElement("div",{className:"bar-holder"},c.a.createElement("div",{className:"bar-percentage"})))),c.a.createElement("div",{className:"bar-chart"},c.a.createElement("div",{className:"bar-group","data-percent":"90"},c.a.createElement("div",{className:"bar-name"},"PHP",c.a.createElement("div",{className:"percentage"},"0%")),c.a.createElement("div",{className:"bar-holder"},c.a.createElement("div",{className:"bar-percentage"}))),c.a.createElement("div",{className:"bar-group","data-percent":"87"},c.a.createElement("div",{className:"bar-name"},"Javascript",c.a.createElement("div",{className:"percentage"},"0%")),c.a.createElement("div",{className:"bar-holder"},c.a.createElement("div",{className:"bar-percentage"}))),c.a.createElement("div",{className:"bar-group","data-percent":"75"},c.a.createElement("div",{className:"bar-name"},"Vue.js",c.a.createElement("div",{className:"percentage"},"0%")),c.a.createElement("div",{className:"bar-holder"},c.a.createElement("div",{className:"bar-percentage"}))),c.a.createElement("div",{className:"bar-group","data-percent":"83"},c.a.createElement("div",{className:"bar-name"},"SEO",c.a.createElement("div",{className:"percentage"},"0%")),c.a.createElement("div",{className:"bar-holder"},c.a.createElement("div",{className:"bar-percentage"})))))))))}}]),a}(n.Component),te=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(c)))).state={},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement(v.a,{bottom:!0},c.a.createElement("div",{className:"project"},c.a.createElement("div",{className:"project-image"},c.a.createElement("img",{src:this.props.imageSrc,alt:this.props.title})),c.a.createElement("div",{class:"work-bg"}),c.a.createElement("p",{className:"project-title"},this.props.title),c.a.createElement("span",null,this.props.service)))}}]),a}(n.Component),ne=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(c)))).state={},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"work-container"},c.a.createElement("div",{className:"element-2"}),c.a.createElement("div",{class:"blob"},c.a.createElement("svg",{xmlnsXlink:"http://www.w3.org/1999/xlink",version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 310 350"},c.a.createElement("path",{d:"M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z"}))),c.a.createElement("div",null,c.a.createElement("h1",{className:"heading"},c.a.createElement(v.a,{bottom:!0,cascade:!0},"Work.")),c.a.createElement("div",{className:"work-content"},M.projects.map(function(e){return c.a.createElement(G.b,{className:"project-link",to:"/projects/".concat(e.slug)},c.a.createElement(te,{key:e.id,title:e.title,service:e.service,imageSrc:e.imageSrc,url:e.url,slug:e.slug}))}))))}}]),a}(n.Component),ce=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(c)))).state={},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"contact-section"},c.a.createElement("div",{className:"element-dot-fade"}),c.a.createElement("div",{className:"element-3 bounce-1"}),c.a.createElement("div",{className:"element-4 bounce-3"}),c.a.createElement("div",{className:"contact-container"},c.a.createElement("h1",null,c.a.createElement(v.a,{bottom:!0,cascade:!0},"Contact.")),c.a.createElement(v.a,{bottom:!0},c.a.createElement("div",{className:"contact-content"},c.a.createElement("p",{className:"contact-text"},"Let\u2019s create your next ",c.a.createElement("br",{className:"hidden-m"}),c.a.createElement("span",{className:"amazing-color"},"experience together")),c.a.createElement("a",{href:"mailto:".concat(M.contactEmail),className:"email"},M.contactEmail),c.a.createElement("ul",null,M.social.map(function(e,a){return c.a.createElement("li",{key:a},c.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.url},e.name))}))))))}}]),a}(n.Component),le=function(){return c.a.createElement("div",{className:"homepage"},c.a.createElement(_,null),c.a.createElement("div",{className:"App-banner"},c.a.createElement(K,null)),c.a.createElement("div",{className:"About"},c.a.createElement(ee,null)),c.a.createElement("div",{className:"Skills"},c.a.createElement(ae,null)),c.a.createElement("div",{className:"work"},c.a.createElement(ne,null)),c.a.createElement("div",{className:"contact"},c.a.createElement(ce,null)))},re=function(){return c.a.createElement(v.a,{bottom:!0},c.a.createElement("div",{className:"page-not-found"},c.a.createElement("div",{className:"pnf-container"},c.a.createElement("h1",{className:"pnf-title"},"Error 404"),c.a.createElement("p",{className:"pnf-subtitle"},"The page you are trying to reach could not be found."),c.a.createElement(G.b,{className:"site-button",to:"/"},"Back to Home"))))};var oe=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(o.c,null,c.a.createElement(o.a,{exact:!0,path:"/",component:le}),c.a.createElement(o.a,{exact:!0,path:"/projects/:slug",component:R}),c.a.createElement(o.a,{path:"/page-not-found",component:re}),c.a.createElement(o.a,{component:re})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(G.a,null,c.a.createElement(oe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[54,1,2]]]);
//# sourceMappingURL=main.22d296f7.chunk.js.map