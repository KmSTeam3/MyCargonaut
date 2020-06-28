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

/**
 * Service for managing users in firestore
 */
export class UserService {

  isLoggedIn = false;
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
    copy.rating = copy.rating || null;
    return copy;
  }

  constructor(private afs: AngularFirestore) {
    this.userCollection = afs.collection<User>('user');
  }

  /**
   * Persists user
   */
  persist(id: string, title: string, fName: string, lName: string, street: string, housenumber: number, postalcode: number, city: string, email: string){
    const user: User = new User(id, title, fName, lName, street, housenumber, postalcode, city, email);
    return this.userCollection.doc(user.id).set(UserService.prepare(user));
  }

  /**
   * updates user
   * @param user User to be updated
   */
  update(user: User){
    return this.userCollection.doc(user.id).update(UserService.prepare(user));
  }

  /**
   * deletes user
   * @param userid ID of user who should be deleted
   */
  delete(userid: string){
    this.userCollection.doc(userid).delete();
  }

  /**
   * Fetches user from firestore by given ID
   * @param id ID of the user
   */
  getUser(id: string): Observable<User>{
    return this.userCollection.doc(id).get().pipe(
        map(a => {
          const data = a.data();
          data.id = a.id;
          return {...data} as User;
        })
    );
  }

  /**
   * Fetches all users from the database
   */
  findAll(): Observable<User[]> {
    const changeActions: Observable<DocumentChangeAction<User>[]> = this.userCollection.snapshotChanges();
    return changeActions.pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data();
          return {...data} as User;
        }))
    );
  }

  setLogin(){
    this.isLoggedIn = true;
  }

  setLogout(){
    this.isLoggedIn = false;
  }
}
