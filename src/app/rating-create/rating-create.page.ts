import { Component, OnInit } from '@angular/core';
import {Rating} from '../shared/rating';
import {RatingService} from '../shared/rating.service';
import {ActivatedRoute, Router} from '@angular/router';

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
  userID: string;

  constructor(private ratingService: RatingService, private route: ActivatedRoute, private router: Router) {
    this.userID = this.route.snapshot.paramMap.get('uid');
  }

  ngOnInit() {
  }

  /**
   * Persists a rating in the database
   */
  submit() {
    const rating: Rating = new Rating(this.points, this.description);
    this.ratingService.persist(rating, this.userID);
    this.router.navigate(['bookings']);
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
      PRIMARY = '#3B6863',
    }
    if (this.isAboveRating(index)){
      return colors.GREY;
    }
    switch (this.points) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        return colors.PRIMARY;
      default:
        return colors.GREY;
    }
  }

}
