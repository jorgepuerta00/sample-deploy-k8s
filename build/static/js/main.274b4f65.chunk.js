(this["webpackJsonpsample-app"]=this["webpackJsonpsample-app"]||[]).push([[1],{12:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return o}));var a=function(){var e=sessionStorage.getItem("user");return e?JSON.parse(e):null},r=function(){return sessionStorage.getItem("token")||null},c=function(){sessionStorage.removeItem("token"),sessionStorage.removeItem("user")},o=function(e,t){sessionStorage.setItem("token",e),sessionStorage.setItem("user",JSON.stringify(t))}},16:function(e,t,n){"use strict";n.d(t,"d",(function(){return a.b})),n.d(t,"c",(function(){return a.a})),n.d(t,"e",(function(){return a.c})),n.d(t,"f",(function(){return a.d})),n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var a=n(12),r=n(15),c=n(2),o=n(22),i=(n(0),n(3)),s=function(e){var t=e.component,n=e.exact,s=e.path,u=Object(o.a)(e,["component","exact","path"]);return Object(c.jsx)(i.b,Object(r.a)(Object(r.a)({},u),{},{exact:n,path:s,render:function(e){return Object(a.a)()?Object(c.jsx)(t,Object(r.a)({},e)):Object(c.jsx)(i.a,{to:{pathname:"/login",state:{from:u.location}}})}}))},u=function(e){var t=e.component,n=(e.forceRedirect,e.redirectTo,e.path,Object(o.a)(e,["component","forceRedirect","redirectTo","path"]));return Object(c.jsx)(i.b,Object(r.a)(Object(r.a)({},n),{},{render:function(e){return Object(a.a)()?Object(c.jsx)(i.a,{to:{pathname:"/dashboard"}}):Object(c.jsx)(t,Object(r.a)({},e))}}))}},29:function(e,t,n){"use strict";n.d(t,"b",(function(){return b})),n.d(t,"c",(function(){return p})),n.d(t,"a",(function(){return j})),n.d(t,"d",(function(){return O}));var a=n(13),r=n.n(a),c=n(18),o=n(5),i=n(0),s=n(19),u=n.n(s),l="https://users-l7rh776aha-uc.a.run.app/api",d={headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IkplbiBKb25lcyIsImlhdCI6MTU5MDExNzY2OH0.Z50ZjBVzVA8l5Lxzjku2q1edyOPboUEOMLOYufsSGm0"}},f={createUser:"users",getUserById:"users/",verifyIdToken:"users/verifyIdToken/"},b=function(){var e=i.useState(),t=Object(o.a)(e,2),n=t[0],a=t[1],s=i.useState(!1),b=Object(o.a)(s,2),h=b[0],p=b[1],j=i.useState(),v=Object(o.a)(j,2),O=v[0],m=v[1],g=u.a.create({baseURL:l});return[h,n,O,function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,p(!0),m(""),e.next=5,g.get("".concat(f.getUserById).concat(t),d).then((function(e){a(e.data.data)})).catch((function(e){m("Error retriving data from database.")}));case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.warn(e.t0);case 10:return e.prev=10,p(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(t){return e.apply(this,arguments)}}()]},h=n(21);n(72);h.a.initializeApp({apiKey:"AIzaSyApaIbCPZIEyJVjlNwzUZZDUpHI_KwOOjE",authDomain:"sample-microservice-oiga.firebaseapp.com",projectId:"sample-microservice-oiga",storageBucket:"sample-microservice-oiga.appspot.com",messagingSenderId:"913926175112",appId:"1:913926175112:web:56d9a596586e0d0528a23d"});h.a.auth();var p=function(){var e=i.useState(!1),t=Object(o.a)(e,2),n=t[0],a=t[1],s=i.useState(),u=Object(o.a)(s,2),l=u[0],d=u[1],f=i.useState(""),b=Object(o.a)(f,2),p=b[0],j=b[1],v=i.useState(),O=Object(o.a)(v,2),m=O[0],g=O[1];return[n,p,l,m,function(){var e=Object(c.a)(r.a.mark((function e(t,n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a(!0),g(""),e.next=5,h.a.auth().signInWithEmailAndPassword(t,n).then((function(e){j(e.user.ya),d(e.user)})).catch((function(e){g(null!=e?e.message:"Something went wrong. Please try again later.")}));case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.warn(e.t0);case 10:return e.prev=10,a(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(t,n){return e.apply(this,arguments)}}()]},j=function(){var e=i.useState(),t=Object(o.a)(e,2),n=t[0],a=t[1],s=i.useState(!1),b=Object(o.a)(s,2),h=b[0],p=b[1],j=i.useState(),v=Object(o.a)(j,2),O=v[0],m=v[1],g=u.a.create({baseURL:l});return[h,n,O,function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,p(!0),m(""),e.next=5,g.post("".concat(f.createUser),t,d).then((function(e){a("Saved succesfully!")})).catch((function(e){m("Error saving to database.")}));case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.warn(e.t0);case 10:return e.prev=10,p(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(t){return e.apply(this,arguments)}}()]},v=n(16),O=function(){var e=i.useState(!1),t=Object(o.a)(e,2),n=t[0],a=t[1],r=u.a.create({baseURL:l});return[n,function(){try{var e=Object(v.c)();if(!e)return;a(!0),r.get("".concat(f.verifyIdToken).concat(e),d).then((function(t){Object(v.f)(e,t.data.data)})).catch((function(e){Object(v.e)()}))}catch(t){console.warn(t)}finally{a(!1)}}]}},48:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(0),c=n.n(r),o=n(41),i=n.n(o),s=(n(48),n(5)),u=n(14),l=n(3),d=function(e){e.props;return Object(a.jsxs)("div",{className:"header",children:[Object(a.jsx)(u.b,{exact:!0,activeClassName:"active",to:"/",children:"Home"}),Object(a.jsx)(u.b,{activeClassName:"active",to:"/login",children:"Login"}),Object(a.jsx)("small",{children:"(Access without token only)"}),Object(a.jsx)(u.b,{activeClassName:"active",to:"/dashboard",children:"Dashboard"}),Object(a.jsx)("small",{children:"(Access with token only)"})]})},f=n(16),b=n(29),h=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,77))})),p=Object(r.lazy)((function(){return n.e(6).then(n.bind(null,78))})),j=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,79))}));var v=function(){var e=Object(b.d)(),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(r.useEffect)((function(){c()}),[c]),n?Object(a.jsx)("div",{className:"content",children:"Checking Authentication..."}):Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(u.a,{children:Object(a.jsx)(r.Suspense,{fallback:Object(a.jsx)("div",{children:"Loading..."}),children:Object(a.jsxs)("div",{children:[Object(a.jsx)(d,{}),Object(a.jsx)("div",{className:"content",children:Object(a.jsxs)(l.d,{children:[Object(a.jsx)(l.b,{exact:!0,path:"/",component:j}),Object(a.jsx)(f.b,{path:"/login",component:h}),Object(a.jsx)(f.a,{path:"/dashboard",component:p})]})})]})})})})},O=function(e){e&&e instanceof Function&&n.e(7).then(n.bind(null,80)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),c(e),o(e)}))},m=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function g(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(v,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");m?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):g(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):g(t,e)}))}}(),O()}},[[74,2,3]]]);
//# sourceMappingURL=main.274b4f65.chunk.js.map