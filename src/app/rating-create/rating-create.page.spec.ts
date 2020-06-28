import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RatingCreatePage } from './rating-create.page';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../../environments/environment';
import {RouterTestingModule} from '@angular/router/testing';

describe('RatingCreatePage', () => {
  let component: RatingCreatePage;
  let fixture: ComponentFixture<RatingCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingCreatePage ],
      imports: [IonicModule.forRoot(),
        AngularFireModule.initializeApp(environment.firebaseConfig),
        RouterTestingModule.withRoutes([])
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(RatingCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return right color ', () => {
    let color: string;
    component.points = 1;
    color = component.getColor(2);
    expect(color).toEqual('#E0E0E0');
  });
});
