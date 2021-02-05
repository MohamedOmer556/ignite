(this.webpackJsonpignite=this.webpackJsonpignite||[]).push([[0],{73:function(e,n,t){"use strict";t.r(n);var a,c,r,i,o,s,d,l,b,m,u,g,j=t(0),p=t.n(j),h=t(23),O=t.n(h),f=t(5),A=t(22),x=t(13),v=t(14),w=t.n(v),E=t(21),y=t(15),I=t.n(y),k="https://api.rawg.io/api/",C=(new Date).getFullYear(),S=function(){var e=(new Date).getMonth()+1;return e<10?"0".concat(e):e}(),D=function(){var e=(new Date).getDay();return e<10?"0".concat(e):e}(),R="".concat(C,"-").concat(S,"-").concat(D),U="".concat(C-1,"-").concat(S,"-").concat(D),B="".concat(C+1,"-").concat(S,"-").concat(D),G="games?dates=".concat(U,",").concat(R,"&ordering=-rating&page_size=12"),z="games?dates=".concat(R,",").concat(B,"&ordering=-added&page_size=12"),M="games?dates=".concat(U,",").concat(R,"&ordering=-released&page_size=12"),T=function(e){return"".concat(k,"games/").concat(e,"/screenshots")},L=function(e){return"".concat(k,"games?search=").concat(e,"&page_size=9")},N=function(e){return"".concat(k,"games?dates=").concat(U,",").concat(R,"&ordering=-rating&page=").concat(e)},_=t(6),H=t(3),F=function(e){return function(){var n=Object(E.a)(w.a.mark((function n(t){var a,c;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t({type:"LOADING_DETAIL"}),n.next=3,I.a.get((r=e,"".concat(k,"games/").concat(r)));case 3:return a=n.sent,n.next=6,I.a.get(T(e));case 6:c=n.sent,t({type:"GET_DETAIL",payload:{game:a.data,screen:c.data}});case 8:case"end":return n.stop()}var r}),n)})));return function(e){return n.apply(this,arguments)}}()},Z=t(18),P=function(e,n){return e.match(/media\/screenshots/)?e.replace("media/screenshots","media/resize/".concat(n,"/-/screenshots")):e.replace("/media/games","/media/resize/".concat(n,"/-/games/"))},V=t(1),X=Object(_.b)(H.c.div)(a||(a=Object(f.a)(["\n  min-height: 30vh;\n  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);\n  text-align: center;\n  border-radius: 1rem;\n  cursor: pointer;\n\n  h3 {\n    padding: 2rem 0;\n  }\n  img {\n    width: 100%;\n    height: 40vh;\n    object-fit: cover;\n    border-radius: 0 0 1rem 1rem;\n    display: block;\n  }\n"]))),J=function(e){var n=e.name,t=e.released,a=e.image,c=e.id,r=c.toString(),i=Object(x.b)();return Object(V.jsx)(X,{layoutId:r,onClick:function(){document.body.style.overflow="hidden",i(F(c))},children:Object(V.jsxs)(Z.b,{to:"/game/".concat(c),children:[Object(V.jsx)(H.c.h3,{layoutId:"title ".concat(r),children:n}),Object(V.jsx)("p",{children:t}),Object(V.jsx)(H.c.img,{layoutId:"img ".concat(r),src:P(a,640),alt:""})]})})},W=t(4),Q=t.p+"static/media/playstation.18cc4b9c.svg",Y=t.p+"static/media/steam.d7b8819f.svg",K=t.p+"static/media/xbox.3e7db735.svg",q=t.p+"static/media/nintendo.f579be04.svg",$=t.p+"static/media/apple.5757c37e.svg",ee=t.p+"static/media/gamepad.c9269ef5.svg",ne=Object(_.b)(H.c.div)(c||(c=Object(f.a)(["\n  width: 100%;\n  min-height: 100vh;\n  overflow-y: scroll;\n  background: rgba(0, 0, 0, 0.5);\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 10;\n  cursor: pointer;\n"]))),te=Object(_.b)(H.c.div)(r||(r=Object(f.a)(["\n  width: 80%;\n  border-radius: 1rem;\n  padding: 3rem 5rem 2rem 5rem;\n  background: white;\n  position: absolute;\n  left: 10%;\n  color: black;\n  z-index: 15;\n  img {\n    width: 100%;\n    height: 100%;\n  }\n"]))),ae=Object(_.b)(H.c.div)(i||(i=Object(f.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  img {\n    width: 2rem;\n    display: inline-block;\n  }\n"]))),ce=Object(_.b)(H.c.div)(o||(o=Object(f.a)(["\n  text-align: center;\n  h3 {\n    letter-spacing: 0.3rem;\n    font-style: italic;\n    text-transform: uppercase;\n  }\n"]))),re=Object(_.b)(H.c.div)(s||(s=Object(f.a)(["\n  img {\n    width: 3rem;\n    margin-left: 2rem;\n    margin-top: 1rem;\n  }\n"]))),ie=Object(_.b)(H.c.div)(d||(d=Object(f.a)(["\n  margin-top: 5rem;\n  img {\n    width: 100%;\n    height: 60vh;\n    object-fit: cover;\n  }\n"]))),oe=Object(_.b)(H.c.div)(l||(l=Object(f.a)(["\n  margin: 5rem 0;\n"]))),se=Object(_.b)(H.c.div)(b||(b=Object(f.a)(["\n  img {\n    display: block;\n  }\n"]))),de=function(e){var n=e.pathId,t=Object(W.e)(),a=function(e){switch(e){case"PlayStation 4":return Q;case"Xbox One":return K;case"PC":return Y;case"Nintendo Switch":return q;case"IOS":return $;default:return ee}},c=Object(x.c)((function(e){return e.detail})),r=c.game,i=c.screen,o=c.isloading;return Object(V.jsx)(V.Fragment,{children:!o&&Object(V.jsx)(ne,{className:"shadow",onClick:function(e){e.target.classList.contains("shadow")&&(document.body.style.overflow="auto",t.push("/"))},children:Object(V.jsxs)(te,{layoutId:n,children:[Object(V.jsxs)(ae,{children:[Object(V.jsxs)("div",{className:"rating",children:[Object(V.jsx)(H.c.h3,{layoutId:"title ".concat(n),children:r.name}),Object(V.jsxs)("p",{children:["Rating: ",r.rating]}),function(){for(var e=[],n=Math.floor(r.rating),t=1;t<=5;t++)t<=n?e.push(Object(V.jsx)("img",{alt:"star",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGLSURBVHgBtZbbbcIwFIZ/o4pnNqiZAEbICO0EpRM0ErcHHkgfIaCGDWCStiN0A0bgmUDc4yQkAYziEyWfZCW2bH858RWogHLdDpi0wESNxwO02x9gwhZBiDmUcsGEJYqjASTJOmoyeeO05UWko8nxwMBalEWTIzlR2Ud0Hc0F67GyEhmiudBXw6EDC0RZBTWdSppl3w9EVEH9IAxfRRAcUCZKO+uj1eoginp6VsX5pHPbxalF+ywJoZ9/+l0sFnuhRqM5CTw0SRR5SURNyrRktfrMxqgRWSrRr1eToVZZQXInqk12IzGKUplLsi9U4XweiPV6d1tsXLD0NQE9AvAJTJKHohQJLnr9PaBeUbLI2aI++CIJjog2Ub5Eow/E2ezZWkQNJMzs6asdSu9I9rR7wtAxFT/BTO8mf6DOPeH7mzT/S2kbHx/JOSULdfXfsJve1NjJBLT4cDx2C5K8mu9vxXLZjevkEUpTl+aIokgPrIfTaVN2zsRC2gXorrdLr2EvsKXKBbHQVprK/wF34p3gYzo6rAAAAABJRU5ErkJggg=="},t)):e.push(Object(V.jsx)("img",{alt:"star",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG/SURBVHgBtZZLbsIwEIYnD7HODWpOAEIsukJZdtkbNEWAkFi0NwCW3ZUdAkTDEXoEdtmA1BvkCHQXiVdnaFK5wQFPRH7Jsj3E83lsjzFADnme5wBTJjDVbrc927ZfgCk2yDCMPpZXYIoFomiOx6PAptPpdJ44Y1kgikbqDoAhbZAUzUnU5kSlDUpFk8C090oLlI5GUrXVarmgIevaB91uV2D1gSUrd0Sj0fgMgiC65MdInG232yrO2sEcqVBNsyUnFwBpbbCEODY0TfNUY/lCf+F4PA4N3NA+GgZQoMi/tVqtlvV6nfouFCCCzGaz4WmPioIlEGr/HYZbw2TIP9AtYWnIGSiB1Wq1b0zQB8ghHOdNp9NR2q7Mo/V6HWBkdKzvgQd5n0wmb6rfLt0MApiK8w9YoIwr5xqoygbB783AEi6dAA4IL1E2JJbT6/XutEGHw0GAWiEWd7/fP8ftM0VR5KrstsqIS1CR+7j2G7QNpGO7xOI3m03Psiz6nxLJt9in1VikfZoZIDcBUPLtdruyKjfm87mP9jJNAuIIs1ZDGVEMIcDI9/0NXBHmzhDfeotSqUTPsEfQVZ4HojRWqOw/3aTMvdEfx5AAAAAASUVORK5CYII="},t));return e}()]}),Object(V.jsxs)(ce,{children:[Object(V.jsx)("h3",{children:"Platforms"}),Object(V.jsx)(re,{children:r.platforms.map((function(e){return Object(V.jsx)("img",{src:a(e.platform.name),alt:e.platform.name},e.platform.id)}))})]})]}),Object(V.jsx)(ie,{children:Object(V.jsx)(H.c.img,{layoutId:"img ".concat(n),src:P(r.background_image,1280),alt:""})}),Object(V.jsx)(oe,{children:Object(V.jsx)("p",{children:r.description_raw})}),Object(V.jsx)(se,{children:i.results.map((function(e){return Object(V.jsx)("img",{src:P(e.image,1280),alt:""},e.id)}))})]})})})};var le,be,me,ue,ge=Object(_.b)(H.c.div)(m||(m=Object(f.a)(["\n  padding: 0 5rem 5rem 5rem;\n  h2 {\n    padding: 5rem 0rem;\n  }\n  @media (max-width: 666px) {\n    padding: 0 0.5rem 5rem 0.5rem;\n  }\n"]))),je=Object(_.b)(H.c.div)(u||(u=Object(f.a)(["\n  min-height: 80vh;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));\n  row-gap: 5rem;\n  column-gap: 2rem;\n\n  @media (max-width: 666px) {\n    grid-template-columns: 1fr;\n  }\n"]))),pe=(Object(_.b)(H.c.div)(g||(g=Object(f.a)(["\n  min-height: 80vh;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));\n  row-gap: 5rem;\n  column-gap: 2rem;\n"]))),function(){var e=Object(j.useState)(2),n=Object(A.a)(e,2),t=n[0],a=n[1],c=Object(j.useState)(t-1),r=Object(A.a)(c,2),i=(r[0],r[1],Object(W.f)().pathname.split("/")[2]);console.log(i);var o=Object(x.b)();Object(j.useEffect)((function(){o(function(){var e=Object(E.a)(w.a.mark((function e(n){var t,a,c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get("".concat(k).concat(G));case 2:return t=e.sent,e.next=5,I.a.get("".concat(k).concat(z));case 5:return a=e.sent,e.next=8,I.a.get("".concat(k).concat(M));case 8:c=e.sent,n({type:"FETCH_GAMES",payload:{popular:t.data.results,new:c.data.results,upcoming:a.data.results}});case 10:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())}),[o]);var s=Object(x.c)((function(e){return e.games})),d=s.popular,l=s.newGames,b=s.upcoming,m=s.searched,u=s.popularMore;return Object(V.jsx)(ge,{children:Object(V.jsxs)(H.b,{type:"crossfade",children:[Object(V.jsx)(H.a,{children:i&&Object(V.jsx)(de,{pathId:i})}),m.length?Object(V.jsxs)("div",{children:[Object(V.jsx)("h2",{children:"Searched Games"}),Object(V.jsx)(je,{children:m.map((function(e){return Object(V.jsx)(J,{name:e.name,released:e.released,id:e.id,image:e.background_image},e.id)}))})]}):"",Object(V.jsx)("h2",{children:"Upcoming Games"}),Object(V.jsx)(je,{children:b.map((function(e){return Object(V.jsx)(J,{name:e.name,released:e.released,id:e.id,image:e.background_image},e.id)}))}),Object(V.jsx)("h2",{children:"Popular Games"}),Object(V.jsx)(je,{children:d.map((function(e){return Object(V.jsx)(J,{name:e.name,released:e.released,id:e.id,image:e.background_image},e.id)}))}),u.length?Object(V.jsx)(je,{children:u.map((function(e){return Object(V.jsx)(J,{name:e.name,released:e.released,id:e.id,image:e.background_image},e.id)}))}):"",Object(V.jsx)("button",{onClick:function(){var e;a(t+1),o((e=t,function(){var n=Object(E.a)(w.a.mark((function n(t){var a;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,I.a.get(N(e));case 2:a=n.sent,t({type:"LOAD_MORE",payload:{popularMore:a.data.results}});case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()))},children:"More"}),Object(V.jsx)("h2",{children:"New Games"}),Object(V.jsx)(je,{children:l.map((function(e){return Object(V.jsx)(J,{name:e.name,released:e.released,id:e.id,image:e.background_image},e.id)}))})]})})}),he=Object(_.a)(le||(le=Object(f.a)(["\n    *{\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n    }\n    html{\n        &::-webkit-scrollbar{\n            width: 0.5rem;\n        }\n        &::-webkit-scrollbar-thumb{\n            background-color: darkgrey;\n        }\n    }\n    body{\n    font-family: 'Montserrat', sans-serif;\n    }\n    h2{\n        font-family: 'Abril Fatface', cursive;\n        font-size: 3rem;\n        font-weight:lighter;\n        color:#333;\n    }\n    h3:{\n        padding:1.5rem ;\n        font-size:1.5rem;\n        color:#333;\n    }\n    p{\n        font-size:1.2rem;\n        line-height:200%;\n        color:#696969;\n    }\n    a{\n        text-decoration:none;\n        color:#333;\n        \n    }\n"]))),Oe=t.p+"static/media/logo.9b6b8655.svg";var fe=_.b.section(be||(be=Object(f.a)(["\n  min-height: 10vh;\n  padding: 3rem 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]))),Ae=Object(_.b)(H.c.div)(me||(me=Object(f.a)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 1rem;\n  cursor: pointer;\n  h2 {\n    font-size: 1.6rem;\n    margin-right: 1rem;\n  }\n  img {\n    width: 2rem;\n  }\n"]))),xe=Object(_.b)(H.c.form)(ue||(ue=Object(f.a)(["\n  display: flex;\n  input {\n    border: 1px solid gray;\n    border-right: none;\n    padding: 0.5rem 1rem;\n    outline: none;\n    transition: 0.5s all ease;\n    font-weight: bold;\n    font-family: sans-serif;\n    font-size: 1.2rem;\n    &:focus {\n      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n    }\n    &:focus + button {\n      background: #506350;\n    }\n  }\n  button {\n    border: none;\n    padding: 0.5rem 1rem;\n    cursor: pointer;\n    background: cornflowerblue;\n  }\n  label {\n    pointer-events: none;\n    font-size: 1rem;\n    color: white;\n  }\n"]))),ve=function(){var e=Object(x.b)(),n=Object(j.useState)(""),t=Object(A.a)(n,2),a=t[0],c=t[1];return Object(V.jsxs)(fe,{children:[Object(V.jsxs)(Ae,{onClick:function(){e({type:"CLEAR_SEARCHED"})},children:[Object(V.jsx)("h2",{children:"Ignite"}),Object(V.jsx)("img",{src:Oe,alt:"ignite logo"})]}),Object(V.jsxs)(xe,{children:[Object(V.jsx)("input",{value:a,onChange:function(e){c(e.target.value)},type:"text",name:"search"}),Object(V.jsx)("button",{onClick:function(n){var t;n.preventDefault(),e((t=a,function(){var e=Object(E.a)(w.a.mark((function e(n){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get(L(t));case 2:a=e.sent,n({type:"SEARCHED_GAMES",payload:{searched:a.data.results}});case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())),c("")},children:Object(V.jsx)("label",{htmlFor:"search",children:"Search"})})]})]})};var we=function(){return Object(V.jsxs)("div",{className:"App",children:[Object(V.jsx)(he,{}),Object(V.jsx)(ve,{}),Object(V.jsx)(W.a,{path:["/game/:id","/"],children:Object(V.jsx)(pe,{})})]})},Ee=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,74)).then((function(n){var t=n.getCLS,a=n.getFID,c=n.getFCP,r=n.getLCP,i=n.getTTFB;t(e),a(e),c(e),r(e),i(e)}))},ye=t(17),Ie=t(7),ke={popular:[],newGames:[],upcoming:[],searched:[],popularMore:[]},Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"FETCH_GAMES":return Object(Ie.a)(Object(Ie.a)({},e),{},{popular:n.payload.popular,newGames:n.payload.new,upcoming:n.payload.upcoming});case"SEARCHED_GAMES":return Object(Ie.a)(Object(Ie.a)({},e),{},{searched:n.payload.searched});case"CLEAR_SEARCHED":return Object(Ie.a)(Object(Ie.a)({},e),{},{searched:[]});case"LOAD_MORE":return Object(Ie.a)(Object(Ie.a)({},e),{},{popularMore:n.payload.popularMore});default:return Object(Ie.a)({},e)}},Se={game:{platforms:[]},screen:{results:[]},isloading:!0},De=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"GET_DETAIL":return Object(Ie.a)(Object(Ie.a)({},e),{},{game:n.payload.game,screen:n.payload.screen,isloading:!1});case"LOADING_DETAIL":return Object(Ie.a)(Object(Ie.a)({},e),{},{isloading:!0});default:return Object(Ie.a)({},e)}},Re=Object(ye.c)({games:Ce,detail:De}),Ue=t(44),Be=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ye.d,Ge=Object(ye.e)(Re,Be(Object(ye.a)(Ue.a)));O.a.render(Object(V.jsx)(p.a.StrictMode,{children:Object(V.jsx)(x.a,{store:Ge,children:Object(V.jsx)(Z.a,{children:Object(V.jsx)(we,{})})})}),document.getElementById("root")),Ee()}},[[73,1,2]]]);
//# sourceMappingURL=main.7dd7c1ed.chunk.js.map