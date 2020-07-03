import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UnauthorizedPage } from './unauthorized.page';
import {RouterTestingModule} from '@angular/router/testing';

describe('UnauthorizedPage', () => {
  let component: UnauthorizedPage;
  let fixture: ComponentFixture<UnauthorizedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnauthorizedPage ],
      imports: [IonicModule,
      RouterTestingModule.withRoutes([]),
      ],
      providers: [
          UnauthorizedPage,
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(UnauthorizedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
