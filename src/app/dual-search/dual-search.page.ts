import { SessionService } from './../shared/session.service';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {NavigationExtras, Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Shipment} from '../shared/shipment';
import {AngularFirestore} from '@angular/fire/firestore';
import {ShipmentService} from '../shared/shipment.service';
import {Article} from '../shared/article';
import {Subscription} from "rxjs";
import {AuthService} from "../shared/auth.service";

@Component({
    selector: 'app-dual-search',
    templateUrl: './dual-search.page.html',
    styleUrls: ['./dual-search.page.scss'],
})
export class DualSearchPage implements OnInit, OnDestroy {

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
    pallet: boolean;
    fragile: boolean;
    article: Article;
    shipment: Shipment;
    routeSearch = true;
    user: firebase.User;
    subscription: Subscription;

    constructor(private router: Router, private firestore: AngularFirestore, private formBuilder: FormBuilder, private shipmentService: ShipmentService, private sessionService: SessionService, private authService: AuthService) {
        this.subscription = this.authService.checkAuthState().subscribe(value => {
            if (value){
                this.user = value;
            }
        });
    }

    ngOnInit() {
        this.validationsForm = this.formBuilder.group({
            seats: new FormControl(''),
            startAddress: new FormControl(''),
            toAddress: new FormControl(''),
            article: new FormControl(''),
            date: new FormControl(''),
            weight: new FormControl(''),
            height: new FormControl(''),
            width: new FormControl(''),
            pallet: new FormControl(false),
            fragile: new FormControl(false),
        });
        this.pallet = false;
        this.fragile = false;
    }

    // Search method
    search(value) {
        console.log('search called ');
        this.shipmentService.searchBoth(value.startAddress, value.toAddress, value.date, 1).forEach(shipment => {
            this.shipmentList = shipment;
            this.article = {name: value.article, pallet: this.pallet, amount: 1, height: value.height, width: value.width, fragile: this.fragile, weight: value.weight, client: null};
            this.sessionService.data = [];
            this.sessionService.data.push({article: this.article, routeSearch: this.routeSearch, shipmentList: this.shipmentList });
            const navigationExtras: NavigationExtras = {
                queryParams: {
                    shipmentList: this.shipmentList,
                }
            };
            this.router.navigate(['search-result'], navigationExtras);
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

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
