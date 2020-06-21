import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.page.html',
  styleUrls: ['./search-result.page.scss'],
})
export class SearchResultPage implements OnInit {

  constructor() { }

  customPopoverOptions: any = {
    header: 'Filter search result',
    subHeader: 'Select your attribute',
    message: 'Only select your favorite flower'
  };

  ngOnInit() {
  }

}
