import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListResultPage } from './list-result.page';

describe('ListResultPage', () => {
  let component: ListResultPage;
  let fixture: ComponentFixture<ListResultPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListResultPage ]
    }).compileComponents();

  }));

  it('should be true', () => {
    expect(true).toBeTruthy();
  });
});
