import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditVehiclePage } from './edit-vehicle.page';

describe('EditVehiclePage', () => {
  let component: EditVehiclePage;
  let fixture: ComponentFixture<EditVehiclePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditVehiclePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditVehiclePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
