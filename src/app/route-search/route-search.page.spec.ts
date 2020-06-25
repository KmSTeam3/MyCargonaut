import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RouteSearchPage } from './route-search.page';

describe('RouteSearchPage', () => {
  let component: RouteSearchPage;
  let fixture: ComponentFixture<RouteSearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteSearchPage ]
    }).compileComponents();
  }));

  it('should be true', () => {
    expect(true).toBeTruthy();
  });
});
