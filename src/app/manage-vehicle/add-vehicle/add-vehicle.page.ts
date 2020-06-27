import { ModalPage } from '../modal/modal.page';
import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.page.html',
  styleUrls: ['./add-vehicle.page.scss'],
})
export class AddVehiclePage {
  @Input() holderId: string;

  constructor(public modalController: ModalController) {}

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: {
        holderId: this.holderId
      }
    });
    return await modal.present();
  }

  dismissModal() {
    this.modalController.dismiss();
  }
}
