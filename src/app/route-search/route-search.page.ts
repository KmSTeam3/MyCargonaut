import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-route-search',
  templateUrl: './route-search.page.html',
  styleUrls: ['./route-search.page.scss'],
})
export class RouteSearchPage implements OnInit {

  validationsForm: FormGroup;
  errorMessage = '';
  successMessage = '';

  VALIDATION_MESSAGES = {
    postalCode: [
      {type: 'required', message: 'Postleitzahl ist erforderlich.' },
      { type: 'minlength', message: 'Postleitzahl muss mindestens 5 Zahlen enthalten' }
    ],
    datum: [
      {type: 'required', message: 'Datum ist erforderlich.'},
    ]
  };



  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  searchForm(value){
    console.log(value);
  }
}
