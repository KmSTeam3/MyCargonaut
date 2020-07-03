import {Component, Input, OnInit} from '@angular/core';
import {ModalDeliveryEditPage} from "../modal-delivery-edit/modal-delivery-edit.page";
import {ModalController} from "@ionic/angular";
import {ToastController} from "@ionic/angular";
import {AuthService} from '../../shared/auth.service';
import {Router} from '@angular/router';
import {ShipmentService} from '../../shared/shipment.service';
import {Shipment, shipStatus} from '../../shared/shipment';


@Component({
    selector: 'app-delivery-list',
    templateUrl: './delivery-list.page.html',
    styleUrls: ['./delivery-list.page.scss'],
})
/**
 * Delivery List, are the generated cards that are generated in deliver.html. It allows the user to update
 * all aspects of shipments as well as deleting shipments
 * */
export class DeliveryListPage implements OnInit {

    @Input() shipId: string;
    @Input() shipment: Shipment;

    constructor(public modalController: ModalController, private authService: AuthService, private router: Router, private shipmentService: ShipmentService,private toastController: ToastController,) {
    }

    holderId: string;
    dataReturned: any;
    status: shipStatus;

    setUserId() {
        this.authService.checkAuthState().subscribe((user) => {
            //  this.renderList( user.uid);
            if (user) {
                this.holderId = user.uid;
                this.shipmentService.getShipments(user.uid).forEach(shipment => {
                    //   this.shipmentList = shipment;
                    console.log(this.holderId);
                    console.log(shipment);
                });
                console.log('Not modal' + this.holderId);
            }
        });
    }

    getShipment(shipId: string) {
        this.shipmentService.getShipment(shipId).subscribe(data => {
            //console.log( data);
            this.shipment = data;
        });
    }

    /**
     * Modal page for updating all aspects of the shipment, except for the shipment status.
     *  * Calls modal-delivery-edit and injects input field with values of selected shipment.
     * **/
    async openEditModal(shipId) {
        const modal = await this.modalController.create({
            component: ModalDeliveryEditPage,
            componentProps: {
                start: this.shipment.start,
                goal: this.shipment.goal,
                date: this.shipment.date,
                length: this.shipment.length,
                height: this.shipment.height,
                weight: this.shipment.weight,
                pricePerKg: this.shipment.pricePerKg,
                seat: this.shipment.seat,
                pricePerSeat: this.shipment.pricePerSeat,
                cargonaut: this.shipment.cargonaut,
                vehicle: this.shipment.vehicle,
                id: shipId,
            }
        });

        modal.onDidDismiss().then((dataReturned) => {
            if (dataReturned !== null) {
                this.dataReturned = dataReturned.data;
            }
        });
        return await modal.present();
    }

    /**
     * Activated through delete btn. Deletes shipment through the shpimentService.delete() function
     * **/

    delete(shipId) {
        this.shipmentService.delete(shipId);
        this.presentToast('successfully deleted shippment');
    }


    /**
     * gets activated when a selection is made. Updates the shipStatus through shipmentService.update() function
     * **/
    async onChange($event, shipmentId) {

        this.shipmentService.update(this.shipment.cargonaut, this.shipment.vehicle, this.shipment.passengerList,
            this.shipment.articleList, this.shipment.start, this.shipment.goal, this.shipment.date, this.shipment.startTime,
            this.shipment.length, this.shipment.height, this.shipment.weight, this.shipment.pricePerKg, this.shipment.seat,
            this.shipment.pricePerSeat, this.shipment.status, $event.target.value, this.shipment.id);

    }

    async presentToast(msg: string) {
        const toast = await this.toastController.create({
            message: msg,
            duration: 2000
        });
        toast.present();
    }


    ngOnInit() {
        this.setUserId();
        this.getShipment(this.shipId);
    }
}
