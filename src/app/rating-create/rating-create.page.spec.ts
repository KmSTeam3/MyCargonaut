import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RatingCreatePage } from './rating-create.page';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../../environments/environment';
import {RouterTestingModule} from '@angular/router/testing';
import {RatingService} from '../shared/rating.service';
import {Rating} from '../shared/rating';

describe('RatingCreatePage', () => {
  let component: RatingCreatePage;
  let fixture: ComponentFixture<RatingCreatePage>;
  let ratingService: RatingService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingCreatePage ],
      imports: [IonicModule.forRoot(),
        AngularFireModule.initializeApp(environment.firebaseConfig),
        RouterTestingModule.withRoutes([])
      ], providers: [
        RatingCreatePage,
        { provide: RatingService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RatingCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should submit rating', (done) => {
    let ratings: Rating[];
    let rating: Rating;
    ratingService = TestBed.inject(RatingService);
    component.points = 4;
    component.description = 'Top!';
    component.submit();
    ratingService.findAll(component.userID).subscribe(value => {
      ratings = value;
      for (const rating1 of ratings){
        if (rating1.points === 4 && rating1.description === 'Top!'){
          rating = rating1;
        }
      }
      expect(rating).toBeTruthy();
      done();
    });
  });

  it('should return right color ', () => {
    let color: string;
    component.points = 1;
    color = component.getColor(2);
    expect(color).toEqual('#E0E0E0');
  });
});
