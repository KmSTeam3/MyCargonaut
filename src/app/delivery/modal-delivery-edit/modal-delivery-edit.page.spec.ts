import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {IonicModule, ModalController, NavParams} from '@ionic/angular';

import { ModalDeliveryEditPage } from './modal-delivery-edit.page';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../../../environments/environment.prod';
import {RouterTestingModule} from '@angular/router/testing';

describe('ModalDeliveryEditPage', () => {
  let component: ModalDeliveryEditPage;
  let fixture: ComponentFixture<ModalDeliveryEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDeliveryEditPage ],
      imports: [IonicModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        RouterTestingModule.withRoutes([])
      ],
      providers: [
          ModalDeliveryEditPage,
          ModalController,
          NavParams,
      ]
    }).compileComponents();
  }));

  it('should create', () => {
    component = TestBed.inject(ModalDeliveryEditPage);
    expect(component).toBeTruthy();
  });
});
