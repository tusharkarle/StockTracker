import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchStocksKeywordComponent } from './search-stocks-keyword.component';

describe('SearchStocksKeywordComponent', () => {
  let component: SearchStocksKeywordComponent;
  let fixture: ComponentFixture<SearchStocksKeywordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchStocksKeywordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchStocksKeywordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
