import {Component, Input, OnInit} from '@angular/core';
import {Shipment} from '../shared/shipment';
import {Router} from '@angular/router';

@Component({
  selector: 'app-payment-choice',
  templateUrl: './payment-choice.page.html',
  styleUrls: ['./payment-choice.page.scss'],
})
export class PaymentChoicePage implements OnInit {

  @Input() shipment: Shipment;
  currentPaymentChoice: number;
  constructor(private router: Router) { }

  ngOnInit() {
  }


  setPaymentChoice(event){
    this.currentPaymentChoice = event.detail.value;
    console.log('radioGroupChange', this.currentPaymentChoice);
  }

  navigateToSearchResult(){
    this.router.navigate(['/search-result']);
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
  navigateToProfile(){
    this.router.navigate(['/profile']);
  }

  navigateToHome(){
    this.router.navigate(['/home']);
  }
}
