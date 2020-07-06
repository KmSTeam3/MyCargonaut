import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {IonicModule, NavParams} from '@ionic/angular';

import { MenuHeaderPage } from './menu-header.page';
import {RouterTestingModule} from "@angular/router/testing";
import {AngularFireModule} from "@angular/fire";
import {environment} from "../../environments/environment.prod";
import {AngularFirestore} from "@angular/fire/firestore";

describe('MenuHeaderPage', () => {
  let component: MenuHeaderPage;
  let fixture: ComponentFixture<MenuHeaderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuHeaderPage ],
      imports: [IonicModule,
          AngularFireModule.initializeApp(environment.firebaseConfig),
          RouterTestingModule.withRoutes([]),
      ],
      providers: [
          MenuHeaderPage,
        { provide: NavParams }
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
