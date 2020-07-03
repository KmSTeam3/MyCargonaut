import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../shared/auth.service';
import {UserService} from '../shared/user.service';
import {Subscription} from 'rxjs';
import {User} from '../shared/user';
import {Router} from '@angular/router';
import {Shipment} from '../shared/shipment';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})

/**
 * Showing all bookings a user has made and cargonaut can be rated
 */

export class BookingsPage implements OnInit, OnDestroy {

  subscription: Subscription;
  subscription1: Subscription;
  subscription3: Subscription;
  user: User;
  cargonaut: User;

  constructor(private authService: AuthService, private userService: UserService, private router: Router) {
    this.subscription = this.authService.checkAuthState().subscribe(value => {
        if (value){
            this.subscription1 = this.userService.getUser(value.uid).subscribe(user => {
                this.user = user;
                for ( const booking of this.user.bookings){
                    this.subscription3 = this.userService.getUser(booking.cargonaut).subscribe(cargonaut => {
                        booking.id = booking.cargonaut;
                        booking.cargonaut = cargonaut.fName + ' ' + cargonaut.lName;
                    });
                }
            });
        }
    });
  }

  ngOnInit() {
  }

  /**
   * Determines the color of the stars depending on which star is clicked
   * @param index Selected rating
   * @param points Rating points
   */
  getColor(index: number, points: number) {
    enum colors {
      GREY = '#E0E0E0',
      PRIMARY = '#3B6863',
    }

    if (index > points) {
      return colors.GREY;
    }
    switch (points) {
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

  navigateToRating(shipment: Shipment){
    this.router.navigate(['rating-create', {uid: shipment.id }]);
    shipment.status = 3;
    this.userService.update(this.user);
  }


  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }
  navigateToHome() {
    this.router.navigate(['/home']);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.subscription1.unsubscribe();
    this.subscription3.unsubscribe();
  }

}
