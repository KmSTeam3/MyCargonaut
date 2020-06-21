import { ModalPage } from './modal/modal.page';
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.page.html',
  styleUrls: ['./add-vehicle.page.scss'],
})
export class AddVehiclePage {

  constructor(public modalController: ModalController) { }

  async presentModal(){
    const modal = await this.modalController.create({
      component: ModalPage
    });
    return await modal.present();
  }

   dismissModal(){
    this.modalController.dismiss();
  }

}
