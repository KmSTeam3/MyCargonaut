import {Component, Input, OnInit} from '@angular/core';
import {Shipment} from '../../shared/shipment';

@Component({
  selector: 'app-delivery-list',
  templateUrl: './delivery-list.page.html',
  styleUrls: ['./delivery-list.page.scss'],
})
export class DeliveryListPage implements OnInit {
  @Input() shipment: Shipment;
  constructor() { }

  ngOnInit() {
  }

}
