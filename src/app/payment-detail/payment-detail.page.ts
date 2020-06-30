import {Component, Input, OnInit} from '@angular/core';
import {NavigationExtras, Router} from '@angular/router';
import {ModalController} from '@ionic/angular';
import {Shipment} from '../shared/shipment';
import {User} from '../shared/user';

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
  @Input() user: User;
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

  /**
   * Determines the color of the stars depending on rating
   * @param index Index of the star
   * @param points Rating points
   */
  getColor(index: number, points: number){
    enum colors {
      GREY = '#E0E0E0',
      GREEN = '#76FF03',
      YELLOW = '#FFCA28',
      RED = '#DD2C00'
    }
    if (index > points){
      return colors.GREY;
    }
    switch (points) {
      case 1:
      case 2:
        return colors.RED;
      case 3:
        return colors.YELLOW;
      case 4:
      case 5:
        return colors.GREEN;
      default:
        return colors.GREY;
    }
  }
}
