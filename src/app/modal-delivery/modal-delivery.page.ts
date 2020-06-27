import {Component, OnInit} from '@angular/core';
import {
    ModalController,
    NavParams,
    ToastController,
} from '@ionic/angular';
import {DeliveryService} from "../shared/delivery.service";
import {Delivery} from "../shared/delivery";
import { AuthService } from './../shared/auth.service';
import {Shipment} from "../shared/shipment";
import {Vehicle} from "../shared/vehicle";
import {Person} from "../shared/person";
import {Article} from "../shared/article";


@Component({
    selector: 'app-modal-delivery',
    templateUrl: './modal-delivery.page.html',
    styleUrls: ['./modal-delivery.page.scss'],
})

export class ModalDeliveryPage implements OnInit {



    cargonaut: string;
    vehicle: Vehicle;
    passengerList: Person[];
    articleList: Article[];
    start: string;
    goal: string;
    date: Date;
    startTime: string;
    length: number;
    height: number;
    weight: number;
    priceperkg: number;
    seat: number;
    priceperSeat: number;



    currentID:string;



    setUserId(){
        this.authService.checkAuthState().subscribe( (user) => {
            //  this.renderList( user.uid);
              this.currentID = user.uid;
              this.cargonaut= this.currentID;
        });
    }

    modalTitle: string;
    modelId: number;

    constructor(
        private modalController: ModalController,
        private navParams: NavParams,
        private toastController: ToastController,
        private deliverService: DeliveryService,
        private authService: AuthService,
    ) {
    }

    ngOnInit() {
        /*  console.table(this.navParams);
          this.modelId = this.navParams.data.paramID;
          this.modalTitle = this.navParams.data.paramTitle; */
        this.setUserId();
    }

    async presentToast(msg: string) {
        const toast = await this.toastController.create({
            message: msg,
            duration: 2000
        });
        toast.present();
    }

    saveModal() {
        const delivery: Shipment = new Shipment(this.start, this.goal, this.date, this.length, this.height, this.weight, this.priceperkg,this.seat, this.priceperSeat,this.cargonaut,this.vehicle,this.passengerList,this.articleList, this.cargonaut,);
        console.log(delivery);
        if (this.start&& this.goal&& this.date&& this.length&& this.height&& this.weight&& this.priceperkg&& this.seat&& this.priceperSeat && this.cargonaut){

            this.deliverService.persist( this.start, this.goal, this.date, this.length, this.height, this.weight, this.priceperkg,this.seat, this.priceperSeat,this.cargonaut,this.vehicle,this.passengerList,this.articleList, this.cargonaut, );

            this.closeModal();
            this.presentToast('added Delivery');
        }else {
            this.presentToast('fuck');
        }


    }

    async closeModal() {
        const onClosedData: string = "Wrapped Up!";
        await this.modalController.dismiss(onClosedData);
    }

}
