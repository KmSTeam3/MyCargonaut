import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginPage } from './login.page';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../../environments/environment';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {AuthService} from '../shared/auth.service';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let authService: AuthService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPage ],
      imports: [IonicModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        ReactiveFormsModule,
        FormsModule,
        RouterTestingModule.withRoutes([])],
      providers: [
          LoginPage,
        {provide: AuthService}
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should log in', () => {
    authService = TestBed.inject(AuthService);
    let user: firebase.User;
    component.validationsForm.patchValue({
      email: 'klausi@web.de',
      password: '123456'
    });
    component.login(component.validationsForm.value);
    authService.checkAuthState().subscribe(value => {
      if (value){
        user = value;
      }
      expect(user).toBeDefined();
    });
  });

  it('should reject login', () => {
    authService = TestBed.inject(AuthService);
    component.validationsForm.patchValue({
      email: 'klausi@web.de',
      password: '12345678'
    });
    component.login(component.validationsForm.value);
    setTimeout(() => {
      expect(component.errorMessage).toEqual('Anmeldung fehlgeschlagen! Überprüfe deine Login Daten');
    }, 5000);
  });
});
