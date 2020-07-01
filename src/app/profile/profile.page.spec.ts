import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfilePage } from './profile.page';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../../environments/environment';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {User} from '../shared/user';
import {UserService} from '../shared/user.service';
import {AuthService} from '../shared/auth.service';
import {Subscription} from 'rxjs';


describe('ProfilePage', () => {
  let component: ProfilePage;
  let fixture: ComponentFixture<ProfilePage>;
  let userService: UserService;
  let authService: AuthService;
  let subscription: Subscription;

  const credentials = { email: 'klausi@web.de', password: '123456' };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilePage ],
      imports: [IonicModule.forRoot(),
        AngularFireModule.initializeApp(environment.firebaseConfig),
        ReactiveFormsModule,
        FormsModule,
        RouterTestingModule.withRoutes([])
      ], providers: [
          ProfilePage,
        {provide: UserService},
        {provide: AuthService}
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  afterEach(() => {
    if (subscription){
      subscription.unsubscribe();
    }
  });

  it('should be true', () => {
    expect(true).toBeTruthy();
  });

  it('should update user', (done) => {
    userService = TestBed.inject(UserService);
    authService = TestBed.inject(AuthService);

    const testUser: User = new User('tGVWto1bYHWeq6wtjFN5pGYXInG3', 'Herr', 'Klaus', 'Meier', 'Straße', 5, 12345, 'Gießen', 'klausi@web.de');
    subscription = userService.getUser('tGVWto1bYHWeq6wtjFN5pGYXInG3').subscribe(value => {
          component.user = value;
          component.validationsForm.patchValue({
            title: 'Herr',
            fname: 'Klaus',
            lname: 'Meier',
            street: 'Straße',
            housenumber: 5,
            postalcode: 12345,
            city: 'Gießen',
            email: 'klausi@web.de'
          });
          component.addNewValues(component.validationsForm.value);
          expect(component.user.fName).toEqual(testUser.fName);
          expect(component.user.lName).toEqual(testUser.lName);
          expect(component.user.title).toEqual(testUser.title);
          expect(component.user.street).toEqual(testUser.street);
          expect(component.user.housenumber).toEqual(testUser.housenumber);
          expect(component.user.postalcode).toEqual(testUser.postalcode);
          expect(component.user.city).toEqual(testUser.city);
          expect(component.user.email).toEqual(testUser.email);
          done();
        });
      });
});
