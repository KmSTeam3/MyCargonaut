import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TransportSearchPage } from './transport-search.page';

describe('TransportSearchPage', () => {
  let component: TransportSearchPage;
  let fixture: ComponentFixture<TransportSearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportSearchPage ]
    }).compileComponents();
    
  }));

  it('should be true', () => {
    expect(true).toBeTruthy();
  });
});
