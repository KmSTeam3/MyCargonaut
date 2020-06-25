import {Component, Input, OnInit} from '@angular/core';
import {Shipment} from '../../shared/shipment';
import {Router} from '@angular/router';
import { PaymentDetailPage} from '../../payment-detail/payment-detail.page';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-list-result',
  templateUrl: './list-result.page.html',
  styleUrls: ['./list-result.page.scss'],
})
export class ListResultPage implements OnInit {

  @Input() shipment: Shipment;

  constructor(public modalController: ModalController, private router: Router) { }

  ngOnInit() {
  }

  navigateToPayment(){
    this.router.navigate(['/payment-detail']);
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component:  PaymentDetailPage,
      cssClass: 'paymentModal',
      componentProps: {
        shipment: this.shipment,
        modalController: this.modalController
      }
    });
    return await modal.present();
  }

  async dismissModal() {
    await this.modalController.dismiss();
  }

}
