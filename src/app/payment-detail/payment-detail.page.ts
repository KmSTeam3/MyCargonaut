import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ModalController} from '@ionic/angular';
import {Shipment} from '../shared/shipment';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.page.html',
  styleUrls: ['./payment-detail.page.scss'],

})
export class PaymentDetailPage implements OnInit {

  @Input() modalController: ModalController;
  @Input() shipment: Shipment;
  constructor(private router: Router) {

  }

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

  async dismissModal(modalController: ModalController) {
    await modalController.dismiss();
  }

  navigateToPaymentChoice(modalController: ModalController){
    this.dismissModal(modalController);

    this.router.navigate(['/payment-choice']);

  }
}
