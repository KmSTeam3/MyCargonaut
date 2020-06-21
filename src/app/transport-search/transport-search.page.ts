import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-transport-search',
  templateUrl: './transport-search.page.html',
  styleUrls: ['./transport-search.page.scss'],
})
export class TransportSearchPage implements OnInit {

  validationsForm: FormGroup;
  errorMessage = '';
  successMessage = '';

  VALIDATION_MESSAGES = {
    postalCode: [
      {type: 'required', message: 'Postleitzahl ist erforderlich.'},
      {type: 'minlength', message: 'Postleitzahl muss mindestens 5 Zahlen enthalten'}
    ],
    datum: [
      {type: 'required', message: 'Datum ist erforderlich.'},
    ]
  };

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.validationsForm = this.formBuilder.group({
      postalcode: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])),
    });
  }
  navigateToLogin(){
    this.router.navigate(['/login']);
  }

  navigateToRegister(){
    this.router.navigate(['/register']);
  }

  navigateToMangeVehicle(){
    this.router.navigate(['/manage-vehicle']);
  }

  navigateToRouteSearch(){
    this.router.navigate(['/route-search']);
  }

  navigateToTransportSearch(){
    this.router.navigate(['/transport-search']);
  }

  navigateToSearchResult(){
    this.router.navigate(['/search-result']);
  }

  navigateToProfile(){
    this.router.navigate(['/profile']);
  }

  navigateToHome(){
    this.router.navigate(['/home']);
  }
}
