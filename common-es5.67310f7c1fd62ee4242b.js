function _createForOfIteratorHelper(n,t){var e;if("undefined"==typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(e=_unsupportedIterableToArray(n))||t&&n&&"number"==typeof n.length){e&&(n=e);var r=0,i=function(){};return{s:i,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(n){throw n},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,c=!1;return{s:function(){e=n[Symbol.iterator]()},n:function(){var n=e.next();return a=n.done,n},e:function(n){c=!0,o=n},f:function(){try{a||null==e.return||e.return()}finally{if(c)throw o}}}}function _unsupportedIterableToArray(n,t){if(n){if("string"==typeof n)return _arrayLikeToArray(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?_arrayLikeToArray(n,t):void 0}}function _arrayLikeToArray(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function _defineProperty(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function asyncGeneratorStep(n,t,e,r,i,o,a){try{var c=n[o](a),s=c.value}catch(u){return void e(u)}c.done?t(s):Promise.resolve(s).then(r,i)}function _asyncToGenerator(n){return function(){var t=this,e=arguments;return new Promise((function(r,i){var o=n.apply(t,e);function a(n){asyncGeneratorStep(o,r,i,a,c,"next",n)}function c(n){asyncGeneratorStep(o,r,i,a,c,"throw",n)}a(void 0)}))}}function _defineProperties(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function _createClass(n,t,e){return t&&_defineProperties(n.prototype,t),e&&_defineProperties(n,e),n}function _classCallCheck(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"/Nyi":function(n,t,e){"use strict";e.r(t),e.d(t,"MenuHeaderPageModule",(function(){return p}));var r,i,o=e("ofXK"),a=e("3Pt+"),c=e("TEn/"),s=e("tyNb"),u=e("B1tq"),l=e("fXoL"),f=[{path:"",component:u.a}],b=((i=function n(){_classCallCheck(this,n)}).\u0275mod=l.Ib({type:i}),i.\u0275inj=l.Hb({factory:function(n){return new(n||i)},imports:[[s.i.forChild(f)],s.i]}),i),p=((r=function n(){_classCallCheck(this,n)}).\u0275mod=l.Ib({type:r}),r.\u0275inj=l.Hb({factory:function(n){return new(n||r)},imports:[[o.b,a.e,c.M,b]]}),r)},"2c9M":function(n,t,e){"use strict";e.d(t,"a",(function(){return o})),e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return i})),e.d(t,"d",(function(){return s})),e.d(t,"e",(function(){return c}));var r={getEngine:function(){var n=window;return n.TapticEngine||n.Capacitor&&n.Capacitor.isPluginAvailable("Haptics")&&n.Capacitor.Plugins.Haptics},available:function(){return!!this.getEngine()},isCordova:function(){return!!window.TapticEngine},isCapacitor:function(){return!!window.Capacitor},impact:function(n){var t=this.getEngine();if(t){var e=this.isCapacitor()?n.style.toUpperCase():n.style;t.impact({style:e})}},notification:function(n){var t=this.getEngine();if(t){var e=this.isCapacitor()?n.style.toUpperCase():n.style;t.notification({style:e})}},selection:function(){this.impact({style:"light"})},selectionStart:function(){var n=this.getEngine();n&&(this.isCapacitor()?n.selectionStart():n.gestureSelectionStart())},selectionChanged:function(){var n=this.getEngine();n&&(this.isCapacitor()?n.selectionChanged():n.gestureSelectionChanged())},selectionEnd:function(){var n=this.getEngine();n&&(this.isCapacitor()?n.selectionEnd():n.gestureSelectionEnd())}},i=function(){r.selection()},o=function(){r.selectionStart()},a=function(){r.selectionChanged()},c=function(){r.selectionEnd()},s=function(n){r.impact(n)}},"6i10":function(n,t,e){"use strict";e.d(t,"a",(function(){return r}));var r={bubbles:{dur:1e3,circles:9,fn:function(n,t,e){var r=n*t/e-n+"ms",i=2*Math.PI*t/e;return{r:5,style:{top:9*Math.sin(i)+"px",left:9*Math.cos(i)+"px","animation-delay":r}}}},circles:{dur:1e3,circles:8,fn:function(n,t,e){var r=t/e,i=n*r-n+"ms",o=2*Math.PI*r;return{r:5,style:{top:9*Math.sin(o)+"px",left:9*Math.cos(o)+"px","animation-delay":i}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:function(){return{r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}}}},crescent:{dur:750,circles:1,fn:function(){return{r:26,style:{}}}},dots:{dur:750,circles:3,fn:function(n,t){return{r:6,style:{left:9-9*t+"px","animation-delay":-110*t+"ms"}}}},lines:{dur:1e3,lines:12,fn:function(n,t,e){return{y1:17,y2:29,style:{transform:"rotate(".concat(30*t+(t<6?180:-180),"deg)"),"animation-delay":n*t/e-n+"ms"}}}},"lines-small":{dur:1e3,lines:12,fn:function(n,t,e){return{y1:12,y2:20,style:{transform:"rotate(".concat(30*t+(t<6?180:-180),"deg)"),"animation-delay":n*t/e-n+"ms"}}}}}},B1tq:function(n,t,e){"use strict";e.d(t,"a",(function(){return a}));var r=e("fXoL"),i=e("tyNb"),o=e("TEn/"),a=function(){var n=function(){function n(t){_classCallCheck(this,n),this.router=t}return _createClass(n,[{key:"ngOnInit",value:function(){}},{key:"navigateToLogin",value:function(){this.router.navigate(["/login"])}},{key:"navigateToRegister",value:function(){this.router.navigate(["/register"])}},{key:"navigateToMangeVehicle",value:function(){this.router.navigate(["/manage-vehicle"])}},{key:"navigateToRouteSearch",value:function(){this.router.navigate(["/route-search"])}},{key:"navigateToTransportSearch",value:function(){this.router.navigate(["/transport-search"])}},{key:"navigateToSearchResult",value:function(){this.router.navigate(["/search-result"])}},{key:"navigateToProfile",value:function(){this.router.navigate(["/profile"])}},{key:"navigateToHome",value:function(){this.router.navigate(["/home"])}},{key:"navigateToImpressum",value:function(){this.router.navigate(["/impressum"])}},{key:"navigateToDelivery",value:function(){this.router.navigate(["/delivery"])}}]),n}();return n.\u0275fac=function(t){return new(t||n)(r.Kb(i.g))},n.\u0275cmp=r.Eb({type:n,selectors:[["app-menu-header"]],decls:24,vars:0,consts:[["side","end","menuId","first","contentId","main-content"],["button","true",3,"click"],[1,"ion-text-wrap"]],template:function(n,t){1&n&&(r.Pb(0,"ion-menu",0),r.Pb(1,"ion-content"),r.Pb(2,"ion-list"),r.Pb(3,"ion-item",1),r.Xb("click",(function(){return t.navigateToProfile()})),r.Pb(4,"ion-label",2),r.nc(5," Profil "),r.Ob(),r.Ob(),r.Pb(6,"ion-item",1),r.Xb("click",(function(){return t.navigateToDelivery()})),r.Pb(7,"ion-label",2),r.nc(8," Sendungen "),r.Ob(),r.Ob(),r.Pb(9,"ion-item",1),r.Xb("click",(function(){return t.navigateToMangeVehicle()})),r.Pb(10,"ion-label",2),r.nc(11," Fahrzeuge "),r.Ob(),r.Ob(),r.Pb(12,"ion-item",1),r.Xb("click",(function(){return t.navigateToRouteSearch()})),r.Pb(13,"ion-label",2),r.nc(14," Routensuche "),r.Ob(),r.Ob(),r.Pb(15,"ion-item",1),r.Xb("click",(function(){return t.navigateToTransportSearch()})),r.Pb(16,"ion-label",2),r.nc(17," Transportsuche "),r.Ob(),r.Ob(),r.Pb(18,"ion-item",1),r.Xb("click",(function(){return t.navigateToSearchResult()})),r.Pb(19,"ion-label",2),r.nc(20," Suchergebnisse "),r.Ob(),r.Ob(),r.Ob(),r.Pb(21,"ion-item",1),r.Xb("click",(function(){return t.navigateToImpressum()})),r.Pb(22,"ion-label",2),r.nc(23," Impressum "),r.Ob(),r.Ob(),r.Ob(),r.Ob())},directives:[o.A,o.q,o.y,o.w,o.x],styles:[""]}),n}()},"HX+4":function(n,t,e){"use strict";e.d(t,"a",(function(){return a}));var r=e("fXoL"),i=e("tyNb"),o=e("TEn/"),a=function(){var n=function(){function n(t){_classCallCheck(this,n),this.router=t}return _createClass(n,[{key:"ngOnInit",value:function(){}},{key:"navigateToLogin",value:function(){this.router.navigate(["/login"])}},{key:"navigateToRegister",value:function(){this.router.navigate(["/register"])}}]),n}();return n.\u0275fac=function(t){return new(t||n)(r.Kb(i.g))},n.\u0275cmp=r.Eb({type:n,selectors:[["app-unauthorized"]],decls:13,vars:0,consts:[["size","4"],["size","4",1,"ion-text-center"],["color","primary",3,"click"]],template:function(n,t){1&n&&(r.Lb(0,"ion-header"),r.Pb(1,"ion-content"),r.Pb(2,"ion-grid"),r.Pb(3,"ion-row"),r.Lb(4,"ion-col",0),r.Pb(5,"ion-col",1),r.Pb(6,"h1"),r.nc(7,"Sorry! Zugriff nur f\xfcr eingeloggte User!"),r.Ob(),r.Pb(8,"ion-button",2),r.Xb("click",(function(){return t.navigateToLogin()})),r.nc(9,"Hier gehts zum Login"),r.Ob(),r.Pb(10,"ion-button",2),r.Xb("click",(function(){return t.navigateToRegister()})),r.nc(11,"Hier gehts zur Registrierung"),r.Ob(),r.Ob(),r.Lb(12,"ion-col",0),r.Ob(),r.Ob(),r.Ob())},directives:[o.t,o.q,o.s,o.F,o.p,o.h],styles:[""]}),n}()},NKIX:function(n,t,e){"use strict";e.d(t,"a",(function(){return a}));var r=e("QX1p"),i=e("ItpF"),o=e("2c9M"),a=function(n,t){var e,a,c=function(n,r,i){if("undefined"!=typeof document){var o=document.elementFromPoint(n,r);o&&t(o)?o!==e&&(u(),s(o,i)):u()}},s=function(n,t){e=n,a||(a=e);var i=e;Object(r.n)((function(){return i.classList.add("ion-activated")})),t()},u=function(){var n=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e){var t=e;Object(r.n)((function(){return t.classList.remove("ion-activated")})),n&&a!==e&&e.click(),e=void 0}};return Object(i.createGesture)({el:n,gestureName:"buttonActiveDrag",threshold:0,onStart:function(n){return c(n.currentX,n.currentY,o.a)},onMove:function(n){return c(n.currentX,n.currentY,o.b)},onEnd:function(){u(!0),Object(o.e)(),a=void 0}})}},NqGI:function(n,t,e){"use strict";e.d(t,"a",(function(){return r})),e.d(t,"b",(function(){return i}));var r=function(){var n=_asyncToGenerator(regeneratorRuntime.mark((function n(t,e,r,i,o){var a;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t){n.next=2;break}return n.abrupt("return",t.attachViewToDom(e,r,o,i));case 2:if("string"==typeof r||r instanceof HTMLElement){n.next=4;break}throw new Error("framework delegate is missing");case 4:if(a="string"==typeof r?e.ownerDocument&&e.ownerDocument.createElement(r):r,i&&i.forEach((function(n){return a.classList.add(n)})),o&&Object.assign(a,o),e.appendChild(a),n.t0=a.componentOnReady,!n.t0){n.next=12;break}return n.next=12,a.componentOnReady();case 12:return n.abrupt("return",a);case 13:case"end":return n.stop()}}),n)})));return function(t,e,r,i,o){return n.apply(this,arguments)}}(),i=function(n,t){if(t){if(n)return n.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()}},Uqay:function(n,t,e){"use strict";e.r(t),e.d(t,"ListResultPageModule",(function(){return p}));var r,i,o=e("ofXK"),a=e("3Pt+"),c=e("TEn/"),s=e("tyNb"),u=e("jCsr"),l=e("fXoL"),f=[{path:"",component:u.a}],b=((i=function n(){_classCallCheck(this,n)}).\u0275mod=l.Ib({type:i}),i.\u0275inj=l.Hb({factory:function(n){return new(n||i)},imports:[[s.i.forChild(f)],s.i]}),i),p=((r=function n(){_classCallCheck(this,n)}).\u0275mod=l.Ib({type:r}),r.\u0275inj=l.Hb({factory:function(n){return new(n||r)},imports:[[o.b,a.e,c.M,b]]}),r)},gnZd:function(n,t,e){"use strict";e.r(t),e.d(t,"UnauthorizedPageModule",(function(){return p}));var r,i,o=e("ofXK"),a=e("3Pt+"),c=e("TEn/"),s=e("tyNb"),u=e("HX+4"),l=e("fXoL"),f=[{path:"",component:u.a}],b=((i=function n(){_classCallCheck(this,n)}).\u0275mod=l.Ib({type:i}),i.\u0275inj=l.Hb({factory:function(n){return new(n||i)},imports:[[s.i.forChild(f)],s.i]}),i),p=((r=function n(){_classCallCheck(this,n)}).\u0275mod=l.Ib({type:r}),r.\u0275inj=l.Hb({factory:function(n){return new(n||r)},imports:[[o.b,a.e,c.M,b]]}),r)},hcCc:function(n,t,e){"use strict";e.d(t,"a",(function(){return i})),e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return r})),e.d(t,"d",(function(){return c}));var r=function(n,t){return null!==t.closest(n)},i=function(n){return"string"==typeof n&&n.length>0?_defineProperty({"ion-color":!0},"ion-color-"+n,!0):void 0},o=function(n){var t={};return function(n){return void 0!==n?(Array.isArray(n)?n:n.split(" ")).filter((function(n){return null!=n})).map((function(n){return n.trim()})).filter((function(n){return""!==n})):[]}(n).forEach((function(n){return t[n]=!0})),t},a=/^[a-z][a-z0-9+\-.]*:/,c=function(){var n=_asyncToGenerator(regeneratorRuntime.mark((function n(t,e,r,i){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(null==t||"#"===t[0]||a.test(t)){n.next=4;break}if(!(o=document.querySelector("ion-router"))){n.next=4;break}return n.abrupt("return",(null!=e&&e.preventDefault(),o.push(t,r,i)));case 4:return n.abrupt("return",!1);case 5:case"end":return n.stop()}}),n)})));return function(t,e,r,i){return n.apply(this,arguments)}}()},jCsr:function(n,t,e){"use strict";e.d(t,"a",(function(){return h}));var r=e("mrSG"),i=e("pSvy"),o=e("fXoL"),a=e("TEn/"),c=e("tyNb"),s=e("CcaC"),u=e("ofXK"),l=function(n){return{color:n}};function f(n,t){if(1&n&&o.Lb(0,"ion-icon",9),2&n){var e=t.$implicit,r=o.Zb(2);o.ec("ngStyle",o.hc(1,l,r.getColor(e,r.user.rating)))}}function b(n,t){1&n&&(o.Pb(0,"p"),o.nc(1,"Noch keine oder nicht gen\xfcgend Bewertungen verf\xfcgbar"),o.Ob())}var p=function(){return[1,2,3,4,5]};function g(n,t){if(1&n){var e=o.Qb();o.Pb(0,"ion-item",1),o.Pb(1,"ion-avatar",2),o.Xb("click",(function(){o.jc(e);var n=o.Zb();return n.navigateToRatings(n.shipment.cargonaut)})),o.Lb(2,"img",3),o.Ob(),o.Pb(3,"ion-label"),o.Pb(4,"ion-text",4),o.Xb("click",(function(){o.jc(e);var n=o.Zb();return n.navigateToRatings(n.shipment.cargonaut)})),o.Pb(5,"h2"),o.nc(6),o.Ob(),o.Ob(),o.mc(7,f,1,3,"ion-icon",5),o.mc(8,b,2,0,"p",6),o.Pb(9,"p"),o.nc(10),o.ac(11,"date"),o.Ob(),o.Ob(),o.Pb(12,"ion-label"),o.Pb(13,"ion-text"),o.Pb(14,"p"),o.nc(15),o.Ob(),o.Pb(16,"p"),o.nc(17),o.Ob(),o.Pb(18,"p"),o.nc(19),o.Ob(),o.Ob(),o.Ob(),o.Pb(20,"ion-button",7),o.Xb("click",(function(){return o.jc(e),o.Zb().presentModal()})),o.nc(21," 12.34 "),o.Lb(22,"ion-icon",8),o.Ob(),o.Ob()}if(2&n){var r=o.Zb();o.Ab(6),o.qc("",r.user.fName," ",r.user.lName,""),o.Ab(1),o.ec("ngForOf",o.gc(11,p)),o.Ab(1),o.ec("ngIf",0===r.user.rating),o.Ab(2),o.pc("bis Datum: ",o.bc(11,8,r.shipment.date,"dd/MM/yyyy"),""),o.Ab(5),o.pc("von: ",r.shipment.start,""),o.Ab(2),o.pc("nach: ",r.shipment.goal,""),o.Ab(2),o.pc("mit: ",r.shipment.vehicle.name,"")}}var h=function(){var n=function(){function n(t,e,r){_classCallCheck(this,n),this.modalController=t,this.router=e,this.userservice=r}return _createClass(n,[{key:"ngOnInit",value:function(){var n=this;this.subscription=this.userservice.getUser(this.shipment.cargonaut).subscribe((function(t){n.user=t,n.user.rating=Math.round(n.user.rating)}))}},{key:"navigateToPayment",value:function(){this.router.navigate(["/payment-detail"])}},{key:"navigateToRatings",value:function(n){this.router.navigate(["user-ratings",{uid:n}])}},{key:"presentModal",value:function(){return Object(r.__awaiter)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.modalController.create({component:i.a,cssClass:"paymentModal",componentProps:{shipment:this.shipment,user:this.user,modalController:this.modalController}});case 2:return t=n.sent,n.next=5,t.present();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n,this)})))}},{key:"dismissModal",value:function(){return Object(r.__awaiter)(this,void 0,void 0,regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.modalController.dismiss();case 2:case"end":return n.stop()}}),n,this)})))}},{key:"getColor",value:function(n,t){var e;if(function(n){n.GREY="#E0E0E0",n.PRIMARY="#3B6863"}(e||(e={})),n>t)return e.GREY;switch(t){case 1:case 2:case 3:case 4:case 5:return e.PRIMARY;default:return e.GREY}}},{key:"ngOnDestroy",value:function(){this.subscription.unsubscribe()}}]),n}();return n.\u0275fac=function(t){return new(t||n)(o.Kb(a.P),o.Kb(c.g),o.Kb(s.a))},n.\u0275cmp=o.Eb({type:n,selectors:[["app-list-result"]],inputs:{shipment:"shipment"},decls:1,vars:1,consts:[["lines","none","class","ionListItems",4,"ngIf"],["lines","none",1,"ionListItems"],["slot","start",3,"click"],["src","/assets/icon/avatar-han.png"],["color","primary",3,"click"],["name","star",3,"ngStyle",4,"ngFor","ngForOf"],[4,"ngIf"],["size","large","shape","block","slot","end",3,"click"],["name","logo-bitcoin"],["name","star",3,"ngStyle"]],template:function(n,t){1&n&&o.mc(0,g,23,12,"ion-item",0),2&n&&o.ec("ngIf",t.user)},directives:[u.j,a.w,a.d,a.x,a.I,u.i,a.h,a.u,u.k],pipes:[u.d],styles:[".ionListItems[_ngcontent-%COMP%]{--padding-bottom:5px;margin-top:40px;margin-left:40px;margin-right:40px;border:2px solid rgba(2,92,83,.9);border-radius:7px;padding-left:2%!important}"]}),n}()},pSvy:function(n,t,e){"use strict";e.d(t,"a",(function(){return p}));var r=e("mrSG"),i=e("fXoL"),o=e("tyNb"),a=e("CcaC"),c=e("TEn/"),s=e("ofXK"),u=function(n){return{color:n}};function l(n,t){if(1&n&&i.Lb(0,"ion-icon",13),2&n){var e=t.$implicit,r=i.Zb();i.ec("ngStyle",i.hc(1,u,r.getColor(e,r.user.rating)))}}function f(n,t){1&n&&(i.Pb(0,"p"),i.nc(1,"Noch keine oder nicht gen\xfcgend Bewertungen verf\xfcgbar"),i.Ob())}var b=function(){return[1,2,3,4,5]},p=function(){var n=function(){function n(t,e){var r=this;_classCallCheck(this,n),this.router=t,this.userService=e,this.userService.getUser(this.shipment.cargonaut).subscribe((function(n){r.user=n}))}return _createClass(n,[{key:"ngOnInit",value:function(){console.log("Modal shipment"+this.shipment.goal)}},{key:"dismissModal",value:function(n){return Object(r.__awaiter)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.dismiss();case 2:case"end":return t.stop()}}),t)})))}},{key:"navigateToPaymentChoice",value:function(n){this.dismissModal(n);var t={state:{shipment:this.shipment,article:this.article}};console.log("navigations extra "+t),this.router.navigate(["/payment-choice"],t)}},{key:"getColor",value:function(n,t){var e;if(function(n){n.GREY="#E0E0E0",n.PRIMARY="#3B6863"}(e||(e={})),n>t)return e.GREY;switch(t){case 1:case 2:case 3:case 4:case 5:return e.PRIMARY;default:return e.GREY}}}]),n}();return n.\u0275fac=function(t){return new(t||n)(i.Kb(o.g),i.Kb(a.a))},n.\u0275cmp=i.Eb({type:n,selectors:[["app-payment-detail"]],inputs:{modalController:"modalController",shipment:"shipment",article:"article"},decls:39,vars:12,consts:[["id","ion-content",1,"padding"],["detail","false","lines","none"],[1,"ion-text-wrap"],["size","1"],["lines","none"],["src","assets/icon/avatar-yoda.png"],["slot","end"],["id","price"],["name","star",3,"ngStyle",4,"ngFor","ngForOf"],[4,"ngIf"],["button","true","lines","none"],["id","payBtn"],["size","large",3,"click"],["name","star",3,"ngStyle"]],template:function(n,t){1&n&&(i.Pb(0,"ion-content",0),i.Pb(1,"ion-grid"),i.Pb(2,"ion-row"),i.Pb(3,"ion-col"),i.Pb(4,"ion-title"),i.Pb(5,"ion-item",1),i.Pb(6,"ion-label",2),i.Pb(7,"h1"),i.nc(8),i.Ob(),i.Pb(9,"h2"),i.nc(10),i.ac(11,"date"),i.Ob(),i.Ob(),i.Ob(),i.Ob(),i.Ob(),i.Ob(),i.Pb(12,"ion-row"),i.Lb(13,"ion-col",3),i.Pb(14,"ion-col"),i.Pb(15,"ion-item",4),i.Pb(16,"ion-avatar"),i.Lb(17,"img",5),i.Ob(),i.Pb(18,"ion-label",6),i.Pb(19,"ion-text"),i.Pb(20,"ion-text"),i.Pb(21,"h2"),i.nc(22,"f\xfcr"),i.Ob(),i.Pb(23,"h1",7),i.nc(24,"12,34\u20ac"),i.Ob(),i.Ob(),i.Ob(),i.Ob(),i.Ob(),i.Pb(25,"ion-item",4),i.mc(26,l,1,3,"ion-icon",8),i.mc(27,f,2,0,"p",9),i.Ob(),i.Pb(28,"ion-item",10),i.Pb(29,"ion-label",2),i.Pb(30,"h3"),i.nc(31),i.Ob(),i.Pb(32,"h3"),i.nc(33,"Voraussichtliche Lieferzeit: 4-5 Werktage."),i.Ob(),i.Ob(),i.Ob(),i.Ob(),i.Ob(),i.Pb(34,"ion-row",11),i.Lb(35,"ion-col"),i.Pb(36,"ion-col"),i.Pb(37,"ion-button",12),i.Xb("click",(function(){return t.navigateToPaymentChoice(t.modalController)})),i.nc(38,"Zahlungsmittel w\xe4hlen"),i.Ob(),i.Ob(),i.Ob(),i.Ob(),i.Ob()),2&n&&(i.Ab(8),i.qc("Objekt von ",t.shipment.start," nach ",t.shipment.goal," schicken"),i.Ab(2),i.pc("am ",i.bc(11,8,t.shipment.date,"dd/MM/yyyy"),""),i.Ab(16),i.ec("ngForOf",i.gc(11,b)),i.Ab(1),i.ec("ngIf",0===t.user.rating),i.Ab(4),i.rc("durch ",t.user.fName," ",t.user.lName," mit Fahrzeug ",t.shipment.vehicle.name," verschicken."))},directives:[c.q,c.s,c.F,c.p,c.K,c.w,c.x,c.d,c.I,s.i,s.j,c.h,c.u,s.k],pipes:[s.d],styles:["#logo[_ngcontent-%COMP%]{margin-top:8px;margin-left:15px;margin-bottom:8px;height:57px}ion-card[_ngcontent-%COMP%]{top:50%;left:50%;position:absolute;margin-top:-50px;margin-left:-50px;display:block;transform:translate(-50%,-50%)}h1[_ngcontent-%COMP%]{font-size:40px}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%]{font-weight:700;color:rgba(2,92,83,.9)}h2[_ngcontent-%COMP%]{margin-top:20px;font-size:30px}h3[_ngcontent-%COMP%]{font-size:25px;font-weight:700;color:rgba(2,92,83,.9)}#price[_ngcontent-%COMP%]{font-size:60px}#payBtn[_ngcontent-%COMP%]{margin-top:30px}"]}),n}()},taob:function(n,t,e){"use strict";e.d(t,"a",(function(){return c}));var r=e("lJxs"),i=e("fXoL"),o=e("I/3d"),a=e("CcaC"),c=function(){var n=function(){function n(t,e){_classCallCheck(this,n),this.afs=t,this.userservice=e}return _createClass(n,[{key:"persist",value:function(t,e){var r=this;this.ratingCollection=this.afs.collection("user/"+e+"/ratings"),this.ratingCollection.add(n.prepare(t)).then((function(){r.updateAverage(e)}))}},{key:"findAll",value:function(n){return this.ratingCollection=this.afs.collection("user/"+n+"/ratings"),this.ratingCollection.snapshotChanges().pipe(Object(r.a)((function(n){return n.map((function(n){var t=n.payload.doc.data();return t.id=n.payload.doc.id,Object.assign({},t)}))})))}},{key:"updateAverage",value:function(n){var t,e,r=this,i=0;this.subscription1=this.findAll(n).subscribe((function(o){t=o,i=r.calcAverage(t),r.subscription2=r.userservice.getUser(n).subscribe((function(n){(e=n).rating=i,r.userservice.update(e),r.subscription2.unsubscribe()})),r.subscription1.unsubscribe()}))}},{key:"calcAverage",value:function(n){var t,e=0,r=_createForOfIteratorHelper(n);try{for(r.s();!(t=r.n()).done;){e+=t.value.points}}catch(i){r.e(i)}finally{r.f()}return e/=n.length}}],[{key:"prepare",value:function(n){var t=Object.assign({},n);return delete t.id,t.points=t.points||null,t.description=t.description||null,t}}]),n}();return n.\u0275fac=function(t){return new(t||n)(i.Tb(o.a),i.Tb(a.a))},n.\u0275prov=i.Gb({token:n,factory:n.\u0275fac,providedIn:"root"}),n}()}}]);