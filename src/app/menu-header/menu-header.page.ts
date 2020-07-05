import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../shared/auth.service';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.page.html',
  styleUrls: ['./menu-header.page.scss'],
})
export class MenuHeaderPage implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  // navigation method to login page
  navigateToLogin(){
    this.router.navigate(['/login']);
  }

  // navigation method to the register page
  navigateToRegister(){
    this.router.navigate(['/register']);
  }

  // navigation method to the vehicle management page
  navigateToMangeVehicle(){
    this.router.navigate(['/manage-vehicle']);
  }

  // navigation method to the search page for routes (only traveling as a passenger)
  navigateToRouteSearch(){
    this.router.navigate(['/route-search']);
  }

  // navigation method to the search page for transports (only transport articles)
  navigateToTransportSearch(){
    this.router.navigate(['/transport-search']);
  }

  // navigation method to result page of the previous search
  navigateToSearchResult(){
    this.router.navigate(['/search-result']);
  }

  // navigation method to the users profile page
  navigateToProfile(){
    this.router.navigate(['/profile']);
  }

  // navigation method to the home page
  navigateToHome(){
    this.router.navigate(['/home']);
  }

  // navigation method to the impressum
  navigateToImpressum(){
    this.router.navigate(['/impressum']);
  }

  // navigation method to the users shipment overview page
  navigateToDelivery(){
    this.router.navigate(['/delivery']);
  }

  // navigation to bookings
  navigateToBookings(){
    this.router.navigate(['bookings']);
  }

  signOut() {
    this.authService.SignOut().then(() => {
      this.router.navigate(['login']);
    });
  }
}
