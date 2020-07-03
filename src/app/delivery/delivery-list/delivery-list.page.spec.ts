import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeliveryListPage } from './delivery-list.page';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../../../environments/environment.prod';
import {RouterTestingModule} from '@angular/router/testing';

describe('DeliveryListPage', () => {
  let component: DeliveryListPage;
  let fixture: ComponentFixture<DeliveryListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryListPage ],
      imports: [IonicModule,
      AngularFireModule.initializeApp(environment.firebaseConfig),
      RouterTestingModule.withRoutes([]),
      ],
      providers: [
          DeliveryListPage,
      ]
    }).compileComponents();

  }));

  it('should create', () => {
    component = TestBed.inject(DeliveryListPage);

    expect(component).toBeTruthy();
  });
});
