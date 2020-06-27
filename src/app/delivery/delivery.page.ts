import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {ModalDeliveryPage} from './modal-delivery/modal-delivery.page';
import {Test} from 'tslint';
import { VehicleService } from './../shared/vehicle.service';
import { User } from './../shared/user';
import { Vehicle } from './../shared/vehicle';
import { AuthService } from './../shared/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.page.html',
  styleUrls: ['./delivery.page.scss'],
})
export class DeliveryPage implements OnInit {

  constructor(public modalController: ModalController, private authService: AuthService, private router: Router) { }

    holderId: string;

  dataReturned: any;
    setUserId(){
        this.authService.checkAuthState().subscribe( (user) => {
          //  this.renderList( user.uid);
            this.holderId = user.uid;
        });
    }

  async openModal(){
    const modal = await this.modalController.create({
      component: ModalDeliveryPage,
    });

    modal.onDidDismiss().then((dataReturned) => {
 if (dataReturned !== null){
   this.dataReturned = dataReturned.data;
 }
  });

    return await modal.present();


}
ngOnInit(): void {
    this.setUserId();
}

    navigateToLogin(){
        this.router.navigate(['/login']);
    }

    navigateToRegister(){
        this.router.navigate(['/register']);
    }

    navigateToMangeVehicle(){
        this.router.navigate(['/manage-vehicle']);
    }

    navigateToRouteSearch(){
        this.router.navigate(['/route-search']);
    }

    navigateToTransportSearch(){
        this.router.navigate(['/transport-search']);
    }

    navigateToSearchResult(){
        this.router.navigate(['/search-result']);
    }

    navigateToProfile(){
        this.router.navigate(['/profile']);
    }

    navigateToHome(){
        this.router.navigate(['/home']);
    }
}
