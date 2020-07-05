import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TransportSearchPage } from './transport-search.page';
import {AngularFirestore} from '@angular/fire/firestore';
import {ShipmentService} from '../shared/shipment.service';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../../environments/environment.prod';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';

describe('TransportSearchPage', () => {
  let component: TransportSearchPage;
  let fixture: ComponentFixture<TransportSearchPage>;
  let shipmentService: ShipmentService;
  let angularFirestore: AngularFirestore;

  // const article = {name: 'Piano', pallet: false, amount: 1, height: 10, width: 10, fragile: false, weight: 10, client: null};

  const value = { startAddress: 'test', toAddress: 'testing', date: '2020-07-07', weight: 10,  height: 10, width: 10};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportSearchPage ],
      imports: [IonicModule,
          AngularFireModule.initializeApp(environment.firebaseConfig),
          ReactiveFormsModule,
          FormsModule,
          RouterTestingModule.withRoutes([]),
      ],
      providers: [
          TransportSearchPage,
        { provide: ShipmentService }
      ]
    }).compileComponents();
  }));

  it('should be not empty and return a list with shipments', () => {
    component = TestBed.inject(TransportSearchPage);
    shipmentService = TestBed.inject(ShipmentService);
    angularFirestore = TestBed.inject(AngularFirestore);
    async( () => {
        component.search(value);
        expect(component.shipmentList.length).toBeGreaterThan(0);
    });
  });
});
