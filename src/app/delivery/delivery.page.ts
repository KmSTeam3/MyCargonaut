import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {ModalDeliveryPage} from "../modal-delivery/modal-delivery.page";
import {Test} from "tslint";
import { VehicleService } from './../shared/vehicle.service';
import { User } from './../shared/user';
import { Vehicle } from './../shared/vehicle';
import { AuthService } from './../shared/auth.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.page.html',
  styleUrls: ['./delivery.page.scss'],
})
export class DeliveryPage implements OnInit {

    holderId: string;
    setUserId(){
        this.authService.checkAuthState().subscribe( (user) => {
          //  this.renderList( user.uid);
            this.holderId = user.uid;
        });
    }

  dataReturned: any;

  constructor(public modalController: ModalController,private authService: AuthService) { }

  async openModal(){
    const modal = await this.modalController.create({
      component: ModalDeliveryPage,
    });

 modal.onDidDismiss().then((dataReturned) =>{
 if(dataReturned !== null){
   this.dataReturned = dataReturned.data;
 }
  });

    return await modal.present();


}
ngOnInit(): void {
    this.setUserId();
}

}
