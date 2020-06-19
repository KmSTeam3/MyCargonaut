import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManageVehiclePage } from './manage-vehicle.page';

describe('ManageVehiclePage', () => {
  let component: ManageVehiclePage;
  let fixture: ComponentFixture<ManageVehiclePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageVehiclePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManageVehiclePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
