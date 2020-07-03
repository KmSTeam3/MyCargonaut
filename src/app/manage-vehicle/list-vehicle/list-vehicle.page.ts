import { Vehicle } from './../../shared/vehicle';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-vehicle',
  templateUrl: './list-vehicle.page.html',
  styleUrls: ['./list-vehicle.page.scss'],
})
export class ListVehiclePage implements OnInit {

  @Input() vehicle: Vehicle;

  constructor() { }

  ngOnInit() {
  }

}
