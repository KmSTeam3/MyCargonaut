import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Shipment} from '../shared/shipment';
import {ShipmentService} from '../shared/shipment.service';
import {NavigationExtras, Router} from '@angular/router';
import {AngularFirestore, AngularFirestoreCollection, DocumentChangeAction} from '@angular/fire/firestore';
import {Person} from '../shared/person';
import {AuthService} from '../shared/auth.service';
import {Subscription} from 'rxjs';
import {UserService} from '../shared/user.service';
import {ToastController} from '@ionic/angular';

@Component({
    selector: 'app-route-search',
    templateUrl: './route-search.page.html',
    styleUrls: ['./route-search.page.scss'],
})
/**
 * Route search page which lets users search for shipments with available seats
 * matching given search criteria where they can travel with
 *
 * Criteria:
 * - How many seats are needed
 * - Start address
 * - Destination address
 * - On which date the shipment start
 */
export class RouteSearchPage implements OnInit {

    validationsForm: FormGroup;
    errorMessage = '';
    successMessage = '';

    shipmentList: Shipment[] = [];


    VALIDATION_MESSAGES = {
        postalCode: [
            {type: 'required', message: 'Postleitzahl ist erforderlich.'},
            {type: 'minlength', message: 'Postleitzahl muss mindestens 5 Zahlen enthalten'}
        ],
        datum: [
            {type: 'required', message: 'Datum ist erforderlich.'},
        ]
    };
    shipment: Shipment;
    passenger: Person;
    subscription: Subscription;


    constructor(private toastController: ToastController, private firestore: AngularFirestore, private formBuilder: FormBuilder, private router: Router, private shipmentService: ShipmentService, private authService: AuthService, private userService: UserService) {
        this.subscription = this.authService.checkAuthState().subscribe((value) => {
            if (value) {
                this.userService.getUser(value.uid).subscribe( (user) => {
                    if (user) {
                        this.passenger = new Person(1, user);
                    }
                });
            }
        });
    }


    ngOnInit() {
        // Initiation of the form fields value variables
        this.validationsForm = this.formBuilder.group({
            postalcode: new FormControl('', Validators.compose([
                Validators.minLength(5),
                Validators.required
            ])),
            seats: new FormControl(''),
            startAddress: new FormControl(''),
            toAddress: new FormControl(''),
            date: new FormControl('')
        });
    }

    // Search method
    search(value) {
        if (this.passenger != null){
            console.log('search called');
            console.log('Seats ' + value.seats + ' StartAddress ' + value.startAddress + ' toAddress ' + value.toAddress + ' Date ' + value.date);
            this.shipmentService.searchRoute(+value.seats, value.startAddress, value.toAddress, value.date).forEach(shipment => {
                this.shipmentList = shipment;
                const navigationExtras: NavigationExtras = {state: {shipmentList: this.shipmentList, passenger: this.passenger} };
                this.router.navigate(['search-result'], navigationExtras);
                console.log(shipment);
            });

            this.shipmentService.testAll().forEach(shipment => {
                console.log(shipment);
            });
        } else {
            this.presentToast('Sie müssen eingeloggt sein um Routen zu suchen');
        }

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

    query(value) {
        this.shipmentService.searchRoute(value.seats, value.startAddress, value.toAddress, value.date).forEach(shipment => {
            this.shipmentList = shipment;
            console.log(shipment);
        });
    }

    // navigation method to the login page
    navigateToLogin() {
        this.router.navigate(['/login']);
    }

    // navigation method to register page
    navigateToRegister() {
        this.router.navigate(['/register']);
    }

    // navigation method to the home page
    navigateToHome() {
        this.router.navigate(['/home']);
    }

}
