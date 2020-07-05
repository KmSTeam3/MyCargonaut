import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Shipment} from '../../shared/shipment';
import {Router} from '@angular/router';
import {PaymentDetailPage} from '../../payment-detail/payment-detail.page';
import {ModalController} from '@ionic/angular';
import {Subscription} from 'rxjs';
import {UserService} from '../../shared/user.service';
import {User} from '../../shared/user';
import {Article} from '../../shared/article';

@Component({
    selector: 'app-list-result',
    templateUrl: './list-result.page.html',
    styleUrls: ['./list-result.page.scss'],
})
export class ListResultPage implements OnInit, OnDestroy {

    @Input() shipment: Shipment;
    subscription: Subscription;
    user: User;
    @Input() routeSearch: boolean;
    @Input() article: Article;
    price = 0;

    constructor(public modalController: ModalController, private router: Router, private userservice: UserService) {

    }

    ngOnInit() {
        this.subscription = this.userservice.getUser(this.shipment.cargonaut).subscribe((value => {
            this.user = value;
            this.user.rating = Math.round(this.user.rating);

            if (this.routeSearch != null){
                console.log('Seat price: ' + this.shipment.pricePerSeat);
                this.price = this.shipment.pricePerSeat;
            }
            if (this.article != null){
                this.price += this.shipment.pricePerKg * this.article.weight;
                console.log('Ergebniss ist: ' + (this.shipment.pricePerKg * this.article.weight));
            }
        }));
    }

    navigateToPayment() {
        this.router.navigate(['/payment-detail']);
    }

    navigateToRatings(userID: string) {
        this.router.navigate(['user-ratings', {uid: userID}]);
    }

    async presentModal() {
        const modal = await this.modalController.create({
            component: PaymentDetailPage,
            cssClass: 'paymentModal',
            componentProps: {
                shipment: this.shipment,
                user: this.user,
                routeSearch: this.routeSearch,
                price: this.price,
        modalController: this.modalController
      }
    });
        return await modal.present();
  }

    async dismissModal() {
        await this.modalController.dismiss();
    }

    /**
     * Determines the color of the stars depending on rating
     * @param index Index of the star
     * @param points Rating points
     */
    getColor(index: number, points: number) {
        enum colors {
            GREY = '#E0E0E0',
            PRIMARY = '#3B6863',
    }
        if (index > points){
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

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

}
