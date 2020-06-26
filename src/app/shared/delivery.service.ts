import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { map } from 'rxjs/operators';
import { User } from './user';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Vehicle } from './vehicle';
import { Observable } from 'rxjs';
import {VehicleService} from "./vehicle.service";
import {Delivery} from "./delivery";

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  vehicleCollection: AngularFirestoreCollection<Vehicle>;
  userCollection: AngularFirestoreCollection<User>;
  deliveryCollection: AngularFirestoreCollection<Delivery>;

  static prepare(delivery : Delivery): Delivery {
    const copy = {...delivery};

    copy.from = copy.from || null;
    copy.too = copy.too || null;
    copy.date = copy.date || null;
    copy.length = copy.length || null;
    copy.height = copy.height || null;
    copy.weight = copy.weight || null;
    copy.priceperkg = copy.priceperkg || null;
    copy.seat = copy.seat || null;
    copy.priceperSeat= copy.priceperSeat || null;
    return copy;
  }


  constructor(private afs: AngularFirestore, private  userService: UserService, private AuthService: AuthService) {
    this.deliveryCollection = afs.collection<Delivery>('delivery');
  }
  persist(from:string, too:string, date: Date, length:number, height:number, weight:number, priceperkg:number,seat:number, priceperSeat:number,ownerId:string){
    console.log(from,too,date,length,height,weight,priceperkg,priceperSeat)
    const delivery = new Delivery(from,too,date,length,height,weight,priceperkg,seat,priceperSeat,ownerId);
    return this.deliveryCollection.doc(from).set(DeliveryService.prepare(delivery));
  }



}
