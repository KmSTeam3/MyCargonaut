import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {NavigationExtras, Router} from '@angular/router';
import {Shipment} from '../shared/shipment';
import {ShipmentService} from '../shared/shipment.service';

@Component({
  selector: 'app-transport-search',
  templateUrl: './transport-search.page.html',
  styleUrls: ['./transport-search.page.scss'],
})
/**
 * Transport search page which lets users search for shipments of articles matching given search criteria
 *
 * Criteria:
 * - Start address
 * - Destination address
 * - Short article description
 * - How much the users article weights
 * - The height of the users article
 * - How long the users article is
 */
export class TransportSearchPage implements OnInit {

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

  constructor(private router: Router, private formBuilder: FormBuilder, private shipmentService: ShipmentService) { }

  ngOnInit() {
    // Initiation of the form fields value variables
    this.validationsForm = this.formBuilder.group({
      postalcode: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])),
      startAddress: new FormControl(''),
      toAddress: new FormControl(''),
      article: new FormControl(''),
      weight: new FormControl(''),
      height: new FormControl(''),
      length: new FormControl(''),
    });
  }

  /**
   * Search method that collects the form values and calls the shipment service routine for getting all shipments with given parameters
   * @param value all the parameters for the search given by the user
   */
  search(value){
    console.log('search called');
    console.log('Start Address ' + value.startAddress + ' toAddress ' + value.toAddress + ' Article ' + value.article + ' weight ' + value.weight + ' height ' + value.height + ' length ' + value.length);
    this.shipmentService.searchTransport(value.startAddress, value.toAddress,  +value.weight, +value.height, +value.length).forEach( shipment => {
      this.shipmentList = shipment;
      const navigationExtras: NavigationExtras = { state: {shipmentList: this.shipmentList} };
      this.router.navigate(['/search-result'], navigationExtras);
      console.log(shipment);
    });
  }


  // navigation method to the login page
  navigateToLogin(){
    this.router.navigate(['/login']);
  }

  // navigation method to register page
  navigateToRegister(){
    this.router.navigate(['/register']);
  }

  // navigation method to the home page
  navigateToHome(){
    this.router.navigate(['/home']);
  }
}
