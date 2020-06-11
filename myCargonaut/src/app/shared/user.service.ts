import { Injectable } from '@angular/core';
import { User } from './user';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  userListRef: AngularFireList<any>;
  userRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

  //create 
  createUser(user: User){
    return this.userListRef.push({
      fName: user.fName,
      lName: user.lName,
      email: user.email,
      password: user.password,
      birthday: user.birthday
    });
  }

  getUser(id: string){
    this.userRef = this.db.object('/users/' + id);
    return this.userRef;
  }

  getUserList(){
    this.userListRef = this.db.list('/users');
    return this.userListRef;
  }

  updateUser(id, user: User){
    return this.userRef.update({
      fName: user.fName,
      lName: user.lName,
      birthday: user.birthday,
      email: user.email,
      password: user.password
    });
  }

  deleteUser(id: string){
    this.userRef = this.db.object('/users/' + id);
    this.userRef.remove();
  }

}
