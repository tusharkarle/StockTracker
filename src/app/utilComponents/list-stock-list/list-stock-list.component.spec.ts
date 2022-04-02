import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStockListComponent } from './list-stock-list.component';

describe('ListStockListComponent', () => {
  let component: ListStockListComponent;
  let fixture: ComponentFixture<ListStockListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListStockListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListStockListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
