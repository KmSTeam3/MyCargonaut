import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserRatingsPage } from './user-ratings.page';

describe('UserRatingsPage', () => {
  let component: UserRatingsPage;
  let fixture: ComponentFixture<UserRatingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRatingsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserRatingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
