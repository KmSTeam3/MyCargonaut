import { VehicleService } from './../../shared/vehicle.service';
import { Vehicle } from './../../shared/vehicle';
import { ModalController, ToastController } from '@ionic/angular';
import { Component, OnInit, Input, Output } from '@angular/core';
import { User } from 'src/app/shared/user';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

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
    console.log(this.holderId);
  }

  async presentToast(msg: string){
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  saveModal(){
    //this.holderId = "zllP1FQQQoMnlSL0Memkcy0PkPo2";

    const vehicle: Vehicle = new Vehicle(this.licensePlate, this.name, this.holderId, this.load, this.maxLoad, this.volume, this.seats, this.maxSeats);
    console.log(vehicle);
    if (this.licensePlate && this.name && this.holderId && this.load && this.maxLoad && this.volume && this.seats && this.maxSeats){
      this.vehicleService.persist(this.licensePlate, this.name, this.holderId, this.load, this.maxLoad, this.volume, this.seats, this.maxSeats);
      this.presentToast('Fahrzeug erstellt!');
      this.modal.dismiss();
    }else{
      this.presentToast('Es müssen alle Felder ausgefüllt werden.');
    }
  }

  dismissModal(){
    this.modal.dismiss();
  }

}
