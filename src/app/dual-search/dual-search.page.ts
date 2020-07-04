import {Component, OnInit} from '@angular/core';
import {NavigationExtras, Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Shipment} from '../shared/shipment';
import {AngularFirestore} from '@angular/fire/firestore';
import {ShipmentService} from '../shared/shipment.service';
import {Article} from '../shared/article';

@Component({
    selector: 'app-dual-search',
    templateUrl: './dual-search.page.html',
    styleUrls: ['./dual-search.page.scss'],
})
export class DualSearchPage implements OnInit {

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

    constructor(private router: Router, private firestore: AngularFirestore, private formBuilder: FormBuilder, private shipmentService: ShipmentService) {
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
            length: new FormControl(''),
            pallet: new FormControl(false),
            fragile: new FormControl(false),
        });
    }

    // Search method
    search(value) {
        console.log('search called ');
        this.shipmentService.searchBoth(value.startAddress, value.toAddress, value.date, 1).forEach(shipment => {
            this.shipmentList = shipment;
            this.article = new Article(value.article, this.pallet, 1, value.height, value.width, this.fragile, value.weight);
            const navigationExtras: NavigationExtras = {
                state: {
                    shipmentList: this.shipmentList,
                    article: this.article,
                    routeSearch: this.routeSearch
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
}
