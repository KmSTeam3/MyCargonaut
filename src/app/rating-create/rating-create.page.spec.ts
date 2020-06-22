import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RatingCreatePage } from './rating-create.page';

describe('RatingCreatePage', () => {
  let component: RatingCreatePage;
  let fixture: ComponentFixture<RatingCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingCreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RatingCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
