import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {RouteSearchPage} from './route-search.page';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../../environments/environment.prod';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {ShipmentService} from '../shared/shipment.service';
import {AngularFirestore} from '@angular/fire/firestore';
import {Shipment} from '../shared/shipment';
import {Vehicle} from '../shared/vehicle';

describe('RouteSearchPage', () => {
    let component: RouteSearchPage;
    let fixture: ComponentFixture<RouteSearchPage>;
    let shipmentService: ShipmentService;
    let angularFirestore: AngularFirestore;

    const value = {seats: 1, startAddress: 'test', toAddress: 'testing', date: '2020-07-07'};

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RouteSearchPage],
            imports: [
                AngularFireModule.initializeApp(environment.firebaseConfig),
                ReactiveFormsModule,
                FormsModule,
                RouterTestingModule.withRoutes([]),
            ],
            providers: [
                RouteSearchPage,
                {provide: ShipmentService}
            ],
        }).compileComponents();
    }));

    it('should be not empty and return a list with shipments', () => {
        // fixture.autoDetectChanges();
        component = TestBed.inject(RouteSearchPage);
        shipmentService = TestBed.inject(ShipmentService);
        angularFirestore = TestBed.inject(AngularFirestore);

        async( () => {
            component.search(value);
            expect(component.shipmentList.length).toBeGreaterThan(0);
        });

    });
});
