import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {IonicModule, ModalController, NavParams} from '@ionic/angular';

import { ModalDeliveryPage } from './modal-delivery.page';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../../../environments/environment.prod';
import {RouterTestingModule} from '@angular/router/testing';

describe('ModalDeliveryPage', () => {
  let component: ModalDeliveryPage;
  let fixture: ComponentFixture<ModalDeliveryPage>;
  let angularFirestore: AngularFirestore;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDeliveryPage ],
      imports: [IonicModule,
          AngularFireModule.initializeApp(environment.firebaseConfig),
          RouterTestingModule.withRoutes([])
      ],
      providers: [
          ModalDeliveryPage,
        ModalController,
        NavParams,
      ]
    }).compileComponents();
  }));

  it('should create', () => {
    component = TestBed.inject(ModalDeliveryPage);
    expect(component).toBeTruthy();
  });
});
