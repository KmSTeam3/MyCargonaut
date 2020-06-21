import { map } from 'rxjs/operators';
import { User } from './user';
import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore';
import { Vehicle } from './vehicle';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  vehicleCollection: AngularFirestoreCollection<Vehicle>;

  static prepare(vehicle: Vehicle): Vehicle {
    const copy = {...vehicle};
    delete copy.$id;
    copy.name = copy.name || null;
    copy.holder = copy.holder || null;
    copy.load = copy.load || null;
    copy.maxLoad = copy.maxLoad || null;
    copy.maxSeats = copy.maxSeats || null;
    copy.seats = copy.seats || null;
    copy.volume = copy.volume || null;
    return copy;
  }
  constructor(private afs: AngularFirestore) {
    this.vehicleCollection = afs.collection<Vehicle>('vehicle');
   }

  persist(name: string, holder: User, load: number, maxLoad: number, volume: number, seats: number, maxSeats: number ){
    const vehicle = new Vehicle(name, holder, load, maxLoad, volume, seats, maxSeats);
    return this.vehicleCollection.doc(vehicle.$id).set(VehicleService.prepare(vehicle));
  }

  update(vehicle: Vehicle){
    this.vehicleCollection.doc(vehicle.$id).update(VehicleService.prepare(vehicle));

  }

  delete(vehicle: Vehicle){
    this.vehicleCollection.doc(vehicle.$id).delete();
  }

  getVehicle(id: string){
    return this.vehicleCollection.doc(id).get().pipe(
      map(a => {
        const data = a.data();
        data.id = a.id;
        return {...data} as Vehicle;
      })
    );
  }

  findAll(): Observable<Vehicle[]> {
    const changeActions: Observable<DocumentChangeAction<Vehicle>[]> = this.vehicleCollection.snapshotChanges();
    return changeActions.pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data();
          data.$id = a.payload.doc.id;
          return {...data} as Vehicle;
        }))
    );
  }

}

