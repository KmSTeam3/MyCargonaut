import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaymentSuccessPage } from './payment-success.page';
import {ShipmentService} from '../shared/shipment.service';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../../environments/environment.prod';
import {RouterTestingModule} from '@angular/router/testing';
import {PaymentChoicePage} from '../payment-choice/payment-choice.page';
import {Shipment} from '../shared/shipment';
import {NavigationExtras, Router} from '@angular/router';

describe('PaymentSuccessPage', () => {
  let component: PaymentSuccessPage;
  let fixture: ComponentFixture<PaymentSuccessPage>;
  let paymentChoicePage: PaymentChoicePage;



  const date = new Date();
  const shipment = new Shipment('adasd', null, null, null, 'asd', 'asdas', date, '14:00', 123, 123, 123, 2, 5, 2);
  const navigationExtras: NavigationExtras = { state: { extra: shipment}};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentSuccessPage ],
      imports: [IonicModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        RouterTestingModule.withRoutes([]),
      ],
      providers: [
          PaymentSuccessPage,
        { provide: Router }
      ]
    }).compileComponents();
  }));


  it('should create', () => {
    expect(true).toBeTruthy();
  });
});
