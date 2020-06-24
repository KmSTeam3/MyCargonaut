import { AuthService } from './../shared/auth.service';
import { map } from 'rxjs/operators';
import { VehicleService } from './../shared/vehicle.service';
import { User } from './../shared/user';
import { Vehicle } from './../shared/vehicle';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-vehicle',
  templateUrl: './manage-vehicle.page.html',
  styleUrls: ['./manage-vehicle.page.scss'],
})
export class ManageVehiclePage implements OnInit {

  listVehicle: Vehicle[] = [];

  constructor(private router: Router, private vehicleService: VehicleService, private authService: AuthService) { }

  ngOnInit() {
    this.setUserId();
  }

  setUserId(){
    this.authService.checkAuthState().subscribe( (user) => {
       this.renderList( user.uid);
      });
   }

  renderList(id: string){
    this.vehicleService.findAll(id).forEach(vehicle => {
      this.listVehicle = vehicle;
      console.log(vehicle)
    });
  }

  goToAdd(){
    this.router.navigate(['/manage-vehicle/add-vehicle']);
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
