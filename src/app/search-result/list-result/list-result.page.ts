import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Shipment} from '../../shared/shipment';
import {Router} from '@angular/router';
import { PaymentDetailPage} from '../../payment-detail/payment-detail.page';
import {ModalController} from '@ionic/angular';
import {Subscription} from 'rxjs';
import {UserService} from '../../shared/user.service';
import {User} from '../../shared/user';

@Component({
  selector: 'app-list-result',
  templateUrl: './list-result.page.html',
  styleUrls: ['./list-result.page.scss'],
})
export class ListResultPage implements OnInit, OnDestroy {

  @Input() shipment: Shipment;
  subscription: Subscription;
  user: User;

  constructor(public modalController: ModalController, private router: Router, private userservice: UserService) {

  }

  ngOnInit() {
    this.subscription = this.userservice.getUser(this.shipment.cargonaut).subscribe((value => {
      this.user = value;
      this.user.rating = Math.round(this.user.rating);
    }));
  }

  navigateToPayment(){
    this.router.navigate(['/payment-detail']);
  }

  navigateToRatings(userID: string){
    this.router.navigate(['user-ratings', {uid: userID }]);
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component:  PaymentDetailPage,
      cssClass: 'paymentModal',
      componentProps: {
        shipment: this.shipment,
        modalController: this.modalController
      }
    });
    return await modal.present();
  }

  async dismissModal() {
    await this.modalController.dismiss();
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

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
