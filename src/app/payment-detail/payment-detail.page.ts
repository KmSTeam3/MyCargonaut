import {Component, Input, OnInit} from '@angular/core';
import {NavigationExtras, Router} from '@angular/router';
import {ModalController} from '@ionic/angular';
import {Shipment} from '../shared/shipment';
import {Article} from '../shared/article';
import {UserService} from '../shared/user.service';
import {User} from '../shared/user';


@Component({
    selector: 'app-payment-detail',
    templateUrl: './payment-detail.page.html',
    styleUrls: ['./payment-detail.page.scss'],

})
/**
 * Payment details page shows a modal with further information on the chosen shipment from the search result
 */
export class PaymentDetailPage implements OnInit {

    @Input() modalController: ModalController;
    @Input() shipment: Shipment;
    @Input() article: Article;
    @Input() routeSearch: boolean;
    @Input() user: User;


    constructor(private router: Router, private userService: UserService) {
    }

    ngOnInit() {
        console.log('Modal shipment' + this.shipment.goal);
        console.log(this.routeSearch);
    }

    // method for dismissing the payment detail modal
    async dismissModal(modalController: ModalController) {
        await modalController.dismiss();
    }

    /**
     * navigation method to payment choice page with passing of shipment object for further manipulation
     *
     * @param modalController modal controller form search result page to access modal from this page
     */
    navigateToPaymentChoice(modalController: ModalController) {
        this.dismissModal(modalController);
        const navigationExtras: NavigationExtras = {state: {shipment: this.shipment, article: this.article, routeSearch: this.routeSearch}};
        console.log('navigations extra ' + navigationExtras);
        this.router.navigate(['/payment-choice'], navigationExtras);
    }
    /**
     * Determines the color of the stars depending on rating
     * @param index Index of the star
     * @param points Rating points
     */
    getColor(index: number, points: number){
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
}
