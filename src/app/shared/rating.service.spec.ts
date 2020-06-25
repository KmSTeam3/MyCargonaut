import { TestBed } from '@angular/core/testing';

import { RatingService } from './rating.service';
import {Rating} from './rating';
import {IonicModule} from '@ionic/angular';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {environment} from '../../environments/environment';

describe('RatingService', () => {
  let service: RatingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        IonicModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFirestoreModule
      ]
    });
    service = TestBed.inject(RatingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should calc right average', () => {
    const ratings: Rating[] = [];
    const rating: Rating = new Rating(5, 'sdadsda');
    const rating1: Rating = new Rating(4, 'sdadsda');
    ratings.push(rating, rating1);
    const average = service.calcAverage(ratings);
    expect(average).toEqual(4.5);
  });
});
