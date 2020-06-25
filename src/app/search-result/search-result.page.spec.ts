import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchResultPage } from './search-result.page';

describe('SearchResultPage', () => {
  let component: SearchResultPage;
  let fixture: ComponentFixture<SearchResultPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResultPage ]
    }).compileComponents();

  }));

  it('should be true', () => {
    expect(true).toBeTruthy();
  });
});
