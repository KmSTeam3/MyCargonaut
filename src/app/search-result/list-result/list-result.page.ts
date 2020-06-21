import {Component, Input, OnInit} from '@angular/core';
import {Shipment} from '../../shared/shipment';

@Component({
  selector: 'app-list-result',
  templateUrl: './list-result.page.html',
  styleUrls: ['./list-result.page.scss'],
})
export class ListResultPage implements OnInit {

  @Input() shipment: Shipment;

  constructor() { }

  ngOnInit() {
  }

}
