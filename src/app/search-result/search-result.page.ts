import { Component, OnInit } from '@angular/core';
import {User} from '../shared/user';
import {Shipment} from '../shared/shipment';
import {Vehicle} from '../shared/vehicle';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.page.html',
  styleUrls: ['./search-result.page.scss'],
})
export class SearchResultPage implements OnInit {

  user: User = new User('123456789', 'testSubject#1', 'test#1', 'tester#1', 'teststreet', 1, 12345, 'testcity', 'test@test.de');
  vehicle: Vehicle = new Vehicle('LKW 1', this.user, 100, 1000, 100, 4, 4);


  constructor() { }
  customPopoverOptions: any = {
    header: 'Filter search result',
    subHeader: 'Select your attribute',
    message: 'Only select your favorite flower'
  };

  ngOnInit() {
  }

}
