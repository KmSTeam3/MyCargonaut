import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenuHeaderPage } from './menu-header.page';
import {RouterTestingModule} from "@angular/router/testing";

describe('MenuHeaderPage', () => {
  let component: MenuHeaderPage;
  let fixture: ComponentFixture<MenuHeaderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuHeaderPage ],
      imports: [IonicModule,
          RouterTestingModule.withRoutes([]),
      ],
      providers: [
          MenuHeaderPage,
      ]
    }).compileComponents();


  }));

  it('should create', () => {
    fixture = TestBed.createComponent(MenuHeaderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });
});
