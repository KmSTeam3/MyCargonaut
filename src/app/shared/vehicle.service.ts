import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { map } from 'rxjs/operators';
import { User } from './user';
import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Vehicle } from './vehicle';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

/**
 * Vehicle Service connects the
 * **/
export class VehicleService {
    /**
     * adds connection to Firestore Collection "Vehicle" and "User"
     * **/

  vehicleCollection: AngularFirestoreCollection<Vehicle>;
  userCollection: AngularFirestoreCollection<User>;

  static prepare(vehicle: Vehicle): Vehicle {
    const copy = {...vehicle};

    copy.name = copy.name || null;
    copy.holderId = copy.holderId || null;
    copy.load = copy.load || null;
    copy.maxLoad = copy.maxLoad || null;
    copy.maxSeats = copy.maxSeats || null;
    copy.seats = copy.seats || null;
    copy.volume = copy.volume || null;
    return copy;
  }

  constructor(private afs: AngularFirestore, private userService: UserService, private authService: AuthService) {
    this.userCollection = afs.collection<User>('user');
   }

  persist(licensePlate: string, name: string, holderId: string, load: number, maxLoad: number, volume: number, seats: number, maxSeats: number ){
    const vehicle = new Vehicle(licensePlate, name, holderId, load, maxLoad, volume, seats, maxSeats);
    return this.userCollection.doc(holderId).collection('vehicle').doc(vehicle.licensePlate).set(VehicleService.prepare(vehicle));
  }

  update(vehicle: Vehicle){
    this.userCollection.doc(vehicle.holderId).collection('vehicle').doc(vehicle.licensePlate).update(VehicleService.prepare(vehicle));
  }

  delete(vehicle: Vehicle, uId: string){
    this.userCollection.doc(uId).collection('vehicle').doc(vehicle.licensePlate).delete();
  }

  getVehicle(licensePlate: string, id: string): Observable<Vehicle>{
    return this.userCollection.doc(id).collection('vehicle').doc(licensePlate)
    .get().pipe(
      map(
          a => {
          const data = a.data() as Vehicle;
          data.licensePlate = a.id;
          return {... data};
          })
      );
  }

  findAll(uId: string): Observable<Vehicle[]> {
    const changeActions = this.userCollection.doc(uId).collection('vehicle').snapshotChanges();
    return changeActions.pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as Vehicle;
          data.licensePlate = a.payload.doc.id;
          return {...data};
        }))
    );
  }

}

