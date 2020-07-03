import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegisterPage } from './register.page';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../../environments/environment';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserService} from '../shared/user.service';
import {User} from '../shared/user';

describe('RegisterPage', () => {
  let component: RegisterPage;
  let fixture: ComponentFixture<RegisterPage>;
  let userService: UserService;
  let user: User[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterPage ],
      imports: [IonicModule.forRoot(),
        AngularFireModule.initializeApp(environment.firebaseConfig),
        RouterTestingModule.withRoutes([]),
        ReactiveFormsModule,
        FormsModule,
      ],
      providers: [
          RegisterPage,
        {provide: UserService}
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
    userService = TestBed.inject(UserService);
    userService.findAll().subscribe(value => {
      user = value;
    });
  }));

  it('should be true', () => {
    expect(true).toBeTruthy();
  });

  it('should set error message postalcode', () => {
    component.validationsForm.patchValue({
      postalcode: 123,
    });
    component.register(component.validationsForm.value);
    expect(component.errorMessage).toEqual('Keine gültige Postleitzahl');
  });

  it('should set error message password', () => {
    console.log(user);
    component.validationsForm.patchValue({
      password: '123456',
      confirmPW: '1234567'
    });
    component.register(component.validationsForm.value);
    expect(component.errorMessage).toEqual('Passwörter stimmen nicht über ein');
  });

  /*it('should check registration', () => {
    userService = TestBed.inject(UserService);
    const beforeRegister: User[] = user;
    let afterRegister: User[];

    component.validationsForm.patchValue({
      title: 'Herr',
      fname: 'Max',
      lname: 'Mustermann',
      street: 'Musterstraße',
      housenumber: 5,
      postalcode: 12345,
      city: 'Musterstadt',
      email: 'max@muster.de',
      password: '123456',
      confirmPW: '123456'
    });
    component.register(component.validationsForm.value);
    userService.findAll().subscribe(value => {
      afterRegister = value;
      console.log(afterRegister.length);
      expect(afterRegister.length).toEqual(beforeRegister.length + 1);
    });
  });*/
});
