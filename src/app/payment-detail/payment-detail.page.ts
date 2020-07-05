import { SessionService } from './../shared/session.service';
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
    @Input() price: number;


    constructor(private router: Router, private userService: UserService, private sessionService: SessionService) {
    }

    ngOnInit() {
        console.log('Modal shipment' + this.shipment.goal);
        console.log('Route Search weiter gegeben: ' + this.routeSearch);
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
        const puffer =  this.sessionService.data;
        this.sessionService.data = [];
        this.sessionService.data.push({shipment: this.shipment, user: this.user, article: this.article, price: this.price, routeSearch: this.routeSearch});
        this.dismissModal(modalController);
        this.router.navigate(['/payment-choice']);
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
