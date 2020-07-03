import { VehicleService } from './../../shared/vehicle.service';

import {Component, OnInit} from '@angular/core';
import {
    ModalController,
    NavParams,
    ToastController,
} from '@ionic/angular';
import {AuthService} from '../../shared/auth.service';
import {enumStatus, Shipment} from '../../shared/shipment';
import {Person} from '../../shared/person';
import {Article} from '../../shared/article';
import {ShipmentService} from '../../shared/shipment.service';
import {UserService} from '../../shared/user.service';
import { Vehicle } from 'src/app/shared/vehicle';


@Component({
    selector: 'app-modal-delivery',
    templateUrl: './modal-delivery.page.html',
    styleUrls: ['./modal-delivery.page.scss'],
})
/**
 * Modal page for adding new shipment
 */
export class ModalDeliveryPage implements OnInit {



    constructor(
        private modalController: ModalController,
        private navParams: NavParams,
        private toastController: ToastController,
        private authService: AuthService,
        private shipmentService: ShipmentService,
        private userService: UserService,
        private vehicleService: VehicleService
    ) {
    }

    id: string;
    start: string;
    goal: string;
    date: Date;
    startTime: string;
    status: enumStatus;
    length: number;
    height: number;
    weight: number;
    pricePerKg: number;
    seat: number;
    pricePerSeat: number;
    cargonaut: string;
    vehicles: Vehicle[];
    passengerList: Person[];
    articleList: Article[];

    selectedVehicle: Vehicle;

    currentID: string;

    modalTitle: string;
    modelId: number;


    setUserId() {
        this.authService.checkAuthState().subscribe( (user) => {
            //  this.renderList( user.uid);
            if (user){
                this.currentID = user.uid;
                console.log('Eingeloggt als: ' + this.currentID);
                this.cargonaut = this.currentID;
                this.getVehicles(this.currentID);
            }
        });
    }

    ngOnInit() {
        /*  console.table(this.navParams);
          this.modelId = this.navParams.data.paramID;
          this.modalTitle = this.navParams.data.paramTitle; */
        this.setUserId();

        console.log('Aktuell eingeloggt als:' + this.cargonaut);
    }


    /**
     * Will fetch all available vehicles registered by current User
     * @param uId User ID from logged in User.
     */
    getVehicles(uId: string){
        this.vehicles = [];
        this.vehicleService.findAll(uId).subscribe( (vehiclesList) => {
            this.vehicles = vehiclesList;
        });
    }

    getSelectValue(event){
        this.vehicles.forEach( vehicle => {
            if ( event.detail.value === vehicle.licensePlate) {
                this.selectedVehicle = vehicle;
                //console.log( 'vehicle: ' + this.selectedVehicle);
            }
        });
    }

    async presentToast(msg: string) {
        const toast = await this.toastController.create({
            message: msg,
            duration: 2000
        });
        toast.present();
    }

    /**
     * Function to collect modal form values and generate new shipment through call of shipment.service persist method
     */
    saveModal() {
        if ( this.selectedVehicle === undefined || null || '') {
            this.presentToast('Please select a Vehicle.');
        }else{
        const shipment: Shipment = new Shipment(this.cargonaut, this.selectedVehicle, this.passengerList, this.articleList, this.start, this.goal, this.date, this.startTime, this.length, this.height, this.weight, this.pricePerKg, this.seat, this.pricePerSeat);
        console.log(shipment);
        if (this.start && this.goal && this.date && this.length && this.height && this.weight && this.pricePerKg && this.seat && this.pricePerSeat && this.cargonaut) {

            this.shipmentService.persist(this.cargonaut, this.selectedVehicle, this.passengerList, this.articleList, this.start, this.goal, this.date, this.startTime, this.length, this.height, this.weight, this.pricePerKg, this.seat, this.pricePerSeat, 0);
            this.closeModal();
            this.presentToast('added Delivery');
        } else {
            this.presentToast('fuck');
        }

        }
    }

    /**
     * Method to close the modal for adding new shipment
     */
    async closeModal() {
        const onClosedData = 'Wrapped Up!';
        await this.modalController.dismiss(onClosedData);
    }

}
