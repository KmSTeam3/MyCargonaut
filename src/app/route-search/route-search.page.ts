import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Shipment} from '../shared/shipment';
import {ShipmentService} from '../shared/shipment.service';
import {NavigationExtras, Router} from '@angular/router';
import {AngularFirestore, AngularFirestoreCollection, DocumentChangeAction} from '@angular/fire/firestore';

@Component({
  selector: 'app-route-search',
  templateUrl: './route-search.page.html',
  styleUrls: ['./route-search.page.scss'],
})
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


  constructor(private firestore: AngularFirestore, private formBuilder: FormBuilder, private router: Router,  private shipmentService: ShipmentService) {
  }


  ngOnInit() {
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

  search(value){
    console.log('search called');
    console.log('Seats ' + value.seats + ' StartAddress ' + value.startAddress + ' toAddress ' + value.toAddress + ' Date ' + value.date);
    this.shipmentService.searchRoute(value.seats, value.startAddress, value.toAddress, value.date).forEach( shipment => {
      this.shipmentList = shipment;
      const navigationExtras: NavigationExtras = { state: { shipmentList: this.shipmentList } };
      this.router.navigate(['search-result'], navigationExtras);
      console.log(shipment);
    });

    this.shipmentService.testAll().forEach( shipment => {
      console.log(shipment);
    });
  }

  query(value){
    this.shipmentService.searchRoute(value.seats, value.startAddress, value.toAddress, value.date).forEach( shipment => {
      this.shipmentList = shipment;
      console.log(shipment);
    });
  }

  navigateToLogin(){
    this.router.navigate(['/login']);
  }

  navigateToRegister(){
    this.router.navigate(['/register']);
  }

  navigateToHome(){
    this.router.navigate(['/home']);
  }

}
