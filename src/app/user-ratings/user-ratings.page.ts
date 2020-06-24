import { Component, OnInit } from '@angular/core';
import {RatingService} from '../shared/rating.service';
import {Rating} from '../shared/rating';

@Component({
  selector: 'app-user-ratings',
  templateUrl: './user-ratings.page.html',
  styleUrls: ['./user-ratings.page.scss'],
})
export class UserRatingsPage implements OnInit {

  // TODO userID needs to be replaced with userID of user whose ratings need to be shown. Probably from URL parameter
  userID = 'T0PqS0ej92Y7eol9ZWAmWIrEXvU2';
  ratings: Rating[];

  constructor(private ratingservice: RatingService) {
    this.ratingservice.findAll(this.userID).subscribe((ratings) => {
      this.ratings = ratings;
    });
  }

  ngOnInit() {
  }

}
