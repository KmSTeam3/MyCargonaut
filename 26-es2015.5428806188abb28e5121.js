(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{QNcV:function(e,t,i){"use strict";i.d(t,"a",(function(){return s}));var r=i("fXoL"),o=i("UbJi"),n=i("CcaC");let s=(()=>{class e{constructor(e,t){this.auth=e,this.userservice=t}register(e){return new Promise((t,i)=>{this.auth.createUserWithEmailAndPassword(e.email,e.password).then(i=>{t(i),this.userservice.persist(i.user.uid,e.title,e.fname,e.lname,e.street,e.housenumber,e.postalcode,e.city,e.email)},e=>i(e))})}login(e){return new Promise((t,i)=>{this.auth.signInWithEmailAndPassword(e.email,e.password).then(e=>t(e),e=>i(e))})}checkAuthState(){return this.auth.authState}SignOut(){return this.auth.signOut()}}return e.\u0275fac=function(t){return new(t||e)(r.Tb(o.a),r.Tb(n.a))},e.\u0275prov=r.Gb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},X3zk:function(e,t,i){"use strict";i.r(t),i.d(t,"LoginPageModule",(function(){return h}));var r=i("ofXK"),o=i("3Pt+"),n=i("TEn/"),s=i("tyNb"),a=i("fXoL"),c=i("QNcV"),b=i("CcaC");function l(e,t){if(1&e&&(a.Pb(0,"div",12),a.nc(1),a.Ob()),2&e){const e=a.Zb().$implicit;a.Ab(1),a.pc(" ",e.message," ")}}function m(e,t){if(1&e&&(a.Nb(0),a.mc(1,l,2,1,"div",14),a.Mb()),2&e){const e=t.$implicit,i=a.Zb();a.Ab(1),a.ec("ngIf",i.validationsForm.get("email").hasError(e.type)&&(i.validationsForm.get("email").dirty||i.validationsForm.get("email").touched))}}function d(e,t){if(1&e&&(a.Pb(0,"div",12),a.nc(1),a.Ob()),2&e){const e=a.Zb().$implicit;a.Ab(1),a.pc(" ",e.message," ")}}function u(e,t){if(1&e&&(a.Nb(0),a.mc(1,d,2,1,"div",14),a.Mb()),2&e){const e=t.$implicit,i=a.Zb();a.Ab(1),a.ec("ngIf",i.validationsForm.get("password").hasError(e.type)&&(i.validationsForm.get("password").dirty||i.validationsForm.get("password").touched))}}const g=[{path:"",component:(()=>{class e{constructor(e,t,i,r){this.authservice=e,this.formBuilder=t,this.router=i,this.userService=r,this.errorMessage="",this.successMessage="",this.VALIDATION_MESSAGES={email:[{type:"required",message:"Email ist erforderlich."},{type:"pattern",message:"Bitte gebe eine g\xfcltige Email ein."}],password:[{type:"required",message:"Passwort ist erforderlich."},{type:"minlength",message:"Passwort muss min. 6 Zeichen lang sein."}]}}login(e){this.errorMessage="",this.authservice.login(e).then(()=>{console.log("Login erfolgreich"),this.navigateToHome()},e=>{this.errorMessage="Anmeldung fehlgeschlagen! \xdcberpr\xfcfe deine Login Daten"})}navigateRegister(){this.router.navigate(["register"])}ngOnInit(){this.validationsForm=this.formBuilder.group({email:new o.b("",o.m.compose([o.m.required,o.m.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")])),password:new o.b("",o.m.compose([o.m.minLength(6),o.m.required]))})}navigateToHome(){this.router.navigate(["home"])}}return e.\u0275fac=function(t){return new(t||e)(a.Kb(c.a),a.Kb(o.a),a.Kb(s.g),a.Kb(b.a))},e.\u0275cmp=a.Eb({type:e,selectors:[["app-login"]],decls:30,vars:5,consts:[["slot","start"],["sizeLg","3","sizeMd","2","sizeSm","2","sizeXs","1"],["sizeLg","6","sizeMd","8","sizeSm","8","sizeXs","10",1,"ion-text-center"],[1,"form",3,"formGroup","ngSubmit"],["alt","MyCargonaut Logo","src","assets/CargoLogo.PNG"],[1,"ion-text-center"],["lines","none"],["formControlName","email","type","text","required","","placeholder","Email",1,"form-control"],[1,"validation-errors"],[4,"ngFor","ngForOf"],["formControlName","password","type","password","required","","placeholder","Passwort",1,"form-control"],["color","primary","type","submit",3,"disabled"],[1,"error-message"],["color","primary",3,"click"],["class","error-message",4,"ngIf"]],template:function(e,t){1&e&&(a.Pb(0,"ion-header"),a.Pb(1,"ion-toolbar"),a.Pb(2,"ion-buttons",0),a.Lb(3,"ion-back-button"),a.Ob(),a.Ob(),a.Ob(),a.Pb(4,"ion-content"),a.Pb(5,"ion-grid"),a.Pb(6,"ion-row"),a.Lb(7,"ion-col",1),a.Pb(8,"ion-col",2),a.Pb(9,"form",3),a.Xb("ngSubmit",(function(){return t.login(t.validationsForm.value)})),a.Lb(10,"img",4),a.Pb(11,"h1",5),a.nc(12,"Anmelden"),a.Ob(),a.Pb(13,"ion-item",6),a.Lb(14,"ion-input",7),a.Ob(),a.Pb(15,"div",8),a.mc(16,m,2,1,"ng-container",9),a.Ob(),a.Pb(17,"ion-item",6),a.Lb(18,"ion-input",10),a.Ob(),a.Pb(19,"div",8),a.mc(20,u,2,1,"ng-container",9),a.Ob(),a.Pb(21,"ion-button",11),a.nc(22,"Anmelden"),a.Ob(),a.Pb(23,"label",12),a.nc(24),a.Ob(),a.Pb(25,"h3",5),a.nc(26,"oder registrieren"),a.Ob(),a.Pb(27,"ion-button",13),a.Xb("click",(function(){return t.navigateRegister()})),a.nc(28,"Cargonaut werden"),a.Ob(),a.Ob(),a.Ob(),a.Lb(29,"ion-col",1),a.Ob(),a.Ob(),a.Ob()),2&e&&(a.Ab(9),a.ec("formGroup",t.validationsForm),a.Ab(7),a.ec("ngForOf",t.VALIDATION_MESSAGES.email),a.Ab(4),a.ec("ngForOf",t.VALIDATION_MESSAGES.password),a.Ab(1),a.ec("disabled",!t.validationsForm.valid),a.Ab(3),a.oc(t.errorMessage))},directives:[n.t,n.L,n.i,n.e,n.f,n.q,n.s,n.F,n.p,o.n,o.i,o.d,n.w,n.v,n.V,o.h,o.c,o.l,r.i,n.h,r.j],styles:[".form-control[_ngcontent-%COMP%]{border:2px solid #d3d3d3;border-radius:7px;padding-left:1%!important}.error-message[_ngcontent-%COMP%]{font-size:small;color:red}ion-button[_ngcontent-%COMP%]{--border-radius:100px}.side[_ngcontent-%COMP%]{padding-right:20px;padding-left:20px}"]}),e})()}];let p=(()=>{class e{}return e.\u0275mod=a.Ib({type:e}),e.\u0275inj=a.Hb({factory:function(t){return new(t||e)},imports:[[s.i.forChild(g)],s.i]}),e})(),h=(()=>{class e{}return e.\u0275mod=a.Ib({type:e}),e.\u0275inj=a.Hb({factory:function(t){return new(t||e)},imports:[[r.b,o.e,n.M,o.k,p]]}),e})()}}]);