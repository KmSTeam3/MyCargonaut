import {Component, Input, OnInit} from '@angular/core';
import {Shipment} from '../shared/shipment';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastController} from '@ionic/angular';
import {ShipmentService} from '../shared/shipment.service';

@Component({
    selector: 'app-payment-choice',
    templateUrl: './payment-choice.page.html',
    styleUrls: ['./payment-choice.page.scss'],
})
/**
 * Payment choice page shows the three supported payment methods and navigates to payment
 */
export class PaymentChoicePage implements OnInit {

    @Input() shipment: Shipment;
    currentPaymentChoice: number;

    constructor(private router: Router, private toastController: ToastController, private route: ActivatedRoute, private shipmentService: ShipmentService) {
       // method call collects passed data (shipment object) from previous page
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

    /**
     * Method which is called when one of the radio buttons is selected
     * Updates value for currently selected radio button
     * @param event contains value of selected radio button
     */
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

    /**
     * Method for presenting a toast
     * @param msg message that is displayed in the toast
     */
    async presentToast(msg: string) {
        const toast = await this.toastController.create({
            message: msg,
            duration: 2000
        });
        toast.present();
    }

    /**
     * Payment method that updates the payment status of the shipment and continues with the selected choice or directs to the success page
     */
    pay(){
        this.shipmentService.update(this.shipment.cargonaut, this.shipment.vehicle, this.shipment.passengerList, this.shipment.articleList, this.shipment.start, this.shipment.goal, this.shipment.date, this.shipment.startTime, this.shipment.length, this.shipment.height, this.shipment.weight, this.shipment.pricePerKg, this.shipment.seat, this.shipment.pricePerSeat, this.currentPaymentChoice, this.shipment.id);

    }


    // navigation method to the login page
    navigateToLogin() {
        this.router.navigate(['/login']);
    }

    // navigation method to the register page
    navigateToRegister() {
        this.router.navigate(['/register']);
    }


}
