import { VehicleService } from './../../shared/vehicle.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { Vehicle } from 'src/app/shared/vehicle';

@Component({
  selector: 'app-edit-vehicle',
  templateUrl: './edit-vehicle.page.html',
  styleUrls: ['./edit-vehicle.page.scss'],
})
export class EditVehiclePage {

  vehicle: Vehicle;

  constructor(public modalController: ModalController, private vehicleService: VehicleService) {}

  async presentModal() {
    this.getVehicle('GI:II:123');
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: {
        licensePlate: this.vehicleService
      }
    });
    return await modal.present();
  }

  getVehicle(licensePlate: string){
    console.log(this.vehicleService.getVehicle(licensePlate));
  }


  dismissModal() {
    this.modalController.dismiss();
  }
}
