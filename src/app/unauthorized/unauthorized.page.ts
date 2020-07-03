import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-unauthorized',
  templateUrl: './unauthorized.page.html',
  styleUrls: ['./unauthorized.page.scss'],
})
export class UnauthorizedPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  // navigation method to login page
  navigateToLogin(){
    this.router.navigate(['/login']);
  }

  // navigation method to the register page
  navigateToRegister(){
    this.router.navigate(['/register']);
  }
}
