import { Component, OnInit } from '@angular/core';
import {RatingService} from '../shared/rating.service';
import {Rating} from '../shared/rating';
import {UserService} from '../shared/user.service';
import {User} from '../shared/user';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-ratings',
  templateUrl: './user-ratings.page.html',
  styleUrls: ['./user-ratings.page.scss'],
})

/**
 * Page for displaying all ratings of a user and the average rating
 */
export class UserRatingsPage implements OnInit {

  // TODO userID needs to be replaced with userID of user whose ratings need to be shown. Probably from URL parameter
  userID: string;
  ratings: Rating[];
  user: User;

  constructor(private ratingservice: RatingService, private userservice: UserService, private route: ActivatedRoute) {
    this.userID = this.route.snapshot.paramMap.get('uid');
    this.ratingservice.findAll(this.userID).subscribe((ratings) => {
      this.ratings = ratings;
    });

    this.userservice.getUser(this.userID).subscribe((value => {
      this.user = value;
      this.user.rating = Math.round(this.user.rating);
    }));
  }

  ngOnInit() {
  }




  /**
   * Determines the color of the stars depending on which star is clicked
   * @param index Selected rating
   * @param points Rating points
   */
  getColor(index: number, points: number){
    enum colors {
      GREY = '#E0E0E0',
      GREEN = '#76FF03',
      YELLOW = '#FFCA28',
      RED = '#DD2C00'
    }
    if (index > points){
      return colors.GREY;
    }
    switch (points) {
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
