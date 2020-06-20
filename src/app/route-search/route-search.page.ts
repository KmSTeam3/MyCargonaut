import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route-search',
  templateUrl: './route-search.page.html',
  styleUrls: ['./route-search.page.scss'],
})
export class RouteSearchPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  searchForm(value){
    console.log(value);
  }
}
