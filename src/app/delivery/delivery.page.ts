import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {ModalDeliveryPage} from "../modal-delivery/modal-delivery.page";


@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.page.html',
  styleUrls: ['./delivery.page.scss'],
})
export class DeliveryPage implements OnInit {

  constructor(private modal: ModalController) { }

  async showModal(){
   /* const modal = await this.modalCtrl({
      //component: SettingsComponent
    })  */
  }

  openModal(){
   // this.modal.create(ModalDeliveryPage)
  }

  ngOnInit() {
  }

}
