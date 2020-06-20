import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RouteSearchPage } from './route-search.page';

describe('RouteSearchPage', () => {
  let component: RouteSearchPage;
  let fixture: ComponentFixture<RouteSearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteSearchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RouteSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
