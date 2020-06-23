import { Vehicle } from './../../shared/vehicle';
import { ModalController } from '@ionic/angular';
import { Component, OnInit, Input, Output } from '@angular/core';
import { User } from 'src/app/shared/user';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

   name: string;
   holder: User;
   load: number;
   maxLoad: number;
   volume: number;
   seats: number;
   maxSeats: number;

  constructor(public modal: ModalController) { }

  ngOnInit() {
  }

  saveModal(){
    const testuser: User = new User("123456789", "Herr", "Test", "Tester", "teststraße", 3, 12345, "tcity", "test@test.de");
    const vehicle: Vehicle = new Vehicle(this.name, testuser, this.load, this.maxLoad, this.volume, this.seats, this.maxSeats);

    console.log(vehicle);
    this.modal.dismiss();
  }

  dismissModal(){
    this.modal.dismiss();
  }

}
