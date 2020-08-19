(this.webpackJsonpsoc=this.webpackJsonpsoc||[]).push([[1],{13:function(e,t,n){"use strict";n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return i}));var a=n(85),r=a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"ce63c559-f848-4639-902e-7b2ba953b876"}}),u={getUsers:function(e,t){return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},followUser:function(e){return r.post("follow/".concat(e)).then((function(e){return e.data}))},unfollowUser:function(e){return r.delete("follow/".concat(e)).then((function(e){return e.data}))},getProfileInfo:function(e){return r.get("profile/"+e).then((function(e){return e.data}))}},c={getAuth:function(){return r.get("auth/me").then((function(e){return e.data}))},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r.post("auth/login",{email:e,password:t,rememberMe:n}).then((function(e){return e.data}))},logout:function(){return r.delete("auth/login").then((function(e){return e.data}))}},i={getProfileInfo:function(e){return r.get("profile/"+e).then((function(e){return e.data}))},getStatus:function(e){return r.get("profile/status/"+e).then((function(e){return e.data}))},updateStatus:function(e){return r.put("profile/status/",{status:e}).then((function(e){return e.data}))}}},135:function(e,t,n){e.exports=n(224)},222:function(e,t,n){},223:function(e,t,n){},224:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),u=n(44),c=n.n(u);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=n(33),o=n(34),s=n(36),l=n(35),f=n(26),d=n(6),p=n(15),m=n(21),b=n(84),g=n(58),h=n(75),v={},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v;return e},O=n(82),w=n(24),j=n(81),_=n(2),S={initialazied:!1},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-INITIALIZED":return Object(_.a)(Object(_.a)({},e),{},{initialized:!0});default:return e}},N=Object(m.c)({profilePage:g.b,dialogsPage:h.a,sidebar:E,usersPage:O.a,auth:w.a,form:j.a,app:k}),L=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||m.d,T=Object(m.e)(N,L(Object(m.a)(b.a)));window.__store__=T;var y=T,P=n(45),x=n.n(P),I=function(e){return r.a.createElement("header",{className:x.a.header},r.a.createElement("img",{className:x.a.logo,src:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Logo_TV_2015.svg/1200px-Logo_TV_2015.svg.png",alt:"logo"}),r.a.createElement("div",{className:x.a.loginBlock},e.isAuth?r.a.createElement("div",null,e.login," - ",r.a.createElement("button",{onClick:e.logoutThunkCreator},"Logout")):r.a.createElement(p.b,{to:"/login"},"Login")))},C=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement(I,this.props)}}]),n}(r.a.Component),G=Object(f.b)((function(e){return{login:e.auth.login,isAuth:e.auth.isAuth}}),{logoutThunkCreator:w.d})(C),A=n(7),U=n.n(A),D=function(e){return r.a.createElement("nav",{className:U.a.nav},r.a.createElement("ul",{className:U.a.menu},r.a.createElement("li",{className:U.a.link},r.a.createElement(p.b,{className:U.a.menuLink,activeClassName:U.a.activeLink,to:"/profile"},"Profile")),r.a.createElement("li",{className:U.a.link},r.a.createElement(p.b,{className:U.a.menuLink,activeClassName:U.a.activeLink,to:"/dialogs"},"Messages")),r.a.createElement("li",{className:U.a.link},r.a.createElement(p.b,{className:U.a.menuLink,activeClassName:U.a.activeLink,to:"/users"},"Users")),r.a.createElement("li",{className:U.a.link},r.a.createElement(p.b,{className:U.a.menuLink,activeClassName:U.a.activeLink,to:"/news"},"News")),r.a.createElement("li",{className:U.a.link},r.a.createElement(p.b,{className:U.a.menuLink,activeClassName:U.a.activeLink,to:"/music"},"Music")),r.a.createElement("li",{className:U.a.link},r.a.createElement(p.b,{className:U.a.menuLink,activeClassName:U.a.activeLink,to:"/settings"},"Settings"))))},R=n(64),z=(n(222),r.a.lazy((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,299))}))),W=r.a.lazy((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,301))})),F=r.a.lazy((function(){return n.e(5).then(n.bind(null,300))})),M=r.a.lazy((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,298))})),B=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(G,null),r.a.createElement(D,null),r.a.createElement("div",{className:"app-wrapper-content"},r.a.createElement(a.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement(d.b,{path:"/dialogs",render:function(){return r.a.createElement(W,null)}}),r.a.createElement(d.b,{path:"/profile/:userId?",render:function(){return r.a.createElement(z,null)}}),r.a.createElement(d.b,{path:"/users",render:function(){return r.a.createElement(F,null)}}),r.a.createElement(d.b,{path:"/login",render:function(){return r.a.createElement(M,null)}})))):r.a.createElement(R.a,null)}}]),n}(r.a.Component),H=Object(f.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){e(Object(w.b)()).then((function(){e({type:"SET-INITIALIZED"})}))}}})(B),V=function(e){return r.a.createElement(p.a,null,r.a.createElement(f.a,{store:y},r.a.createElement(H,null)))};n(223);c.a.render(r.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},24:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return p})),n.d(t,"d",(function(){return m}));var a=n(5),r=n.n(a),u=n(10),c=n(2),i=n(13),o=n(46),s="react-network/auth/SET-USER-DATA",l={userId:null,login:null,email:null,isAuth:!1},f=function(e,t,n,a){return{type:s,payload:{userId:e,login:t,email:n,isAuth:a}}},d=function(){return function(){var e=Object(u.a)(r.a.mark((function e(t){var n,a,u,c,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.getAuth();case 2:0===(n=e.sent).resultCode&&(a=n.data,u=a.id,c=a.login,o=a.email,t(f(u,c,o,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},p=function(e,t,n){return function(){var a=Object(u.a)(r.a.mark((function a(u){var c,s;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,i.a.login(e,t,n);case 2:0===(c=a.sent).resultCode?u(d()):(s=c.messages.length>0?c.messages[0]:"Some error",u(Object(o.a)("login",{_error:s})));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},m=function(){return function(){var e=Object(u.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.logout();case 2:0===e.sent.resultCode&&t(f(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:return Object(c.a)(Object(c.a)({},e),t.payload);default:return e}}},32:function(e,t,n){e.exports={bubblingG:"Preloader_bubblingG__1Cdy4",bubblingG_1:"Preloader_bubblingG_1__8lJ4q",bubblingG_2:"Preloader_bubblingG_2__r0kPr",bubblingG_3:"Preloader_bubblingG_3__18pFN"}},45:function(e,t,n){e.exports={header:"Header_header__2kmP1",logo:"Header_logo__WaA-7",loginBlock:"Header_loginBlock__3zNf2"}},58:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return p})),n.d(t,"e",(function(){return m}));var a=n(5),r=n.n(a),u=n(10),c=n(25),i=n(2),o=n(13),s={postsData:[{id:1,text:"Yo",likesCount:2},{id:2,text:"Yo",likesCount:1}],profile:null,status:""},l=function(e){return{type:"ADD-POST",newPostText:e}},f=function(e){return{type:"SET-STATUS",status:e}},d=function(e){return function(){var t=Object(u.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getProfileInfo(e);case 2:a=t.sent,n({type:"SET-USER-PROFILE",profile:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(u.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getStatus(e);case 2:a=t.sent,n(f(a));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(u.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.updateStatus(e);case 2:0===t.sent.resultCode&&n(f(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:5,text:t.newPostText,likesCount:12};return Object(i.a)(Object(i.a)({},e),{},{postsData:[].concat(Object(c.a)(e.postsData),[n])});case"SET-USER-PROFILE":return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case"SET-STATUS":return Object(i.a)(Object(i.a)({},e),{},{status:t.status,newPostText:""});case"UPDATE-STATUS":return Object(i.a)(Object(i.a)({},e),{},{status:t.newStatus});case"DELETE-POST":return Object(i.a)(Object(i.a)({},e),{},{postsData:e.postsData.filter((function(e){return e.id!==t.postId}))});default:return e}}},64:function(e,t,n){"use strict";var a=n(0),r=n.n(a),u=n(32),c=n.n(u);t.a=function(){return r.a.createElement("div",{className:c.a.bubblingG},r.a.createElement("span",{id:c.a.bubblingG_1}),r.a.createElement("span",{id:c.a.bubblingG_2}),r.a.createElement("span",{id:c.a.bubblingG_3}))}},7:function(e,t,n){e.exports={nav:"Navbar_nav__2Cbg2",menu:"Navbar_menu__2BNHv",link:"Navbar_link__25Zq-",menuLink:"Navbar_menuLink__3hVfY",activeLink:"Navbar_activeLink__2g_8T"}},75:function(e,t,n){"use strict";n.d(t,"b",(function(){return c}));var a=n(25),r=n(2),u={dialogsData:[{id:1,name:"\u041f\u0435\u0442\u044f",avatar:"https://i.pinimg.com/736x/a0/66/3a/a0663ad917c9446ad219aea51670d100.jpg"},{id:2,name:"\u041c\u0430\u0440\u0438\u043d\u0430",avatar:"https://i.pinimg.com/736x/a0/66/3a/a0663ad917c9446ad219aea51670d100.jpg"},{id:3,name:"\u0421\u0432\u0435\u0442\u0430",avatar:"https://i.pinimg.com/736x/a0/66/3a/a0663ad917c9446ad219aea51670d100.jpg"},{id:4,name:"\u0412\u0430\u043b\u0435\u0440\u0430",avatar:"https://i.pinimg.com/736x/a0/66/3a/a0663ad917c9446ad219aea51670d100.jpg"}],messagesData:[{id:1,text:"Hi"},{id:2,text:"Show"},{id:3,text:"Whats off?"},{id:4,text:"Here you are"}]},c=function(e){return{type:"SEND_MESSAGE",newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND_MESSAGE":var n=t.newMessageBody;return Object(r.a)(Object(r.a)({},e),{},{messagesData:[].concat(Object(a.a)(e.messagesData),[{id:6,text:n}])});default:return e}}},82:function(e,t,n){"use strict";n.d(t,"d",(function(){return p})),n.d(t,"c",(function(){return g})),n.d(t,"b",(function(){return v})),n.d(t,"e",(function(){return E}));var a=n(5),r=n.n(a),u=n(10),c=n(25),i=n(2),o=n(13),s=function(e,t,n,a){return e.map((function(e){return e[n]===t?Object(i.a)(Object(i.a)({},e),a):e}))},l={users:[],pageSize:10,totalItemsCount:0,currentPage:1,isLoading:!1,followingProgress:[]},f=function(e){return{type:"FOLLOW",userId:e}},d=function(e){return{type:"UNFOLLOW",userId:e}},p=function(e){return{type:"SET-CURRENT-PAGE",currentPage:e}},m=function(e){return{type:"TOGGLE-IS-LOADING",toggle:e}},b=function(e,t){return{type:"TOGGLE-IS-FOLLOWING-PROGRESS",toggle:e,userId:t}},g=function(e,t){return function(){var n=Object(u.a)(r.a.mark((function n(a){var u;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(p(e)),a(m(!0)),n.next=4,o.c.getUsers(e,t);case 4:u=n.sent,a(m(!1)),a({type:"SET-USERS",users:u.items}),a({type:"SET-USERS-TOTAL-COUNT",totalCount:u.totalCount});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},h=function(){var e=Object(u.a)(r.a.mark((function e(t,n,a,u){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(b(!0,n)),e.next=3,a(n);case 3:0===e.sent.resultCode&&t(u(n)),t(b(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),v=function(e){return function(){var t=Object(u.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:h(n,e,o.c.followUser.bind(e),f);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},E=function(e){return function(){var t=Object(u.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:h(n,e,o.c.unfollowUser.bind(e),d);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-USERS":return Object(i.a)(Object(i.a)({},e),{},{users:t.users});case"SET-USERS-TOTAL-COUNT":return Object(i.a)(Object(i.a)({},e),{},{totalItemsCount:t.totalCount});case"FOLLOW":return Object(i.a)(Object(i.a)({},e),{},{users:s(e.users,t.userId,"id",{following:!0})});case"UNFOLLOW":return Object(i.a)(Object(i.a)({},e),{},{users:s(e.users,t.userId,"id",{following:!1})});case"SET-CURRENT-PAGE":return Object(i.a)(Object(i.a)({},e),{},{currentPage:t.currentPage});case"TOGGLE-IS-LOADING":return Object(i.a)(Object(i.a)({},e),{},{isLoading:t.toggle});case"TOGGLE-IS-FOLLOWING-PROGRESS":return Object(i.a)(Object(i.a)({},e),{},{followingProgress:t.toggle?[].concat(Object(c.a)(e.followingProgress),[t.userId]):e.followingProgress.filter((function(e){return e!==t.userId}))});default:return e}}}},[[135,2,3]]]);
//# sourceMappingURL=main.fc9b496d.chunk.js.map