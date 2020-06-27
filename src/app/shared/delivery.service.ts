import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {UserService} from './user.service';
import {map} from 'rxjs/operators';
import {User} from './user';
import {AngularFirestoreCollection, AngularFirestore} from '@angular/fire/firestore';
import {Vehicle} from './vehicle';
import {Observable} from 'rxjs';
import {VehicleService} from "./vehicle.service";
import {Delivery} from "./delivery";
import {Shipment} from "./shipment";
import {Person} from "./person";

@Injectable({
    providedIn: 'root'
})
export class DeliveryService {

    vehicleCollection: AngularFirestoreCollection<Vehicle>;
    userCollection: AngularFirestoreCollection<User>;
    deliveryCollection: AngularFirestoreCollection<Delivery>;

    static prepare(shipment: Shipment): Shipment {
        const copy = {...shipment};

        copy.start = copy.start || null;
        copy.goal = copy.goal || null;
        copy.date = copy.date || null;
        copy.length = copy.length || null;
        copy.height = copy.height || null;
        copy.weight = copy.weight || null;
        copy.priceperkg = copy.priceperkg || null;
        copy.seat = copy.seat || null;
        copy.cargonaut= copy.cargonaut|| null;
        copy.priceperSeat = copy.priceperSeat || null;
        copy.vehicle = copy.vehicle || null;
        copy.articleList= copy.articleList||null;
        copy.passengerList=copy.passengerList|| null;
        copy.startTime=copy.startTime|| null;

        return copy;
    }


    constructor(private afs: AngularFirestore, private  userService: UserService, private AuthService: AuthService) {
        this.deliveryCollection = afs.collection<Delivery>('delivery');
    }

    persist( start: string, goal: string, date: Date, length: number, height: number, weight: number, priceperkg: number,
             seat: number, priceperSeat: number, cargonaut: string, vehicle,articleList:[],passengerList: Person[],
             startTime:string ) {

        //console.log(from, too, date, length, height, weight, priceperkg, priceperSeat)
        const shipment = new Shipment(start, goal, date, length, height, weight, priceperkg, seat, priceperSeat, cargonaut,vehicle,articleList,passengerList,startTime);
        return this.deliveryCollection.add(DeliveryService.prepare(shipment));
    }


}
