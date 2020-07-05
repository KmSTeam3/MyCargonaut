import {Component, Input, OnInit} from '@angular/core';
import {
    ModalController,
    NavParams,
    ToastController,
} from '@ionic/angular';
import {AuthService} from '../../shared/auth.service';
import {enumStatus, Shipment, shipStatus} from '../../shared/shipment';
import {Vehicle} from '../../shared/vehicle';
import {Person} from '../../shared/person';
import {Article} from '../../shared/article';
import {ShipmentService} from '../../shared/shipment.service';
import {UserService} from '../../shared/user.service';
import {DeliveryListPage} from "../delivery-list/delivery-list.page";
import {EModalPage} from "../../manage-vehicle/e-modal/e-modal.page";
import {VehicleService} from "../../shared/vehicle.service";


@Component({
    selector: 'app-modal-delivery-edit',
    templateUrl: './modal-delivery-edit.page.html',
    styleUrls: ['./modal-delivery-edit.page.scss'],
})
/** Modal page for adding new shipment **/
export class ModalDeliveryEditPage implements OnInit {

    @Input() shipmentId: string;
    shipment: Shipment;

    constructor(
        private modalController: ModalController,
        private navParams: NavParams,
        private toastController: ToastController,
        private authService: AuthService,
        private shipmentService: ShipmentService,
        private userService: UserService,
        private vehicleService: VehicleService,
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
    shipStatus: shipStatus;
    selectedVehicle: Vehicle;
    currentID: string;

    modalTitle: string;
    modelId: number;

    /** gets ID of current logged in user by checking the session through authService **/
    setUserId() {
        this.authService.checkAuthState().subscribe((user) => {
            //  this.renderList( user.uid);
            if (user) {
                this.currentID = user.uid;
                console.log('Eingeloggt als: ' + this.currentID);
                this.cargonaut = this.currentID;
                this.getVehicles(this.currentID);
            }
        });
    }

    ngOnInit() {
        this.setUserId();
    }

    /** Prepares Vehicles to be injected into ion select html element **/
    getVehicles(uId: string) {
        this.vehicles = [];
        this.vehicleService.findAll(uId).subscribe((vehiclesList) => {
            this.vehicles = vehiclesList;
        });
    }

    compareFn(e1: Vehicle, e2: Vehicle): boolean {
        return e1 && e2 ? e1.licensePlate === e2.licensePlate : e1 === e2;
    }

    /** Called on when vehicle selection is made in html and preps new selection to be added to updateModal()**/
    getSelectValue(event) {
        this.vehicles.forEach(vehicle => {
            if (event.detail.value === vehicle.licensePlate) {
                this.selectedVehicle = vehicle;
                //console.log( 'vehicle: ' + this.selectedVehicle);
            }
        });
    }

    /** Handels the toast message duration and appearance **/
    async presentToast(msg: string) {
        const toast = await this.toastController.create({
            message: msg,
            duration: 2000
        });
        toast.present();
    }

    /**
     * Function to collect modal form values and update existing shipment through call of shipment.service update method
     */
    updateModal() {

        if (this.start && this.goal && this.date && this.length && this.height && this.weight && this.pricePerKg && this.seat && this.pricePerSeat && this.cargonaut && this.selectedVehicle) {
            this.shipmentService.update(this.cargonaut, this.selectedVehicle, this.passengerList, this.articleList,
                this.start, this.goal, this.date, this.startTime, this.length, this.height,
                this.weight, this.pricePerKg, this.seat, this.pricePerSeat, this.status, this.shipStatus, this.id);

            this.closeModal();
            this.presentToast('updated Delivery');
        } else {
            this.presentToast('all Fields must be added');
        }


    }

    getShipment(shipId: string) {
        this.shipmentService.getShipment(shipId).subscribe(data => {
            this.shipment = data;
        });
    }

    /**
     * Method to close the modal for adding new shipment
     */
    async closeModal() {
        const onClosedData = 'Wrapped Up!';
        await this.modalController.dismiss(onClosedData);
    }

}
