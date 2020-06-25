import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfilePage } from './profile.page';

describe('ProfilePage', () => {
  let component: ProfilePage;
  let fixture: ComponentFixture<ProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilePage ]
    }).compileComponents();
  }));

  it('should be true', () => {
    expect(true).toBeTruthy();
  });
});
