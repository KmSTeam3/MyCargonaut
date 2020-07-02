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

  // navigation method to login page
  navigateToLogin(){
    this.router.navigate(['/login']);
  }

  // navigation metohd to register page
  navigateToRegister(){
    this.router.navigate(['/register']);
  }

  openFirst(){
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  // navigation method to route search page
  navigateToRouteSearch() {
    this.router.navigate(['/route-search']);
  }

  // navigation method to transport search page
  navigateToTransportSearch() {
    this.router.navigate(['/transport-search']);
  }

    navigateToDualSearch() {
        this.router.navigate(['/dual-search']);
    }
}

