import { UserService } from './../shared/user.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../shared/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

/**
 * Page for login
 */
export class LoginPage implements OnInit {

  validationsForm: FormGroup;
  errorMessage = '';
  successMessage = '';


  VALIDATION_MESSAGES = {
    email: [
      { type: 'required', message: 'Email ist erforderlich.' },
      { type: 'pattern', message: 'Bitte gebe eine gültige Email ein.' }
    ],
    password: [
      { type: 'required', message: 'Passwort ist erforderlich.' },
      { type: 'minlength', message: 'Passwort muss min. 6 Zeichen lang sein.' }
    ]
  };

  constructor(private authservice: AuthService, private formBuilder: FormBuilder, private router: Router, private userService: UserService) { }


  login(value){
    this.errorMessage = '';
    this.authservice.login(value).then(() => {
      console.log('Login erfolgreich');
      if (this.authservice.checkAuthState()){
        this.userService.setLogin();
      }else{
        this.userService.setLogout();
      }

      this.router.navigate(['/home']);
        }, error => {
      this.errorMessage = 'Überprüfe deine Login Daten';

        }
    );
  }

  navigateRegister(){
    this.router.navigate(['register']);
  }

  ngOnInit() {
    this.validationsForm = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(6),
        Validators.required
      ]))
    });
  }

  navigateToHome(){
    this.router.navigate(['/home']);
  }

}
