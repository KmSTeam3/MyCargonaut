import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {AngularDelegate, IonicModule, ModalController, NavParams} from '@ionic/angular';

import { DeliveryPage } from './delivery.page';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../../environments/environment.prod';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {VehicleService} from '../shared/vehicle.service';
import {AngularFireStorage} from '@angular/fire/storage';
import {AngularFirestore} from '@angular/fire/firestore';
import {ImpressumPage} from "../impressum/impressum.page";

describe('DeliveryPage', () => {
  // tslint:disable-next-line:prefer-const
  let component: DeliveryPage;
  let fixture: ComponentFixture<DeliveryPage>;
  // tslint:disable-next-line:prefer-const
  let vehicleService: VehicleService;
  // tslint:disable-next-line:prefer-const
  let angularFirestore: AngularFirestore;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryPage ],
      imports: [
          AngularFireModule.initializeApp(environment.firebaseConfig),
          ReactiveFormsModule,
          RouterTestingModule.withRoutes([]),
      ],
      providers: [
          DeliveryPage,
          ModalController,
          AngularDelegate,
          NavParams,
        { provide: VehicleService }
      ]
    }).compileComponents();


  }));

  it('should create', () => {
    component = TestBed.inject(DeliveryPage);

    expect(component).toBeTruthy();
  });
});
