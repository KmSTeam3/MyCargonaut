import { Component, OnInit } from '@angular/core';
import {AuthService} from '../shared/auth.service';
import {UserService} from '../shared/user.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  validationsForm: FormGroup;
  errorMessage = '';
  successMessage = '';

  VALIDATION_MESSAGES = {
    postalcode: [
      { type: 'required', message: 'Postleitzahl ist erforderlich.' },
      { type: 'minlength', message: 'Postleitzahl muss mindestens 5 Zahlen enthalten' }
    ],
    fname: [
      { type: 'required', message: 'Vorname ist erforderlich.' }
    ],
    lname: [
      { type: 'required', message: 'Nachname ist erforderlich.' }
    ],
    city: [
      { type: 'required', message: 'Stadt ist erforderlich.' }
    ],
    housenumber: [
      { type: 'required', message: 'Hausnummer ist erforderlich.' }
    ],
    street: [
      { type: 'required', message: 'Straße ist erforderlich'}
    ],
    email: [
      { type: 'required', message: 'Email ist erforderlich.' },
      { type: 'pattern', message: 'Bitte gebe eine gültige Email ein.' }
    ],
    password: [
      { type: 'required', message: 'Passwort ist erforderlich.' },
      { type: 'minlength', message: 'Passwort muss min. 6 Zeichen lang sein.' }
    ]
  };

  constructor(private userservice: UserService, private authservice: AuthService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.validationsForm = this.formBuilder.group({
      postalcode: new FormControl('', Validators.compose([
          Validators.minLength(5),
          Validators.required
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(6),
        Validators.required
      ])),
      confirmPW: new FormControl(''),
      city: new FormControl(''),
      lname: new FormControl(''),
      fname: new FormControl(''),
      street: new FormControl(''),
      housenumber: new FormControl(''),
      title: new FormControl('')
    });
  }

  register(value){
    if (value.password !== value.confirmPW){
      this.errorMessage = 'Passwörter stimmen nicht über eivn';
    } else if (value.postalcode < 10000 || value.postalcode > 99999){
      this.errorMessage = 'Keine gültige Postleitzahl';
    }  else {
      console.log(value.title);
      this.authservice.register(value).then(res => {
        this.errorMessage = '';
        this.successMessage = 'Konto wurde erstellt';
        // TODO Eventuell direkte Weiterleitung nach Registrierung
        /*this.authservice.login(value).then(res1 => {
          this.router.navigate(['game-select']);
          console.log(res1);
        });*/
      }, err => {
        this.successMessage = '';
        this.errorMessage = err.message;
      });
    }
  }

}
