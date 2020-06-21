import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {ModalDeliveryPage} from "../modal-delivery/modal-delivery.page";
import {Test} from "tslint";


@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.page.html',
  styleUrls: ['./delivery.page.scss'],
})
export class DeliveryPage implements OnInit {
  dataReturned: any;

  constructor(public modalController: ModalController) { }

  async openModal(){
    const modal = await this.modalController.create({
      component: ModalDeliveryPage,
      componentProps:{
        "paramID": 133,
        "paramTitle": "Test Title"
      }

  });

 modal.onDidDismiss().then((dataReturned) =>{
 if(dataReturned !== null){
   this.dataReturned = dataReturned.data;
 }
  });

    return await modal.present();


}
ngOnInit(): void {
}

}
