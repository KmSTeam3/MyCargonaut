(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"+vhm":function(e,t,i){"use strict";i.d(t,"a",(function(){return p}));var n=i("mrSG"),s=i("hE1G"),o=i("fXoL"),a=i("TEn/"),r=i("QNcV"),c=i("rawN"),l=i("CcaC"),h=i("5jbV"),u=i("3Pt+"),d=i("ofXK");function b(e,t){if(1&e&&(o.Pb(0,"ion-select-option",11),o.nc(1),o.Ob()),2&e){const e=t.$implicit;o.fc("value",e.licensePlate),o.Ab(1),o.pc(" ",e.licensePlate," ")}}let p=(()=>{class e{constructor(e,t,i,n,s,o,a){this.modalController=e,this.navParams=t,this.toastController=i,this.authService=n,this.shipmentService=s,this.userService=o,this.vehicleService=a}setUserId(){this.authService.checkAuthState().subscribe(e=>{e&&(this.currentID=e.uid,console.log("Eingeloggt als: "+this.currentID),this.cargonaut=this.currentID,this.getVehicles(this.currentID))})}ngOnInit(){this.setUserId(),console.log("Aktuell eingeloggt als:"+this.cargonaut)}getVehicles(e){this.vehicles=[],this.vehicleService.findAll(e).subscribe(e=>{this.vehicles=e})}getSelectValue(e){this.vehicles.forEach(t=>{e.detail.value===t.licensePlate&&(this.selectedVehicle=t)})}presentToast(e){return Object(n.__awaiter)(this,void 0,void 0,(function*(){(yield this.toastController.create({message:e,duration:2e3})).present()}))}saveModal(){if(void 0===this.selectedVehicle)this.presentToast("Please select a Vehicle.");else{const e=new s.a(this.cargonaut,this.selectedVehicle,this.passengerList,this.articleList,this.start,this.goal,this.date,this.startTime,this.length,this.height,this.weight,this.pricePerKg,this.seat,this.pricePerSeat);console.log(e),this.start&&this.goal&&this.date&&this.length&&this.height&&this.weight&&this.pricePerKg&&this.seat&&this.pricePerSeat&&this.cargonaut?(this.shipmentService.persist(this.cargonaut,this.selectedVehicle,this.passengerList,this.articleList,this.start,this.goal,this.date,this.startTime,this.length,this.height,this.weight,this.pricePerKg,this.seat,this.pricePerSeat,0),this.closeModal(),this.presentToast("added Delivery")):this.presentToast("fuck")}}closeModal(){return Object(n.__awaiter)(this,void 0,void 0,(function*(){yield this.modalController.dismiss("Wrapped Up!")}))}}return e.\u0275fac=function(t){return new(t||e)(o.Kb(a.P),o.Kb(a.Q),o.Kb(a.W),o.Kb(r.a),o.Kb(c.a),o.Kb(l.a),o.Kb(h.a))},e.\u0275cmp=o.Eb({type:e,selectors:[["app-modal-delivery"]],decls:62,vars:11,consts:[["color","dark"],["color","dark",1,"ion-padding"],["size","6"],["position","floating"],["type","text",3,"ngModel","ngModelChange"],["type","date",3,"ngModel","ngModelChange"],[3,"ngModel","ngModelChange","ionChange"],[3,"value",4,"ngFor","ngForOf"],["type","number",3,"ngModel","ngModelChange"],["color","success",3,"click"],["color","danger",3,"click"],[3,"value"]],template:function(e,t){1&e&&(o.Pb(0,"ion-header"),o.Pb(1,"ion-toolbar",0),o.Pb(2,"ion-title"),o.nc(3,"Neue Lieferung hinzuf\xfcgen"),o.Ob(),o.Ob(),o.Ob(),o.Pb(4,"ion-content",1),o.Pb(5,"ion-row"),o.Pb(6,"ion-col",2),o.Pb(7,"ion-item",0),o.Pb(8,"ion-label",3),o.nc(9,"von"),o.Ob(),o.Pb(10,"ion-input",4),o.Xb("ngModelChange",(function(e){return t.start=e})),o.Ob(),o.Ob(),o.Ob(),o.Pb(11,"ion-col",2),o.Pb(12,"ion-item",0),o.Pb(13,"ion-label",3),o.nc(14,"nach"),o.Ob(),o.Pb(15,"ion-input",4),o.Xb("ngModelChange",(function(e){return t.goal=e})),o.Ob(),o.Ob(),o.Ob(),o.Ob(),o.Pb(16,"ion-item",0),o.Pb(17,"ion-label"),o.nc(18,"Datum"),o.Ob(),o.Pb(19,"ion-input",5),o.Xb("ngModelChange",(function(e){return t.date=e})),o.Ob(),o.Ob(),o.Pb(20,"ion-item",0),o.Pb(21,"ion-label",3),o.nc(22,"Fahrzeug"),o.Ob(),o.Pb(23,"ion-select",6),o.Xb("ngModelChange",(function(e){return t.selectedVehicle=e}))("ionChange",(function(e){return t.getSelectValue(e)})),o.mc(24,b,2,2,"ion-select-option",7),o.Ob(),o.Ob(),o.Pb(25,"ion-row"),o.Pb(26,"ion-col",2),o.Pb(27,"ion-item",0),o.Pb(28,"ion-label",3),o.nc(29,"verf\xfcgbare L\xe4nge in cm"),o.Ob(),o.Pb(30,"ion-input",8),o.Xb("ngModelChange",(function(e){return t.length=e})),o.Ob(),o.Ob(),o.Ob(),o.Pb(31,"ion-col",2),o.Pb(32,"ion-item",0),o.Pb(33,"ion-label",3),o.nc(34,"verf\xfcgbare H\xf6he in cm"),o.Ob(),o.Pb(35,"ion-input",8),o.Xb("ngModelChange",(function(e){return t.height=e})),o.Ob(),o.Ob(),o.Ob(),o.Ob(),o.Pb(36,"ion-row"),o.Pb(37,"ion-col",2),o.Pb(38,"ion-item",0),o.Pb(39,"ion-label",3),o.nc(40,"verf\xfcgbares Gewicht"),o.Ob(),o.Pb(41,"ion-input",8),o.Xb("ngModelChange",(function(e){return t.weight=e})),o.Ob(),o.Ob(),o.Ob(),o.Pb(42,"ion-col",2),o.Pb(43,"ion-item",0),o.Pb(44,"ion-label",3),o.nc(45,"\u20ac pro Kg"),o.Ob(),o.Pb(46,"ion-input",8),o.Xb("ngModelChange",(function(e){return t.pricePerKg=e})),o.Ob(),o.Ob(),o.Ob(),o.Ob(),o.Pb(47,"ion-row"),o.Pb(48,"ion-col",2),o.Pb(49,"ion-item",0),o.Pb(50,"ion-label",3),o.nc(51,"Sitzpl\xe4tze"),o.Ob(),o.Pb(52,"ion-input",8),o.Xb("ngModelChange",(function(e){return t.seat=e})),o.Ob(),o.Ob(),o.Ob(),o.Pb(53,"ion-col",2),o.Pb(54,"ion-item",0),o.Pb(55,"ion-label",3),o.nc(56,"\u20ac pro Sitzplatz"),o.Ob(),o.Pb(57,"ion-input",8),o.Xb("ngModelChange",(function(e){return t.pricePerSeat=e})),o.Ob(),o.Ob(),o.Ob(),o.Ob(),o.Pb(58,"ion-button",9),o.Xb("click",(function(){return t.saveModal()})),o.nc(59,"save"),o.Ob(),o.Pb(60,"ion-button",10),o.Xb("click",(function(){return t.closeModal()})),o.nc(61,"cancel"),o.Ob(),o.Ob()),2&e&&(o.Ab(10),o.ec("ngModel",t.start),o.Ab(5),o.ec("ngModel",t.goal),o.Ab(4),o.ec("ngModel",t.date),o.Ab(4),o.ec("ngModel",t.selectedVehicle),o.Ab(1),o.ec("ngForOf",t.vehicles),o.Ab(6),o.ec("ngModel",t.length),o.Ab(5),o.ec("ngModel",t.height),o.Ab(6),o.ec("ngModel",t.weight),o.Ab(5),o.ec("ngModel",t.pricePerKg),o.Ab(6),o.ec("ngModel",t.seat),o.Ab(5),o.ec("ngModel",t.pricePerSeat))},directives:[a.t,a.L,a.K,a.q,a.F,a.p,a.w,a.x,a.v,a.V,u.h,u.j,a.G,a.U,d.i,a.R,a.h,a.H],styles:[""]}),e})()},"581U":function(e,t,i){"use strict";i.r(t),i.d(t,"ModalDeliveryPageModule",(function(){return u}));var n=i("ofXK"),s=i("3Pt+"),o=i("TEn/"),a=i("tyNb"),r=i("+vhm"),c=i("fXoL");const l=[{path:"",component:r.a}];let h=(()=>{class e{}return e.\u0275mod=c.Ib({type:e}),e.\u0275inj=c.Hb({factory:function(t){return new(t||e)},imports:[[a.i.forChild(l)],a.i]}),e})(),u=(()=>{class e{}return e.\u0275mod=c.Ib({type:e}),e.\u0275inj=c.Hb({factory:function(t){return new(t||e)},imports:[[n.b,s.e,o.M,h]]}),e})()},"5jbV":function(e,t,i){"use strict";i.d(t,"a",(function(){return l}));var n=i("lJxs"),s=i("wMo3"),o=i("fXoL"),a=i("I/3d"),r=i("CcaC"),c=i("QNcV");let l=(()=>{class e{constructor(e,t,i){this.afs=e,this.userService=t,this.authService=i,this.userCollection=e.collection("user")}static prepare(e){const t=Object.assign({},e);return t.name=t.name||null,t.holderId=t.holderId||null,t.load=t.load||null,t.maxLoad=t.maxLoad||null,t.maxSeats=t.maxSeats||null,t.seats=t.seats||null,t.volume=t.volume||null,t}persist(t,i,n,o,a,r,c,l){const h=new s.a(t,i,n,o,a,r,c,l);return this.userCollection.doc(n).collection("vehicle").doc(h.licensePlate).set(e.prepare(h))}update(t){this.userCollection.doc(t.holderId).collection("vehicle").doc(t.licensePlate).update(e.prepare(t))}delete(e,t){this.userCollection.doc(t).collection("vehicle").doc(e.licensePlate).delete()}getVehicle(e,t){return this.userCollection.doc(t).collection("vehicle").doc(e).get().pipe(Object(n.a)(e=>{const t=e.data();return t.licensePlate=e.id,Object.assign({},t)}))}findAll(e){return this.userCollection.doc(e).collection("vehicle").snapshotChanges().pipe(Object(n.a)(e=>e.map(e=>{const t=e.payload.doc.data();return t.licensePlate=e.payload.doc.id,Object.assign({},t)})))}}return e.\u0275fac=function(t){return new(t||e)(o.Tb(a.a),o.Tb(r.a),o.Tb(c.a))},e.\u0275prov=o.Gb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},QNcV:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));var n=i("fXoL"),s=i("UbJi"),o=i("CcaC");let a=(()=>{class e{constructor(e,t){this.auth=e,this.userservice=t}register(e){return new Promise((t,i)=>{this.auth.createUserWithEmailAndPassword(e.email,e.password).then(i=>{t(i),this.userservice.persist(i.user.uid,e.title,e.fname,e.lname,e.street,e.housenumber,e.postalcode,e.city,e.email)},e=>i(e))})}login(e){return new Promise((t,i)=>{this.auth.signInWithEmailAndPassword(e.email,e.password).then(e=>t(e),e=>i(e))})}checkAuthState(){return this.auth.authState}SignOut(){return this.auth.signOut()}}return e.\u0275fac=function(t){return new(t||e)(n.Tb(s.a),n.Tb(o.a))},e.\u0275prov=n.Gb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},hE1G:function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));class n{constructor(e,t,i,n,s,o,a,r,c,l,h,u,d,b,p,g){this.start=s,this.goal=o,this.date=a,this.startTime=r,this.length=c,this.height=l,this.weight=h,this.pricePerKg=u,this.seat=d,this.pricePerSeat=b,this.cargonaut=e,this.vehicle=t,this.passengerList=i,this.articleList=n,this.id=g,this.status=p}}},rawN:function(e,t,i){"use strict";i.d(t,"a",(function(){return l}));var n=i("hE1G"),s=i("lJxs"),o=i("fXoL"),a=i("I/3d"),r=i("CcaC"),c=i("QNcV");let l=(()=>{class e{constructor(e,t,i){this.afs=e,this.userService=t,this.authService=i,this.shipmentCollection=e.collection("shipment")}static prepare(e){const t=Object.assign({},e);return delete t.id,t.start=t.start||null,t.goal=t.goal||null,t.date=t.date||null,t.length=t.length||null,t.height=t.height||null,t.weight=t.weight||null,t.pricePerKg=t.pricePerKg||null,t.seat=t.seat||null,t.cargonaut=t.cargonaut||null,t.pricePerSeat=t.pricePerSeat||null,t.vehicle=t.vehicle||null,t.articleList=t.articleList||null,t.passengerList=t.passengerList||null,t.startTime=t.startTime||null,t.status=t.status||null,t}persist(t,i,s,o,a,r,c,l,h,u,d,b,p,g,m){const P=new n.a(t,i,s,o,a,r,c,l,h,u,d,b,p,g,m);return this.shipmentCollection.add(e.prepare(P))}update(t,i,s,o,a,r,c,l,h,u,d,b,p,g,m,P){const f=new n.a(t,i,s,o,a,r,c,l,h,u,d,b,p,g,m,P);return this.shipmentCollection.doc(f.id).update(e.prepare(f))}delete(e){this.shipmentCollection.doc(e).delete()}getShipment(e){return this.shipmentCollection.doc(e).get().pipe(Object(s.a)(e=>{const t=e.data();return t.id=e.id,Object.assign({},t)}))}testAll(){return this.shipmentCollection.snapshotChanges().pipe(Object(s.a)(e=>e.map(e=>{const t=e.payload.doc.data();return t.id=e.payload.doc.id,Object.assign({},t)})))}testQuery(){return this.afs.collection("shipment",e=>e.where("seat",">=",1).where("goal","==","Warschau").where("start","==","Berlin").where("date","==","1933-02-04")).snapshotChanges().pipe(Object(s.a)(e=>e.map(e=>{const t=e.payload.doc.data();return t.id=e.payload.doc.id,Object.assign({},t)})))}searchRoute(e,t,i,n){return this.afs.collection("shipment",s=>s.where("seat",">=",e).where("goal","==",i).where("start","==",t).where("date","==",n)).snapshotChanges().pipe(Object(s.a)(e=>e.map(e=>{const t=e.payload.doc.data();return t.id=e.payload.doc.id,Object.assign({},t)})))}searchTransport(e,t,i,n,o){return this.afs.collection("shipment",n=>n.where("start","==",e).where("goal","==",t).where("weight",">=",i)).snapshotChanges().pipe(Object(s.a)(e=>e.map(e=>{const t=e.payload.doc.data();return t.id=e.payload.doc.id,Object.assign({},t)})))}searchBoth(e,t,i,n){return this.afs.collection("shipment",s=>s.where("start","==",e).where("goal","==",t).where("date","==",i).where("seat",">=",n)).snapshotChanges().pipe(Object(s.a)(e=>e.map(e=>{const t=e.payload.doc.data();return t.id=e.payload.doc.id,Object.assign({},t)})))}getShipments(e){return this.afs.collection("shipment",t=>t.where("cargonaut","==",e)).snapshotChanges().pipe(Object(s.a)(e=>e.map(e=>{const t=e.payload.doc.data();return t.id=e.payload.doc.id,Object.assign({},t)})))}orderQuery(e){return this.afs.collection("shipment",t=>t.orderBy(e)).snapshotChanges().pipe(Object(s.a)(e=>e.map(e=>{const t=e.payload.doc.data();return t.id=e.payload.doc.id,Object.assign({},t)})))}}return e.\u0275fac=function(t){return new(t||e)(o.Tb(a.a),o.Tb(r.a),o.Tb(c.a))},e.\u0275prov=o.Gb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},wMo3:function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));class n{constructor(e,t,i,n,s,o,a,r){this.licensePlate=e,this.name=t,this.holderId=i,this.load=n,this.maxLoad=s,this.volume=o,this.seats=a,this.maxSeats=r}}}}]);