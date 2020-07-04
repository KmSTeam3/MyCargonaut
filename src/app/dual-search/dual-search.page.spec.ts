import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DualSearchPage } from './dual-search.page';
import {RouteSearchPage} from '../route-search/route-search.page';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../../environments/environment.prod';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {ShipmentService} from '../shared/shipment.service';
import {AngularFirestore} from '@angular/fire/firestore';

describe('DualSearchPage', () => {
  let component: DualSearchPage;
  let fixture: ComponentFixture<DualSearchPage>;
  let shipmentService: ShipmentService;
  let angularFirestore: AngularFirestore;


  const value = {seats: 1, startAddress: 'Gießen', toAddress: 'Berlin', date: '2020-07-01', weight: 1};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DualSearchPage],
      imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig),
        ReactiveFormsModule,
        FormsModule,
        RouterTestingModule.withRoutes([]),
      ],
      providers: [
        DualSearchPage,
        {provide: ShipmentService}
      ],
    }).compileComponents();
  }));

  it('should be not empty and return a list with shipments', () => {
    component = TestBed.inject(DualSearchPage);
    shipmentService = TestBed.inject(ShipmentService);
    angularFirestore = TestBed.inject(AngularFirestore);

    async( () => {
      component.search(value);
      expect(component.shipmentList.length).toBeGreaterThan(0);
    });
  });
});
