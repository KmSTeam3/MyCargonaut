import { UserService } from './../shared/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private userService: UserService) {
    this.getUserList();
  }

  getUserList(){
    console.log(this.userService.getUserList());
  }
}
