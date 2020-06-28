import { Component, OnInit, Input } from '@angular/core';
import {User} from '../shared/user';
import {Shipment} from '../shared/shipment';
import {Vehicle} from '../shared/vehicle';
import {Person} from '../shared/person';
import {ActivatedRoute, Router} from '@angular/router';
import {ShipmentService} from '../shared/shipment.service';
import {DataHelperService} from '../shared/data-helper.service';

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

  constructor(private router: Router, private shipmentService: ShipmentService, private dataHelper: DataHelperService, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        console.log(params);
        console.log(this.router.getCurrentNavigation().extras.state.shipmentList);
        this.listShipments = this.router.getCurrentNavigation().extras.state.shipmentList;
        console.log(this.listShipments);
      }
    });

  }
  customPopoverOptions: any = {
    header: 'Filter search result',
    subHeader: 'Select your attribute',
    message: 'Only select your favorite flower'
  };

  ngOnInit() {
    // this.passengerList[0] = this.person;
    // this.user.rating = 1;
    // this.shipment = new Shipment(this.user, this.vehicle, this.passengerList, null, 'Berlin', 'Warschau', this.date, '14:00');
    // this.shipmentService.query('price');
    // this.listShipments = this.dataHelper.tranportData;
    console.log(this.listShipments);
    // this.listShipments.push(this.shipment);
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

  navigateToImpressum(){
    this.router.navigate(['/impressum']);
  }
}
