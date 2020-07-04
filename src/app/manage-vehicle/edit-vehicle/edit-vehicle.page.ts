import { VehicleService } from './../../shared/vehicle.service';
import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { Vehicle } from 'src/app/shared/vehicle';
import { EModalPage } from '../e-modal/e-modal.page';

@Component({
  selector: 'app-edit-vehicle',
  templateUrl: './edit-vehicle.page.html',
  styleUrls: ['./edit-vehicle.page.scss'],
})
export class EditVehiclePage implements OnInit {

  @Input() id: string;
  @Input() uId: string;
  vehicle: Vehicle;

  constructor(public modalController: ModalController, private vehicleService: VehicleService) {
  }

  ngOnInit() {
    this.getVehicle(this.id, this.uId);
  }

  /**
   * Open Modal and pass Parameter to e-Modal Page
   */
  async presentModal() {
    console.log( this.vehicle) ;
    const modal = await this.modalController.create({
      component: EModalPage,
      componentProps: {
        licensePlate: this.vehicle.licensePlate,
        name: this.vehicle.name,
        load: this.vehicle.load,
        maxLoad: this.vehicle.maxLoad,
        seats: this.vehicle.seats,
        maxSeats: this.vehicle.maxSeats,
        volume: this.vehicle.volume,
        holderId: this.uId
      }
    });
    return await modal.present();
  }

  /**
   * Get selected Vehicle of Current User
   * Set Current Vehicle from Database
   * @param licensePlate Vehicle ID
   * @param id User ID
   */

  getVehicle(licensePlate: string, id: string){
     this.vehicleService.getVehicle(licensePlate, id).subscribe(data => {
      //console.log( data);
      this.vehicle = data;
    });
  }

  /**
   * Close Modal
   */
  dismissModal() {
    this.modalController.dismiss();
  }
}
