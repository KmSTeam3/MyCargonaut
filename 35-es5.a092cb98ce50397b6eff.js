function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,e){for(var i=0;i<e.length;i++){var t=e[i];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function _createClass(n,e,i){return e&&_defineProperties(n.prototype,e),i&&_defineProperties(n,i),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{"S+1+":function(n,e,i){"use strict";i.r(e),i.d(e,"UserRatingsPageModule",(function(){return y}));var t=i("ofXK"),o=i("3Pt+"),r=i("TEn/"),c=i("tyNb"),s=i("fXoL"),a=i("taob"),b=i("CcaC"),u=function(n){return{color:n}};function l(n,e){if(1&n&&s.Lb(0,"ion-icon",9),2&n){var i=e.$implicit,t=s.Zb(2);s.ec("ngStyle",s.hc(1,u,t.getColor(i,t.user.rating)))}}var f=function(){return[1,2,3,4,5]};function g(n,e){if(1&n&&(s.Pb(0,"ion-item",6),s.Pb(1,"ion-label",7),s.Pb(2,"h1"),s.nc(3),s.Ob(),s.Pb(4,"h1"),s.mc(5,l,1,3,"ion-icon",8),s.Ob(),s.Ob(),s.Ob()),2&n){var i=s.Zb();s.Ab(3),s.qc("",i.user.fName," ",i.user.lName,""),s.Ab(2),s.ec("ngForOf",s.gc(3,f))}}function p(n,e){if(1&n&&s.Lb(0,"ion-icon",9),2&n){var i=e.$implicit,t=s.Zb().$implicit,o=s.Zb();s.ec("ngStyle",s.hc(1,u,o.getColor(i,t.points)))}}function m(n,e){if(1&n&&(s.Pb(0,"ion-card"),s.Pb(1,"ion-card-header"),s.Pb(2,"ion-item",10),s.mc(3,p,1,3,"ion-icon",8),s.Ob(),s.Ob(),s.Pb(4,"ion-card-content"),s.nc(5),s.Ob(),s.Ob()),2&n){var i=e.$implicit;s.Ab(3),s.ec("ngForOf",s.gc(2,f)),s.Ab(2),s.oc(i.description)}}var h,P,d,O=[{path:"",component:(h=function(){function n(e,i,t){var o=this;_classCallCheck(this,n),this.ratingservice=e,this.userservice=i,this.route=t,this.userID=this.route.snapshot.paramMap.get("uid"),this.ratingservice.findAll(this.userID).subscribe((function(n){o.ratings=n})),this.userservice.getUser(this.userID).subscribe((function(n){o.user=n,o.user.rating=Math.round(o.user.rating)}))}return _createClass(n,[{key:"ngOnInit",value:function(){}},{key:"getColor",value:function(n,e){var i;if(function(n){n.GREY="#E0E0E0",n.PRIMARY="#3B6863"}(i||(i={})),n>e)return i.GREY;switch(e){case 1:case 2:case 3:case 4:case 5:return i.PRIMARY;default:return i.GREY}}}]),n}(),h.\u0275fac=function(n){return new(n||h)(s.Kb(a.a),s.Kb(b.a),s.Kb(c.a))},h.\u0275cmp=s.Eb({type:h,selectors:[["app-user-ratings"]],decls:19,vars:2,consts:[["src","assets/CargoLogo.PNG"],["slot","start"],["sizeLg","3","sizeMd","2","sizeSm","2","sizeXs","1"],["sizeLg","6","sizeMd","8","sizeSm","8","sizeXs","10"],["class","ion-text-center","lines","none",4,"ngIf"],[4,"ngFor","ngForOf"],["lines","none",1,"ion-text-center"],["color","primary"],["name","star",3,"ngStyle",4,"ngFor","ngForOf"],["name","star",3,"ngStyle"],["lines","none"]],template:function(n,e){1&n&&(s.Pb(0,"ion-header"),s.Pb(1,"ion-toolbar"),s.Lb(2,"img",0),s.Pb(3,"ion-buttons",1),s.Lb(4,"ion-back-button"),s.Ob(),s.Ob(),s.Ob(),s.Pb(5,"ion-content"),s.Pb(6,"ion-grid"),s.Pb(7,"ion-row"),s.Lb(8,"ion-col",2),s.Pb(9,"ion-col",3),s.Pb(10,"div"),s.mc(11,g,6,4,"ion-item",4),s.Ob(),s.Ob(),s.Lb(12,"ion-col",2),s.Ob(),s.Pb(13,"ion-row"),s.Lb(14,"ion-col",2),s.Pb(15,"ion-col",3),s.Pb(16,"ion-list"),s.mc(17,m,6,3,"ion-card",5),s.Ob(),s.Ob(),s.Lb(18,"ion-col",2),s.Ob(),s.Ob(),s.Ob()),2&n&&(s.Ab(11),s.ec("ngIf",e.user),s.Ab(6),s.ec("ngForOf",e.ratings))},directives:[r.t,r.L,r.i,r.e,r.f,r.q,r.s,r.F,r.p,t.j,r.y,t.i,r.w,r.x,r.u,t.k,r.j,r.l,r.k],styles:["img[_ngcontent-%COMP%]{margin-top:8px;margin-left:15px;margin-bottom:8px;height:57px}"]}),h)}],v=((d=function n(){_classCallCheck(this,n)}).\u0275mod=s.Ib({type:d}),d.\u0275inj=s.Hb({factory:function(n){return new(n||d)},imports:[[c.i.forChild(O)],c.i]}),d),y=((P=function n(){_classCallCheck(this,n)}).\u0275mod=s.Ib({type:P}),P.\u0275inj=s.Hb({factory:function(n){return new(n||P)},imports:[[t.b,o.e,r.M,v]]}),P)}}]);