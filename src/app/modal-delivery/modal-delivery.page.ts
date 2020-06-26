import {Component, OnInit} from '@angular/core';
import {
    ModalController,
    NavParams,
    ToastController,
} from '@ionic/angular';
import {DeliveryService} from "../shared/delivery.service";
import {Delivery} from "../shared/delivery";


@Component({
    selector: 'app-modal-delivery',
    templateUrl: './modal-delivery.page.html',
    styleUrls: ['./modal-delivery.page.scss'],
})
export class ModalDeliveryPage implements OnInit {
    from: string;
    too: string;
    vehicle: string;
    date: Date;
    length: number;
    height: number;
    weight: number;
    priceperkg: number;
    seats: number;
    priceperseat: number;


    modalTitle: string;
    modelId: number;

    constructor(
        private modalController: ModalController,
        private navParams: NavParams,
        private toastController: ToastController,
        private deliverService: DeliveryService,
    ) {
    }

    ngOnInit() {
        /*  console.table(this.navParams);
          this.modelId = this.navParams.data.paramID;
          this.modalTitle = this.navParams.data.paramTitle; */
    }

    async presentToast(msg: string) {
        const toast = await this.toastController.create({
            message: msg,
            duration: 2000
        });
        toast.present();
    }

    saveModal() {
        const delivery: Delivery = new Delivery(this.from, this.too, this.date, this.length, this.height, this.weight, this.priceperkg,this.seats, this.priceperseat);
        console.log(delivery);
        if (this.from&& this.too&& this.date&& this.length&& this.height&& this.weight&& this.priceperkg&& this.seats&& this.priceperseat){
            this.presentToast('added Delivery');
            this.deliverService.persist(this.from, this.too, this.date, this.length, this.height, this.weight, this.priceperkg,this.seats, this.priceperseat);

        }else {
            this.presentToast('fuck');
        }


    }

    async closeModal() {
        const onClosedData: string = "Wrapped Up!";
        await this.modalController.dismiss(onClosedData);
    }

}
