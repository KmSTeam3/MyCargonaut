import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFireAuth} from '@angular/fire/auth';
import {UserService} from './user.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth, private userservice: UserService, private router: Router){
  }


  register(value): Promise<any> {
    return new Promise<any>(((resolve, reject) => {
      this.auth.createUserWithEmailAndPassword(value.email, value.password)
          .then(
              res => {
                resolve(res);
                // TODO
                // this.userservice.persist(value.email, value.username, res.user.uid);
              },
              err => reject(err));
    }));
  }

  login(value){
    return new Promise<any>(((resolve, reject) => {
      this.auth.signInWithEmailAndPassword(value.email, value.password)
          .then(
              res => resolve(res),
              err => reject(err));
    }));
  }

  checkAuthState(): Observable<firebase.User | null>{
    return this.auth.authState;
  }

  SignOut() {
    return this.auth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['enter-app']);
    });
  }
}
