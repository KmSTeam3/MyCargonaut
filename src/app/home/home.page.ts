import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';
import {Component, OnDestroy} from '@angular/core';
import { MenuController } from '@ionic/angular';
import {AuthService} from '../shared/auth.service';
import {Subscription} from 'rxjs';

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
export class HomePage implements OnDestroy{

  subscription: Subscription;
  user: firebase.User;

  constructor(public authService: AuthService, private router: Router, private menu: MenuController) {
    // this.getUserList();
    this.subscription = this.authService.checkAuthState().subscribe(value => {
      if (value){
        this.user = value;
      }
    });
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

  signOut(){
    this.authService.SignOut().then(() => {
      this.navigateToLogin();
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

