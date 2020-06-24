import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeleteVehiclePage } from './delete-vehicle.page';

describe('DeleteVehiclePage', () => {
  let component: DeleteVehiclePage;
  let fixture: ComponentFixture<DeleteVehiclePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteVehiclePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteVehiclePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
