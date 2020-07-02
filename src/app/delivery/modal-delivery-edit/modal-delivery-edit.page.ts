import {Component, Input, OnInit} from '@angular/core';
import {
  ModalController,
  NavParams,
  ToastController,
} from '@ionic/angular';
import {AuthService} from '../../shared/auth.service';
import {enumStatus, Shipment} from '../../shared/shipment';
import {Vehicle} from '../../shared/vehicle';
import {Person} from '../../shared/person';
import {Article} from '../../shared/article';
import {ShipmentService} from '../../shared/shipment.service';
import {UserService} from '../../shared/user.service';
import {DeliveryListPage} from "../delivery-list/delivery-list.page";
import {EModalPage} from "../../manage-vehicle/e-modal/e-modal.page";


@Component({
  selector: 'app-modal-delivery-edit',
  templateUrl: './modal-delivery-edit.page.html',
  styleUrls: ['./modal-delivery-edit.page.scss'],
})
/**
 * Modal page for adding new shipment
 */
export class ModalDeliveryEditPage implements OnInit {

@Input() shipmentId :string;
shipment: Shipment;

  constructor(
      private modalController: ModalController,
      private navParams: NavParams,
      private toastController: ToastController,
      private authService: AuthService,
      private shipmentService: ShipmentService,
      private userService: UserService,
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
  vehicle: Vehicle;
  passengerList: Person[];
  articleList: Article[];




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
      }
    });
  }

  ngOnInit() {

    this.setUserId();
    this.getShipment(this.shipmentId);

    console.log('Aktuell eingeloggt als:' + this.cargonaut);
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
  updateModal() {

    if (this.start && this.goal && this.date && this.length && this.height && this.weight && this.pricePerKg && this.seat && this.pricePerSeat && this.cargonaut) {
      console.log("test")
      this.shipmentService.update(this.cargonaut, this.vehicle, this.passengerList, this.articleList,
          this.start, this.goal, this.date, this.startTime, this.length, this.height,
          this.weight, this.pricePerKg, this.seat, this.pricePerSeat,this.status, this.id );

      alert(this.start)

      this.closeModal();
      this.presentToast('updated Delivery');
    } else {
      this.presentToast('all Fields must be added');
    }


  }

  getShipment( shipId: string){
    this.shipmentService.getShipment(shipId).subscribe(data => {
      //console.log( data);
      this.shipment = data;
    });
  }

  /**
   * Method to close the modal for adding new shipment
   */
  async closeModal() {
    alert('hello');
    const onClosedData = 'Wrapped Up!';
    await this.modalController.dismiss(onClosedData);
  }

}
