import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {EModalPage} from './e-modal.page';
import {VehicleService} from "../../shared/vehicle.service";
import {AngularFirestore} from "@angular/fire/firestore";
import {AngularFireModule} from "@angular/fire";
import {environment} from "../../../environments/environment.prod";
import {RouterTestingModule} from "@angular/router/testing";

describe('EModalPage', () => {
    let component: EModalPage;
    let fixture: ComponentFixture<EModalPage>;
    let vehicleService: VehicleService;
    let angularFireStore: AngularFirestore;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EModalPage],
            imports: [IonicModule,
                AngularFireModule.initializeApp(environment.firebaseConfig),
                RouterTestingModule.withRoutes([]),
            ],
            providers: [
                EModalPage,
                { provide: VehicleService },
            ],
        }).compileComponents();
    }));

    it('should create', () => {
        component = TestBed.inject(EModalPage);
        angularFireStore = TestBed.inject(AngularFirestore);

        expect(component).toBeTruthy();
    });
});
