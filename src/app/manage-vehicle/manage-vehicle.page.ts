import {AuthService} from './../shared/auth.service';
import {map} from 'rxjs/operators';
import {VehicleService} from './../shared/vehicle.service';
import {User} from './../shared/user';
import {Vehicle} from './../shared/vehicle';
import {Router} from '@angular/router';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';


@Component({
    selector: 'app-manage-vehicle',
    templateUrl: './manage-vehicle.page.html',
    styleUrls: ['./manage-vehicle.page.scss'],
})
/**
 * Management page for the vehicles of the user
 */
export class ManageVehiclePage implements OnInit, OnDestroy {
    listVehicle: Vehicle[] = [];
    holderId: string;
    user: firebase.User;
    subscription: Subscription;

    constructor(private vehicleService: VehicleService, private authService: AuthService, private router?: Router) {
    }

    ngOnInit() {
        this.setUserId();
    }

    setUserId() {
        this.subscription = this.authService.checkAuthState().subscribe((user) => {
            if (user) {
                this.user = user;
                this.renderList(user.uid);
                this.holderId = user.uid;
                console.log('Eingeloggt als: ' + this.holderId);
            }
        });
    }

    // method for getting list of all vehicles of the user
    renderList(id: string) {
        this.vehicleService.findAll(id).forEach(vehicle => {
            this.listVehicle = vehicle;
            console.log(vehicle);
        });
    }

    goToAdd() {
        this.router.navigate(['/manage-vehicle/add-vehicle']);
    }

    signOut() {
        this.authService.SignOut().then(() => {
            this.navigateToLogin();
        });
    }

    // navigation method to the login page
    navigateToLogin() {
        this.router.navigate(['/login']);
    }

    // navigation method to register page
    navigateToRegister() {
        this.router.navigate(['/register']);
    }

    // navigation method to the home page
    navigateToHome() {
        this.router.navigate(['/home']);
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
