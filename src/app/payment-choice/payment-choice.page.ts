import {Component, Input, OnInit} from '@angular/core';
import {Shipment} from '../shared/shipment';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastController} from '@ionic/angular';
import {ShipmentService} from "../shared/shipment.service";

@Component({
    selector: 'app-payment-choice',
    templateUrl: './payment-choice.page.html',
    styleUrls: ['./payment-choice.page.scss'],
})
export class PaymentChoicePage implements OnInit {

    @Input() shipment: Shipment;
    currentPaymentChoice: number;

    constructor(private router: Router, private toastController: ToastController, private route: ActivatedRoute, private shipmentService: ShipmentService) {
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                console.log(params);
                console.log(this.router.getCurrentNavigation().extras.state.shipmentList);
                this.shipment = this.router.getCurrentNavigation().extras.state.shipmentList;
                console.log(this.shipment);
            }
        });
    }

    ngOnInit() {
    }


    setPaymentChoice(event) {
        this.currentPaymentChoice = event.detail.value;
        switch (event.detail.value) {
            case '0':
                this.presentToast('Sie bezahlen mit Vorkasse');
                break;
            case '1':
                this.presentToast('Sie bezahlen mit PayPal');
                break;
            case '2':
                this.presentToast('Sie bezahlen Bar');
                break;

        }
        console.log('radioGroupChange', this.currentPaymentChoice);
    }

    async presentToast(msg: string) {
        const toast = await this.toastController.create({
            message: msg,
            duration: 2000
        });
        toast.present();
    }


    pay(){
        this.shipmentService.update(this.shipment.cargonaut, this.shipment.vehicle, this.shipment.passengerList, this.shipment.articleList, this.shipment.start, this.shipment.goal, this.shipment.date, this.shipment.startTime, this.shipment.length, this.shipment.height, this.shipment.weight, this.shipment.pricePerKg, this.shipment.seat, this.shipment.pricePerSeat, this.currentPaymentChoice, this.shipment.id);

    }


    navigateToSearchResult() {
        this.router.navigate(['/search-result']);
    }

    navigateToLogin() {
        this.router.navigate(['/login']);
    }

    navigateToRegister() {
        this.router.navigate(['/register']);
    }

    navigateToMangeVehicle() {
        this.router.navigate(['/manage-vehicle']);
    }

    navigateToRouteSearch() {
        this.router.navigate(['/route-search']);
    }

    navigateToTransportSearch() {
        this.router.navigate(['/transport-search']);
    }

    navigateToProfile() {
        this.router.navigate(['/profile']);
    }

    navigateToHome() {
        this.router.navigate(['/home']);
    }

    navigateToImpressum(){
        this.router.navigate(['/impressum']);
    }

    navigateToDelivery() {
        this.router.navigate(['/delivery']);
    }
}
