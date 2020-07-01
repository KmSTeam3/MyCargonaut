import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.page.html',
  styleUrls: ['./payment-success.page.scss'],
})
export class PaymentSuccessPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

    navigateToHome() {
        this.router.navigate(['/home']);
    }

    navigateToSearchResult() {
    this.router.navigate(['/search-result']);
    }
}
