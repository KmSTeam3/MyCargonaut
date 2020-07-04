import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { VehicleService } from 'src/app/shared/vehicle.service';
import { Vehicle } from 'src/app/shared/vehicle';

@Component({
  selector: 'app-e-modal',
  templateUrl: './e-modal.page.html',
  styleUrls: ['./e-modal.page.scss'],
})
export class EModalPage implements OnInit {

  licensePlate: string;
   name: string;
   holderId: string;
   load: number;
   maxLoad: number;
   volume: number;
   seats: number;
   maxSeats: number;

  constructor(public modal: ModalController, private vehicleService: VehicleService, private toastController: ToastController) { }

  ngOnInit() {
  }

  /**
   * Popup a Toast at page bottom
   * @param msg Message to be displayed.
   */
  async presentToast(msg: string){
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  /**
   * Send changed Data to vehicleService to be set in Database
   */
  saveModal(){
    //this.holderId = "zllP1FQQQoMnlSL0Memkcy0PkPo2";

    const vehicle: Vehicle = new Vehicle(this.licensePlate, this.name, this.holderId, this.load, this.maxLoad, this.volume, this.seats, this.maxSeats);
    console.log(vehicle);
    if (this.licensePlate && this.name && this.holderId && this.load && this.maxLoad && this.volume && this.seats && this.maxSeats){
      this.vehicleService.update(vehicle);
      this.presentToast('Fahrzeug editiert!');
      this.modal.dismiss();
    }else{
      this.presentToast('Es müssen alle Felder ausgefüllt werden.');
    }
  }

  /**
   * Close Modal
   */
  dismissModal(){
    this.modal.dismiss();
  }

}
