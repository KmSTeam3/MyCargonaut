import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {Shipment} from '../shared/shipment';
import {User} from '../shared/user';
import {UserService} from '../shared/user.service';
import {AuthService} from '../shared/auth.service';

@Component({
    selector: 'app-payment-success',
    templateUrl: './payment-success.page.html',
    styleUrls: ['./payment-success.page.scss'],
})
/**
 * Payment success page shows user that transaction worked and gives navigation options
 */
export class PaymentSuccessPage implements OnInit {

    shipment: Shipment;
    cargonaut: User;


    constructor(private router: Router, private route: ActivatedRoute, private userService: UserService, private authService: AuthService) {
        // method call collects passed data (shipment object) from previous page
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                console.log(params);
                console.log(this.router.getCurrentNavigation().extras.state.shipment);
                this.shipment = this.router.getCurrentNavigation().extras.state.shipment;
                console.log(this.shipment);
            }
        });
    }

    ngOnInit() {
        // get data of the cargonaut providing the shipment to display information
        this.userService.getUser(this.shipment.cargonaut).subscribe((user) => {
            this.cargonaut = user;
        });
    }

    // navigation method to the home page
    navigateToHome() {
        this.router.navigate(['/home']);
    }

    navigateToSearchResult() {
        this.router.navigate(['/search-result']);
    }
}
