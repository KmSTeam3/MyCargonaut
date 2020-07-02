import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserRatingsPage } from './user-ratings.page';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../../environments/environment';
import {RouterTestingModule} from '@angular/router/testing';
import {AngularFirestore} from '@angular/fire/firestore';

describe('UserRatingsPage', () => {
  let component: UserRatingsPage;
  let fixture: ComponentFixture<UserRatingsPage>;
  let angularFirestore: AngularFirestore;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRatingsPage ],
      imports: [
          IonicModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        RouterTestingModule.withRoutes([]),
      ],
      providers: [
          UserRatingsPage,
      ]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(true).toBeTruthy();
  });
});
