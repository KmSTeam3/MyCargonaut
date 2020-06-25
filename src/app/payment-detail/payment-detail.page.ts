import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.page.html',
  styleUrls: ['./payment-detail.page.scss'],

})
export class PaymentDetailPage implements OnInit {


  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToLogin(){
    this.router.navigate(['/login']);
  }

  navigateToRegister(){
    this.router.navigate(['/register']);
  }

  navigateToMangeVehicle(){
    this.router.navigate(['/manage-vehicle']);
  }

  navigateToRouteSearch(){
    this.router.navigate(['/route-search']);
  }

  navigateToTransportSearch(){
    this.router.navigate(['/transport-search']);
  }

  navigateToSearchResult(){
    this.router.navigate(['/search-result']);
  }

  navigateToProfile(){
    this.router.navigate(['/profile']);
  }

  navigateToHome(){
    this.router.navigate(['/home']);
  }

  navigateToPaymentChoice(){
    this.router.navigate(['/payment-choice']);
  }
}
