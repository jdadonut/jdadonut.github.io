(this["webpackJsonpnode-qa117j"]=this["webpackJsonpnode-qa117j"]||[]).push([[0],{104:function(e,t,n){},105:function(e,t,n){},106:function(e,t,n){},107:function(e,t,n){},108:function(e,t,n){},109:function(e,t,n){},110:function(e,t,n){},111:function(e,t,n){},115:function(e,t){},117:function(e,t){},194:function(e,t){function n(e){return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=194},195:function(e,t,n){"use strict";n.r(t);n(2);var s=n(85),i=n.n(s),o=(n(97),n(98),n(16)),c=n.p+"static/media/pfp.12e66ee1.png",r=n(0);var a=function(){return Object(r.jsx)("div",{className:"Home",children:Object(r.jsxs)("header",{className:"Home-header",children:[Object(r.jsx)("img",{className:"home-header-img",src:c,alt:""}),Object(r.jsx)("h2",{children:"hi, im jai."}),Object(r.jsxs)("p",{children:[Object(r.jsx)("img",{src:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.bigcartel.com%2Fproduct_images%2F236085887%2Fthree%2Barrows%2Binverted%2Bcolour.png%3Fauto%3Dformat%26fit%3Dmax%26h%3D1200%26w%3D1200&f=1&nofb=1",className:"arrows",alt:"three arrows sign"}),Object(r.jsx)("i",{children:"esse melior. in aternum."})]}),Object(r.jsxs)("div",{className:"navigation-menu",children:[Object(r.jsx)(o.b,{className:"link",to:"/about",children:"About"}),Object(r.jsx)("br",{}),Object(r.jsx)(o.b,{className:"link",to:"/policies",children:"Policies"}),Object(r.jsx)("br",{}),Object(r.jsx)(o.b,{className:"link",to:"/projects",children:"Projects"}),Object(r.jsx)("br",{}),Object(r.jsx)(o.b,{className:"link",to:"/blog",children:"Blog"})]})]})})},l=n(10);n(104);var j=function(e){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(o.b,{to:e.to,className:"NavbarLink",children:e.text})})};n(105);var u=function(e){return Object(r.jsx)("div",{className:"NavbarLogo",children:Object(r.jsx)("img",{src:e.src,className:"NavbarLogo--image",alt:""})})};n(106);var d=function(){return Object(r.jsxs)("div",{className:"Navbar",children:[Object(r.jsx)(u,{src:c}),Object(r.jsxs)("div",{className:"NavbarLinks",children:[Object(r.jsx)(j,{to:"/",text:"Home"}),Object(r.jsx)(j,{to:"/about",text:"About"}),Object(r.jsx)(j,{to:"/policies",text:"Policies"}),Object(r.jsx)(j,{to:"/projects",text:"Projects"}),Object(r.jsx)(j,{to:"/blog",text:"Blog"})]})]})},h=n(199),b=n(200),m=n(201);var p,x=function(e){return Object(r.jsxs)(h.a,{children:[Object(r.jsx)(b.a,{children:e.question}),Object(r.jsx)(m.a,{children:e.answer})]})},f=n(87),O=n(88),v=n(91),g=n(46);n(107);var y=function(e){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("span",{"data-tip":!0,"data-for":e.showPronoun,children:e.showPronoun}),Object(r.jsx)(g.a,{id:e.showPronoun,place:"top",type:"light",effect:"solid",children:Object(r.jsx)("p",{children:Object(v.a)(p||(p=Object(O.a)(["This morning, "," went to the park.\nI went with ",",\nand "," brought "," frisbee.\nAt least I think it was ",".\nBy the end of the day, "," started throwing the frisbee to ","."])),e.dataPronoun.subject,e.dataPronoun.object,e.dataPronoun.subject,e.dataPronoun.possessiveDeterminer,e.dataPronoun.possessive,e.dataPronoun.subject,e.dataPronoun.reflexive).split(".").join(".\n\n")})})]})},w=n(64);n(108);var k=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(d,{}),Object(r.jsxs)("div",{className:"grid-3-col",children:[Object(r.jsx)(x,{question:"pronouns",answer:Object(r.jsx)(r.Fragment,{children:w.map((function(e){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(y,Object(l.a)({},e))})})).map((function(e,t){return t<w.length-1?[e,"/"]:[e]})).reduce((function(e,t){return e.concat(t)}))})}),f.map((function(e){return Object(r.jsx)(x,Object(l.a)({},e))}))]})]})},N=n(6),P=n(47);n(109);var D=function(e){var t=Object(N.f)().id,n=P.find((function(e){return e.id===t}));return n?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(d,{}),Object(r.jsxs)("div",{className:"Policy-Container",children:[Object(r.jsx)("div",{className:"policy-name",children:n.name}),Object(r.jsx)("div",{className:"policy-description",children:n.description}),Object(r.jsx)("div",{className:"policy-text",dangerouslySetInnerHTML:{__html:n.text.replace(/(?:\r\n|\r|\n)/g,"<br>")}})]})]}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(d,{}),Object(r.jsx)("div",{className:"Policy-Container",children:Object(r.jsx)("div",{className:"policy-name",children:"The policy "+t+" does not exist."})})]})};n(110);var F=function(e){return Object(r.jsx)(o.b,{to:e.src?e.src:"/policy/"+e.id,className:"policy-listing-wrapper",children:Object(r.jsx)("div",{className:"policy-listing",children:Object(r.jsxs)("div",{className:"policy-listing-header",children:[Object(r.jsx)("div",{className:"policy-listing-header-title",children:Object(r.jsx)("h2",{children:e.name})}),Object(r.jsx)("div",{className:"policy-listing-header-description",children:e.description})]})})})};n(111);var q=function(e){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(d,{}),Object(r.jsxs)("div",{className:"Policies-Container",children:[Object(r.jsx)("div",{className:"Policies-Container-Title",children:Object(r.jsx)("h1",{children:e.modified?e.title:"Policies"})}),Object(r.jsx)("div",{className:"Policies-Container-Content",children:e.modified?e.data.map((function(e){return Object(r.jsx)(F,Object(l.a)({},e))})):P.map((function(e){return Object(r.jsx)(F,Object(l.a)({},e))}))})]})]})},C=n(89),A=n(8),B=n.n(A),L=n(18),T=n(34),J=n(39),S=n(92),E=new(function(){function e(t){Object(T.a)(this,e),this.cache={},this.files=S.a.sync(t),this.load()}return Object(J.a)(e,[{key:"load",value:function(){var e=this;this.files.forEach(function(){var t=Object(L.a)(B.a.mark((function t(s){var i,o;return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n(194)("./loader!mdx-frontmatter-loader!".concat(s));case 2:i=t.sent,o=i.attributes,e.cache[o.id]={mdx:undefined,attributes:o};case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"get",value:function(e){return this.cache[e]||null}},{key:"has",value:function(e){return void 0!==this.cache[e]}},{key:"linklist",value:function(){var e=this;return Object.keys(this.cache).map((function(t){return e.cache[t].attributes}))}}]),e}())("./blog/**/*.mdx");i.a.render(Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",integrity:"sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC",crossorigin:"anonymous"}),Object(r.jsx)(g.a,{place:"top",type:"light",effect:"solid"}),Object(r.jsx)(o.a,{children:Object(r.jsxs)(N.c,{children:[Object(r.jsx)(N.a,{path:"/blog/post/:id",children:Object(r.jsx)(a,{store:E})}),Object(r.jsx)(N.a,{path:"/blog",children:Object(r.jsx)(a,{store:E})}),Object(r.jsx)(N.a,{path:"/projects",children:Object(r.jsx)(q,{modified:!0,data:C,title:"Projects"})}),Object(r.jsx)(N.a,{path:"/policies",component:q}),Object(r.jsx)(N.a,{path:"/policy/:id",component:D}),Object(r.jsx)(N.a,{path:"/about",component:k}),Object(r.jsx)(N.a,{path:"/",component:a})]})})]}),document.getElementById("root"))},47:function(e){e.exports=JSON.parse('[{"name":"Anti Bribery Act","id":"anti-bribery-act","description":"This bill will remove corporate money from the pockets of politicians.","text":"this is\\nexample text."}]')},64:function(e){e.exports=JSON.parse('[{"showPronoun":"meow","dataPronoun":{"subject":"meow","object":"meow","possessiveDeterminer":"meows","possessive":"meows","reflexive":"meowself"}},{"showPronoun":"she","dataPronoun":{"subject":"she","object":"her","possessiveDeterminer":"her","possessive":"hers","reflexive":"herself"}},{"showPronoun":"they","dataPronoun":{"subject":"they","object":"them","possessiveDeterminer":"their","possessive":"theirs","reflexive":"themselves"}},{"showPronoun":"pika","dataPronoun":{"subject":"pi","object":"pika","possessiveDeterminer":"pikas","possessive":"pikas","reflexive":"pikaself"}},{"showPronoun":"nya","dataPronoun":{"subject":"nya","object":"nyan","possessiveDeterminer":"nyans","possessive":"nyans","reflexive":"nyanself"}},{"showPronoun":"kitty","dataPronoun":{"subject":"kitty","object":"kitty","possessiveDeterminer":"kittys","possessive":"kittys","reflexive":"kitself"}},{"showPronoun":"kit","dataPronoun":{"subject":"kit","object":"kit","possessiveDeterminer":"kits","possessive":"kits","reflexive":"kitself"}}]')},87:function(e){e.exports=JSON.parse('[{"question":"gender","answer":"female, but if given the chance would be a catgirl"},{"question":"sexuality","answer":"pansexual"},{"question":"what do you plan to do in your life?","answer":"honestly, im constantly jumping between politician, programmer, and about a half-dozen others. i don\'t particularly know what\'ll come of it but if i have enough options nothing can fail."},{"question":"what do you like to do in your free time?","answer":"i usually code and game. not much else piques my interest, and whilst i want to get into more things it just seems that coding and gaming are the things that are most interesting and fun for me."},{"question":"do you have any other interests?","answer":"i am quite interested in politics, specifically in making a world that works for every single person whilst preserving the environment. i am also quite interested in graphic design and human modification through technology (transhumanism)."}]')},89:function(e){e.exports=JSON.parse('[{"name":"Cycliq","description":"A Discord bot written in C#","src":"https://github.com/jdadonut/Cycliq"}]')},97:function(e,t,n){},98:function(e,t,n){}},[[195,1,2]]]);
//# sourceMappingURL=main.1238b174.chunk.js.map