(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f635785c"],{a15b:function(t,a,e){"use strict";var n=e("23e7"),c=e("44ad"),s=e("fc6a"),o=e("a640"),r=[].join,i=c!=Object,l=o("join",",");n({target:"Array",proto:!0,forced:i||!l},{join:function(t){return r.call(s(this),void 0===t?",":t)}})},a640:function(t,a,e){"use strict";var n=e("d039");t.exports=function(t,a){var e=[][t];return!!e&&n((function(){e.call(null,a||function(){throw 1},1)}))}},e313:function(t,a,e){"use strict";e.r(a);var n=e("7a23"),c={class:"container"};function s(t,a,e,s,o,r){var i=Object(n["C"])("Navbarbackend"),l=Object(n["C"])("ToastMessage"),u=Object(n["C"])("router-view");return Object(n["v"])(),Object(n["g"])("div",null,[Object(n["h"])("div",null,[Object(n["j"])(i),Object(n["j"])(l),Object(n["h"])("div",c,[Object(n["j"])(u)])])])}e("ac1f"),e("5319");var o=e("cfb9"),r=e("459d"),i={class:"navbar navbar-expand-lg navbar-light bg-light"},l={class:"container"},u=Object(n["h"])("a",{href:"#",class:"navbar-brand"},"後台",-1),b=Object(n["h"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(n["h"])("span",{class:"navbar-toggler-icon"})],-1),v={class:"collapse navbar-collapse",id:"navbarNav"},h={class:"navbar-nav ms-auto"},d={class:"nav-item"},j=Object(n["i"])("產品列表"),p={class:"nav-item"};function g(t,a,e,c,s,o){var r=Object(n["C"])("router-link");return Object(n["v"])(),Object(n["g"])("div",null,[Object(n["h"])("nav",i,[Object(n["h"])("div",l,[u,b,Object(n["h"])("div",v,[Object(n["h"])("ul",h,[Object(n["h"])("li",d,[Object(n["j"])(r,{class:"nav-link active",to:"/productsbackend"},{default:Object(n["L"])((function(){return[j]})),_:1})]),Object(n["h"])("li",p,[Object(n["h"])("a",{href:"#",class:"nav-link",onClick:a[0]||(a[0]=function(){return o.logout&&o.logout.apply(o,arguments)})},"登出")])])])])])])}e("a15b");var f={inject:["emitter"],methods:{logout:function(){var t=this,a="".concat("https://vue3-course-api.hexschool.io/","logout");this.$http.post(a).then((function(a){a.data.success?(t.$router.push("/login"),t.emitter.emit("push-message",{style:"success",title:"登出囉"})):t.emitter.emit("push-message",{style:"danger",title:"登出失敗誒",content:a.data.message.join("、")})}))}}};f.render=g;var O=f,m={components:{Navbarbackend:O,ToastMessage:r["a"]},provide:function(){return{emitter:o["a"]}},created:function(){var t=this,a=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=a;var e="".concat("https://vue3-course-api.hexschool.io/","api/user/check");this.$http.post(e).then((function(a){a.data.success||t.$router.push("/login")}))}};m.render=s;a["default"]=m}}]);
//# sourceMappingURL=chunk-f635785c.f2d56f9b.js.map