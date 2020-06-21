import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddVehiclePage } from './add-vehicle.page';

describe('AddVehiclePage', () => {
  let component: AddVehiclePage;
  let fixture: ComponentFixture<AddVehiclePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVehiclePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddVehiclePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
