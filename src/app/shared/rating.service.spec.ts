import { TestBed } from '@angular/core/testing';

import { RatingService } from './rating.service';
import {Rating} from './rating';

describe('RatingService', () => {
  let service: RatingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
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
