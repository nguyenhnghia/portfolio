(this.webpackJsonpweeklycss=this.webpackJsonpweeklycss||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,s){},,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var n=s(1),c=s.n(n),a=s(9),i=s.n(a),r=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,42)).then((function(t){var s=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;s(e),n(e),c(e),a(e),i(e)}))},o=s(7),l=s(2),d=s(3),h=s(5),p=s(4),j=(s(14),s(0)),u=function(e){Object(h.a)(s,e);var t=Object(p.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){return Object(j.jsx)("span",{id:this.props.id,className:this.props.extraClasses?"text ".concat(this.props.extraClasses):"text",children:this.props.children})}}]),s}(c.a.Component);u.defaultProps={children:"text"};var b=u,m=(s(16),function(e){Object(h.a)(s,e);var t=Object(p.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){return Object(j.jsx)("ul",{id:this.props.id,className:this.props.extraClasses?"list ".concat(this.props.extraClasses):"list",children:Array.isArray(this.props.children)?this.props.children.map((function(e,t){var s=e.props.itemExtraClasses?" ".concat(e.props.itemExtraClasses):"";return Object(j.jsx)("li",{className:e.props.activated?"list_item-active".concat(s):"list_item".concat(s),children:e},t)})):Object(j.jsx)("li",{className:"list_item",children:this.props.children})})}}]),s}(c.a.Component));m.defaultProps={children:Object(j.jsx)(b,{children:"List"})};var f=m,O=(s(17),function(e){Object(h.a)(s,e);var t=Object(p.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){return Object(j.jsx)("nav",{id:this.props.id,className:this.props.extraClasses?"navigator ".concat(this.props.extraClasses):"navigator",children:Object(j.jsx)(f,{children:this.props.children})})}}]),s}(c.a.Component));O.defaultProps={children:Object(j.jsx)(b,{children:"navigator"})};var x=O,v=(s(18),function(e){Object(h.a)(s,e);var t=Object(p.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){var e=this;return Object(j.jsxs)("label",{id:this.props.id,className:this.props.extraClasses?"switcher ".concat(this.props.extraClasses):"switcher",children:[Object(j.jsx)("input",{className:"switcher_checkbox",type:"checkbox",defaultChecked:this.props.switchState,onChange:function(){e.props.switchStateChanged(e.props.switchState)}}),Object(j.jsx)("span",{className:"switcher_slider",children:Object(j.jsxs)("span",{className:"icon",children:[this.props.switcherIcons?this.props.switcherIcons.unSwitched:"",this.props.switcherIcons?this.props.switcherIcons.switched:""]})})]})}}]),s}(c.a.Component));v.defaultProps={switchState:!1};var g=v,k=(s(19),function(e){Object(h.a)(s,e);var t=Object(p.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){var e=this;return Object(j.jsx)("button",{id:this.props.id,className:this.props.extraClasses?"button ".concat(this.props.extraClasses):"button",onClick:function(){e.props.clicked()},children:this.props.children})}}]),s}(c.a.Component));k.defaultProps={clicked:function(){},children:Object(j.jsx)(b,{children:"Button"})};var C=k,N=s(6),w=(s(20),s(21),s(22),function(e){Object(h.a)(s,e);var t=Object(p.a)(s);function s(){var e;Object(l.a)(this,s);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).handleNavigatorButtonClicked=function(t){e.props.navigate(t)},e}return Object(d.a)(s,[{key:"render",value:function(){var e=this;return Object(j.jsxs)("header",{className:this.props.darkMode?"header ".concat(this.props.blockClassName,"-dark"):"header ".concat(this.props.blockClassName,"-light"),children:[Object(j.jsx)("div",{className:"".concat(this.props.blockClassName,"_title"),children:Object(j.jsx)(f,{children:this.props.navigator.map((function(e){return Object(j.jsx)(b,{children:e.title},e.id)}))})}),Object(j.jsxs)("div",{className:"".concat(this.props.blockClassName,"_navigator"),children:[Object(j.jsx)(x,{children:this.props.navigator.map((function(t,s){return Object(j.jsxs)(C,{activated:t.active,clicked:function(){return e.handleNavigatorButtonClicked(t.id)},children:[t.icon,Object(j.jsx)(b,{children:t.name})]},t.id)}))}),Object(j.jsx)(g,{switchState:this.props.darkMode,switcherIcons:{unSwitched:Object(j.jsx)(N.k,{}),switched:Object(j.jsx)(N.h,{})},switchStateChanged:function(){e.props.darkModeChanged()}})]})]})}}]),s}(c.a.Component)),y=(s(23),function(e){Object(h.a)(s,e);var t=Object(p.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"handleWheel",value:function(e){e.deltaY>=0?this.props.wheelDown():this.props.wheelUp()}},{key:"render",value:function(){var e=this;return Object(j.jsx)("section",{id:this.props.id,ref:this.props.reference,onWheel:function(t){e.handleWheel(t)},className:this.props.extraClasses?"section ".concat(this.props.extraClasses):"section",children:this.props.children})}}]),s}(c.a.Component));y.defaultProps={wheelUp:function(){},wheelDown:function(){},refProp:null,children:Object(j.jsx)(b,{children:"section"})};var S=y,M=(s(24),s(25),s(26),function(e){Object(h.a)(s,e);var t=Object(p.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){var e=this;return Object(j.jsxs)(S,{extraClasses:this.props.darkMode?"section-dark ".concat(this.props.blockClassName):"section-light ".concat(this.props.blockClassName),wheelDown:function(){},children:[Object(j.jsxs)(b,{extraClasses:"".concat(this.props.blockClassName,"_title"),children:[Object(j.jsx)("sub",{children:"I'm a"}),Object(j.jsx)("h1",{children:"Frontend Developer"})]}),Object(j.jsxs)(b,{extraClasses:"".concat(this.props.blockClassName,"_content"),children:["Hello, I'm Nguyen Huu Nghia, I do things to make websites look nice and easy to use.",Object(j.jsx)("br",{})," A front-end fresher with serious passion for front-end development and UI/UX."]}),Object(j.jsxs)("div",{className:"".concat(this.props.blockClassName,"_buttonGroup"),children:[Object(j.jsx)(C,{extraClasses:"button-cta",children:Object(j.jsx)(b,{children:"read my resume"})}),Object(j.jsx)(C,{extraClasses:"button-ghost",clicked:function(){return e.props.navigate(e.props.sections[2].id)},children:Object(j.jsxs)(b,{children:["see my works",Object(j.jsx)(N.a,{})]})})]})]})}}]),s}(c.a.Component)),_=(s(27),s(28),s(29),function(e){Object(h.a)(s,e);var t=Object(p.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){var e=this;return Object(j.jsxs)(S,{extraClasses:this.props.darkMode?"section-dark ".concat(this.props.blockClassName):"section-light ".concat(this.props.blockClassName),children:[Object(j.jsx)(b,{extraClasses:"".concat(this.props.blockClassName,"_quotes"),children:"Never stop learning !"}),Object(j.jsxs)(b,{extraClasses:"".concat(this.props.blockClassName,"_bio"),children:[Object(j.jsx)("p",{children:"Hello! My name is Nguyen Huu Nghia. I'm a front-end fresher with serious passion for user interface and user experiences development. My main focus is building helpful, easy-to-use websites that can run smoothly across different devices."}),Object(j.jsxs)("p",{children:["With a great desire to master front-end skills, I spend time for self learning and practicing through my personal projects."," ",Object(j.jsx)(C,{clicked:function(){return e.props.navigate(e.props.sections[2].id)},children:Object(j.jsxs)(b,{children:["see my works",Object(j.jsx)(N.a,{})]})})]}),Object(j.jsxs)("p",{children:["My career goals are becoming a senior developer within 5 years and becoming a UX-UI designer within 10 years. Therefore, I'm currently seeking for a front-end fresher position to gain more experiences."," ",Object(j.jsx)(C,{clicked:function(){return e.props.navigate(e.props.sections[3].id)},children:Object(j.jsxs)(b,{children:["hire me now",Object(j.jsx)(N.a,{})]})})]})]}),Object(j.jsxs)("div",{className:"".concat(this.props.blockClassName,"_skills"),children:[Object(j.jsx)(b,{children:"Here are some technologies I can work with:"}),Object(j.jsx)(f,{children:["HTML5","CSS3","JavaScript","Sass","ReactJS","Git"].map((function(e,t){return Object(j.jsx)(b,{extraClasses:"text-tag",children:e},t)}))})]})]})}}]),s}(c.a.Component)),I=(s(30),function(e){Object(h.a)(s,e);var t=Object(p.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"devices",children:[Object(j.jsxs)("div",{className:"devices_lid",children:[Object(j.jsx)("div",{className:"devices_lid_screen",children:this.props.children}),Object(j.jsx)("div",{className:"devices_lid_topEdge"})]}),Object(j.jsx)("div",{className:"devices_base",children:Object(j.jsxs)("div",{className:"devices_base_topEdge",children:[Object(j.jsx)("div",{className:"devices_base_topEdge-slot"}),Object(j.jsx)("div",{className:"devices_base_topEdge-curve"})]})})]})}}]),s}(c.a.Component)),D=s.p+"static/media/pj1.b34fd4de.png",H=(s(31),s(32),s(33),function(e){Object(h.a)(s,e);var t=Object(p.a)(s);function s(e){var n;return Object(l.a)(this,s),(n=t.call(this,e)).handleProjectChanged=function(e){var t=[];n.state.projects.map((function(s){return s.id===e?t.push(Object(o.a)(Object(o.a)({},s),{},{active:!0})):t.push(Object(o.a)(Object(o.a)({},s),{},{active:!1})),t})),n.setState({projects:t})},n.state={projects:[{id:"project1",name:"coming soon",briefDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut provident dolorem id sequi vitae quod totam explicabo, tempora ex nulla aliquam? Ipsam architecto nam cum maiores, error quis eum dicta?",technologies:["HTML5","CSS3","Sass"],active:!0},{id:"project2",name:"coming soon",briefDescription:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque harum ea repellendus laudantium recusandae officiis fugit magni nemo, officia similique!",technologies:["HTML5","CSS3","JS"],active:!1},{id:"project3",name:"coming soon",briefDescription:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque harum ea repellendus laudantium recusandae officiis fugit magni nemo, officia similique!",technologies:["HTML5","CSS3","JS"],active:!1},{id:"project4",name:"coming soon",briefDescription:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque harum ea repellendus laudantium recusandae officiis fugit magni nemo, officia similique!",technologies:["HTML5","CSS3","JS"],active:!1}]},n}return Object(d.a)(s,[{key:"render",value:function(){var e=this;return Object(j.jsxs)(S,{extraClasses:this.props.darkMode?"section-dark ".concat(this.props.blockClassName):"section-light ".concat(this.props.blockClassName),children:[this.state.projects.map((function(t,s){return t.active&&Object(j.jsxs)("div",{className:"".concat(e.props.blockClassName,"_content"),children:[Object(j.jsxs)("div",{className:"content_details",children:[Object(j.jsx)(b,{extraClasses:"title",children:t.name}),Object(j.jsx)(f,{extraClasses:"technologies",children:t.technologies.map((function(e,t){return Object(j.jsx)(b,{itemExtraClasses:"anm-dr-4x anm-dl-".concat(6+t,"x"),extraClasses:"text-tag",children:e},t)}))}),Object(j.jsx)(b,{extraClasses:"description",children:t.briefDescription})]}),Object(j.jsx)("div",{className:"content_images",children:Object(j.jsx)(I,{children:Object(j.jsx)("img",{src:D,alt:"projectImage"})})})]},t.id)})),Object(j.jsx)(x,{extraClasses:"".concat(this.props.blockClassName,"_navigator"),children:this.state.projects.map((function(t,s){return Object(j.jsx)(C,{activated:t.active,itemExtraClasses:"tst-dl-".concat(s,"x"),clicked:function(){e.handleProjectChanged(t.id)},children:Object(j.jsx)(b,{children:s<9?"0".concat(1+s):1+s})},t.id)}))})]})}}]),s}(c.a.Component)),L=(s(34),s(35),s(36),function(e){Object(h.a)(s,e);var t=Object(p.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){var e=[{icon:Object(j.jsx)(N.g,{}),href:"mailto:nhnghia.dev@gmail.com?&subject=Job opportunity"},{icon:Object(j.jsx)(N.c,{}),href:"https://www.facebook.com/nhnghia.fedev/"},{icon:Object(j.jsx)(N.f,{}),href:"https://www.linkedin.com/in/ngh%C4%A9a-nguy%E1%BB%85n-988900216/"},{icon:Object(j.jsx)(N.b,{}),href:"https://codepen.io/nhnghia-dev"},{icon:Object(j.jsx)(N.d,{}),href:"https://github.com/nguyenhnghia"}];return Object(j.jsxs)(S,{extraClasses:this.props.darkMode?"section-dark ".concat(this.props.blockClassName):"section-light ".concat(this.props.blockClassName),children:[Object(j.jsxs)(b,{extraClasses:"".concat(this.props.blockClassName,"_title"),children:["Looking for a",Object(j.jsx)("br",{})," front-end fresher"]}),Object(j.jsxs)(b,{extraClasses:"".concat(this.props.blockClassName,"_paragraph"),children:["To land my first job, I'm currently seeking for a front-end fresher position. So if you are looking for a front-end fresher, why not ",Object(j.jsx)(C,{children:"check my resume"})," and give us a chance to work together ?"]}),Object(j.jsx)(f,{extraClasses:"".concat(this.props.blockClassName,"_list"),children:e.map((function(t,s){return Object(j.jsx)(C,{itemExtraClasses:"tst-dl-".concat(e.length-s,"x"),clicked:function(){window.open(t.href,"_blank")},children:Object(j.jsx)("span",{className:"icon",children:t.icon})},s)}))})]})}}]),s}(c.a.Component)),E=s.p+"static/media/portrait.99a9bd9f.png",q=(s(37),s(38),s(39),function(e){Object(h.a)(s,e);var t=Object(p.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"componentDidMount",value:function(){var e=new Image;e.src=E,window[E]=e}},{key:"componentWillUnmount",value:function(){delete window[E]}},{key:"render",value:function(){var e=this.props.darkMode?"portrait-dark":"portrait-light";return Object(j.jsx)("div",{className:"portrait ".concat(e),children:Object(j.jsx)("img",{src:E,alt:"portrait"})})}}]),s}(c.a.Component)),P=(s(40),function(e){Object(h.a)(s,e);var t=Object(p.a)(s);function s(e){var n;Object(l.a)(this,s),(n=t.call(this,e)).handleScroll=function(e){var t=document.getElementsByClassName("app")[0],s=e.target,c=((s.scrollTop+s.clientHeight)/s.scrollHeight*100).toFixed(0);t.classList="app scroll-".concat(c),c<37&&n.handleSectionsStateChanged(0),c>=37&&c<62&&n.handleSectionsStateChanged(1),c>=62&&c<87&&n.handleSectionsStateChanged(2),c>=87&&n.handleSectionsStateChanged(3)},n.handleSectionsStateChanged=function(e){var t=n.state.sections[e].id;if(!n.state.sections[e].active){var s=[];n.state.sections.forEach((function(e){e.id===t?s.push(Object(o.a)(Object(o.a)({},e),{},{active:!0})):s.push(Object(o.a)(Object(o.a)({},e),{},{active:!1}))})),n.setState({sections:s})}},n.handleNavigate=function(e){document.getElementsByClassName(e)[0].scrollIntoView()},n.handleDarkModeChanged=function(){n.setState({darkMode:!n.state.darkMode})};var c=new Date;return n.state={darkMode:c.getHours()>=18||c.getHours()<=5,sections:[{id:"home",name:"Home",title:"Wellcome to my website",active:!0,icon:Object(j.jsx)(N.e,{})},{id:"about",name:"About",title:"About me",active:!1,icon:Object(j.jsx)(N.l,{})},{id:"works",name:"Works",title:"Things I've built",active:!1,icon:Object(j.jsx)(N.i,{})},{id:"contact",name:"Contact",title:"Let's talk",active:!1,icon:Object(j.jsx)(N.j,{})}]},n}return Object(d.a)(s,[{key:"render",value:function(){return console.log("app rendered"),Object(j.jsxs)("div",{className:"app scroll-25",onScroll:this.handleScroll,children:[Object(j.jsx)(w,{blockClassName:"header",darkMode:this.state.darkMode,darkModeChanged:this.handleDarkModeChanged,navigator:this.state.sections,navigate:this.handleNavigate}),Object(j.jsx)(q,{darkMode:this.state.darkMode}),Object(j.jsx)(M,{blockClassName:this.state.sections[0].id,darkMode:this.state.darkMode,sections:this.state.sections,navigate:this.handleNavigate}),Object(j.jsx)(_,{blockClassName:this.state.sections[1].id,darkMode:this.state.darkMode,sections:this.state.sections,navigate:this.handleNavigate}),Object(j.jsx)(H,{blockClassName:this.state.sections[2].id,darkMode:this.state.darkMode,sections:this.state.sections}),Object(j.jsx)(L,{blockClassName:this.state.sections[3].id,darkMode:this.state.darkMode,sections:this.state.sections})]})}}]),s}(c.a.Component));i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(P,{})}),document.getElementById("root")),r()}],[[41,1,2]]]);
//# sourceMappingURL=main.a7073e0a.chunk.js.map