import { Component, OnInit, Input } from '@angular/core';
import {User} from '../shared/user';
import {Shipment} from '../shared/shipment';
import {Vehicle} from '../shared/vehicle';
import {Person} from '../shared/person';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.page.html',
  styleUrls: ['./search-result.page.scss'],
})
export class SearchResultPage implements OnInit {

  user: User = new User('123456789', 'testSubject#1', 'test#1', 'tester#1', 'teststreet', 1, 12345, 'testcity', 'test@test.de');
  user2: User = new User('123456789', 'testSubject#1', 'test#1', 'tester#1', 'teststreet', 1, 12345, 'testcity', 'test@test.de');
  vehicle: Vehicle = new Vehicle('LKW 1', this.user, 100, 1000, 100, 4, 4);
  passengerList: Person[] = [];
  person: Person = new Person(1, this.user2, '789101112');
  date: Date = new Date('1933-04-20');
  shipment: Shipment;

  listShipments: Shipment[] = [];

  constructor(private router: Router) { }
  customPopoverOptions: any = {
    header: 'Filter search result',
    subHeader: 'Select your attribute',
    message: 'Only select your favorite flower'
  };

  ngOnInit() {
    this.passengerList[0] = this.person;
    this.user.rating = 1;
    this.shipment = new Shipment(this.user, this.vehicle, this.passengerList, null, 'Berlin', 'Warschau', this.date, '14:00');
    console.log(this.listShipments);
    this.listShipments.push(this.shipment);
  }

}
