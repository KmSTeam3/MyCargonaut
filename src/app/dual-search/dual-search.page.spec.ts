import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DualSearchPage } from './dual-search.page';

describe('DualSearchPage', () => {
  let component: DualSearchPage;
  let fixture: ComponentFixture<DualSearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DualSearchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DualSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
