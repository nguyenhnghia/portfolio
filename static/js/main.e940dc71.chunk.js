(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,s){},,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var n=s(1),c=s.n(n),a=s(9),i=s.n(a),r=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,42)).then((function(t){var s=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;s(e),n(e),c(e),a(e),i(e)}))},o=s(7),l=s(2),h=s(3),d=s(5),j=s(4),p=c.a.createContext({darkModeState:!1,darkModeChanged:function(){}}),u=(s(14),s(0)),b=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(h.a)(s,[{key:"render",value:function(){return Object(u.jsx)("span",{id:this.props.id,className:this.props.extraClasses?"text ".concat(this.props.extraClasses):"text",children:this.props.children})}}]),s}(c.a.Component);b.defaultProps={children:"text"};var f=b,O=(s(16),function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(h.a)(s,[{key:"render",value:function(){return Object(u.jsx)("ul",{id:this.props.id,className:this.props.extraClasses?"list ".concat(this.props.extraClasses):"list",children:Array.isArray(this.props.children)?this.props.children.map((function(e,t){var s=e.props.itemExtraClasses?" ".concat(e.props.itemExtraClasses):"";return Object(u.jsx)("li",{className:e.props.activated?"list_item-active".concat(s):"list_item".concat(s),children:e},t)})):Object(u.jsx)("li",{className:"list_item",children:this.props.children})})}}]),s}(c.a.Component));O.defaultProps={children:Object(u.jsx)(f,{children:"List"})};var m=O,x=(s(17),function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(h.a)(s,[{key:"render",value:function(){return Object(u.jsx)("nav",{id:this.props.id,className:this.props.extraClasses?"navigator ".concat(this.props.extraClasses):"navigator",children:Object(u.jsx)(m,{children:this.props.children})})}}]),s}(c.a.Component));x.defaultProps={children:Object(u.jsx)(f,{children:"navigator"})};var v=x,g=(s(18),function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(h.a)(s,[{key:"render",value:function(){var e=this;return Object(u.jsxs)("label",{id:this.props.id,className:this.props.extraClasses?"switcher ".concat(this.props.extraClasses):"switcher",children:[Object(u.jsx)("input",{className:"switcher_checkbox",type:"checkbox",defaultChecked:this.props.switchState,onChange:function(){e.props.switchStateChanged(e.props.switchState)}}),Object(u.jsx)("span",{className:"switcher_slider",children:Object(u.jsxs)("span",{className:"icon",children:[this.props.switcherIcons?this.props.switcherIcons.unSwitched:"",this.props.switcherIcons?this.props.switcherIcons.switched:""]})})]})}}]),s}(c.a.Component));g.defaultProps={switchState:!1};var C=g,k=(s(19),function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(h.a)(s,[{key:"render",value:function(){var e=this;return Object(u.jsx)("button",{id:this.props.id,className:this.props.extraClasses?"button ".concat(this.props.extraClasses):"button",onClick:function(){e.props.clicked()},children:this.props.children})}}]),s}(c.a.Component));k.defaultProps={clicked:function(){},children:Object(u.jsx)(f,{children:"Button"})};var w=k,N=s(6),y=(s(20),s(21),s(22),function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(){var e;Object(l.a)(this,s);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).handleNavigatorButtonClicked=function(t){e.props.navigate(t)},e}return Object(h.a)(s,[{key:"render",value:function(){var e=this;return Object(u.jsx)(p.Consumer,{children:function(t){var s=t.darkModeState,n=t.darkModeChanged;return Object(u.jsxs)("header",{className:"header ".concat(e.props.blockClassName,s?"-dark":"-light"),children:[Object(u.jsx)("div",{className:"".concat(e.props.blockClassName,"_title"),children:Object(u.jsx)(m,{children:e.props.navigator.map((function(e){return Object(u.jsx)(f,{children:e.title},e.id)}))})}),Object(u.jsxs)("div",{className:"".concat(e.props.blockClassName,"_navigator"),children:[Object(u.jsx)(v,{children:e.props.navigator.map((function(t,s){return Object(u.jsxs)(w,{activated:t.active,clicked:function(){return e.handleNavigatorButtonClicked(t.id)},children:[t.icon,Object(u.jsx)(f,{children:t.name})]},t.id)}))}),Object(u.jsx)(C,{switchState:s,switcherIcons:{unSwitched:Object(u.jsx)(N.k,{}),switched:Object(u.jsx)(N.i,{})},switchStateChanged:n})]})]})}})}}]),s}(c.a.Component)),S=(s(23),function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(h.a)(s,[{key:"handleWheel",value:function(e){e.deltaY>=0?this.props.wheelDown():this.props.wheelUp()}},{key:"render",value:function(){var e=this;return Object(u.jsx)("section",{id:this.props.id,ref:this.props.reference,onWheel:function(t){e.handleWheel(t)},className:this.props.extraClasses?"section ".concat(this.props.extraClasses):"section",children:this.props.children})}}]),s}(c.a.Component));S.defaultProps={wheelUp:function(){},wheelDown:function(){},refProp:null,children:Object(u.jsx)(f,{children:"section"})};var _=S,I=(s(24),s(25),s(26),function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(h.a)(s,[{key:"render",value:function(){var e=this;return Object(u.jsx)(p.Consumer,{children:function(t){var s=t.darkModeState;return Object(u.jsxs)(_,{extraClasses:s?"section-dark ".concat(e.props.blockClassName):"section-light ".concat(e.props.blockClassName),children:[Object(u.jsxs)(f,{extraClasses:"".concat(e.props.blockClassName,"_title"),children:[Object(u.jsx)("sub",{children:"I'm a"}),Object(u.jsx)("h1",{children:"Frontend Developer"})]}),Object(u.jsxs)(f,{extraClasses:"".concat(e.props.blockClassName,"_content"),children:["Hello, I'm Nguyen Huu Nghia, I do things to make websites look nice and easy to use.",Object(u.jsx)("br",{})," A front-end fresher with serious passion for front-end development and UI/UX."]}),Object(u.jsxs)("div",{className:"".concat(e.props.blockClassName,"_buttonGroup"),children:[Object(u.jsx)(w,{extraClasses:"button-cta",clicked:function(){return window.open("".concat("/portfolio","/files/NguyenHuuNghia.Resume.pdf"))},children:Object(u.jsx)(f,{children:"read my resume"})}),Object(u.jsx)(w,{extraClasses:"button-ghost",clicked:function(){return e.props.navigate(e.props.sections[2].id)},children:Object(u.jsxs)(f,{children:["see my works",Object(u.jsx)(N.a,{})]})})]})]})}})}}]),s}(c.a.Component)),M=(s(27),s(28),s(29),function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(h.a)(s,[{key:"render",value:function(){var e=this,t=["HTML5","CSS3","JavaScript","Sass","ReactJS","Git"];return Object(u.jsx)(p.Consumer,{children:function(s){var n=s.darkModeState;return Object(u.jsxs)(_,{extraClasses:n?"section-dark ".concat(e.props.blockClassName):"section-light ".concat(e.props.blockClassName),children:[Object(u.jsx)(f,{extraClasses:"".concat(e.props.blockClassName,"_quotes"),children:"Never stop learning !"}),Object(u.jsxs)(f,{extraClasses:"".concat(e.props.blockClassName,"_bio"),children:[Object(u.jsx)("p",{children:"Hello! My name is Nguyen Huu Nghia. I'm a front-end fresher with serious passion for user interface and user experiences development. My main focus is building helpful, easy-to-use websites that can run smoothly across different devices."}),Object(u.jsxs)("p",{children:["With a great desire to master front-end skills, I spend time for self learning and practicing through my personal projects."," ",Object(u.jsx)(w,{clicked:function(){return e.props.navigate(e.props.sections[2].id)},children:Object(u.jsxs)(f,{children:["see my works",Object(u.jsx)(N.a,{})]})})]}),Object(u.jsxs)("p",{children:["My career goals are becoming a senior developer within 5 years and becoming a UX-UI designer within 10 years. Therefore, I'm currently seeking for a front-end fresher position to gain more experiences."," ",Object(u.jsx)(w,{clicked:function(){return e.props.navigate(e.props.sections[3].id)},children:Object(u.jsxs)(f,{children:["hire me now",Object(u.jsx)(N.a,{})]})})]})]}),Object(u.jsxs)("div",{className:"".concat(e.props.blockClassName,"_skills"),children:[Object(u.jsx)(f,{children:"Here are some technologies I can work with:"}),Object(u.jsx)(m,{children:t.map((function(e,t){return Object(u.jsx)(f,{extraClasses:"text-tag",children:e},t)}))})]})]})}})}}]),s}(c.a.Component)),E=(s(30),function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(h.a)(s,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"devices",children:[Object(u.jsxs)("div",{className:"devices_lid",children:[Object(u.jsx)("div",{className:"devices_lid_screen",children:this.props.children}),Object(u.jsx)("div",{className:"devices_lid_topEdge"})]}),Object(u.jsx)("div",{className:"devices_base",children:Object(u.jsxs)("div",{className:"devices_base_topEdge",children:[Object(u.jsx)("div",{className:"devices_base_topEdge-slot"}),Object(u.jsx)("div",{className:"devices_base_topEdge-curve"})]})})]})}}]),s}(c.a.Component)),H=(s(31),s(32),s(33),function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(e){var n;return Object(l.a)(this,s),(n=t.call(this,e)).handleProjectChanged=function(e){var t=[];n.state.projects.map((function(s){return s.id===e?t.push(Object(o.a)(Object(o.a)({},s),{},{active:!0})):t.push(Object(o.a)(Object(o.a)({},s),{},{active:!1})),t})),n.setState({projects:t})},n.state={projects:[{id:"project1",name:"coming soon",briefDescription:"I think the best way to get myself upgrades everyday is to work. Therefore, a new web application is in process at this time. I believe that it's worth waiting for.",technologies:[],image:"".concat("/portfolio","/image/comingSoon.relx.jpg"),active:!0},{id:"project2",name:"coming soon",briefDescription:"I think the best way to get myself upgrades everyday is to work. Therefore, a new web application is in process at this time. I believe that it's worth waiting for.",technologies:[],image:"".concat("/portfolio","/image/comingSoon.novaa.jpg"),active:!1}]},n}return Object(h.a)(s,[{key:"render",value:function(){var e=this;return Object(u.jsx)(p.Consumer,{children:function(t){var s=t.darkModeState;return Object(u.jsxs)(_,{extraClasses:s?"section-dark ".concat(e.props.blockClassName):"section-light ".concat(e.props.blockClassName),children:[e.state.projects.map((function(t,s){return t.active&&Object(u.jsxs)("div",{className:"".concat(e.props.blockClassName,"_content"),children:[Object(u.jsxs)("div",{className:"content_details",children:[Object(u.jsx)(f,{extraClasses:"title",children:t.name}),Object(u.jsx)(m,{extraClasses:"technologies",children:t.technologies.map((function(e,t){return Object(u.jsx)(f,{itemExtraClasses:"anm-dr-4x anm-dl-".concat(6+t,"x"),extraClasses:"text-tag",children:e},t)}))}),Object(u.jsx)(f,{extraClasses:"description",children:t.briefDescription})]}),Object(u.jsx)("div",{className:"content_images",children:Object(u.jsx)(E,{children:Object(u.jsx)("img",{src:t.image,alt:"projectImage"})})})]},t.id)})),Object(u.jsx)(v,{extraClasses:"".concat(e.props.blockClassName,"_navigator"),children:e.state.projects.map((function(t,s){return Object(u.jsx)(w,{activated:t.active,itemExtraClasses:"tst-dl-".concat(s,"x"),clicked:function(){e.handleProjectChanged(t.id)},children:Object(u.jsx)(f,{children:s<9?"0".concat(1+s):1+s})},t.id)}))})]})}})}}]),s}(c.a.Component)),P=(s(34),s(35),s(36),function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(e){var n;return Object(l.a)(this,s),(n=t.call(this,e)).state={contactLinks:[{icon:Object(u.jsx)(N.h,{}),href:"mailto:nhnghia.dev@gmail.com?&subject=Job opportunity"},{icon:Object(u.jsx)(N.d,{}),href:"https://www.facebook.com/nhnghia.fedev/"},{icon:Object(u.jsx)(N.g,{}),href:"https://www.linkedin.com/in/ngh%C4%A9a-nguy%E1%BB%85n-988900216/"},{icon:Object(u.jsx)(N.c,{}),href:"https://codepen.io/nhnghia-dev"},{icon:Object(u.jsx)(N.e,{}),href:"https://github.com/nguyenhnghia"}]},n}return Object(h.a)(s,[{key:"render",value:function(){var e=this;return Object(u.jsx)(p.Consumer,{children:function(t){var s=t.darkModeState;return Object(u.jsxs)(_,{extraClasses:s?"section-dark ".concat(e.props.blockClassName):"section-light ".concat(e.props.blockClassName),children:[Object(u.jsxs)(f,{extraClasses:"".concat(e.props.blockClassName,"_title"),children:["Looking for a",Object(u.jsx)("br",{})," front-end fresher"]}),Object(u.jsxs)(f,{extraClasses:"".concat(e.props.blockClassName,"_paragraph"),children:["To land my first job, I'm currently seeking for a front-end fresher position. So if you are looking for a front-end fresher, why not"," ",Object(u.jsx)(w,{clicked:function(){return window.open("".concat("/portfolio","/files/NguyenHuuNghia.Resume.pdf"))},children:"check my resume"})," ","and give us a chance to work together ?"]}),Object(u.jsx)(m,{extraClasses:"".concat(e.props.blockClassName,"_list"),children:e.state.contactLinks.map((function(t,s){return Object(u.jsx)(w,{itemExtraClasses:"tst-dl-".concat(e.state.contactLinks.length-s,"x"),clicked:function(){window.open(t.href,"_blank")},children:Object(u.jsx)("span",{className:"icon",children:t.icon})},s)}))})]})}})}}]),s}(c.a.Component)),L=(s(37),s(38),s(39),"".concat("/portfolio","/image/portrait.png")),B=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(h.a)(s,[{key:"componentDidMount",value:function(){var e=new Image;e.src=L,window[L]=e}},{key:"componentWillUnmount",value:function(){delete window[L]}},{key:"render",value:function(){return Object(u.jsx)(p.Consumer,{children:function(e){var t=e.darkModeState?"portrait-dark":"portrait-light";return Object(u.jsx)("div",{className:"portrait ".concat(t),children:Object(u.jsx)("img",{src:L,alt:"portrait"})})}})}}]),s}(c.a.Component),D=(s(40),function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(e){var n;return Object(l.a)(this,s),(n=t.call(this,e)).handleScroll=function(e){var t=document.getElementsByClassName("app")[0],s=e.target,c=((s.scrollTop+s.clientHeight)/s.scrollHeight*100).toFixed(0);t.classList="app scroll-".concat(c),c<37&&n.handleSectionsStateChanged(0),c>=37&&c<62&&n.handleSectionsStateChanged(1),c>=62&&c<87&&n.handleSectionsStateChanged(2),c>=87&&n.handleSectionsStateChanged(3)},n.handleSectionsStateChanged=function(e){var t=n.state.sections[e].id;if(!n.state.sections[e].active){var s=[];n.state.sections.forEach((function(e){e.id===t?s.push(Object(o.a)(Object(o.a)({},e),{},{active:!0})):s.push(Object(o.a)(Object(o.a)({},e),{},{active:!1}))})),n.setState({sections:s})}},n.handleNavigate=function(e){document.getElementsByClassName(e)[0].scrollIntoView()},n.state={sections:[{id:"home",name:"Home",title:"Wellcome to my website",active:!0,icon:Object(u.jsx)(N.f,{})},{id:"about",name:"About",title:"About me",active:!1,icon:Object(u.jsx)(N.l,{})},{id:"works",name:"Works",title:"Things I've built",active:!1,icon:Object(u.jsx)(N.b,{})},{id:"contact",name:"Contact",title:"Let's talk",active:!1,icon:Object(u.jsx)(N.j,{})}]},n}return Object(h.a)(s,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"app scroll-25",onScroll:this.handleScroll,children:[Object(u.jsx)(y,{blockClassName:"header",navigator:this.state.sections,navigate:this.handleNavigate}),Object(u.jsx)(B,{darkMode:this.state.darkMode}),Object(u.jsx)(I,{blockClassName:this.state.sections[0].id,sections:this.state.sections,navigate:this.handleNavigate}),Object(u.jsx)(M,{blockClassName:this.state.sections[1].id,sections:this.state.sections,navigate:this.handleNavigate}),Object(u.jsx)(H,{blockClassName:this.state.sections[2].id,sections:this.state.sections}),Object(u.jsx)(P,{blockClassName:this.state.sections[3].id,sections:this.state.sections})]})}}]),s}(c.a.Component)),T=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(e){var n;Object(l.a)(this,s),(n=t.call(this,e)).handleChange=function(){n.setState((function(e){return{darkModeState:!e.darkModeState}}))};var c=(new Date).getHours();return n.state={darkModeState:c>=18||c<=5,darkModeChanged:n.handleChange},n}return Object(h.a)(s,[{key:"render",value:function(){return Object(u.jsx)(p.Provider,{value:this.state,children:this.props.children})}}]),s}(c.a.Component);i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(T,{children:Object(u.jsx)(D,{})})}),document.getElementById("root")),r()}],[[41,1,2]]]);
//# sourceMappingURL=main.e940dc71.chunk.js.map