import {Component, Input, OnInit} from '@angular/core';
import {ModalDeliveryEditPage} from "./../modal-delivery-edit/modal-delivery-edit.page";
import {ModalController} from "@ionic/angular";
import {AuthService} from './../../shared/auth.service';
import {Router} from '@angular/router';
import {ShipmentService} from './../../shared/shipment.service';
import {Shipment} from '../../shared/shipment';


@Component({
    selector: 'app-delivery-list',
    templateUrl: './delivery-list.page.html',
    styleUrls: ['./delivery-list.page.scss'],
})
export class DeliveryListPage implements OnInit {

    @Input() shipId: string;
    @Input() shipment: Shipment;

    constructor(public modalController: ModalController, private authService: AuthService, private router: Router, private shipmentService: ShipmentService) {
    }

    holderId: string;
    // shipId: string= this.shipment.id;
    dataReturned: any;

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

    async openEditModal(shipId) {
        alert(shipId);
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

    ngOnInit() {
        this.setUserId();
        this.getShipment(this.shipId);

    }

}
