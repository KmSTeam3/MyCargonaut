import { UserService } from '../shared/user.service';
import { Component } from '@angular/core';
import {User} from '../shared/user';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private userService: UserService) {
    // this.getUserList();
  }

  /*getUserList(){
    this.userService.getUserList().valueChanges().subscribe(res => {console.log(res); } );
  }

  createUser(){
    const user: User = new User('Admin', 'Adminstrator', '01.01.2001', 'emailadresse', 'geheim');
    this.userService.createUser(user);
    alert('user created.');
  }

  deleteUser(id){
    console.log(id);
    if (window.confirm('Do you really want to delete?')){
        this.userService.deleteUser(id);
    }
  }

  // to do
  updateUser(){

  }*/
}
