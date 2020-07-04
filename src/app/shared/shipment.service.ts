import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, DocumentChangeAction} from '@angular/fire/firestore';
import {Vehicle} from './vehicle';
import {Shipment} from './shipment';
import {User} from './user';
import {UserService} from './user.service';
import {AuthService} from './auth.service';
import {Person} from './person';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Article} from './article';

@Injectable({
    providedIn: 'root'
})
export class ShipmentService {
    vehicleCollection: AngularFirestoreCollection<Vehicle>;
    userCollection: AngularFirestoreCollection<User>;
    shipmentCollection: AngularFirestoreCollection<Shipment>;

    static prepare(shipment: Shipment): Shipment {
        const copy = {...shipment};
        delete copy.id;

        copy.start = copy.start || null;
        copy.goal = copy.goal || null;
        copy.date = copy.date || null;
        copy.length = copy.length || null;
        copy.height = copy.height || null;
        copy.weight = copy.weight || null;
        copy.pricePerKg = copy.pricePerKg || null;
        copy.seat = copy.seat || null;
        copy.cargonaut = copy.cargonaut || null;
        copy.pricePerSeat = copy.pricePerSeat || null;
        copy.vehicle = copy.vehicle || null;
        copy.articleList = copy.articleList || null;
        copy.passengerList = copy.passengerList || null;
        copy.startTime = copy.startTime || null;
        copy.shipSatus = copy.shipSatus || null;
        copy.status = copy.status || null;

        return copy;
    }

    constructor(private afs: AngularFirestore, private userService: UserService, private authService: AuthService) {
        this.shipmentCollection = afs.collection<Shipment>('shipment');
    }

    // adds a new "shipment" document to the firestore collection "shipment"
    persist(cargonaut: string, vehicle: Vehicle, passengerList: Person[], articleList: Article[], start: string, goal: string, date: Date, startTime: string, length: number, height: number, weight: number,
            pricePerKg: number, seat: number, pricePerSeat: number, status: number, shipStatus: number) {
        const shipment: Shipment = new Shipment(cargonaut, vehicle, passengerList, articleList, start, goal, date, startTime, length, height, weight, pricePerKg, seat, pricePerSeat, status, shipStatus);
        return this.shipmentCollection.add(ShipmentService.prepare(shipment));
    }

    // adds a new "shipment" document to the firestore collection "shipment"
    update(cargonaut: string, vehicle: Vehicle, passengerList: Person[], articleList: Article[], start: string, goal: string, date: Date, startTime: string, length: number, height: number, weight: number,
           pricePerKg: number, seat: number, pricePerSeat: number, status: number, shipStatus: number, id: string) {
        const shipment: Shipment = new Shipment(cargonaut, vehicle, passengerList, articleList, start, goal, date, startTime, length, height, weight, pricePerKg, seat, pricePerSeat, status, shipStatus, id);
        return this.shipmentCollection.doc(shipment.id).update(ShipmentService.prepare(shipment));
    }

    // deletes a document "shipment" in Firestore Collection "Shipment"
    delete(shipmentId: string) {
        this.shipmentCollection.doc(shipmentId).delete();
    }

    getShipment(id: string): Observable<Shipment> {
        return this.shipmentCollection.doc(id).get().pipe(
            map(a => {
                const data = a.data();
                data.id = a.id;
                return {...data} as Shipment;
            })
        );
    }

    // collect all shipments from the collection
    testAll(): Observable<Shipment[]>{
        const changeActions: Observable<DocumentChangeAction<Shipment>[]> =  this.shipmentCollection.snapshotChanges();
        return changeActions.pipe(
            map(actions => actions.map(a => {
                const data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return {...data} as Shipment;
            }))
        );
    }

    // test call with predefined parameter
    testQuery(): Observable<Shipment[]>{
        const changeActions: Observable<DocumentChangeAction<Shipment>[]> = this.afs.collection<Shipment>('shipment', ref => ref.
        where('seat', '>=', 1).
        where('goal', '==', 'Warschau').
        where('start', '==', 'Berlin').
        where('date', '==', '1933-02-04')).snapshotChanges();

        return changeActions.pipe(
            map(actions => actions.map(a => {
                const data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return {...data} as Shipment;
            }))
        );
    }

    // method for getting shipments where the user wants to be a passenger
    searchRoute(seats: number, start: string, goal: string, date: string): Observable<Shipment[]> {
        const queryBase: Observable<DocumentChangeAction<Shipment>[]> =  this.afs.collection<Shipment>('shipment', ref => ref.
        where('seat', '>=', seats).
        where('goal', '==', goal).
        where('start', '==', start).
        where('date', '==', date)).snapshotChanges();

        return queryBase.pipe(
            map(actions => actions.map(a => {
                const data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return{...data} as Shipment;
            }))
        );
    }

    // method for getting shipments for articles
    searchTransport(start: string, goal: string, weight: number, height: number, length: number): Observable<Shipment[]>{
        const queryBase: Observable<DocumentChangeAction<Shipment>[]> = this.afs.collection<Shipment>('shipment', ref => ref.
        where('start', '==', start).
        where('goal', '==', goal).
        where('weight', '>=', weight)).snapshotChanges();

        return queryBase.pipe(
            map(actions => actions.map( a => {
                const data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return{...data} as Shipment;
            }))
        );
    }

    // method for getting shipments where the user can be a passenger and let articles be transported
    searchBoth(start: string, goal: string, date: string, seats: number){
        const queryBase: Observable<DocumentChangeAction<Shipment>[]> = this.afs.collection<Shipment>('shipment', ref => ref.
        where('start', '==', start).
        where('goal', '==', goal).
        where('date', '==', date).
        where('seat', '>=', seats)).snapshotChanges();

        return queryBase.pipe(
            map(actions => actions.map( a => {
                const data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return{...data} as Shipment;
            }))
        );
    }

    // get all shipments of a specific user
    getShipments(cargonaut: string) {
        const queryBase: Observable<DocumentChangeAction<Shipment>[]> = this.afs.collection<Shipment>('shipment', ref => ref.
        where('cargonaut', '==', cargonaut)).snapshotChanges();

        return queryBase.pipe(  map(actions => actions.map(a => {
            const data = a.payload.doc.data();
            data.id = a.payload.doc.id;
            return{...data} as Shipment;
        }))
        );
    }

    orderQuery(value: string): Observable<Shipment[]> {
        const queryBase = this.afs.collection<Shipment>('shipment', ref => ref.orderBy(value)).snapshotChanges();
        return queryBase.pipe(
            map(actions => actions.map(a => {
                const data = a.payload.doc.data() as Shipment;
                data.id = a.payload.doc.id;
                return {...data};
            }))
        );
    }

}
