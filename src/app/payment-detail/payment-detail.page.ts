import {Component, Input, OnInit} from '@angular/core';
import {NavigationExtras, Router} from '@angular/router';
import {ModalController} from '@ionic/angular';
import {Shipment} from '../shared/shipment';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.page.html',
  styleUrls: ['./payment-detail.page.scss'],

})
/**
 * Payment details page shows a modal with further information on the chosen shipment from the search result
 */
export class PaymentDetailPage implements OnInit {

  @Input() modalController: ModalController;
  @Input() shipment: Shipment;
  constructor(private router: Router) {

  }

  ngOnInit() {
  }

  // method for dismissing the payment detail modal
  async dismissModal(modalController: ModalController) {
    await modalController.dismiss();
  }

  /**
   * navigation method to payment choice page with passing of shipment object for further manipulation
   *
   * @param modalController modal controller form search result page to access modal from this page
   */
  navigateToPaymentChoice(modalController: ModalController){
    this.dismissModal(modalController);
    const navigationExtras: NavigationExtras = { state: { shipment: this.shipment } };
    this.router.navigate(['/payment-choice'], navigationExtras);
  }
}
