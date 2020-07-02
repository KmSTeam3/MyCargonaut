import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaymentChoicePage } from './payment-choice.page';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../../environments/environment.prod';
import {RouterTestingModule} from '@angular/router/testing';
import {ShipmentService} from '../shared/shipment.service';
import {AngularFirestore} from '@angular/fire/firestore';

describe('PaymentChoicePage', () => {
  let component: PaymentChoicePage;
  let fixture: ComponentFixture<PaymentChoicePage>;
  let shipmentService: ShipmentService;
  let angularFirestore: AngularFirestore;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentChoicePage ],
      imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig),
        RouterTestingModule.withRoutes([]),
      ],
      providers: [
          PaymentChoicePage,
        { provide: ShipmentService }
      ],
    }).compileComponents();
  }));

  it('should update the status of the shipment', () => {
    component = TestBed.inject(PaymentChoicePage);
    shipmentService = TestBed.inject(ShipmentService);
    angularFirestore = TestBed.inject(AngularFirestore);

    component.currentPaymentChoice = 1;

    async( () => {
      component.pay();
      expect(component.shipment.status).toEqual(1);
    });
  });
});
