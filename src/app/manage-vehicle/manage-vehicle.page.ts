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
  user1: User = new User('123456789', 'testSubject#1', 'test#1', 'tester#1', 'teststreet', 1, 12345, 'testcity', 'test@test.de');
  vehicle1: Vehicle = new Vehicle('9875431','LKW 1', "this.user1", 100, 1000, 100, 4, 4);
  vehicle2: Vehicle = new Vehicle('8765432', 'LKW 2', "this.user1", 100, 1000, 100, 4, 4);

  listVehicle: Vehicle[] = [];


  constructor(private router: Router, private vehicleService: VehicleService) { }

  ngOnInit() {
    this.renderList();
  }

  renderList(){
    this.vehicleService.findAll().forEach(vehicle => {
      this.listVehicle = vehicle;
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
