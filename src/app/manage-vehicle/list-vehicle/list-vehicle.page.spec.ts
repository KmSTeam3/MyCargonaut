import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListVehiclePage } from './list-vehicle.page';

describe('ListVehiclePage', () => {
  let component: ListVehiclePage;
  let fixture: ComponentFixture<ListVehiclePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListVehiclePage ]
    });

  }));

  it('should be true', () => {
    expect(true).toBeTruthy();
  });
});
