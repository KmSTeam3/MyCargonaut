import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaymentChoicePage } from './payment-choice.page';

describe('PaymentChoicePage', () => {
  let component: PaymentChoicePage;
  let fixture: ComponentFixture<PaymentChoicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentChoicePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaymentChoicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
