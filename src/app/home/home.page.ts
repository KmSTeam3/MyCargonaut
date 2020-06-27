import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';
import { Component } from '@angular/core';
import {User} from '../shared/user';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public userService: UserService, private router: Router, private menu: MenuController) {
    // this.getUserList();
  }

  /*getUserList(){
    this.userService.getUserList().valueChanges().subscribe(res => {console.log(res); } );
  }

  createUser(){
    const user: User = new User('Admin', 'Adminstrator', '01.01.2001', 'emailadresse', 'geheim');
    this.userService.createUser(user);
    alert('user created.');
  }

  deleteUser(id){
    console.log(id);
    if (window.confirm('Do you really want to delete?')){
        this.userService.deleteUser(id);
    }
  }

  // to do
  updateUser(){

  }*/

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

  navigateToImpressum(){
    this.router.navigate(['/impressum']);
  }

  openFirst(){
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

}

