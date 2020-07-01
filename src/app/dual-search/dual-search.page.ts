import {Component, OnInit} from '@angular/core';
import {NavigationExtras, Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Shipment} from '../shared/shipment';
import {AngularFirestore} from '@angular/fire/firestore';
import {ShipmentService} from '../shared/shipment.service';

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

    shipment: Shipment;

    constructor(private router: Router, private firestore: AngularFirestore, private formBuilder: FormBuilder, private shipmentService: ShipmentService) {
    }

    ngOnInit() {
        this.validationsForm = this.formBuilder.group({
            seats: new FormControl(''),
            startAddress: new FormControl(''),
            toAddress: new FormControl(''),
            date: new FormControl(''),
            weight: new FormControl('')
        });
    }

    // Search method
    search(value) {
        console.log('search called');
        this.shipmentService.searchBoth(value.startAddress, value.toAddress, value.date, value.seats).forEach(shipment => {
            let temp;
            temp = shipment;
            temp.forEach(singleShipment => {
                if (singleShipment.weight <= value.weight) {
                    this.shipmentList.push(singleShipment);
                }
            });
            const navigationExtras: NavigationExtras = {state: {shipmentList: this.shipmentList}};
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
