import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Shipment} from '../shared/shipment';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {ToastController} from '@ionic/angular';
import {ShipmentService} from '../shared/shipment.service';
import {Person} from '../shared/person';
import {Subscription} from 'rxjs';
import {AuthService} from '../shared/auth.service';
import {UserService} from '../shared/user.service';
import {Article} from '../shared/article';
import {User} from '../shared/user';

@Component({
    selector: 'app-payment-choice',
    templateUrl: './payment-choice.page.html',
    styleUrls: ['./payment-choice.page.scss'],
})
/**
 * Payment choice page shows the three supported payment methods and navigates to payment
 */
export class PaymentChoicePage implements OnInit, OnDestroy {

    @Input() shipment: Shipment;
    currentPaymentChoice: number;
    passenger: Person;
    article: Article;
    routeSearch: boolean;
    user: User;
    subscription: Subscription;
    subscription2: Subscription;

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
                    this.routeSearch = true;
                }
                console.log('Routing worked' + this.shipment);
            }
        });
    }

    ngOnInit() {
        this.subscription = this.authService.checkAuthState().subscribe((value) => {
            if (value) {
                this.subscription2 = this.userService.getUser(value.uid).subscribe( (user) => {
                    if (user) {
                        this.user = user;
                        if (!this.user.bookings){
                            this.user.bookings = [];
                        }
                        if (this.routeSearch){
                            this.passenger = new Person(1, user);
                        }
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
    pay() {
        if (this.passenger != null){
            this.shipment.passengerList.push(this.passenger);
            if (this.article != null){this.shipment.articleList.push(this.article); }
            this.shipmentService.update(this.shipment.cargonaut, this.shipment.vehicle, this.shipment.passengerList, this.shipment.articleList, this.shipment.start, this.shipment.goal, this.shipment.date, this.shipment.startTime, this.shipment.length, this.shipment.height, this.shipment.weight, this.shipment.pricePerKg, this.shipment.seat, this.shipment.pricePerSeat, this.currentPaymentChoice, this.shipment.shipSatus, this.shipment.id);
            this.user.bookings.push(this.shipment);
            this.userService.update(this.user);
            const navigationExtras: NavigationExtras = {state: {shipment: this.shipment}};
            this.router.navigate(['/payment-success'], navigationExtras);
        } else {
            this.presentToast('Sie müssen eingeloggt sein um Routen zu buchen');
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

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
        this.subscription2.unsubscribe();
    }
}
