import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../shared/user';
import {UserService} from '../shared/user.service';
import {AuthService} from '../shared/auth.service';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  validationsForm: FormGroup;
  errorMessage = '';
  successMessage = '';
  userID;
  subscription: Subscription;

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
      { type: 'minlength', message: 'Passwort muss min. 6 Zeichen lang sein.' }
    ]
  };

  constructor(private userservice: UserService, private formBuilder: FormBuilder, private authservice: AuthService, private router: Router) {
    // TODO userID aus URL holen oder von eingeloggtem User
    this.subscription = this.authservice.checkAuthState().subscribe((value => {
      this.userID = value.uid;
      this.userservice.getUser(this.userID).subscribe((user) => {
        if (user){
          this.validationsForm.patchValue({
            title: user.title,
            fname: user.fName,
            lname: user.lName,
            street: user.street,
            housenumber: user.housenumber,
            postalcode: user.postalcode,
            city: user.city,
            email: user.email
          });
        }
      });
    }));
  }

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
      ])),
      city: new FormControl(''),
      lname: new FormControl(''),
      fname: new FormControl(''),
      street: new FormControl(''),
      housenumber: new FormControl(''),
      title: new FormControl('')
    });
  }


  updateProfile(value){
    this.userservice.update(this.userID, value.title, value.fname, value.lname, value.street, value.housenumber, value.postalcode, value.city, value.email)
        .then(() => {
          this.successMessage = 'Profil erfolgreich geupdatet';
    }, () => {
          this.errorMessage = 'Fehler beim Updaten des Profils';
        });
  }

  signOut(){
    this.authservice.SignOut().then(() => {
      this.router.navigate(['login']);
    });
  }

}
