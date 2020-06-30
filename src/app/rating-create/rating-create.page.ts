import { Component, OnInit } from '@angular/core';
import {Rating} from '../shared/rating';
import {RatingService} from '../shared/rating.service';

@Component({
  selector: 'app-rating-create',
  templateUrl: './rating-create.page.html',
  styleUrls: ['./rating-create.page.scss'],
})

/**
 * Page for rating a user
 */
export class RatingCreatePage implements OnInit {

  points: number;
  description: string;

  constructor(private ratingService: RatingService) { }

  ngOnInit() {
  }

  /**
   * Persists a rating in the database
   */
  submit() {
    const rating: Rating = new Rating(this.points, this.description);
    // TODO Dummy ID needs to be replaced with ID of the user whose shipment is being rated. Probably pass it over URL when selecting shipment to rate
    this.ratingService.persist(rating, 'tGVWto1bYHWeq6wtjFN5pGYXInG3');
    // TODO Navigate back to shipment list
  }

  /**
   * Updates points when the star rating changes
   * @param index Value of the points
   */
  rate(index: number){
    this.points = index;
  }

  isAboveRating(index: number){
    return index > this.points;
  }


  /**
   * Determines the color of the stars depending on which star is clicked
   * @param index Selected rating
   */
  getColor(index: number){
    enum colors {
      GREY = '#E0E0E0',
      GREEN = '#76FF03',
      YELLOW = '#FFCA28',
      RED = '#DD2C00'
    }
    if (this.isAboveRating(index)){
      return colors.GREY;
    }
    switch (this.points) {
      case 1:
      case 2:
        return colors.RED;
      case 3:
        return colors.YELLOW;
      case 4:
      case 5:
        return colors.GREEN;
      default:
        return colors.GREY;
    }
  }

}
