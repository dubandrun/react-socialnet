(this.webpackJsonpsoc=this.webpackJsonpsoc||[]).push([[4],{225:function(e,t,n){e.exports={formControl:"FormsControls_formControl__168z0",error:"FormsControls_error__9ujUt",formSummaryError:"FormsControls_formSummaryError__2ZOxo"}},226:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return m})),n.d(t,"c",(function(){return f}));var a=n(230),r=n(0),o=n.n(r),l=n(108),c=n(225),u=n.n(c),i=function(e){e.input;var t=e.meta,n=t.touched,a=t.error,r=e.children,l=n&&a;return o.a.createElement("div",{className:u.a.formControl+" "+(l?u.a.error:" ")},o.a.createElement("div",null,r),l&&o.a.createElement("span",null,a))},s=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return o.a.createElement(i,e,o.a.createElement("textarea",Object.assign({},t,n)))},m=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return o.a.createElement(i,e,o.a.createElement("input",Object.assign({},t,n)))},f=function(e,t,n,a){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return o.a.createElement("div",null,o.a.createElement(l.a,Object.assign({name:e,placeholder:t,component:n,validate:a},r)),c)}},228:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));var a=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}},o=function(e){return function(t){if(t.length<e)return"Max length is ".concat(e," symbols")}}},229:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a=n(34),r=n(35),o=n(37),l=n(36),c=n(0),u=n.n(c),i=n(26),s=n(6),m=function(e){return{isAuth:e.auth.isAuth}},f=function(e){var t=function(t){Object(o.a)(c,t);var n=Object(l.a)(c);function c(){return Object(a.a)(this,c),n.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){return this.props.isAuth?u.a.createElement(e,this.props):u.a.createElement(s.a,{to:"/login"})}}]),c}(u.a.Component);return Object(i.b)(m)(t)}},232:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(59);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,r=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(a=(l=c.next()).done)&&(n.push(l.value),!t||n.length!==t);a=!0);}catch(u){r=!0,o=u}finally{try{a||null==c.return||c.return()}finally{if(r)throw o}}return n}}(e,t)||Object(a.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},233:function(e,t,n){e.exports=n.p+"static/media/avatar.04d7a14c.jpg"},239:function(e,t,n){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__3cRNX",backPic:"ProfileInfo_backPic__2eYeK",mainPhoto:"ProfileInfo_mainPhoto__3UV_d",contact:"ProfileInfo_contact__3_xUl"}},252:function(e,t,n){e.exports={content:"Profile_content__3WhbD",backPic:"Profile_backPic__3su4L"}},293:function(e,t,n){e.exports={posts:"Posts_posts__phqqx",postsBlock:"Posts_postsBlock__1zy2N"}},294:function(e,t,n){e.exports={item:"Post_item__1yJRf"}},299:function(e,t,n){"use strict";n.r(t);var a=n(34),r=n(35),o=n(37),l=n(36),c=n(0),u=n.n(c),i=n(21),s=n(26),m=n(6),f=n(252),p=n.n(f),d=n(232),b=n(239),h=n.n(b),v=n(64),E=function(e){var t=Object(c.useState)(!1),n=Object(d.a)(t,2),a=n[0],r=n[1],o=Object(c.useState)(e.status),l=Object(d.a)(o,2),i=l[0],s=l[1];Object(c.useEffect)((function(){s(e.status)}),[e.status]);return u.a.createElement("div",null,!a&&u.a.createElement("div",null,u.a.createElement("b",null,"Status: "),u.a.createElement("span",{onDoubleClick:function(){r(!0)}},e.status||"No status")),a&&u.a.createElement("div",null,u.a.createElement("input",{onChange:function(e){s(e.currentTarget.value)},autoFocus:!0,onBlur:function(){r(!1),e.updateUserStatusThunkCreator(i)},value:i})))},k=n(233),g=n.n(k),O=n(109),j=n(225),y=n.n(j),_=n(226),C=Object(O.a)({form:"contacts"})((function(e){var t=e.handleSubmit,n=e.profile,a=e.error;return u.a.createElement("form",{onSubmit:t},u.a.createElement("button",null,"save"),a&&u.a.createElement("div",{className:y.a.formSummaryError},a),u.a.createElement("div",null,u.a.createElement("b",null,"Full name: ")," ",Object(_.c)("fullName","full name",_.a,[])),u.a.createElement("div",null,u.a.createElement("b",null,"Looking for a job: ")," ",Object(_.c)("lookingForAJob","",_.a,[],{type:"checkbox"})),u.a.createElement("div",null,u.a.createElement("b",null,"My professional skills: ")," ",Object(_.c)("lookingForAJobDescription","my professional skills",_.b,[])),u.a.createElement("div",null,u.a.createElement("b",null,"About me: ")," ",Object(_.c)("aboutMe","about me",_.b,[])),u.a.createElement("div",null,u.a.createElement("b",null,"Contacts:")," ",Object.keys(n.contacts).map((function(e){return u.a.createElement("div",{key:e,className:h.a.contact},u.a.createElement("b",null,e,": ")," ",Object(_.c)("contacts."+e,e,_.b,[]))}))))})),P=function(e){var t=e.contactName,n=e.contactValue;return u.a.createElement("div",{className:h.a.contact},u.a.createElement("b",null,t),": ",n)},T=function(e){var t=e.profile,n=e.isOwner,a=e.goToEditMode;return u.a.createElement("div",null,n&&u.a.createElement("div",null,u.a.createElement("button",{onClick:a},"edit")),u.a.createElement("div",null,u.a.createElement("b",null,"Full name: ")," ",t.fullName),u.a.createElement("div",null,u.a.createElement("b",null,"Looking for a job: ")," ",t.lookingForAJob?"yes":"no"),t.lookingForAJob&&u.a.createElement("div",null,u.a.createElement("b",null,"My professional skills: ")," ",t.lookingForAJobDescription),u.a.createElement("div",null,u.a.createElement("b",null,"About me: ")," ",t.aboutMe),u.a.createElement("div",null,u.a.createElement("b",null,"Contacts:")," ",Object.keys(t.contacts).map((function(e){return u.a.createElement(P,{key:e,contactName:e,contactValue:t.contacts[e]})}))))},S=function(e){var t=e.profile,n=e.status,a=e.updateUserStatusThunkCreator,r=e.isOwner,o=e.saveAvatarThunkCreator,l=e.saveProfileThunkCreator,i=Object(c.useState)(!1),s=Object(d.a)(i,2),m=s[0],f=s[1];if(!t)return u.a.createElement(v.a,null);return u.a.createElement("div",null,u.a.createElement("div",{className:h.a.descriptionBlock},u.a.createElement("img",{src:t.photos.large||g.a,className:h.a.mainPhoto,alt:"profile-avatar"}),r&&u.a.createElement("input",{type:"file",onChange:function(e){e.target.files.length&&o(e.target.files[0])}}),m?u.a.createElement(C,{initialValues:t,profile:t,onSubmit:function(e){l(e).then((function(){f(!1)}))}}):u.a.createElement(T,{goToEditMode:function(){f(!0)},profile:t,isOwner:r}),u.a.createElement(E,{status:n,updateUserStatusThunkCreator:a})))},A=n(108),x=n(293),N=n.n(x),w=n(294),U=n.n(w),I=function(e){return u.a.createElement("div",{className:U.a.item},u.a.createElement("img",{src:"",alt:"avatar"}),e.message,u.a.createElement("div",null,u.a.createElement("span",null,e.likes)))},F=n(228),M=u.a.memo((function(e){var t=e.posts.map((function(e){return u.a.createElement(I,{message:e.text,likes:e.likesCount,key:e.id})})),n=Object(F.a)(10),a=Object(F.b)(2),r=Object(O.a)({form:"ProfileAddNewPostForm"})((function(e){return u.a.createElement("form",{onSubmit:e.handleSubmit},u.a.createElement("div",null,u.a.createElement(A.a,{component:_.b,name:"newPostText",placeholder:"Enter here...",validate:[F.c,n,a]})),u.a.createElement("div",null,u.a.createElement("button",null,"Add post")))}));return u.a.createElement("div",{className:N.a.postsBlock},u.a.createElement("h3",null,"my posts"),u.a.createElement(r,{onSubmit:function(t){e.addPost(t.newPostText)}}),u.a.createElement("div",{className:N.a.posts},t))})),J=n(58),B=Object(s.b)((function(e){return{posts:e.profilePage.postsData,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){e(Object(J.a)(t))}}}))(M),D=function(e){return u.a.createElement("main",{className:p.a.content},u.a.createElement(S,{profile:e.profile,status:e.status,saveProfileThunkCreator:e.saveProfileThunkCreator,updateUserStatusThunkCreator:e.updateUserStatusThunkCreator,isOwner:e.isOwner,saveAvatarThunkCreator:e.saveAvatarThunkCreator}),u.a.createElement(B,{store:e.store}))},V=n(229),q=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.loggedUserId)||this.props.history.push("/login"),this.props.getProfileInfoThunkCreator(e),this.props.getUserStatusThunkCreator(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return u.a.createElement(D,Object.assign({},this.props,{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateUserStatusThunkCreator:this.props.updateUserStatusThunkCreator,saveAvatarThunkCreator:this.props.saveAvatarThunkCreator}))}}]),n}(u.a.Component);t.default=Object(i.d)(Object(s.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,loggedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getProfileInfoThunkCreator:J.c,getUserStatusThunkCreator:J.d,updateUserStatusThunkCreator:J.g,saveAvatarThunkCreator:J.e,saveProfileThunkCreator:J.f}),m.g,V.a)(q)}}]);
//# sourceMappingURL=4.1cc86a01.chunk.js.map