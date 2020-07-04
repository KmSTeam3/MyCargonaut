import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ImpressumPage } from './impressum.page';
import {RouterTestingModule} from "@angular/router/testing";
import {Test} from "tslint";

describe('ImpressumPage', () => {
  let component: ImpressumPage;
  let fixture: ComponentFixture<ImpressumPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImpressumPage ],
      imports: [ IonicModule,
      RouterTestingModule.withRoutes([]),
      ],
      providers: [
          ImpressumPage,
      ]
    }).compileComponents();
  }));

  it('should create', () => {
    component = TestBed.inject(ImpressumPage);

    expect(component).toBeTruthy();
  });
});
