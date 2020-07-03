import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import {User} from '../shared/user';
import {Shipment} from '../shared/shipment';
import {Vehicle} from '../shared/vehicle';
import {Person} from '../shared/person';
import {ActivatedRoute, Router} from '@angular/router';
import {ShipmentService} from '../shared/shipment.service';
import {DataHelperService} from '../shared/data-helper.service';
import {Article} from '../shared/article';
import {AuthService} from '../shared/auth.service';
import {Subscription} from 'rxjs';
import {UserService} from '../shared/user.service';


@Component({
    selector: 'app-search-result',
    templateUrl: './search-result.page.html',
    styleUrls: ['./search-result.page.scss'],
})
export class SearchResultPage implements OnInit {
    @Input() shipmentList: Shipment[];
    // user: User = new User('123456789', 'testSubject#1', 'test#1', 'tester#1', 'teststreet', 1, 12345, 'testcity', 'test@test.de');
    // user2: User = new User('123456789', 'testSubject#1', 'test#1', 'tester#1', 'teststreet', 1, 12345, 'testcity', 'test@test.de');
    // vehicle: Vehicle = new Vehicle('32156487', 'LKW 1', 'this.user', 100, 1000, 100, 4, 4);
    // passengerList: Person[] = [];
    // person: Person = new Person(1, this.user2, '789101112');
    // date: Date = new Date('2020-06-22');
    // shipment: Shipment;

    listShipments: Shipment[] = [];
    article: Article;
    subscription: Subscription;
    user: firebase.User;

    constructor(private authService: AuthService, private router: Router, private shipmentService: ShipmentService, private dataHelper: DataHelperService, private route: ActivatedRoute, private userService: UserService) {
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                console.log(params);
                console.log(this.router.getCurrentNavigation().extras.state.shipmentList);
                this.listShipments = this.router.getCurrentNavigation().extras.state.shipmentList;
                if (this.router.getCurrentNavigation().extras.state.article != null) {
                    this.article = this.router.getCurrentNavigation().extras.state.article;
                }
                console.log(this.listShipments);
            }
        });

    }

    customPopoverOptions: any = {
        header: 'Filter search result',
        subHeader: 'Select your attribute',
        message: 'Only select your favorite flower'
    };

    async sortList(event) {
        switch (event.detail.value) {
            case '0':
                console.log(event.detail.value);
                this.listShipments.sort((a, b) => (a.pricePerKg > b.pricePerKg) ? 1 : ((b.pricePerKg > a.pricePerKg) ? -1 : 0));
                break;
            case '1':
                console.log(event.detail.value);
                this.listShipments.sort((a, b) => {
                    const tempA = this.getRating(a);
                    const tempB = this.getRating(b);
                    if (tempA < tempB) {
                        return -1;
                    }
                    if (tempA > tempB) {
                        return 1;
                    }
                    return 0;
                });
                break;
        }
    }


    async getRating(shipment: Shipment) {
        this.userService.getUser(shipment.cargonaut).subscribe((value => {
            return Math.round(value.rating);
        }));
    }

    ngOnInit() {
        this.subscription = this.authService.checkAuthState().subscribe((user) => {
            if (user) {
                this.user = user;
                console.log('Eingeloggt als: ' + this.user.uid);
            }
        });
        console.log(this.listShipments);
    }

    signOut() {
        this.authService.SignOut().then(() => {
            this.navigateToLogin();
        });
    }

    navigateToLogin() {
        this.router.navigate(['/login']);
    }

    navigateToRegister() {
        this.router.navigate(['/register']);
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    navigateToHome() {
        this.router.navigate(['/home']);
    }

}
