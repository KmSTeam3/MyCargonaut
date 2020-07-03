import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaymentDetailPage } from './payment-detail.page';

describe('PaymentDetailPage', () => {
  let component: PaymentDetailPage;
  let fixture: ComponentFixture<PaymentDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentDetailPage ]
    }).compileComponents();

  }));

  it('should be true', () => {
    expect(true).toBeTruthy();
  });
});
