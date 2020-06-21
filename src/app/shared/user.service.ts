import { Injectable } from '@angular/core';
import { User } from './user';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import {
  Action,
  AngularFirestore,
  AngularFirestoreCollection,
  DocumentChangeAction,
  DocumentSnapshot
} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  userCollection: AngularFirestoreCollection<User>;

  static prepare(user: User): User {
    const copy = {...user};
    delete copy.id;
    copy.title = copy.title || null;
    copy.fName = copy.fName || null;
    copy.lName = copy.lName || null;
    copy.street = copy.street || null;
    copy.housenumber = copy.housenumber || null;
    copy.postalcode = copy.postalcode || null;
    copy.city = copy.city || null;
    copy.email = copy.email || null;
    return copy;
  }

  constructor(private afs: AngularFirestore) {
    this.userCollection = afs.collection<User>('user');
  }

  // create
  persist(id: string, title: string, fName: string, lName: string, street: string, housenumber: number, postalcode: number, city: string, email: string){
    const user: User = new User(id, title, fName, lName, street, housenumber, postalcode, city, email);
    return this.userCollection.doc(user.id).set(UserService.prepare(user));
  }

  update(id: string, title: string, fName: string, lName: string, street: string, housenumber: number, postalcode: number, city: string, email: string){
    const user: User = new User(id, title, fName, lName, street, housenumber, postalcode, city, email);
    return this.userCollection.doc(user.id).update(UserService.prepare(user));
  }

  delete(userid: string){
    this.userCollection.doc(userid).delete();
  }

  getUser(id: string): Observable<User>{
    return this.userCollection.doc(id).get().pipe(
        map(a => {
          const data = a.data();
          data.id = a.id;
          return {...data} as User;
        })
    );
  }

  findAll(): Observable<User[]> {
    const changeActions: Observable<DocumentChangeAction<User>[]> = this.userCollection.snapshotChanges();
    return changeActions.pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data();
          data.id = a.payload.doc.id;
          return {...data} as User;
        }))
    );
  }

}
