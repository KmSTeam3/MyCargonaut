import {Component, Input, OnInit} from '@angular/core';
import {enumStatus, Shipment} from '../shared/shipment';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {ToastController} from '@ionic/angular';
import {ShipmentService} from '../shared/shipment.service';
import {Person} from '../shared/person';
import {Subscription} from 'rxjs';
import {AuthService} from '../shared/auth.service';
import {UserService} from '../shared/user.service';
import {Article} from '../shared/article';

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
    currentPaymentChoice: enumStatus;
    passengerList: Person[] = [];
    articleList: Article[] = [];
    loginState: boolean;
    passenger: Person;
    article: Article;
    routeSearch: boolean;
    subscription: Subscription;

    constructor(private userService: UserService, private authService: AuthService, private router: Router, private toastController: ToastController, private route: ActivatedRoute, private shipmentService: ShipmentService) {
        // method call collects passed data (shipment object) from previous page
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                console.log(params);
                console.log(this.router.getCurrentNavigation().extras.state.shipment);
                this.shipment = this.router.getCurrentNavigation().extras.state.shipment;
                if (this.router.getCurrentNavigation().extras.state.article != null){
                    this.article = this.router.getCurrentNavigation().extras.state.article;
                }
                if (this.router.getCurrentNavigation().extras.state.routeSearch != null){
                    console.log('Payment Choice from route search' + this.router.getCurrentNavigation().extras.state.routeSearch);
                    this.routeSearch = true;
                }
                console.log('Routing worked' + this.shipment);
            }
        });
    }

    ngOnInit() {
        this.subscription = this.authService.checkAuthState().subscribe((value) => {
            if (value) {
                this.loginState = true;
                this.userService.getUser(value.uid).subscribe( (user) => {
                    if (user) {
                            this.passenger = {amount: 1, client: user};
                    }
                });
            }
        });
    }

    /**
     * Method which is called when one of the radio buttons is selected
     * Updates value for currently selected radio button
     * @param event contains value of selected radio button
     */
    setPaymentChoice(event) {
        switch (event.detail.value) {
            case '0':
                this.currentPaymentChoice = enumStatus.BAR;
                this.presentToast('Sie bezahlen mit Vorkasse');
                break;
            case '1':
                this.currentPaymentChoice = enumStatus.PAYPAL;
                this.presentToast('Sie bezahlen mit PayPal');
                break;
            case '2':
                this.currentPaymentChoice = enumStatus.VORKASSE;
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
     pay() {
        if (this.loginState){
            if (this.shipment.passengerList == null){
                this.passengerList.push(this.passenger);
                this.shipment.passengerList = this.passengerList;
            } else {
                this.shipment.passengerList.push(this.passenger);
            }

            if (this.article != null){
                if (this.shipment.articleList == null){
                    this.articleList.push(this.article);
                    this.shipment.articleList = this.articleList;
                } else {
                    this.shipment.articleList.push(this.article);
                }

            }
            console.log(this.shipment);
            this.shipmentService.update(
                this.shipment.cargonaut,
                this.shipment.vehicle,
                this.shipment.passengerList,
                this.shipment.articleList,
                this.shipment.start,
                this.shipment.goal,
                this.shipment.date,
                this.shipment.startTime,
                this.shipment.length,
                this.shipment.height,
                this.shipment.weight,
                this.shipment.pricePerKg,
                this.shipment.seat,
                this.shipment.pricePerSeat,
                this.currentPaymentChoice,
                this.shipment.shipSatus,
                this.shipment.id);
            const navigationExtras: NavigationExtras = {state: {shipment: this.shipment}};
            this.router.navigate(['/payment-success'], navigationExtras);
        } else {
            this.presentToast('Sie müssen eingeloggt sein um Routen zu buchen');
            console.log('test');
        }
    }


    // navigation method to the login page
    navigateToLogin() {
        this.router.navigate(['/login']);
    }

    // navigation method to the register page
    navigateToRegister() {
        this.router.navigate(['/register']);
    }

    // navigation method to the home page
    navigateToHome() {
        this.router.navigate(['/home']);
    }
}
