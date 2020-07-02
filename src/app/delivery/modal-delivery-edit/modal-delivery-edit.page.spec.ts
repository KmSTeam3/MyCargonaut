import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalDeliveryEditPage } from './modal-delivery-edit.page';

describe('ModalDeliveryEditPage', () => {
  let component: ModalDeliveryEditPage;
  let fixture: ComponentFixture<ModalDeliveryEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDeliveryEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalDeliveryEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
