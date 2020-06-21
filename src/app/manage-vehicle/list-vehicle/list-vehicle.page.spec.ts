import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListVehiclePage } from './list-vehicle.page';

describe('ListVehiclePage', () => {
  let component: ListVehiclePage;
  let fixture: ComponentFixture<ListVehiclePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListVehiclePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListVehiclePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
