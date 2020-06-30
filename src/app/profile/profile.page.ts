import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../shared/user';
import {UserService} from '../shared/user.service';
import {AuthService} from '../shared/auth.service';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {Rating} from '../shared/rating';
import {RatingService} from '../shared/rating.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit, OnDestroy {

  validationsForm: FormGroup;
  errorMessage = '';
  successMessage = '';
  userID;
  subscription: Subscription;
  subscription2: Subscription;
  subscription3: Subscription;
  isEdit = false;
  user: User;
  firebaseUser: firebase.User;
  ratings: Rating[];

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

  constructor(private userService: UserService, private formBuilder: FormBuilder, private authservice: AuthService, private router: Router, private ratingService: RatingService) {
    this.subscription = this.authservice.checkAuthState().subscribe((value => {
      if (value){
        this.userID = value.uid;
        this.firebaseUser = value;
        this.subscription2 = this.userService.getUser(this.userID).subscribe((user) => {
          if (user){
            this.user = user;
            this.user.rating = Math.round(this.user.rating);
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
            this.subscription3 = this.ratingService.findAll(this.userID).subscribe((ratings) => {
              this.ratings = ratings;
            });
          }
        });

      }

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
    this.successMessage = '';
    this.errorMessage = '';
    if (value.email !== this.user.email){
      this.firebaseUser.updateEmail(value.email).then(() => {
        console.log('Email geändert');
        this.addNewValues(value);
        this.userService.update(this.user)
            .then(() => {
              this.successMessage = 'Profil erfolgreich geupdatet';
            }, () => {
              this.errorMessage = 'Fehler beim Updaten des Profils';
            });
      }, (error) => {
        console.log('Nicht geändert: ' + error.message);
        this.errorMessage = 'Wenn du deine Email ändern möchtest, logge dich bitte erneut ein!';
        this.router.navigate(['login']);
      });
    } else if (value.password !== ''){
        this.firebaseUser.updatePassword(value.password).then(() => {
          console.log('Passwort geändert');
          this.addNewValues(value);
          this.userService.update(this.user)
              .then(() => {
                this.successMessage = 'Profil erfolgreich geupdatet';
              }, () => {
                this.errorMessage = 'Fehler beim Updaten des Profils';
              });
        }, (error) => {
          console.log('Nicht geändert: ' + error.message);
          this.errorMessage = 'Wenn du dein Passwort ändern möchtest, logge dich bitte erneut ein!';
          this.router.navigate(['login']);
        });
    } else {
        this.addNewValues(value);
        this.userService.update(this.user)
          .then(() => {
            this.successMessage = 'Profil erfolgreich geupdatet';
          }, () => {
            this.errorMessage = 'Fehler beim Updaten des Profils';
          });
    }
    this.isEdit = false;
  }

  addNewValues(value){
    this.user.title = value.title;
    this.user.fName = value.fname;
    this.user.lName = value.lname;
    this.user.street = value.street;
    this.user.housenumber = value.housenumber;
    this.user.postalcode = value.postalcode;
    this.user.city = value.city;
    this.user.email = value.email;
  }

  /**
   * Determines the color of the stars depending on rating
   * @param index Index of the star
   * @param points Rating points
   */
  getColor(index: number, points: number){
    enum colors {
      GREY = '#E0E0E0',
      GREEN = '#76FF03',
      YELLOW = '#FFCA28',
      RED = '#DD2C00'
    }
    if (index > points){
      return colors.GREY;
    }
    switch (points) {
      case 1:
      case 2:
        return colors.RED;
      case 3:
        return colors.YELLOW;
      case 4:
      case 5:
        return colors.GREEN;
      default:
        return colors.GREY;
    }
  }

  signOut(){
    this.authservice.SignOut().then(() => {
      this.router.navigate(['login']);
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

  navigateToImpressum(){
    this.router.navigate(['/impressum']);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.subscription2.unsubscribe();
  }

}
