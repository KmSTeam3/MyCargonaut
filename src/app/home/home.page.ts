import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';
import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
/**
 * Home page shows the three different search options and has login and registration options
 *
 * If User is logged in instead of login & regBtn burger menu that opens nav-sidemenu is shown
 */
export class HomePage {

  constructor(public userService: UserService, private router: Router, private menu: MenuController) {
    // this.getUserList();
  }


  navigateToLogin(){
    this.router.navigate(['/login']);
  }

  navigateToRegister(){
    this.router.navigate(['/register']);
  }


  openFirst(){
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

}

